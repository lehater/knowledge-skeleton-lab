import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const KINDS = new Set(["artifact", "construct", "mechanism", "model", "pattern", "practice", "problem", "property", "result", "structure", "technology"]);
const STATUSES = new Set(["proposed", "accepted", "rejected"]);
const RELATIONS = ["in_topic", "broader", "specializes", "part_of", "realizes", "schedules", "executes", "manages"];
const SCALARS = new Set(["id", "type", "name", "kind", "lifecycle", "review_status"]);
const LISTS = new Set(["aliases", ...RELATIONS, "sources"]);
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
      const raw = item[1].trim();
      if (RELATIONS.includes(current) && !raw.startsWith('"'))
        throw Error("relation must be a quoted wikilink in " + current);
      props[current].push(parseValue(raw));
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
  function walk(key) {
    if (active.has(key)) { issues.push("cycle in " + field + " at " + key); return; }
    if (done.has(key)) return;
    active.add(key);
    for (const link of nodes.get(key)?.props[field] ?? []) {
      const target = validLink(link);
      if (target && nodes.has(target)) walk(target);
    }
    active.delete(key);
    done.add(key);
  }
  for (const key of nodes.keys()) walk(key);
}
export function validateVault(root) {
  const issues = [], warnings = [], nodes = new Map(), ids = new Map();
  const entriesDir = join(root, "knowledge", "entries");
  if (existsSync(entriesDir)) {
    for (const entry of readdirSync(entriesDir, { withFileTypes: true })) {
      if (entry.isFile() && entry.name !== ".gitkeep" && !entry.name.endsWith(".md"))
        issues.push("unexpected file in Knowledge entries: " + entry.name);
    }
  }
  const oldCategories = collect(join(root, "taxonomy", "categories"));
  for (const full of oldCategories) issues.push("legacy Category not migrated: " + nodeKey(root, full));
  for (const full of collect(join(root, "knowledge", "entries"))) {
    const key = nodeKey(root, full);
    let note;
    try { note = parseNote(readFileSync(full, "utf8")); }
    catch (error) { issues.push(key + ": " + error.message); continue; }
    nodes.set(key, note);
    const { props: p, body } = note;
    if (p.type !== "knowledge") issues.push(key + ": expected type knowledge");
    if (!UUID_V7.test(p.id ?? "")) issues.push(key + ": invalid UUIDv7");
    if (ids.has(p.id)) issues.push(key + ": duplicate id also in " + ids.get(p.id));
    else if (p.id) ids.set(p.id, key);
    if (!p.name || !p.name.trim()) issues.push(key + ": missing name");
    if (!STATUSES.has(p.review_status)) issues.push(key + ": invalid review_status");
    if (!["skeleton", "enriched"].includes(p.lifecycle)) issues.push(key + ": invalid lifecycle");
    if (p.kind !== undefined && !KINDS.has(p.kind)) issues.push(key + ": invalid kind");
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key.split("/").at(-1))) issues.push(key + ": filename must be kebab-case");
    const h1 = /^# (.+)\r?\n?/.exec(body);
    if (!h1 || h1[1] !== p.name) issues.push(key + ": H1 must equal name");
    if (p.lifecycle === "skeleton" && h1 && body.slice(h1[0].length).trim()) issues.push(key + ": skeleton must contain only H1");
    if (!p.sources?.length) issues.push(key + ": missing required sources");
    for (const url of p.sources ?? []) if (!/^https?:\/\/\S+$/.test(url)) issues.push(key + ": invalid source URL " + url);
    for (const [field, value] of Object.entries(p)) if (Array.isArray(value) && new Set(value).size !== value.length) issues.push(key + ": duplicate values in " + field);
  }
  for (const [key, { props: p }] of nodes) for (const field of RELATIONS) for (const link of p[field] ?? []) {
    const target = validLink(link);
    if (!target) { issues.push(key + ": invalid wikilink in " + field + ": " + link); continue; }
    if (target === key) issues.push(key + ": self-link in " + field);
    if (!nodes.has(target)) issues.push(key + ": unresolved " + field + " -> " + target);
  }
  for (const field of ["broader", "specializes", "part_of"]) cycleCheck(nodes, field, issues);
  return {
    ok: issues.length === 0,
    counts: {
      knowledge: nodes.size,
      links: [...nodes.values()].reduce((n, { props }) => n + RELATIONS.reduce((k, field) => k + (props[field]?.length ?? 0), 0), 0)
    },
    issues, warnings
  };
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = validateVault(resolve(process.argv[2] ?? "vault"));
  for (const issue of result.issues) console.error("ERROR: " + issue);
  for (const warning of result.warnings) console.warn("WARN: " + warning);
  console.log((result.ok ? "PASS" : "FAIL") + " static: " + JSON.stringify(result.counts) + "; semantic review: NOT_RUN");
  if (!result.ok) process.exitCode = 1;
}
