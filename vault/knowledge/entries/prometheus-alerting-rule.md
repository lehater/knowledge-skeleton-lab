---
id: 01a197fa-3fba-72c8-b2ee-d233477e706d
type: knowledge
name: "Prometheus Alerting Rule"
lifecycle: enriched
review_status: proposed
kind: specification
in_topic:
  - "[[knowledge/entries/prometheus]]"
sources:
  - "https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/"
---
# Prometheus Alerting Rule

Prometheus Alerting Rule — декларативное условие и параметры формирования alert Prometheus.

Alerting rule задаёт условие через выражение PromQL. Для каждого набора labels результирующего вектора возникает активный alert; `for` требует непрерывного выполнения условия до firing, `keep_firing_for` удерживает firing после исчезновения условия. Labels задают идентичность и маршрутизацию, annotations содержат описание и ссылку на runbook. Вычисление условия и доставка уведомления разделены.
