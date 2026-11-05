---
id: 01a197fa-1b9c-722d-9897-47f03db91beb
type: knowledge
name: "OpenTelemetry Span Event"
lifecycle: enriched
review_status: proposed
kind: data_structure
part_of:
  - "[[knowledge/entries/opentelemetry-span]]"
sources:
  - "https://opentelemetry.io/docs/specs/otel/trace/api/"
  - "https://opentelemetry.io/docs/concepts/signals/traces/"
---
# OpenTelemetry Span Event

Span Event — именованная отметка времени внутри Span с необязательными атрибутами. Её добавляют, когда конкретный момент события имеет значение для интерпретации операции. Если важен только факт или значение без отдельного момента времени, используются атрибуты Span.
