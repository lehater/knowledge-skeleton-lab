---
id: 01a19813-4d66-7bee-958a-5bfba95b2799
type: knowledge
name: "Alertmanager Configuration"
lifecycle: enriched
review_status: proposed
kind: artifact
in_topic:
  - "[[knowledge/entries/prometheus-alertmanager]]"
sources:
  - "https://prometheus.io/docs/alerting/latest/configuration/"
---
# Alertmanager Configuration

Конфигурация Alertmanager определяет политики маршрутизации уведомлений, получателей, правила подавления и временные интервалы. Вход — YAML-файл, указанный через `--config.file`; при загрузке Alertmanager применяет его к обработке поступающих оповещений.

Обновление выполняется через `SIGHUP` или `POST /-/reload` без перезапуска процесса. Если новая конфигурация некорректна, она не применяется. Конфигурация — артефакт управления отдельным сервисом Alertmanager, а не его программный компонент.
