---
id: 01a197fa-1cbf-7eff-be24-8744c59a49c7
type: knowledge
name: "OpenTelemetry Metric"
lifecycle: enriched
review_status: proposed
kind: structure
in_topic:
  - "[[knowledge/entries/opentelemetry]]"
sources:
  - "https://opentelemetry.io/docs/languages/dotnet/metrics/best-practices/"
  - "https://opentelemetry.io/docs/specs/otel/metrics/data-model/"
  - "https://opentelemetry.io/docs/concepts/signals/metrics/"
---
# OpenTelemetry Metric

Метрики OpenTelemetry описывают измерения работающей системы и их агрегированную статистику. Инструмент задаётся именем, видом, единицей и описанием: Counter накапливает положительные приращения, UpDownCounter допускает уменьшение, Gauge отражает текущее значение, Histogram агрегирует распределение. SDK объединяет измерения в точки данных и экспортирует их потребителю.

Каждая уникальная комбинация атрибутов создаёт отдельное состояние агрегации, поэтому высокая кардинальность увеличивает расход памяти. При превышении лимита комбинаций SDK объединяет новые измерения в overflow-точку: общий итог сохраняется, но запросы с фильтрами по потерянным атрибутам недосчитывают эти измерения.

TraceId и SpanId не включают в атрибуты метрики: каждый контекст создаёт новую комбинацию и вызывает рост кардинальности. Для связи агрегата с отдельным выполнением модель предусматривает exemplars — выбранные измерения со временем, значением и необязательными trace_id/span_id без превращения этих IDs в измерения временного ряда.
