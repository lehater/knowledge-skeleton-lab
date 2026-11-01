---
id: 01a197fa-3f81-7f5f-b2a3-9627b4ca7134
type: knowledge
name: "Prometheus"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/tracing-and-monitoring-platforms]]"
kind: technology
executes:
  - "[[knowledge/entries/prometheus-alerting-rule]]"
sources:
  - "https://prometheus.io/docs/introduction/overview/"
---
# Prometheus

Prometheus — система мониторинга и оповещения с временными рядами, определяемыми именем метрики и labels. Сервер собирает данные по HTTP pull, хранит samples и вычисляет запросы PromQL и правила. Выход — численные ряды и alerts для внешней обработки; это backend метрик, а не хранилище полного содержимого агентных трасс. Alertmanager — отдельный компонент экосистемы для доставки оповещений.
