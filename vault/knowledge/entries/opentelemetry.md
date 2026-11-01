---
id: 01a197fa-1a81-7a25-bc7b-2b7c9ecd686d
type: knowledge
name: "OpenTelemetry"
lifecycle: enriched
review_status: proposed
kind: technology
aliases:
  - "OTel"
in_topic:
  - "[[knowledge/entries/unified-observability]]"
sources:
  - "https://opentelemetry.io/docs/specs/otel/trace/sdk/"
  - "https://opentelemetry.io/docs/what-is-opentelemetry/"
---
# OpenTelemetry

OpenTelemetry — открытый, независимый от поставщика framework и набор инструментов для генерации, сбора и экспорта телеметрии, включая traces, metrics и logs. В состав входят спецификации, API/SDK, инструментация, протокол и Collector. Приложение формирует телеметрию через инструментацию, после чего она направляется выбранному backend; хранение, запросы и визуализацию обеспечивают отдельные системы.

В tracing SDK завершённые spans могут ожидать отправки в batch processor. TracerProvider.ForceFlush инициирует экспорт накопленного с ограничением по timeout, а Shutdown вызывает завершение processors, включающее эффекты flush. Для коротких задач и FaaS, приостанавливающих процесс после вызова, завершение или необходимый flush выполняется до остановки процесса с проверкой результата; это API SDK приложения, отдельное от Collector pipeline.
