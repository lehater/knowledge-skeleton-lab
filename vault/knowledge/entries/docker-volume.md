---
id: 01a197e5-8a45-7018-bc5b-da84b0691c48
type: knowledge
name: "Docker Volume"
lifecycle: enriched
review_status: proposed
kind: technology
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://docs.docker.com/engine/storage/volumes/"
---
# Docker Volume

Docker Volume — постоянное хранилище данных, создаваемое и управляемое Docker и подключаемое в файловую систему контейнера. Его содержимое существует независимо от конкретного контейнера и сохраняется после удаления контейнера; writable layer самого контейнера при удалении уничтожается. Том может использоваться несколькими контейнерами, в том числе с разными режимами read-write/read-only.

Монтирование непустого тома скрывает прежние файлы каталога назначения. В пустой том Docker по умолчанию копирует содержимое назначения; `volume-nocopy` отключает это поведение. Удаление тома — отдельная операция; для anonymous volumes режим автоматического удаления контейнера `--rm` также удаляет связанный анонимный том.
