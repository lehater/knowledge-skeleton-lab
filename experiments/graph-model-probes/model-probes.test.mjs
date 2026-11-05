/**
 * Research-only model probes; not part of production graph.
 * Run: node --test experiments/graph-model-probes/model-probes.test.mjs
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { validateVault } from '../../tools/validate.mjs';

const root = resolve(fileURLToPath(new URL('../../', import.meta.url)));
const RELATIONS = ['in_topic', 'broader', 'specializes', 'part_of', 'realizes', 'schedules', 'executes', 'manages'];
const nodes = new Map();
const directory = join(root, 'vault/knowledge/entries');

for (const file of readdirSync(directory).filter(x => x.endsWith('.md'))) {
  const source = readFileSync(join(directory, file), 'utf8');
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(source);
  assert.ok(frontmatter, 'frontmatter: ' + file);
  const fields = frontmatter[1].split(/\r?\n/);
  const kind = fields.find(l => l.startsWith('kind: '))?.slice('kind: '.length);
  const links = {};
  let current = '';
  for (const line of fields) {
    const key = /^([a-z_]+):/.exec(line);
    if (key) { current = key[1]; continue; }
    if (!RELATIONS.includes(current)) continue;
    const edge = /^  - "\[\[knowledge\/entries\/([^\]]+)\]\]"$/.exec(line);
    if (edge) (links[current] ??= []).push(edge[1]);
  }
  nodes.set(file.replace(/\.md$/, ''), { kind, links });
}
const has = (source, relation, target) =>
  nodes.get(source)?.links[relation]?.includes(target) ?? false;
const totals = Object.fromEntries(RELATIONS.map(x => [x, 0]));
for (const { links } of nodes.values()) {
  for (const predicate of RELATIONS) totals[predicate] += (links[predicate] ?? []).length;
}
console.log('PROBE_SCOPE static corpus + synthetic counterexamples; no GUI/runtime execution');

test('P0: actual corpus and predicate distribution', () => {
  assert.equal(nodes.size, 439);
  assert.equal(Object.values(totals).reduce((a, b) => a + b, 0), 638);
  console.log('PREDICATE_CENSUS ' + JSON.stringify(totals));
  console.log('IN_TOPIC_SHARE ' + (100 * totals.in_topic / 638).toFixed(1) + '%');
  const targetsByKind = {};
  const targetFrequency = new Map();
  const examples = [];
  for (const [source, {links}] of nodes) for (const target of links.in_topic ?? []) {
    const targetKind = nodes.get(target)?.kind ?? '(missing)';
    targetsByKind[targetKind] = (targetsByKind[targetKind] ?? 0) + 1;
    targetFrequency.set(target, (targetFrequency.get(target) ?? 0) + 1);
    if (targetKind !== 'topic' && examples.length < 15)
      examples.push({ source, target, targetKind });
  }
  console.log('IN_TOPIC_TARGET_KINDS ' + JSON.stringify(targetsByKind));
  console.log('TOP_IN_TOPIC_TARGETS ' + JSON.stringify([...targetFrequency].sort((a,b)=>b[1]-a[1]).slice(0,12)));
  console.log('NON_TOPIC_TARGET_EXAMPLES ' + JSON.stringify(examples));

});

test('P1: taxonomy, subtype, composition and realization stay distinct', () => {
  assert.ok(has('opentelemetry-genai-inference-span', 'specializes', 'opentelemetry-span'));
  assert.ok(has('opentelemetry-span', 'part_of', 'opentelemetry-trace'));
  assert.ok(has('openai-agents-sdk-runner', 'realizes', 'single-agent-inner-loop'));
  assert.ok(has('tool-call', 'in_topic', 'single-agent-inner-loop'));
  assert.ok(!has('tool-call', 'part_of', 'single-agent-inner-loop'));
});

test('P1: runtime responsibility chain can be queried', () => {
  assert.ok(has('python-asyncio-event-loop', 'schedules', 'python-asyncio-task'));
  assert.ok(has('python-asyncio-task', 'executes', 'python-coroutine-object'));
  assert.ok(has('python-asyncio-task-group', 'manages', 'python-asyncio-task'));
  assert.ok(has('python-asyncio-event-loop', 'realizes', 'event-loop'));
  assert.equal(nodes.get('python-asyncio-task').kind, 'program_construct');
});

test('P1: Collector static roles are insufficient to determine a configured data path', () => {
  for (const role of ['receiver', 'processor', 'exporter']) {
    assert.ok(has('opentelemetry-collector-' + role, 'part_of', 'opentelemetry-collector-pipeline'));
  }
  const withProcessor = { receiver: 'otlp', processors: ['memory_limiter'], exporter: 'otlp' };
  const withoutProcessor = { receiver: 'otlp', processors: [], exporter: 'otlp' };
  const typeGraph = () => ['receiver:part_of:pipeline', 'processor:part_of:pipeline', 'exporter:part_of:pipeline'];
  const route = c => [c.receiver, ...c.processors, c.exporter];
  assert.deepEqual(typeGraph(withProcessor), typeGraph(withoutProcessor));
  assert.notDeepEqual(route(withProcessor), route(withoutProcessor));
});

test('P1: Tool Call / Tool Result instances cannot be correlated using this type graph', () => {
  assert.equal(nodes.get('tool-call').kind, 'data_structure');
  assert.equal(nodes.get('tool-result').kind, 'data_structure');
  assert.ok(has('tool-result', 'in_topic', 'single-agent-inner-loop'));
  assert.ok(!RELATIONS.includes('responds_to'));
  const world1 = [['call-1', 'result-1'], ['call-2', 'result-2']];
  const world2 = [['call-1', 'result-2'], ['call-2', 'result-1']];
  assert.notDeepEqual(world1, world2);
  assert.deepEqual(nodes.get('tool-call').links.in_topic, nodes.get('tool-result').links.in_topic);
});

test('P1: syntactically valid but semantically false composition passes static validator', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'graph-expressivity-'));
  try {
    const entries = join(tmp, 'knowledge/entries');
    mkdirSync(entries, { recursive: true });
    const note = (num, name, extra = '') => [
      '---', 'id: 019a0000-0000-7000-8000-' + String(num).padStart(12, '0'),
      'type: knowledge', 'name: "' + name + '"', 'kind: software',
      'lifecycle: skeleton', 'review_status: proposed', 'sources:',
      '  - "https://example.org/synthetic"',
      ...(extra ? [extra] : []), '---', '# ' + name, ''
    ].join('\n');
    writeFileSync(join(entries, 'prometheus.md'), note(1, 'Prometheus'));
    writeFileSync(join(entries, 'alertmanager.md'),
      note(2, 'Alertmanager', 'part_of:\n  - "[[knowledge/entries/prometheus]]"'));
    assert.equal(validateVault(tmp).ok, true);
    // Intentionally false claim. Static validation does not determine semantic truth.
  } finally { rmSync(tmp, { recursive: true, force: true }); }
});
