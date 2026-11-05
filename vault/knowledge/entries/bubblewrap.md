---
id: 01a197d9-c4d8-75b5-9993-375d91feabf8
type: knowledge
name: "Bubblewrap"
lifecycle: enriched
review_status: proposed
kind: software
aliases:
  - "bwrap"
in_topic:
  - "[[knowledge/entries/os-level-permission-sandboxes]]"
sources:
  - "https://github.com/containers/bubblewrap#readme"
---
# Bubblewrap

Bubblewrap — инструмент построения Linux-песочниц с использованием namespaces. Он создаёт отдельное mount namespace и позволяет явно задать видимую файловую систему, права чтения и дополнительные ограничения процессов и сети. Модель безопасности и параметры запуска определяет вызывающая программа: уровень защиты зависит от переданных аргументов.
