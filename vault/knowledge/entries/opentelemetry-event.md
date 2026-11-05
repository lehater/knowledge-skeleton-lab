---
id: 01a197fa-1c7d-7b68-8355-bac2373ae2fc
type: knowledge
name: "OpenTelemetry Event"
lifecycle: enriched
review_status: proposed
kind: data_structure
specializes:
  - "[[knowledge/entries/opentelemetry-log-record]]"
sources:
  - "https://opentelemetry.io/docs/specs/otel/logs/data-model/"
---
# OpenTelemetry Event

В модели логов OpenTelemetry Event — LogRecord с непустым EventName. Имя определяет класс события и должно однозначно идентифицировать структуру его атрибутов и Body. Это именованная структурированная запись в потоке логов; Span Event описан отдельной моделью как отметка внутри Span.
