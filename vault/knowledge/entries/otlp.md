---
id: 01a197fa-1f06-7e3e-aae8-126580b965ca
type: knowledge
name: "OpenTelemetry Protocol (OTLP)"
lifecycle: enriched
review_status: proposed
kind: protocol
aliases:
  - "OTLP"
part_of:
  - "[[knowledge/entries/opentelemetry]]"
sources:
  - "https://opentelemetry.io/docs/specs/otlp/"
  - "https://opentelemetry.io/docs/what-is-opentelemetry/"
---
# OpenTelemetry Protocol (OTLP)

OTLP определяет кодирование, транспорт и доставку телеметрии между источником, промежуточными узлами и backend. Протокол использует request/response Export поверх gRPC или HTTP с Protobuf-схемой. В HTTP данные передаются POST на /v1/traces, /v1/metrics или /v1/logs в binary Protobuf либо JSON Protobuf.

Подтверждение относится к одной паре client/server; сквозные гарантии многоступенчатой цепочки находятся вне спецификации. Ответ с заполненным partial_success повторять нельзя. В OTLP/HTTP повторяются 429, 502, 503 и 504 с учётом Retry-After или backoff; прочие 4xx/5xx не повторяются.
