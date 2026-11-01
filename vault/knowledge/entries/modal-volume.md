---
id: 01a197e5-8b79-74d9-a11d-62687b251b0e
type: knowledge
name: "Modal Volume"
lifecycle: enriched
review_status: proposed
kind: technology
in_topic:
  - "[[knowledge/entries/modal-sandbox]]"
sources:
  - "https://modal.com/docs/guide/sandbox-files"
---
# Modal Volume

Modal Volume подключается к Sandbox через отображение пути в `volumes` и позволяет повторно использовать данные между средами. Изменения сохраняются фоновыми commits и завершающим commit при termination; в Volumes v2 команда `sync` на mountpoint явно фиксирует данные и метаданные. Для чтения изменений, поступивших после первоначального монтирования, Sandbox явно вызывает `reload_volumes()`. Параметр mount `sub_path` ограничивает видимую среде часть тома выбранным подкаталогом.
