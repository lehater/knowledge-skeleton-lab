---
id: 01a197fa-1b5a-7cff-84a7-80a29c109287
type: knowledge
name: "OpenTelemetry SpanContext"
lifecycle: enriched
review_status: proposed
kind: structure
part_of:
  - "[[knowledge/entries/opentelemetry-span]]"
sources:
  - "https://opentelemetry.io/docs/specs/otel/trace/api/"
---
# OpenTelemetry SpanContext

SpanContext — неизменяемая часть Span, сериализуемая для передачи распределённого контекста. Она содержит TraceId (16 байт), SpanId (8 байт), TraceFlags и TraceState; валидные идентификаторы не полностью нулевые. IsRemote различает извлечённый удалённый и локальный контекст. Эти поля обеспечивают идентичность операции и её принадлежность trace при пересечении границ процессов.
