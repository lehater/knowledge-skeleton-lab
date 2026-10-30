# Правила для vault/knowledge/entries

Подчиняется корневому [AGENTS.md](../AGENTS.md). Перед любым созданием или изменением узла прочитай [schema](schema.md), [taxonomy](taxonomy.md), [relations](relations.md) и [discovery](discovery.md).

- Создавай записи **только** в `vault/knowledge/entries/`; без тематических папок.
- В стадии `skeleton` тело — только H1; определения, объяснения и примеры не добавляй.
- `categories` — прямые категории, `specializes`/`part_of`/`realizes` — только обоснованные предметные отношения.
- Избегай одинаковых узлов под альтернативными именами.
- Если предмет или отношение неоднозначны, внеси в отчёт кандидатов, а не записывай спорный факт.
- Генерируй идентификатор через `node tools/new-id.mjs`; проверяй ссылки и финальный diff.


- Ссылки YAML — относительно `vault/`: `[[taxonomy/categories/...]]`, без `vault/` в wikilink.
- Агент запускается из корня Git-репозитория; отдельный `AGENTS.md` внутри Obsidian Vault не нужен.
