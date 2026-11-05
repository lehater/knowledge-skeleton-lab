---
id: 01a197e5-8bb5-7f8d-acbe-e3f85b177cb9
type: knowledge
name: "E2B Volume"
lifecycle: enriched
review_status: proposed
kind: resource
in_topic:
  - "[[knowledge/entries/e2b-sandbox]]"
sources:
  - "https://docs.e2b.dev/faq/volumes-beta-limitations"
  - "https://docs.e2b.dev/volumes"
  - "https://docs.e2b.dev/volumes/mount"
---
# E2B Volume

E2B Volume — постоянное хранилище, существующее независимо от жизненного цикла песочницы; данные сохраняются после остановки среды. При создании Sandbox `volumeMounts`/`volume_mounts` связывает путь внутри среды с Volume или его именем. Среда читает и пишет данные по mount path; отдельные SDK-операции с томом предназначены для случая, когда он не смонтирован в песочницу. Документация отмечает доступность Volumes в private beta.

В beta отсутствуют read-only mounts; биты прав чтения/записи не обеспечивают разделение Linux-пользователей внутри одной среды. File locking может зависать, поэтому SQLite и операции с `flock`/`fcntl` документация рекомендует выполнять на локальном диске, перенося на том готовые результаты. Mounts фиксируются при создании песочницы; удаление используемого тома может нарушить файловые операции и resume среды.
