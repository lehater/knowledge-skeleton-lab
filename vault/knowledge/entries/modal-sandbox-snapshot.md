---
id: 01a197da-0480-71e6-b918-04f069413df6
type: knowledge
name: "Modal Sandbox Snapshot"
kind: artifact
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/modal-sandbox]]"
sources:
  - "https://modal.com/docs/guide/sandbox-snapshots"
---
# Modal Sandbox Snapshot

Снимок Modal Sandbox сохраняет выбранную часть состояния для последующего использования. Modal различает снимки корневой файловой системы, отдельного каталога и памяти вместе с файловой системой. Первые два возвращают Image; memory snapshot предназначен для восстановления новой среды из состояния исполнения. Границы и ограничения восстановления зависят от вида снимка.
