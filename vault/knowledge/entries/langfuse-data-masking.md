---
id: 01a197fa-7fce-7425-a7b3-1aaaf9933a16
type: knowledge
name: "Langfuse Data Masking"
lifecycle: enriched
review_status: proposed
part_of:
  - "[[knowledge/entries/langfuse]]"
sources:
  - "https://langfuse.com/docs/observability/features/masking"
---
# Langfuse Data Masking

Маскирование Langfuse изменяет чувствительные данные до отправки. В Python рекомендуемый hook `mask_otel_spans` получает read-only представления export batch и возвращает patches для атрибутов; batch может содержать лишь часть trace. Hook охватывает SDK и стороннюю инструментацию, экспортируемую этим клиентом.

Hook изменяет span attributes, но не имена, IDs, events, links и resource attributes. Другой exporter получает собственную неизменённую копию и требует отдельной настройки. Медленная обработка задерживает очередь; исключение или невалидный общий результат отбрасывает batch, невалидный patch — затронутый span. Legacy `mask` действует лишь при создании атрибутов через Langfuse API.
