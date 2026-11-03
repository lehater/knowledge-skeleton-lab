---
id: 01a197fa-7f10-77ab-b060-d997448c51bf
type: knowledge
name: "Langfuse"
kind: software
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/tracing-and-monitoring-platforms]]"
sources:
  - "https://langfuse.com/docs/observability/features/queuing-batching"
  - "https://langfuse.com/docs/observability/data-model"
---
# Langfuse

Langfuse — платформа наблюдения LLM-приложений на базе OpenTelemetry. Инструментация записывает шаги как observations; общие `trace_id` объединяют их в операцию, а session ID — в многоходовое взаимодействие. Вложенность сохраняет структуру приложения; user, environment, tags и metadata позволяют отбирать нужное исполнение. SDK и интеграции отправляют данные в фоне, поэтому короткоживущему процессу требуется явная отправка буфера перед выходом.
