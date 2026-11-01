import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { validateVault } from "./validate.mjs";

const id = n => "019a0000-0000-7000-8000-" + String(n).padStart(12, "0");
const note = (n, name, fields = "") => [
  "---", "id: " + id(n), "type: knowledge", "name: " + JSON.stringify(name),
  "lifecycle: skeleton", "review_status: proposed",
  "sources:", '  - "https://example.org/source"',
  ...(fields ? [fields] : []), "---", "# " + name, ""
].join("\n");
function fixture() {
  const dir = mkdtempSync(join(tmpdir(), "knowledge-unified-"));
  mkdirSync(join(dir, "knowledge/entries"), { recursive: true });
  return { dir, write: (path, value) => writeFileSync(join(dir, path), value), clean: () => rmSync(dir, { recursive: true, force: true }) };
}
test("empty vault bootstrap is valid", () => {
  const f = fixture(); try { assert.equal(validateVault(f.dir).ok, true); } finally { f.clean(); }
});
test("source-backed isolated Knowledge is valid", () => {
  const f = fixture();
  try {
    f.write("knowledge/entries/root.md", note(1, "Root"));
    const r = validateVault(f.dir);
    assert.equal(r.ok, true, r.issues.join("\n"));
    assert.deepEqual(r.counts, { knowledge: 1, links: 0 });
  } finally { f.clean(); }
});
test("in_topic and broader between Knowledge validate", () => {
  const f = fixture();
  try {
    f.write("knowledge/entries/root.md", note(1, "Root"));
    f.write("knowledge/entries/topic.md", note(2, "Topic", 'in_topic:\n  - "[[knowledge/entries/root]]"'));
    f.write("knowledge/entries/narrow.md", note(3, "Narrow", 'broader:\n  - "[[knowledge/entries/topic]]"'));
    const r = validateVault(f.dir);
    assert.equal(r.ok, true, r.issues.join("\n"));
    assert.equal(r.counts.links, 2);
  } finally { f.clean(); }
});
test("reject Knowledge without sources", () => {
  const f = fixture();
  try {
    f.write("knowledge/entries/a.md", note(1, "A").replace('sources:\n  - "https://example.org/source"\n', ""));
    assert.ok(validateVault(f.dir).issues.some(s => s.includes("missing required sources")));
  } finally { f.clean(); }
});
test("reject old categories field", () => {
  const f = fixture();
  try {
    f.write("knowledge/entries/a.md", note(1, "A", 'categories:\n  - "[[taxonomy/categories/async]]"'));
    assert.ok(validateVault(f.dir).issues.some(s => s.includes("unknown field categories")));
  } finally { f.clean(); }
});
test("reject invalid source and duplicate UUID and bad link", () => {
  const f = fixture();
  try {
    f.write("knowledge/entries/a.md", note(1, "A", 'in_topic:\n  - "[[knowledge/entries/missing]]"'));
    f.write("knowledge/entries/b.md", note(1, "B").replace("https://example.org/source", "bad-url"));
    const issues = validateVault(f.dir).issues;
    assert.ok(issues.some(s => s.includes("duplicate id")));
    assert.ok(issues.some(s => s.includes("unresolved in_topic")));
    assert.ok(issues.some(s => s.includes("invalid source URL")));
  } finally { f.clean(); }
});
test("detect cycles of broader, specializes, and part_of", () => {
  for (const predicate of ["broader", "specializes", "part_of"]) {
    const f = fixture();
    try {
      f.write("knowledge/entries/a.md", note(1, "A", predicate + ':\n  - "[[knowledge/entries/b]]"'));
      f.write("knowledge/entries/b.md", note(2, "B", predicate + ':\n  - "[[knowledge/entries/a]]"'));
      assert.ok(validateVault(f.dir).issues.some(s => s.includes("cycle in " + predicate)));
    } finally { f.clean(); }
  }
});
test("functional agent relationships are valid", () => {
  const f = fixture();
  try {
    f.write("knowledge/entries/loop.md", note(1, "Loop", 'schedules:\n  - "[[knowledge/entries/task]]"'));
    f.write("knowledge/entries/task.md", note(2, "Task", 'executes:\n  - "[[knowledge/entries/coroutine]]"'));
    f.write("knowledge/entries/coroutine.md", note(3, "Coroutine"));
    f.write("knowledge/entries/group.md", note(4, "Group", 'manages:\n  - "[[knowledge/entries/task]]"'));
    const r = validateVault(f.dir);
    assert.equal(r.ok, true, r.issues.join("\n"));
    assert.equal(r.counts.links, 3);
  } finally { f.clean(); }
});
test("reject legacy category files still present", () => {
  const f = fixture();
  try {
    mkdirSync(join(f.dir, "taxonomy/categories"), { recursive: true });
    f.write("taxonomy/categories/legacy.md", note(1, "Legacy"));
    assert.ok(validateVault(f.dir).issues.some(s => s.includes("legacy Category")));
  } finally { f.clean(); }
});

test("reject unquoted relationship wikilink", () => {
  const f = fixture();
  try {
    f.write("knowledge/entries/a.md", note(1, "A", 'in_topic:\n  - [[knowledge/entries/b]]'));
    f.write("knowledge/entries/b.md", note(2, "B"));
    assert.ok(validateVault(f.dir).issues.some(s => s.includes("relation must be a quoted wikilink")));
  } finally { f.clean(); }
});
test("all eight current predicates resolve between Knowledge", () => {
  const f = fixture();
  try {
    const relations = ["in_topic","broader","specializes","part_of","realizes","schedules","executes","manages"];
    const fields = relations.map(r => r + ':\n  - "[[knowledge/entries/b]]"').join('\n');
    f.write("knowledge/entries/a.md", note(1, "A", fields));
    f.write("knowledge/entries/b.md", note(2, "B"));
    const result = validateVault(f.dir);
    assert.equal(result.ok, true, result.issues.join("\n"));
    assert.equal(result.counts.links, relations.length);
  } finally { f.clean(); }
});
