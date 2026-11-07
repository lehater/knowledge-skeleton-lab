import test from 'node:test';
import assert from 'node:assert/strict';
import { fixture, roleCompetencies, knowledgeForRole, compareRoles, rolesUsingCompetency, validateFixture } from './queries.mjs';

test('actual Knowledge references are reused by stable UUID; no new Vault nodes', () => {
  const result = validateFixture();
  assert.equal(result.ok, true, result.issues.join('\n'));
  assert.deepEqual(result.counts, {
    roles: 2, competencies: 5, knowledge: 11, requirements: 8, competencyKnowledgeLinks: 17
  });
});

test('Role → Competency yields observable capabilities, with level and importance on the edge', () => {
  const architect = roleCompetencies('software-architect');
  const backend = roleCompetencies('backend-engineer');
  assert.equal(architect.length, 4);
  assert.equal(backend.length, 4);
  for (const entry of [...architect, ...backend]) {
    assert.ok(entry.competency.observableOutput);
    assert.ok(entry.competency.assessment);
    assert.ok(!Object.hasOwn(entry.competency, 'level'), 'level must belong to role requirement, not competency');
  }
  assert.equal(architect.find(x => x.competency.id === 'design-async-contracts').level, 3);
  assert.equal(backend.find(x => x.competency.id === 'design-async-contracts').level, 2);
});

test('Role → Competency → existing Knowledge returns a deduplicated explainable path', () => {
  const architectTopics = knowledgeForRole('software-architect', { essentialOnly: true });
  const backendTopics = knowledgeForRole('backend-engineer', { essentialOnly: true });
  assert.equal(architectTopics.length, 10);
  assert.equal(backendTopics.length, 8);
  assert.ok(architectTopics.some(x => x.slug === 'data-abstraction'));
  assert.ok(backendTopics.some(x => x.slug === 'resource-management'));
  assert.ok(!backendTopics.some(x => x.slug === 'error-budget'), 'optional competency is omitted');
  const interfaceRef = architectTopics.find(x => x.slug === 'programming-interface');
  assert.equal(interfaceRef.via.length, 2);
  assert.deepEqual(interfaceRef.via.map(x => x.competencyId).sort(), ['design-async-contracts', 'evaluate-design-options']);
});

test('N:M overlap and role-specific needs are queryable', () => {
  const comparison = compareRoles('software-architect', 'backend-engineer');
  assert.deepEqual(comparison.common, [
    'assess-reliability', 'design-async-contracts', 'reason-about-concurrency'
  ]);
  assert.deepEqual(comparison.onlyLeft, ['evaluate-design-options']);
  assert.deepEqual(comparison.onlyRight, ['implement-async-components']);
  assert.equal(comparison.differingRequirements.length, 3);
  assert.deepEqual(rolesUsingCompetency('design-async-contracts').sort(), ['backend-engineer', 'software-architect']);
});

test('optional role competencies are not incorrectly treated as mandatory', () => {
  const required = roleCompetencies('backend-engineer', { essentialOnly: true }).map(x => x.competency.id);
  assert.equal(required.length, 3);
  assert.ok(!required.includes('assess-reliability'));
  assert.equal(knowledgeForRole('backend-engineer').length, 10);
});

test('competency can be related to knowledge without proving personal mastery', () => {
  assert.equal(fixture.metadata.kind, 'illustrative-competency-poc');
  assert.ok(fixture.metadata.caveat.includes('NOT'));
  assert.deepEqual(Object.keys(fixture.metadata.levelScale).sort(), ['1', '2', '3']);
  assert.ok(fixture.competencies.every(x => x.knowledge.every(ref => ref.relation === 'supports_learning')));
  assert.ok(!fixture.roles.some(x => Object.hasOwn(x, 'holder') || Object.hasOwn(x, 'achievedCompetencies')));
  assert.throws(() => roleCompetencies('unknown-person'), /Unknown role/);
});
