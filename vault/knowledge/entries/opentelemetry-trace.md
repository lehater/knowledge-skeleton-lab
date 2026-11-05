---
id: 01a197fa-1ac2-75de-9b22-b416485ae0a6
type: knowledge
name: "OpenTelemetry Trace"
lifecycle: enriched
review_status: proposed
kind: data_structure
in_topic:
  - "[[knowledge/entries/opentelemetry]]"
sources:
  - "https://opentelemetry.io/docs/concepts/signals/traces/"
---
# OpenTelemetry Trace

Trace представляет ход выполнения запроса как совокупность spans, связанных общим TraceId и отношениями parent/child. Spans могут поступать из разных процессов и сервисов, образуя представление выполнения через их границы. Для сборки одной распределённой trace контекст передаётся между участниками вместе с вызовами.
