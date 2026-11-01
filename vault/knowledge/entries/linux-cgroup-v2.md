---
id: 01a197d9-c3e2-72e9-888b-c1668621acd0
type: knowledge
name: "Linux cgroup v2"
lifecycle: enriched
review_status: proposed
kind: mechanism
aliases:
  - "Control Group v2"
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://docs.kernel.org/admin-guide/cgroup-v2.html"
---
# Linux cgroup v2

cgroup v2 организует процессы в единую иерархию и через контроллеры управляет распределением системных ресурсов. Ядро cgroup задаёт иерархию процессов, а контроллеры — правила для конкретных ресурсов. Ограничения дочерней группы дополнительно сужают распределение ресурсов и не могут отменить ограничения предков.
