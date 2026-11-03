---
id: 01a197fa-1d7f-7f5b-bbd3-fc152742a605
type: knowledge
name: "OpenTelemetry Resource"
lifecycle: enriched
review_status: proposed
kind: data_structure
in_topic:
  - "[[knowledge/entries/opentelemetry]]"
sources:
  - "https://opentelemetry.io/docs/concepts/resources/"
---
# OpenTelemetry Resource

Resource описывает сущность, производящую телеметрию, набором атрибутов: например, сервис, процесс, контейнер или deployment. Привязка к provider задаётся при инициализации и затем сопровождает создаваемые им spans или metrics. Это позволяет отнести наблюдение к конкретному источнику. Логическое имя сервиса задаётся явно через service.name или OTEL_SERVICE_NAME; дополнительные атрибуты — через настройки SDK, detectors или OTEL_RESOURCE_ATTRIBUTES.
