---
id: 01a197fa-81b9-77a4-922c-0cc20d292f9f
type: knowledge
name: "Phoenix Observability"
lifecycle: enriched
review_status: proposed
specializes:
  - "[[knowledge/entries/tracing-and-monitoring-platforms]]"
in_topic:
  - "[[knowledge/entries/otlp]]"
sources:
  - "https://arize.com/docs/phoenix/tracing/llm-traces"
  - "https://arize.com/docs/phoenix/tracing/llm-traces/sessions"
  - "https://arize.com/docs/phoenix/tracing/llm-traces/how-to-annotate-traces"
---
# Phoenix Observability

Phoenix наблюдает LLM-приложения через OpenTelemetry: принимает traces по OTLP и предоставляет инструментацию для разных SDK и фреймворков. Дерево и временная последовательность операций показывают model calls, retrieval и другие шаги, исключения и задержки.

Для многоходовой беседы приложение помечает spans согласованным session ID, позволяя видеть историю и суммарное поведение сессии. Аннотации с label и/или score связывают feedback из UI или приложения с наблюдаемой сущностью, например span.
