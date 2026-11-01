---
id: 01a197e5-4a4a-7ff4-acfd-f69a23827da4
type: knowledge
name: "Modal Sandbox Filesystem Snapshot"
lifecycle: enriched
review_status: proposed
specializes:
  - "[[knowledge/entries/modal-sandbox-snapshot]]"
sources:
  - "https://modal.com/docs/guide/sandbox-snapshots"
---
# Modal Sandbox Filesystem Snapshot

Filesystem Snapshot копирует корневую файловую систему Modal Sandbox в Image, из которого создаются новые среды с теми же файлами. Подключённые Volumes в снимок не входят. Можно создать несколько сред из одного Image. Срок хранения настраивается через TTL, включая хранение без истечения.
