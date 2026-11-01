---
id: 01a197fa-3d78-75cc-b4f2-264af971d3bf
type: knowledge
name: "Four Golden Signals"
lifecycle: enriched
review_status: proposed
kind: model
in_topic:
  - "[[knowledge/entries/service-monitoring]]"
sources:
  - "https://sre.google/sre-book/monitoring-distributed-systems/"
---
# Four Golden Signals

Четыре эксплуатационных сигнала Google SRE: latency, traffic, errors и saturation. Они показывают время обслуживания, нагрузку, долю неуспешных операций и близость к пределу ресурса. Задержки успешных и ошибочных запросов анализируют отдельно; среднее время может скрывать длинный хвост. Набор помогает выбрать показатели панели, но не заменяет определение пользовательской успешности.
