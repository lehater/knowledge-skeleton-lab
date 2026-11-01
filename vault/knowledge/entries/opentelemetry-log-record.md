---
id: 01a197fa-1c39-7782-9ffb-bcd46c3d3fca
type: knowledge
name: "OpenTelemetry LogRecord"
lifecycle: enriched
review_status: proposed
kind: structure
aliases:
  - "OpenTelemetry Log Record"
in_topic:
  - "[[knowledge/entries/opentelemetry]]"
sources:
  - "https://opentelemetry.io/docs/specs/otel/logs/data-model/"
---
# OpenTelemetry LogRecord

LogRecord — единая модель записи лога для представления данных из приложений, системных журналов и машинных событий. Timestamp задаёт время события у источника, ObservedTimestamp — время наблюдения системой сбора. Body несёт содержимое, Attributes — дополнительные поля, Resource — источник, InstrumentationScope — инструментацию, SeverityText/SeverityNumber — важность.

Необязательные TraceId и SpanId связывают запись с обработкой запроса и конкретной операцией. При наличии SpanId рекомендуется также TraceId. Такая корреляция требует заполненных полей: самостоятельная запись лога может существовать без trace context.
