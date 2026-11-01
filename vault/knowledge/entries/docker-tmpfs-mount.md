---
id: 01a197e5-8a80-7a0f-a087-8bc181906c1c
type: knowledge
name: "Docker tmpfs Mount"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://docs.docker.com/engine/storage/tmpfs/"
---
# Docker tmpfs Mount

Docker tmpfs mount предоставляет Linux-контейнеру временную файловую систему в памяти вне writable layer. После остановки контейнера mount удаляется и файлы не сохраняются. Использование tmpfs учитывается в memory cgroup limit контейнера: большой `tmpfs-size` не добавляет RAM сверх лимита и заполнение может вызвать OOM. Данные tmpfs могут попасть в swap на диск, поэтому временный mount сам по себе не гарантирует отсутствие записи чувствительных данных на носитель.
