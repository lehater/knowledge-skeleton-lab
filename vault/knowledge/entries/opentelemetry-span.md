---
id: 01a197fa-1b03-79d0-be8f-378ab3bc92b2
type: knowledge
name: "OpenTelemetry Span"
lifecycle: enriched
review_status: proposed
kind: structure
part_of:
  - "[[knowledge/entries/opentelemetry-trace]]"
sources:
  - "https://opentelemetry.io/docs/concepts/signals/traces/"
  - "https://opentelemetry.io/docs/specs/otel/trace/api/"
---
# OpenTelemetry Span

Span представляет одну операцию внутри trace с именем, началом и окончанием, неизменяемым SpanContext, родителем, атрибутами, событиями, ссылками и статусом. Вложенные spans описывают подоперации. Имя обозначает класс операций с ограниченной кардинальностью; идентификаторы конкретных объектов записываются в атрибуты. Статус операции и временные границы позволяют анализировать ошибки и длительность.

Span создаёт Tracer через операцию создания span (конкретное имя метода зависит от SDK), а завершает инструментирующий код через Span.End или языковую обёртку, вызывающую End. Каждый созданный span нужно завершить; End родителя не завершает дочерние spans. Незавершённый span может удерживать ресурсы реализации.
