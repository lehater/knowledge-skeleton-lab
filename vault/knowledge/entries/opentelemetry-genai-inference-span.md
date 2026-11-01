---
id: 01a197fa-d900-7d0d-9512-4dbfe06e90eb
type: knowledge
name: "OpenTelemetry GenAI Inference Span"
lifecycle: enriched
review_status: proposed
specializes:
  - "[[knowledge/entries/opentelemetry-span]]"
in_topic:
  - "[[knowledge/entries/opentelemetry-genai-semantic-conventions]]"
sources:
  - "https://github.com/open-telemetry/semantic-conventions-genai/blob/244465e94b9d7167fa5ed5c31a4b2b49ab6ddee5/docs/gen-ai/client-inference.md"
  - "https://github.com/open-telemetry/semantic-conventions-genai/blob/244465e94b9d7167fa5ed5c31a4b2b49ab6ddee5/docs/gen-ai/gen-ai-spans.md"
---
# OpenTelemetry GenAI Inference Span

Span `gen_ai.client.inference` описывает логический клиентский вызов модели или сервиса, генерирующий ответ либо запрос tool call. Kind обычно `CLIENT`; для модели внутри того же процесса допустим `INTERNAL`. Атрибуты включают `gen_ai.operation.name`, `gen_ai.provider.name`, запрошенную и фактически ответившую модель.

Логический span охватывает операцию до получения полного ответа, ошибки или отмены, включая автоматические повторы. Один клиентский запрос может иметь несколько серверных inference: при подсчёте операций и токенов источник рекомендует группировать spans по `service.name`, чтобы различать наблюдателей. Соглашение имеет статус Development.
