---
id: 01a197d9-c3a1-746b-8610-16cdaff39031
type: knowledge
name: "Linux Namespaces"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/os-level-permission-sandboxes]]"
sources:
  - "https://man7.org/linux/man-pages/man7/namespaces.7.html"
---
# Linux Namespaces

Linux namespaces предоставляют процессам изолированное представление отдельных глобальных ресурсов ОС. Например, mount namespace определяет видимые точки монтирования, PID namespace — пространство идентификаторов процессов, network namespace — сетевые устройства, стеки и порты. Это механизм построения контейнеров; набор изолируемых ресурсов зависит от выбранных типов namespace.
