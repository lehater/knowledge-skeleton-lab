---
id: 01a197fa-3ff7-77c6-bcba-7952cf75807b
type: knowledge
name: "Prometheus Alertmanager"
lifecycle: enriched
review_status: proposed
kind: software
in_topic:
  - "[[knowledge/entries/reliability-engineering]]"
sources:
  - "https://prometheus.io/docs/alerting/latest/alertmanager/"
  - "https://prometheus.io/docs/introduction/overview/"
---
# Prometheus Alertmanager

Alertmanager принимает alerts от клиентов, включая Prometheus, дедуплицирует и группирует их, затем маршрутизирует уведомления получателям. Inhibition подавляет уведомления при других активных alerts; silence временно подавляет совпадающие по matchers alerts. Вход — поток состояний alerts и конфигурация routing tree; выход — уведомления. Само срабатывание метрик вычисляет отправитель, а не Alertmanager. Alertmanager запускается как отдельное приложение, принимающее оповещения от Prometheus server или других клиентов; принадлежность к экосистеме Prometheus не означает, что он является частью сервера.
