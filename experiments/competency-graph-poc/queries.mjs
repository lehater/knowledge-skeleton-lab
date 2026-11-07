import { readFileSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
export const fixture = JSON.parse(readFileSync(join(here, 'fixture.json'), 'utf8'));

const index = arr => new Map(arr.map(x => [x.id, x]));
const roleById = index(fixture.roles);
const competencyById = index(fixture.competencies);

export function roleCompetencies(roleId, { essentialOnly = false } = {}) {
  const role = roleById.get(roleId);
  if (!role) throw new Error('Unknown role: ' + roleId);
  return role.requirements
    .filter(req => !essentialOnly || req.importance === 'essential')
    .map(req => ({ ...req, competency: competencyById.get(req.competency) }));
}

export function knowledgeForRole(roleId, { essentialOnly = false } = {}) {
  const result = new Map();
  for (const req of roleCompetencies(roleId, { essentialOnly })) {
    for (const link of req.competency.knowledge) {
      const old = result.get(link.slug) ?? { slug: link.slug, uuid: link.uuid, via: [] };
      old.via.push({ competencyId: req.competency.id, importance: req.importance, level: req.level });
      result.set(link.slug, old);
    }
  }
  return [...result.values()].sort((a, b) => a.slug.localeCompare(b.slug));
}

export function compareRoles(leftId, rightId) {
  const a = new Map(roleCompetencies(leftId).map(x => [x.competency.id, x]));
  const b = new Map(roleCompetencies(rightId).map(x => [x.competency.id, x]));
  return {
    common: [...a.keys()].filter(x => b.has(x)).sort(),
    onlyLeft: [...a.keys()].filter(x => !b.has(x)).sort(),
    onlyRight: [...b.keys()].filter(x => !a.has(x)).sort(),
    differingRequirements: [...a.keys()]
      .filter(x => b.has(x) && (a.get(x).level !== b.get(x).level || a.get(x).importance !== b.get(x).importance))
      .map(x => ({ competency: x, left: { level: a.get(x).level, importance: a.get(x).importance }, right: { level: b.get(x).level, importance: b.get(x).importance } }))
      .sort((x, y) => x.competency.localeCompare(y.competency))
  };
}

export function rolesUsingCompetency(competencyId) {
  if (!competencyById.has(competencyId)) throw new Error('Unknown competency: ' + competencyId);
  return fixture.roles.filter(role => role.requirements.some(r => r.competency === competencyId)).map(r => r.id);
}

export function validateFixture({ verifyKnowledgeFiles = true } = {}) {
  const issues = [];
  const unique = (values, where) => {
    if (new Set(values).size !== values.length) issues.push('duplicate ids in ' + where);
  };
  unique(fixture.roles.map(x => x.id), 'roles');
  unique(fixture.competencies.map(x => x.id), 'competencies');
  const knowledgeRefs = new Map();
  for (const role of fixture.roles) {
    if (!role.purpose) issues.push('missing role purpose: ' + role.id);
    unique(role.requirements.map(r => r.competency), role.id);
    for (const req of role.requirements) {
      if (!competencyById.has(req.competency)) issues.push('dangling competency: ' + req.competency);
      if (!['essential', 'optional'].includes(req.importance)) issues.push('invalid importance: ' + role.id);
      if (![1, 2, 3].includes(req.level)) issues.push('invalid local level: ' + role.id);
    }
  }
  for (const c of fixture.competencies) {
    if (!c.action || !c.observableOutput || !c.assessment) issues.push('non-observable competency: ' + c.id);
    if (!c.knowledge?.length) issues.push('missing Knowledge mapping: ' + c.id);
    unique(c.knowledge.map(x => x.slug), c.id);
    for (const ref of c.knowledge) {
      if (ref.relation !== 'supports_learning') issues.push('unexpected link semantics: ' + c.id);
      const prior = knowledgeRefs.get(ref.slug);
      if (prior && prior !== ref.uuid) issues.push('unstable Knowledge reference: ' + ref.slug);
      knowledgeRefs.set(ref.slug, ref.uuid);
    }
  }
  if (verifyKnowledgeFiles) {
    for (const [slug, uuid] of knowledgeRefs) {
      const path = resolve(here, '../../vault/knowledge/entries', slug + '.md');
      try {
        const content = readFileSync(path, 'utf8');
        if (!content.startsWith('---\n') || !content.includes('\nid: ' + uuid + '\n'))
          issues.push('Knowledge UUID mismatch: ' + slug);
      } catch { issues.push('missing real Knowledge: ' + slug); }
    }
  }
  return { ok: issues.length === 0, issues, counts: { roles: fixture.roles.length, competencies: fixture.competencies.length, knowledge: knowledgeRefs.size, requirements: fixture.roles.reduce((n, x) => n + x.requirements.length, 0), competencyKnowledgeLinks: fixture.competencies.reduce((n, x) => n + x.knowledge.length, 0) } };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const validation = validateFixture();
  const summary = {
    validation,
    architect: {
      competencies: roleCompetencies('software-architect').map(x => ({ id: x.competency.id, level: x.level, importance: x.importance })),
      learningTopics: knowledgeForRole('software-architect', { essentialOnly: true }).map(x => x.slug)
    },
    backend: {
      competencies: roleCompetencies('backend-engineer').map(x => ({ id: x.competency.id, level: x.level, importance: x.importance })),
      learningTopics: knowledgeForRole('backend-engineer', { essentialOnly: true }).map(x => x.slug)
    },
    comparison: compareRoles('software-architect', 'backend-engineer'),
    interpretation: 'Topics are illustrative learning references, NOT proven mandatory prerequisites; levels are local scenario requirements, NOT assessed proficiency or SFIA levels.'
  };
  process.stdout.write(JSON.stringify(summary, null, 2) + '\n');
  if (!validation.ok) process.exitCode = 1;
}
