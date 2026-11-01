---
id: 01a197fa-1d34-76ce-a7af-72a72e8e28ae
type: knowledge
name: "OpenTelemetry Context Propagation"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/opentelemetry]]"
sources:
  - "https://opentelemetry.io/docs/concepts/context-propagation/"
---
# OpenTelemetry Context Propagation

Context propagation переносит контекст исполнения между сервисами и процессами, чтобы сохранять причинные связи и корреляцию сигналов. Отправитель inject сериализует контекст в carrier, например HTTP-заголовки; получатель extract восстанавливает его и создаёт дочерний Span с тем же TraceId. Propagators API позволяет выполнять это явно при отсутствии автоматической инструментации; стандартный propagator использует W3C TraceContext.

Контекст от внешнего отправителя требует обработки как недоверенных данных. Передача контекста внешним сервисам может раскрывать внутренние идентификаторы или baggage; propagation задаёт техническую переносимость, а политику границ задаёт интеграция.
