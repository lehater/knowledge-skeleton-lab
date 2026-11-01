---
id: 01a1981a-9a4c-7f96-82bf-c0a17c44456f
type: knowledge
name: "OpenAI Evals API Data Source Configuration"
lifecycle: enriched
review_status: proposed
kind: structure
part_of:
  - "[[knowledge/entries/openai-evals-api-eval]]"
sources:
  - "https://developers.openai.com/api/reference/resources/evals/methods/create"
  - "https://developers.openai.com/api/docs/guides/evals"
---
# OpenAI Evals API Data Source Configuration

Поле `data_source_config` в определении eval задаёт контракт данных для runs. Вариант `custom` содержит `item_schema` — JSON Schema строки данных — и `include_sample_schema`, включающий пространство `sample` для проверяемых выводов. Другой вариант, `logs`, задаёт фильтры metadata для источника логов.

Это вложенная конфигурация определения eval, а не сами строки набора и не фактический источник `data_source`, передаваемый при запуске.
