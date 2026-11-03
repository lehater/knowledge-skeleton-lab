---
id: 01a197e5-4985-7529-93f0-ad1da3c05c60
type: knowledge
name: "E2B Stream Connection"
kind: resource
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/e2b-sandbox]]"
sources:
  - "https://docs.e2b.dev/faq/sandbox-lifetime"
---
# E2B Stream Connection

E2B Stream Connection — длительное клиентское соединение с операцией E2B.

Stream соединяет клиент с длительной операцией E2B, например exec, watch или WebSocket. SDK использует keepalive, однако непрерывность отдельного соединения не гарантируется. Разрыв stream не равен окончанию жизни Sandbox: клиент переподключается, пока среда продолжает работать. Непрерывное время работы среды, хранение paused state и жизнь отдельного соединения ограничиваются раздельно.
