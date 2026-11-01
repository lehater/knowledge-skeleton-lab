---
id: 01a197fa-1df6-79fe-bb54-39d22798c6d9
type: knowledge
name: "OpenTelemetry Collector Pipeline"
lifecycle: enriched
review_status: proposed
kind: structure
part_of:
  - "[[knowledge/entries/opentelemetry-collector]]"
sources:
  - "https://opentelemetry.io/docs/collector/architecture/"
  - "https://opentelemetry.io/docs/collector/configuration/"
---
# OpenTelemetry Collector Pipeline

Pipeline задаёт путь данных внутри Collector: receivers → последовательность необязательных processors → exporters. Один pipeline обрабатывает выбранный тип сигнала; каждый включённый компонент должен его поддерживать. Секции service.pipelines включают компоненты в работу: одного объявления компонента в конфигурации недостаточно. Порядок processors определяет порядок обработки; каждый exporter получает свою копию выходных данных.
