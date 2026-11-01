---
id: 01a197fa-7f4d-7900-88fa-e27e60f960b9
type: knowledge
name: "Langfuse Observation"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/langfuse]]"
sources:
  - "https://langfuse.com/docs/observability/data-model"
  - "https://langfuse.com/docs/observability/features/observation-types"
---
# Langfuse Observation

Observation — платформенная запись отдельного шага приложения в Langfuse: вызова модели, инструмента или retrieval. Observations могут быть вложенными; шаги одной операции связывает `trace_id`. Атрибуты уровня trace, включая `user_id` и `session_id`, хранятся также на observations.

Тип задаёт интерпретацию записи: `generation` — генерация модели, `tool` — отдельное действие, `agent` — агентный поток, `span` — общий интервал работы, `event` — дискретное событие. В SDK тип выбирают через `as_type`/`asType`; наличие типа `agent` описывает наблюдаемый шаг приложения.
