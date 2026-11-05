---
id: 01a197fa-d9c2-72cc-953e-413e83cd99b9
type: knowledge
name: "OpenTelemetry GenAI Latency Metrics"
kind: metric
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/opentelemetry-genai-semantic-conventions]]"
sources:
  - "https://github.com/open-telemetry/semantic-conventions-genai/blob/244465e94b9d7167fa5ed5c31a4b2b49ab6ddee5/docs/gen-ai/client-inference.md"
  - "https://github.com/open-telemetry/semantic-conventions-genai/blob/244465e94b9d7167fa5ed5c31a4b2b49ab6ddee5/docs/gen-ai/gen-ai-metrics.md"
---
# OpenTelemetry GenAI Latency Metrics

В редакции Development `gen_ai.client.inference.duration` — histogram в секундах от выдачи клиентского запроса до полного ответа, ошибки или отмены. `gen_ai.client.inference.time_to_first_chunk` измеряет время до первого полученного streaming chunk; без chunk и для non-streaming вызовов метрика не записывается.

`gen_ai.server.time_to_first_token` измеряется на стороне model server до генерации первого токена успешного ответа и отражает очередь и prefill. Клиентский chunk и серверный token — разные границы измерения: эти показатели нельзя автоматически считать одинаковым TTFT. Общая `gen_ai.client.operation.duration` не применяется к inference и embeddings, для которых определены собственные метрики.
