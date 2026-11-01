# Knowledge Skeleton Lab

Экспериментальный **единый Knowledge Graph**, хранящийся как Markdown + YAML в `vault/` (Obsidian). **Каждый узел — Knowledge**, источник подтверждает название, а типизированные отношения указывают точный предметный смысл. Карточка без рёбер допустима.

Сначала создаём проверенные имена/каркасы, затем независимо и итерационно добавляем или уточняем связи. Готовый граф можно исследовать через Obsidian/K-Plex; Canvas и Bases — только представления.

- [AGENTS.md](AGENTS.md) — маршрутизатор.
- [Концепция и Scope](docs/concept.md).
- [Нормативная модель](rules/README.md).
- [Discovery Skill](.agents/skills/knowledge-graph-discovery/SKILL.md).
- [ETCLOVG evidence-реестр](reports/harness-engineering/etclovg-registry-v0.2.md).
- [ADR-001: представления](docs/decisions/0001-graph-projections.md).
- [Историческая GUI-проверка K-Plex](reports/k-plex-lenses-pilot.md) — относится к предыдущей схеме.

## Быстрый старт

Открой **`vault/`** как Obsidian Vault. Открой корень Git-проекта в VS Code. Для статической проверки из корня репозитория:

```bash
node tools/validate.mjs
node --test tools/validate.test.mjs
```

Исходный эксперимент с двумя типами узлов и категориями сохранён в истории Git. Его отчёты, Canvas и задания остаются историческими результатами. Переход на v1 ещё требует отдельной проверки K-Plex и независимого предметного ревью.
