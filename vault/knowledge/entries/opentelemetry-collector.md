---
id: 01a197fa-1dba-7963-898c-62177a49ed6b
type: knowledge
name: "OpenTelemetry Collector"
lifecycle: enriched
review_status: proposed
kind: technology
part_of:
  - "[[knowledge/entries/opentelemetry]]"
executes:
  - "[[knowledge/entries/opentelemetry-collector-pipeline]]"
sources:
  - "https://opentelemetry.io/docs/collector/internal-telemetry/"
  - "https://opentelemetry.io/docs/collector/architecture/"
  - "https://opentelemetry.io/docs/what-is-opentelemetry/"
---
# OpenTelemetry Collector

OpenTelemetry Collector — отдельный исполняемый компонент приёма, обработки и экспорта телеметрии в один или несколько targets. Конфигурация задаёт pipelines и используемые протоколы. Collector может работать рядом с приложением как agent либо общим gateway для нескольких источников, отделяя передачу телеметрии от её хранения и анализа.

Собственная телеметрия Collector показывает принятые/отклонённые элементы, ошибки enqueue/send, размер и вместимость очередей. По умолчанию внутренние metrics доступны через Prometheus-интерфейс на 127.0.0.1:8888/metrics, логи — stderr. Эти сигналы позволяют отличить отсутствие событий в источнике от потерь или перегрузки их доставки; внутренние traces отдельно включаются как experimental-функция.
