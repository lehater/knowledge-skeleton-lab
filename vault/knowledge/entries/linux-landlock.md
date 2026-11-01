---
id: 01a197d9-c49b-7b37-9e42-5b2b110b51fe
type: knowledge
name: "Linux Landlock"
lifecycle: enriched
review_status: proposed
kind: mechanism
aliases:
  - "Landlock"
in_topic:
  - "[[knowledge/entries/os-level-permission-sandboxes]]"
sources:
  - "https://docs.kernel.org/userspace-api/landlock.html"
---
# Linux Landlock

Landlock — составляемый Linux Security Module, с помощью которого процесс, в том числе непривилегированный, ограничивает собственные права доступа. Правила объединяются в ruleset и ограничивают применяющий его поток и будущие дочерние процессы. Поддерживаемые ограничения файловой системы и сети зависят от ABI работающего ядра; Landlock добавляет ограничения поверх существующего контроля доступа.
