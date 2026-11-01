---
id: 01a197fa-8009-7d19-9061-16913f8ce043
type: knowledge
name: "Langfuse Event Queuing and Batching"
lifecycle: enriched
review_status: proposed
part_of:
  - "[[knowledge/entries/langfuse]]"
sources:
  - "https://langfuse.com/docs/observability/features/queuing-batching"
---
# Langfuse Event Queuing and Batching

SDK и интеграции Langfuse буферизуют события и отправляют batches в фоне. Порог числа событий задают `flush_at`/`flushAt`, максимальное ожидание — `flush_interval`/`flushInterval`. Это снижает число сетевых запросов, оставляя ещё не отправленные события в процессе приложения.

Перед завершением или замораживанием короткоживущей среды вызывают `flush`; для JS OpenTelemetry processor — `forceFlush`. Для окончательного завершения Python-клиента предусмотрен `shutdown`, ожидающий отправку pending requests. Без отправки буфера завершающийся процесс может потерять события.
