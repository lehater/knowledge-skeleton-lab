# Действующий Harness: модель Knowledge Graph v1

**Нормативные источники (без дублирующих словарей):**

1. [schema.md](schema.md) — один Knowledge, YAML-контракт, идентичность.
2. [knowledge.md](knowledge.md) — evidence, источники и узлы.
3. [relations.md](relations.md) — **все разрешённые предикаты** и их смысл.
4. [discovery.md](discovery.md) — последовательность «узлы → отношения» для очистки и инкрементальное Discovery.
5. [validation.md](validation.md) — четыре разные проверки: static / source / semantic / GUI.

[AGENTS.md](../AGENTS.md) задаёт порядок этапов. [Skill](../.agents/skills/knowledge-graph-discovery/SKILL.md) применяет эти правила. Изменение схемы или предикатов оформляется явным решением, тестами и отдельной итерацией.

**Не является контрактом:** старые отчёты, эксперименты, учебные задания, Canvas пилотов или комментарии PR. Их существование не подтверждает актуальность узлов.
