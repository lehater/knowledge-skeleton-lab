import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const KINDS = new Set(["artifact", "construct", "mechanism", "model", "pattern", "practice", "problem", "property", "result", "structure", "technology"]);
const STATUSES = new Set(["proposed", "accepted", "rejected"]);
const RELATIONS = { broader: "category", categories: "category", specializes: "knowledge", part_of: "knowledge", realizes: "knowledge", schedules: "knowledge", executes: "knowledge", manages: "knowledge" };
const SCALARS = new Set(["id", "type", "name", "kind", "lifecycle", "review_status"]);
const LISTS = new Set(["aliases", "broader", "categories", "specializes", "part_of", "realizes", "schedules", "executes", "manages", "sources"]);
const UUID_V7 = /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

function collect(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return collect(full);
    return entry.isFile() && entry.name.endsWith(".md") ? [full] : [];
  });
}
function parseValue(text) {
  if (text.startsWith('"')) {
    const value = JSON.parse(text);
    if (typeof value !== "string") throw Error("expected quoted string");
    return value;
  }
  if (text.startsWith("'") || text.startsWith("[") || text.startsWith("{")) throw Error("unsupported YAML value");
  if (!text || /^(true|false|null|~)$/i.test(text)) throw Error("expected nonempty string");
  return text;
}
function parseNote(content) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(content);
  if (!match) throw Error("missing closed frontmatter");
  const props = {};
  let current = null;
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || /^\s*#/.test(line)) continue;
    const key = /^([a-z_]+):(?:\s*(.*))?$/.exec(line);
    if (key) {
      const name = key[1], raw = key[2]?.trim() ?? "";
      if (!SCALARS.has(name) && !LISTS.has(name)) throw Error("unknown field " + name);
      if (Object.hasOwn(props, name)) throw Error("duplicate field " + name);
      if (LISTS.has(name)) {
        if (raw && raw !== "[]") throw Error("expected a block list or [] in " + name);
        props[name] = [];
        current = raw ? null : name;
      } else {
        if (!raw) throw Error("empty scalar " + name);
        props[name] = parseValue(raw);
        current = null;
      }
      continue;
    }
    const item = /^  - (.+)$/.exec(line);
    if (item && current) {
      props[current].push(parseValue(item[1].trim()));
      continue;
    }
    throw Error("unsupported YAML syntax: " + line);
  }
  return { props, body: match[2] };
}
function nodeKey(root, full) {
  return relative(root, full).split(sep).join("/").replace(/\.md$/, "");
}
function validLink(link) {
  const match = /^\[\[([a-z0-9][a-z0-9_/-]*)\]\]$/.exec(link);
  if (!match || match[1].includes("//") || match[1].split("/").includes("..")) return null;
  return match[1];
}
function cycleCheck(nodes, field, issues) {
  const active = new Set(), done = new Set();
  const walk = (key) => {
    if (active.has(key)) { issues.push("cycle in " + field + " at " + key); return; }
    if (done.has(key)) return;
    active.add(key);
    const node = nodes.get(key);
    for (const link of node.props[field] ?? []) {
      const target = validLink(link);
      if (target && nodes.has(target)) walk(target);
    }
    active.delete(key);
    done.add(key);
  };
  for (const [key, node] of nodes) if (node.props[field]?.length) walk(key);
}
export function validateVault(root) {
  const issues = [], warnings = [], nodes = new Map(), ids = new Map();
  const paths = [
    ...collect(join(root, "taxonomy", "categories")),
    ...collect(join(root, "knowledge", "entries"))
  ];
  for (const full of paths) {
    const key = nodeKey(root, full);
    let parsed;
    try { parsed = parseNote(readFileSync(full, "utf8")); }
    catch (error) { issues.push(key + ": " + error.message); continue; }
    nodes.set(key, parsed);
    const { props: p, body } = parsed;
    const expected = key.startsWith("taxonomy/categories/") ? "category" : "knowledge";
    if (p.type !== expected) issues.push(key + ": expected type " + expected);
    if (!UUID_V7.test(p.id ?? "")) issues.push(key + ": invalid UUIDv7");
    if (ids.has(p.id)) issues.push(key + ": duplicate id also in " + ids.get(p.id));
    else if (p.id) ids.set(p.id, key);
    if (!p.name || !p.name.trim()) issues.push(key + ": missing name");
    if (!STATUSES.has(p.review_status)) issues.push(key + ": invalid review_status");
    const h1 = /^# (.+)\r?\n?/.exec(body);
    if (!h1 || h1[1] !== p.name) issues.push(key + ": H1 must equal name");
    const slug = key.split("/").at(-1);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) issues.push(key + ": filename must be kebab-case");
    if (expected === "knowledge") {
      if (!["skeleton", "enriched"].includes(p.lifecycle)) issues.push(key + ": invalid lifecycle");
      if (p.kind !== undefined && !KINDS.has(p.kind)) issues.push(key + ": invalid kind");
      if (p.broader !== undefined) issues.push(key + ": broader reserved for category");
      if (p.lifecycle === "skeleton" && h1 && body.slice(h1[0].length).trim()) issues.push(key + ": skeleton must contain only H1");
    } else {
      for (const field of ["lifecycle", "kind", "categories", "specializes", "part_of", "realizes", "schedules", "executes", "manages"]) {
        if (p[field] !== undefined) issues.push(key + ": " + field + " not allowed for category");
      }
      if (h1 && body.slice(h1[0].length).trim()) issues.push(key + ": category must contain only H1 in pilot");
    }
    for (const [field, value] of Object.entries(p)) {
      if (Array.isArray(value) && new Set(value).size !== value.length) issues.push(key + ": duplicate values in " + field);
    }
    for (const url of p.sources ?? []) if (!/^https?:\/\/\S+$/.test(url)) issues.push(key + ": invalid source URL " + url);
    if (expected === "knowledge" && !(p.categories?.length)) warnings.push(key + ": no direct category");
  }
  for (const [key, { props: p }] of nodes) {
    for (const [field, targetType] of Object.entries(RELATIONS)) {
      for (const link of p[field] ?? []) {
        const target = validLink(link);
        if (!target) { issues.push(key + ": invalid wikilink in " + field + ": " + link); continue; }
        if (target === key) issues.push(key + ": self-link in " + field);
        const destination = nodes.get(target);
        if (!destination) issues.push(key + ": unresolved " + field + " -> " + target);
        else if (destination.props.type !== targetType) issues.push(key + ": wrong target type for " + field + " -> " + target);
      }
    }
  }
  for (const field of ["broader", "specializes", "part_of"]) cycleCheck(nodes, field, issues);
  return {
    ok: issues.length === 0,
    counts: {
      categories: [...nodes.values()].filter((n) => n.props.type === "category").length,
      knowledge: [...nodes.values()].filter((n) => n.props.type === "knowledge").length,
      links: [...nodes.values()].reduce((sum, n) => sum + Object.keys(RELATIONS).reduce((k, f) => k + (n.props[f]?.length ?? 0), 0), 0)
    },
    issues, warnings
  };
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(process.argv[2] ?? "vault");
  const result = validateVault(root);
  for (const issue of result.issues) console.error("ERROR: " + issue);
  for (const warning of result.warnings) console.warn("WARN: " + warning);
  console.log((result.ok ? "PASS" : "FAIL") + " static: " + JSON.stringify(result.counts) + "; semantic review: NOT_RUN");
  if (!result.ok) process.exitCode = 1;
}

