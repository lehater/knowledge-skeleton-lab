---
id: 01a197fa-1e7e-7785-a5c0-dff00dd8cbd6
type: knowledge
name: "OpenTelemetry Collector Processor"
lifecycle: enriched
review_status: proposed
kind: component
part_of:
  - "[[knowledge/entries/opentelemetry-collector-pipeline]]"
sources:
  - "https://opentelemetry.io/docs/collector/architecture/"
  - "https://opentelemetry.io/docs/collector/configuration/"
---
# OpenTelemetry Collector Processor

Processor получает телеметрию предыдущего этапа pipeline, применяет настроенную обработку и передаёт результат следующему. Он может изменять, фильтровать или отбрасывать данные. Processors необязательны; их последовательность задаёт порядок преобразований, поэтому перестановка может изменить результат.
