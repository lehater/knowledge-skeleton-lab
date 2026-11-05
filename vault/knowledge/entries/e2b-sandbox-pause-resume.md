---
id: 01a197da-040f-770e-bb02-d4cd23ca8229
type: knowledge
name: "E2B Sandbox Pause and Resume"
kind: mechanism
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/e2b-sandbox]]"
sources:
  - "https://docs.e2b.dev/sandbox/filesystem-only-snapshots"
  - "https://docs.e2b.dev/sandbox/persistence"
---
# E2B Sandbox Pause and Resume

Приостановка E2B Sandbox по умолчанию сохраняет файловую систему и память, включая процессы и загруженные переменные; `connect` возобновляет ту же среду. Приостановленное состояние хранится до явного `kill`, без автоматического срока удаления.

Режим `filesystem` сохраняет только диск: при возобновлении среда загружается заново, процессы и RAM не возвращаются. В обоих режимах внешние клиентские соединения разрываются и требуют повторного подключения. При отказе pause из-за незавершённого предыдущего snapshot среда продолжает работать; сохранение ещё не произошло.
