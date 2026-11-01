---
id: 01a197e5-8abe-77f5-872c-bf909fa5b8c1
type: knowledge
name: "Docker Published Port"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://docs.docker.com/reference/cli/docker/container/run/"
---
# Docker Published Port

Публикация порта Docker через `-p host_ip:host_port:container_port` связывает порт контейнера с адресом и портом хоста. Без host IP Docker публикует порт на всех интерфейсах по умолчанию, делая его внешне доступным. Привязка к `127.0.0.1` ограничивает публикацию loopback-адресом хоста. `EXPOSE`/`--expose` объявляет порт без публикации на интерфейсах хоста; `-P` публикует все явно объявленные порты на автоматически выбранных портах хоста.
