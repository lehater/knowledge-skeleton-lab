---
id: 01a197e5-4a0a-7c57-a3c6-27156e286fcd
type: knowledge
name: "E2B Reboot on Resume"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/e2b-sandbox-pause-resume]]"
sources:
  - "https://docs.e2b.dev/sandbox/resume-without-memory"
---
# E2B Reboot on Resume

`connect` с `onResume: "reboot"`/`on_resume="reboot"` запускает приостановленную E2B Sandbox с диска, игнорируя память полного снимка. Сохранённые и сброшенные на диск записи остаются; процессы, кеши и несброшенные записи теряются. Это выбор при возобновлении, тогда как filesystem-only snapshot исключает память уже при сохранении. Внешние соединения приходится восстановить в обоих случаях.

Такое восстановление имеет семантику аварийного включения: приложениям может потребоваться собственное восстановление из журнала. Для сохранения нового состояния после reboot нужно снова приостановить среду.
