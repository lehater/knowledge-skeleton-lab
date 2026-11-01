---
id: 01a197d9-c41f-7263-acdc-6db0939bfeef
type: knowledge
name: "Linux Seccomp BPF"
lifecycle: enriched
review_status: proposed
kind: mechanism
aliases:
  - "seccomp-bpf"
in_topic:
  - "[[knowledge/entries/os-level-permission-sandboxes]]"
sources:
  - "https://www.kernel.org/doc/html/latest/userspace-api/seccomp_filter.html"
---
# Linux Seccomp BPF

Seccomp BPF фильтрует системные вызовы процесса: BPF-программа анализирует номер вызова, аргументы и метаданные и возвращает действие ядру, например разрешить вызов, вернуть ошибку или завершить процесс. Механизм сокращает доступную приложению поверхность ядра; полноценная песочница требует также политики доступа и других механизмов изоляции.
