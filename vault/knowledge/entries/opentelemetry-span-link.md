---
id: 01a197fa-1bf1-73ac-9d69-aaef92dcd3ea
type: knowledge
name: "OpenTelemetry Span Link"
lifecycle: enriched
review_status: proposed
kind: data_structure
part_of:
  - "[[knowledge/entries/opentelemetry-span]]"
sources:
  - "https://opentelemetry.io/docs/specs/otel/trace/api/"
  - "https://opentelemetry.io/docs/concepts/signals/traces/"
---
# OpenTelemetry Span Link

Span Link связывает Span с другим SpanContext в той же или другой trace и может содержать атрибуты связи. Ссылка выражает причинную связь за пределами дерева parent/child, например для асинхронно поставленной в очередь работы. Ссылки, известные при создании Span, доступны решению head sampling; добавленные позже в него не входят.
