# Knowledge Skeleton Lab

**Назначение:** единый проверяемый Knowledge Graph (Markdown + YAML) в Obsidian. В активных данных один тип узлов — `Knowledge`; все разрешённые отношения определены в [rules/relations.md](rules/relations.md). Git — источник истины.

## Актуальный срез

- **77 Knowledge, 62 связи** после [аудита источников](reports/source-audit-stage1c-2026-11-01.md) и [проверки 69 исходных отношений](reports/relation-audit-stage2-2026-11-01.md).
- **Harness Engineering / ETCLOVG:** 1 корень, 7 направлений, 35 подразделов, **42 `in_topic`** по Figure 4 одного научного обзора. Это подтверждённая *авторская рубрикация*, не гарантия полноты всей области.
- Проверенные ссылки/названия есть у оставшихся Knowledge; `review_status: proposed` сохраняется. CI проверяет формат и целостность, а не предметную истинность.
- **Stage 3: устаревшие учебные Canvas, специализированная Base и задания пилотов удалены из активного дерева.** Их копии не создаются; Git хранит прежние версии.

## Работа с графом

Открой `vault/` как Obsidian Vault; для K-Plex выбери `Harness Engineering` (файл `knowledge/entries/harness-engineering.md`), линзу по связи `in_topic`. Вокруг корня ожидаются **7 направлений**; при переходе на `Lifecycle & Orchestration` — **3 подраздела**. Полная проверка второго уровня: **7 / 4 / 5 / 3 / 5 / 5 / 6** подразделов по направлениям. Инструкция и вердикт по обновлённому дереву: [Stage 3 GUI-checklist](reports/presentation-cleanup-stage3-2026-11-01.md).

Оставлены общие представления:
- `vault/views/knowledge.base` — Knowledge и статусы;
- `vault/views/topics.base` — тематические связи всех Knowledge;
- `vault/views/topic-explorer.base` — контекстная панель для активной заметки (использовать **как sidebar/embedded**, отдельно открытый .base не имеет активного Knowledge-контекста).

В K-Plex следует настроить фильтр по `in_topic`, а не использовать старые категории. Сохранённые локальные настройки плагина могут быть вне Git (`vault/.obsidian/plugins/` игнорируется).

## Нормативная методика

[AGENTS.md](AGENTS.md) · [Правила](rules/README.md) · [Discovery Skill](.agents/skills/knowledge-graph-discovery/SKILL.md) · [ADR представлений](docs/decisions/0001-graph-projections.md).

Проверка из корня репозитория:

```bash
node tools/validate.mjs
node --test tools/validate.test.mjs
```

**Статусы:** статическая проверка подтверждается CI; обновлённый Obsidian/K-Plex требует отдельной ручной GUI-проверки после получения текущей ветки.
