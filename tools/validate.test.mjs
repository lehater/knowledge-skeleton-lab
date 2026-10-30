import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { validateVault } from "./validate.mjs";

const id = (n) => "019a0000-0000-7000-8000-" + String(n).padStart(12, "0");
const cat = (n, name, broader = "") => [
  "---", "id: " + id(n), "type: category", 'name: "' + name + '"',
  "review_status: proposed", "broader:", ...(broader ? ['  - "[[' + broader + ']]"'] : []),
  "---", "# " + name, ""
].join("\n");
const know = (n, name, category) => [
  "---", "id: " + id(n), "type: knowledge", 'name: "' + name + '"',
  "lifecycle: skeleton", "review_status: proposed", "categories:",
  '  - "[[' + category + ']]"', "---", "# " + name, ""
].join("\n");
function fixture() {
  const dir = mkdtempSync(join(tmpdir(), "knowledge-skeleton-"));
  for (const sub of ["taxonomy/categories", "knowledge/entries"]) mkdirSync(join(dir, sub), { recursive: true });
  const write = (path, text) => writeFileSync(join(dir, path), text);
  return { dir, write, clean: () => rmSync(dir, { recursive: true, force: true }) };
}
test("empty vault bootstrap is valid", () => {
  const f = fixture();
  try { assert.equal(validateVault(f.dir).ok, true); }
  finally { f.clean(); }
});
test("category and knowledge link validate", () => {
  const f = fixture();
  try {
    f.write("taxonomy/categories/async.md", cat(1, "Async"));
    f.write("knowledge/entries/coroutine.md", know(2, "Coroutine", "taxonomy/categories/async"));
    const result = validateVault(f.dir);
    assert.equal(result.ok, true, result.issues.join("\n"));
    assert.deepEqual(result.counts, { categories: 1, knowledge: 1, links: 1 });
  } finally { f.clean(); }
});
test("reject missing targets and duplicate IDs", () => {
  const f = fixture();
  try {
    f.write("taxonomy/categories/async.md", cat(1, "Async"));
    f.write("knowledge/entries/a.md", know(1, "A", "taxonomy/categories/missing"));
    const result = validateVault(f.dir);
    assert.equal(result.ok, false);
    assert.ok(result.issues.some((s) => s.includes("duplicate id")));
    assert.ok(result.issues.some((s) => s.includes("unresolved categories")));
  } finally { f.clean(); }
});
test("detect cycles in category DAG", () => {
  const f = fixture();
  try {
    f.write("taxonomy/categories/a.md", cat(1, "A", "taxonomy/categories/b"));
    f.write("taxonomy/categories/b.md", cat(2, "B", "taxonomy/categories/a"));
    const result = validateVault(f.dir);
    assert.ok(result.issues.some((s) => s.includes("cycle in broader")));
  } finally { f.clean(); }
});


const withRelation = (note, predicate, target) => {
  const out = note.replace(/\n---\n# /, `\n${predicate}:\n  - "[[${target}]]"\n---\n# `);
  assert.notEqual(out, note);
  return out;
};

test("python asyncio functional predicates validate and count", () => {
  const f = fixture();
  try {
    f.write("taxonomy/categories/async.md", cat(1, "Async"));
    f.write("knowledge/entries/loop.md", withRelation(know(2, "Loop", "taxonomy/categories/async"), "schedules", "knowledge/entries/task"));
    f.write("knowledge/entries/task.md", withRelation(know(3, "Task", "taxonomy/categories/async"), "executes", "knowledge/entries/coro"));
    f.write("knowledge/entries/coro.md", know(4, "Coro", "taxonomy/categories/async"));
    f.write("knowledge/entries/group.md", withRelation(know(5, "Group", "taxonomy/categories/async"), "manages", "knowledge/entries/task"));
    const r = validateVault(f.dir);
    assert.equal(r.ok, true, r.issues.join("\n"));
    assert.equal(r.counts.links, 7);
  } finally { f.clean(); }
});

test("reject functional relation pointing to category", () => {
  const f = fixture();
  try {
    f.write("taxonomy/categories/async.md", cat(1, "Async"));
    f.write("knowledge/entries/task.md", withRelation(know(2, "Task", "taxonomy/categories/async"), "executes", "taxonomy/categories/async"));
    const r = validateVault(f.dir);
    assert.equal(r.ok, false);
    assert.ok(r.issues.some((s) => s.includes("wrong target type for executes")));
  } finally { f.clean(); }
});
