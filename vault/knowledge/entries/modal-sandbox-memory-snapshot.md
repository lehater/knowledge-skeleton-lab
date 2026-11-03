---
id: 01a197e5-4a8f-7f31-ac95-8fc983064516
type: knowledge
name: "Modal Sandbox Memory Snapshot"
kind: artifact
lifecycle: enriched
review_status: proposed
specializes:
  - "[[knowledge/entries/modal-sandbox-snapshot]]"
sources:
  - "https://modal.com/docs/guide/sandbox-snapshots"
---
# Modal Sandbox Memory Snapshot

Memory Snapshot сохраняет память и файловую систему Modal Sandbox для создания новой среды из состояния исполнения. Функция имеет статус Alpha. Снимок закрывает TCP-соединения и пока завершает исходную среду. Его нельзя создать при работающем `exec`; фоновые процессы, запущенные через `exec`, корректно не восстанавливаются.

Восстановление требует того же типа инстанса и не поддерживает GPU. Такие снимки хранятся семь дней без продления срока. Сохранение памяти поэтому не означает прозрачного продолжения всех процессов и внешних соединений.
