---
id: 01a197d9-c510-7771-b34c-431b3b68fc30
type: knowledge
name: "gVisor"
lifecycle: enriched
review_status: proposed
kind: software
in_topic:
  - "[[knowledge/entries/sandbox-abstraction-layers]]"
sources:
  - "https://gvisor.dev/docs/"
  - "https://gvisor.dev/docs/architecture_guide/intro/"
---
# gVisor

gVisor изолирует приложения с помощью отдельного application kernel, реализующего Linux-подобный системный интерфейс в пользовательском пространстве. Системные интерфейсы приложения обслуживаются этим ядром песочницы, что уменьшает прямую поверхность взаимодействия с ядром хоста. OCI runtime runsc интегрирует gVisor с контейнерными инструментами.
