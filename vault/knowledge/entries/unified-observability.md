---
id: 01a196ec-2a78-7985-8f7d-64b704ded53b
type: knowledge
name: "Unified Observability"
kind: practice
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/observability-operations]]"
sources:
  - "https://opentelemetry.io/docs/concepts/resources/"
  - "https://opentelemetry.io/docs/concepts/context-propagation/"
  - "https://opentelemetry.io/docs/what-is-opentelemetry/"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Unified Observability

Единая наблюдаемость связывает разные сигналы о работе системы так, чтобы их можно было совместно интерпретировать. В OpenTelemetry общие TraceId/SpanId и передаваемый контекст позволяют сопоставлять spans и логи через границы процессов; Resource описывает источник телеметрии. Инструментация генерирует данные, Collector при необходимости принимает и преобразует их, а backend хранит и предоставляет анализ. Корреляция требует сохранённых идентификаторов и контекста: сбор нескольких сигналов сам по себе не создаёт причинную связь.
