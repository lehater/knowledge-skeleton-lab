---
id: 01a197fa-8139-7c2e-84f1-b05439af531b
type: knowledge
name: "LangSmith Trace Masking"
lifecycle: enriched
review_status: proposed
part_of:
  - "[[knowledge/entries/langsmith-observability]]"
sources:
  - "https://docs.langchain.com/langsmith/mask-inputs-outputs"
---
# LangSmith Trace Masking

Маскирование LangSmith ограничивает данные до отправки backend. `LANGSMITH_HIDE_INPUTS`/`LANGSMITH_HIDE_OUTPUTS` скрывают входы/выходы; параметры Client позволяют заменить их собственной функцией. Metadata обрабатывается отдельно через `hide_metadata`. Для отдельных функций или запросов доступны локальные настройки.

Правила и anonymizer позволяют удалять выбранные PII или секреты. Скрытие inputs/outputs оставляет остальные данные trace; когда операцию вообще нельзя записывать, документация предлагает conditional tracing. Поэтому политика сбора должна охватывать также metadata и выбор инструментируемых вызовов.
