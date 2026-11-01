# Knowledge Skeleton Lab

**Цель:** минимальный проверяемый Knowledge Graph в Obsidian. Единственный тип узла — Knowledge. Источники подтверждают **названия и референты**, отношения добавляются и проверяются отдельно.

## Текущая работа

Ведётся упорядоченная очистка графа:
1. **Контракт Harness** — инструкции, типы, правила и проверки (текущая итерация; без изменения данных).
2. **Audit Knowledge** — каждый существующий узел: подтверждённый / неразрешённый / неподтверждённый; удалить только после проверки и анализа ссылок.
3. **Audit Relations** — проверить каждую связь, удалить или заменить только обоснованно.
4. **Presentation cleanup** — убрать устаревшие Canvas, Bases и пилотные данные из рабочего Vault.

[AGENTS.md](AGENTS.md) — порядок работы. [Правила](rules/README.md) — актуальный контракт. [Discovery Skill](.agents/skills/knowledge-graph-discovery/SKILL.md) — процесс агента.

## Уже проверенный срез

[ETCLOVG: Harness Engineering](reports/harness-engineering/etclovg-registry-v0.2.md) — 43 исходных названия, 42 тематических `in_topic`, ручная GUI-проверка 7 направлений и 35 подразделов. Источник: Figure 4 обзора, а **не** универсальный стандарт Harness Engineering.

## Как открыть

В Obsidian открой только `vault/`, в VS Code — корень Git-репозитория.

```bash
node tools/validate.mjs
node --test tools/validate.test.mjs
```

**Границы проверки:** CI проверяет синтаксис и целостность, source/semantic — отдельные ревью. Старые эксперименты будут убраны **из текущих данных** после завершения source/edge audit; их копии не создаются.
