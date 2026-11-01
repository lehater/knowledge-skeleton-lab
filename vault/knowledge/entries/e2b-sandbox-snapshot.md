---
id: 01a197e5-4902-73f9-910c-c85414705974
type: knowledge
name: "E2B Sandbox Snapshot"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/e2b-sandbox]]"
sources:
  - "https://docs.e2b.dev/sandbox/snapshots"
---
# E2B Sandbox Snapshot

E2B Sandbox Snapshot — сохраняемое состояние среды в конкретный момент: по умолчанию файловая система и память. Из одного снимка можно создать несколько новых сред. При создании исходная среда кратковременно приостанавливается, затем продолжает работу с прежним ID; активные WebSocket, PTY и command streams разрываются.

В режиме `filesystem` снимок не содержит память: новые среды загружаются с диска, без восстановления процессов. Snapshot отличается от pause/resume: первый порождает новые среды, второе продолжает существующую.

Снимки перечисляются через `listSnapshots`/`list_snapshots` и удаляются отдельно по snapshot ID через `deleteSnapshot`/`delete_snapshot`.
