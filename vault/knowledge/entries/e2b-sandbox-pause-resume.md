---
id: 01a197da-040f-770e-bb02-d4cd23ca8229
type: knowledge
name: "E2B Sandbox Pause and Resume"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/e2b-sandbox]]"
sources:
  - "https://docs.e2b.dev/sandbox/persistence"
---
# E2B Sandbox Pause and Resume

Приостановка E2B Sandbox по умолчанию сохраняет файловую систему и память, включая процессы и загруженные переменные; возобновление восстанавливает это состояние. Режим `filesystem` сохраняет только файловую систему и перезагружает среду при возобновлении. Приостановленная среда хранится до явного уничтожения.
