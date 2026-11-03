---
id: 01a197fa-1e3c-7b69-b9b3-ebc4025fbe19
type: knowledge
name: "OpenTelemetry Collector Receiver"
lifecycle: enriched
review_status: proposed
kind: component
part_of:
  - "[[knowledge/entries/opentelemetry-collector-pipeline]]"
sources:
  - "https://opentelemetry.io/docs/collector/architecture/"
  - "https://opentelemetry.io/docs/collector/configuration/"
---
# OpenTelemetry Collector Receiver

Receiver получает телеметрию от источников через push-интерфейс либо активно собирает её pull-механизмом и передаёт дальше в pipeline. Одна настроенная инстанция receiver может подавать одинаковые данные в несколько pipelines. Тип receiver определяет поддерживаемый протокол и сигналы.
