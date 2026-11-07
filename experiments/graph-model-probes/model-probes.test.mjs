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

test('P1: API handle versus abstract running activity remains only thematic', () => {
  const pairs = [
    ['java-thread', 'thread'],
    ['python-asyncio-task', 'asynchronous-task']
  ];
  for (const [handle, work] of pairs) {
    assert.equal(nodes.get(handle).kind, 'program_construct');
    assert.equal(nodes.get(work).kind, 'process');
    assert.ok(has(handle, 'in_topic', work));
    assert.ok(!has(handle, 'realizes', work));
    assert.ok(!has(handle, 'specializes', work));
  }
  // Candidate recurring semantic question: which API construct represents a unit of execution?
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


// Follow-up on 2026-11-07: semantic query probes on 15 actual corpus relations.
// Synthetic scenarios are documentary oracles, not Collector/SDK/runtime executions.

const FOLLOWUP_CASES = [
  ['java-thread', 'in_topic', 'thread'],
  ['python-asyncio-task', 'in_topic', 'asynchronous-task'],
  ['concurrency', 'in_topic', 'concurrent-programming'],
  ['java-concurrency', 'in_topic', 'concurrency'],
  ['java-interface', 'specializes', 'programming-interface'],
  ['mcp-tool-input-schema', 'part_of', 'mcp-tool-definition'],
  ['opentelemetry-collector-receiver', 'part_of', 'opentelemetry-collector-pipeline'],
  ['opentelemetry-collector-processor', 'part_of', 'opentelemetry-collector-pipeline'],
  ['opentelemetry-collector-exporter', 'part_of', 'opentelemetry-collector-pipeline'],
  ['opentelemetry-collector', 'executes', 'opentelemetry-collector-pipeline'],
  ['python-asyncio-event-loop', 'schedules', 'python-asyncio-task'],
  ['python-asyncio-task', 'executes', 'python-coroutine-object'],
  ['python-asyncio-task-group', 'manages', 'python-asyncio-task'],
  ['openai-agents-sdk-runner', 'realizes', 'single-agent-inner-loop'],
  ['tool-result', 'in_topic', 'single-agent-inner-loop']
];
const incoming = (predicate, target) => [...nodes].filter(([_, node]) =>
  (node.links[predicate] ?? []).includes(target)).map(([slug]) => slug).sort();

test('F1: fifteen selected graph facts exist in main-derived corpus', () => {
  assert.equal(FOLLOWUP_CASES.length, 15);
  for (const [source, predicate, target] of FOLLOWUP_CASES) {
    assert.ok(nodes.has(source) && nodes.has(target), source + ' -> ' + target);
    assert.ok(has(source, predicate, target), source + ' ' + predicate + ' ' + target);
  }
});

test('F2: structural and operational queries are different, each answerable', () => {
  assert.ok(incoming('part_of', 'opentelemetry-collector-pipeline')
    .includes('opentelemetry-collector-processor'));
  assert.ok(incoming('executes', 'opentelemetry-collector-pipeline')
    .includes('opentelemetry-collector'));
  assert.ok(incoming('realizes', 'single-agent-inner-loop')
    .includes('openai-agents-sdk-runner'));
  assert.ok(incoming('manages', 'python-asyncio-task')
    .includes('python-asyncio-task-group'));
  assert.ok(!has('openai-agents-sdk-runner', 'executes', 'single-agent-inner-loop'));
  assert.ok(!has('opentelemetry-collector', 'realizes', 'opentelemetry-collector-pipeline'));
});

test('F3: thematic practice/property edges do not assert is-a or realization', () => {
  assert.equal(nodes.get('concurrency').kind, 'property');
  assert.equal(nodes.get('concurrent-programming').kind, 'practice');
  assert.equal(nodes.get('java-concurrency').kind, 'topic');
  assert.ok(has('concurrency', 'in_topic', 'concurrent-programming'));
  assert.ok(has('java-concurrency', 'in_topic', 'concurrency'));
  assert.ok(!has('concurrency', 'specializes', 'concurrent-programming'));
  assert.ok(!has('java-concurrency', 'realizes', 'concurrency'));
});

test('F4: a result handle is not necessarily an independently executing task', () => {
  assert.equal(nodes.get('java-thread').kind, 'program_construct');
  assert.equal(nodes.get('thread').kind, 'process');
  assert.equal(nodes.get('python-asyncio-task').kind, 'program_construct');
  assert.equal(nodes.get('asynchronous-task').kind, 'process');
  assert.ok(has('python-asyncio-task', 'executes', 'python-coroutine-object'));
  assert.ok(has('python-asyncio-future', 'realizes', 'future'));
  assert.ok(!has('python-asyncio-future', 'executes', 'python-coroutine-object'));
  assert.ok(!has('java-thread', 'realizes', 'thread'));
  // A proposed "represents_execution" must exclude mere pending-result holders.
});

test('F5: pipeline composition cannot answer required role versus optional role', () => {
  const roles = ['receiver', 'processor', 'exporter'];
  for (const role of roles)
    assert.ok(has('opentelemetry-collector-' + role, 'part_of', 'opentelemetry-collector-pipeline'));
  // Oracle restricted to the documented normal active receiver->exporter pipeline.
  const valid = c => c.receivers.length >= 1 && c.exporters.length >= 1;
  const minimal = { receivers: ['otlp'], processors: [], exporters: ['debug'] };
  const withProcessor = { ...minimal, processors: ['batch'] };
  assert.equal(valid(minimal), true);
  assert.equal(valid(withProcessor), true);
  assert.equal(valid({ ...minimal, receivers: [] }), false);
  assert.equal(valid({ ...minimal, exporters: [] }), false);
  const typeProjection = () => roles.filter(role => has('opentelemetry-collector-' + role, 'part_of', 'opentelemetry-collector-pipeline'));
  assert.deepEqual(typeProjection(minimal), typeProjection(withProcessor));
  assert.notDeepEqual(minimal.processors, withProcessor.processors);
});

test('F6: a type-level part_of edge does not determine instance identity or multiplicity', () => {
  const shared = [{ pipeline: 'traces/1', receiver: 'otlp/shared', processor: 'batch/1' },
                  { pipeline: 'traces/2', receiver: 'otlp/shared', processor: 'batch/2' }];
  const separate = [{ pipeline: 'traces/1', receiver: 'otlp/1', processor: 'batch/1' },
                    { pipeline: 'traces/2', receiver: 'otlp/2', processor: 'batch/2' }];
  const typeProjection = entries => [...new Set(entries.flatMap(p => Object.keys(p)
    .filter(k => k !== 'pipeline').map(k => k + ':part_of:pipeline')))].sort();
  assert.deepEqual(typeProjection(shared), typeProjection(separate));
  assert.notDeepEqual(shared.map(p => p.receiver), separate.map(p => p.receiver));
  assert.equal(new Set(shared.map(p => p.receiver)).size, 1);
  assert.equal(new Set(separate.map(p => p.receiver)).size, 2);
  assert.equal(new Set(shared.map(p => p.processor)).size, 2);
});

test('F7: mandatory MCP input schema and optional output schema are both part_of', () => {
  assert.ok(has('mcp-tool-input-schema', 'part_of', 'mcp-tool-definition'));
  assert.ok(has('mcp-tool-output-schema', 'part_of', 'mcp-tool-definition'));
  // Contract oracle: inputSchema required; outputSchema optional (MCP 2026-07-28).
  const validToolDefinition = def => Boolean(def.name && def.inputSchema);
  assert.equal(validToolDefinition({ name: 'search', inputSchema: { type: 'object' } }), true);
  assert.equal(validToolDefinition({ name: 'search', inputSchema: { type: 'object' }, outputSchema: { type: 'object' } }), true);
  assert.equal(validToolDefinition({ name: 'search', outputSchema: { type: 'object' } }), false);
  // "requires_role" would wrongly classify the schema as a functional actor.
  assert.ok(!RELATIONS.includes('requires_role'));
});

test('F8: tool-result type does not encode request/response correlation or route', () => {
  assert.ok(has('tool-call', 'in_topic', 'single-agent-inner-loop'));
  assert.ok(has('tool-result', 'in_topic', 'single-agent-inner-loop'));
  const first = [{ callId: 1, resultId: 1 }, { callId: 2, resultId: 2 }];
  const second = [{ callId: 1, resultId: 2 }, { callId: 2, resultId: 1 }];
  const correlates = pairs => pairs.every(p => p.callId === p.resultId);
  assert.equal(correlates(first), true);
  assert.equal(correlates(second), false);
  // OpenAI Agents SDK can feed the result back to model or finish after a tool.
  const routes = { continue: ['tool', 'model'], stop: ['tool', 'final'] };
  assert.notDeepEqual(routes.continue, routes.stop);
  assert.deepEqual(nodes.get('tool-call').links.in_topic, nodes.get('tool-result').links.in_topic);
});

test('F9: type relations cannot guarantee a running instance', () => {
  // Oracle: Java Thread can exist before start; an eager asyncio Task may complete
  // without a subsequent queue turn. Neither invalidates a type-level function.
  const javaThreadInstances = [{ state: 'NEW', running: false }, { state: 'RUNNABLE', running: true }];
  assert.equal(javaThreadInstances.some(t => !t.running), true);
  assert.ok(has('java-thread', 'in_topic', 'thread'));
  const asyncioRuns = [{ eager: false, queued: true }, { eager: true, queued: false }];
  assert.equal(asyncioRuns.some(t => !t.queued), true);
  assert.ok(has('python-asyncio-event-loop', 'schedules', 'python-asyncio-task'));
});


// 2026-11-07 decision probe G1: hypothetical overlay is NOT a proposal to edit vault YAML.
// Tests establish query expressibility, not factual approval of either candidate edge.
test('F10: in_topic to Thread returns topic neighbors, not proven realizations', () => {
  const thematic = incoming('in_topic', 'thread');
  assert.ok(thematic.includes('java-thread'));
  assert.ok(thematic.includes('python-threading'));
  assert.equal(nodes.get('java-thread').kind, 'program_construct');
  assert.equal(nodes.get('python-threading').kind, 'software');
  // Python threading is a module for constructing/managing threads, not a thread.
  assert.ok(!has('python-threading', 'realizes', 'thread'));
});

test('F11: realizes can index hypothetically asserted realizations, not representations', () => {
  // Conditional source-backed hypotheses, NOT new YAML edges.
  const candidates = [
    { source: 'java-thread', target: 'thread' },
    { source: 'python-asyncio-task', target: 'asynchronous-task' }
  ];
  for (const {source,target} of candidates) {
    assert.equal(nodes.get(source).kind, 'program_construct');
    assert.equal(nodes.get(target).kind, 'process');
    assert.ok(!has(source, 'realizes', target)); // current graph cannot answer via realizes
  }
  const realizers = target => [
    ...incoming('realizes', target),
    ...candidates.filter(x => x.target === target).map(x => x.source)
  ].sort();
  assert.ok(realizers('thread').includes('java-thread'));
  assert.ok(realizers('asynchronous-task').includes('python-asyncio-task'));
  assert.ok(incoming('realizes', 'single-agent-inner-loop').includes('openai-agents-sdk-runner'));
  // A query mechanically returns the inserted "realizes" facts. This does NOT
  // show that representing an execution entails implementing its abstraction,
  // or that the candidate edges satisfy the normative predicate definition.
});

test('F12: kind-only/type-only heuristics do not justify realizing execution', () => {
  assert.equal(nodes.get('python-asyncio-future').kind, 'program_construct');
  assert.ok(has('python-asyncio-future', 'realizes', 'future'));
  assert.ok(!has('python-asyncio-future', 'realizes', 'asynchronous-task'));
  assert.ok(!has('python-threading', 'realizes', 'thread'));
  assert.ok(has('python-asyncio-task', 'executes', 'python-coroutine-object'));
  assert.ok(!has('python-asyncio-task', 'realizes', 'python-coroutine-object'));
  // "executes a coroutine" and "realizes an abstract asynchronous task"
  // are distinct questions, and should not be added automatically together.
});


test('F13: representing, realizing, and executing are independently typed claims', () => {
  // Synthetic logical countermodel, no new Knowledge and no claim about a
  // specific runtime. A handle may represent an execution without implementing
  // its execution mechanism; an engine may implement work without offering
  // the corresponding public handle.
  const world = [
    { name: 'handle-only', represents: true, realizes: false, executes: false },
    { name: 'engine-only', represents: false, realizes: true, executes: true },
    { name: 'combined-task', represents: true, realizes: true, executes: true }
  ];
  const query = predicate => world.filter(x => x[predicate]).map(x => x.name);
  assert.deepEqual(query('represents'), ['handle-only', 'combined-task']);
  assert.deepEqual(query('realizes'), ['engine-only', 'combined-task']);
  assert.deepEqual(query('executes'), ['engine-only', 'combined-task']);
  assert.notDeepEqual(query('represents'), query('realizes'));
  assert.equal(RELATIONS.includes('represents'), false);
  // Existing realizes indexes realizers, not every public representation;
  // real usefulness of a separate represents predicate is still unproven.
});
