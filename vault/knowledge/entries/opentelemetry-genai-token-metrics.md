---
id: 01a197fa-d97a-74a6-ab5e-1086bf998a63
type: knowledge
name: "OpenTelemetry GenAI Token Metrics"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/opentelemetry-genai-semantic-conventions]]"
  - "[[knowledge/entries/cost-tracking-and-optimization]]"
sources:
  - "https://github.com/open-telemetry/semantic-conventions-genai/blob/244465e94b9d7167fa5ed5c31a4b2b49ab6ddee5/docs/gen-ai/gen-ai-token-metrics.md"
---
# OpenTelemetry GenAI Token Metrics

Редакция Development разделяет монотонные counters потребления `gen_ai.client.inference.usage.*` и histograms распределения токенов по операциям `gen_ai.client.inference.operation.*`. Counters предназначены для суммарного usage и приближения затрат, histograms — для перцентилей и выбросов, а не расчёта общего inference usage или стоимости.

`input_tokens` включает cached tokens; счётчики cache read/write и reasoning обозначают подмножества input/output. Их прямое суммирование с родительскими счётчиками дублирует токены. Если система предоставляет использованные и оплачиваемые токены, инструментация должна записывать оплачиваемые. Категория модальности задаётся `gen_ai.token.modality`; неизвестная обозначается `unknown`. Количество токенов само по себе не является денежной суммой.
