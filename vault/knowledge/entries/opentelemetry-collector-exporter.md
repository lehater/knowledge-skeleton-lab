---
id: 01a197fa-1ec7-7e20-81af-7ddfeaaa9ead
type: knowledge
name: "OpenTelemetry Collector Exporter"
lifecycle: enriched
review_status: proposed
kind: component
part_of:
  - "[[knowledge/entries/opentelemetry-collector-pipeline]]"
sources:
  - "https://opentelemetry.io/docs/collector/resiliency/"
  - "https://opentelemetry.io/docs/collector/architecture/"
  - "https://opentelemetry.io/docs/collector/configuration/"
---
# OpenTelemetry Collector Exporter

Exporter принимает данные на выходе обработки pipeline и отправляет их за пределы Collector, например другому Collector или backend. Тип exporter задаёт протокол и поддерживаемые сигналы, параметры — destination и соединение. Несколько pipelines могут использовать одну инстанцию exporter.

Для сетевого экспорта настраиваются sending_queue и retry_on_failure с backoff/jitter. Буфер позволяет пережить временную недоступность endpoint, но заполнение очереди или исчерпание retry time ведёт к потере данных. In-memory очередь теряется при crash; file_storage/WAL позволяет восстановить отправку после restart, сохраняя риски отказа диска и переполнения. Размер очереди и лимиты повторов задают конечный бюджет переноса backpressure.
