---
id: 01a197e5-8a0d-788f-9114-f02073c9d9b9
type: knowledge
name: "Docker Bind Mount"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://docs.docker.com/engine/storage/bind-mounts/"
  - "https://docs.docker.com/reference/cli/docker/container/run/"
---
# Docker Bind Mount

Bind mount Docker отображает файл или каталог хоста Docker daemon в контейнер. По умолчанию контейнер может изменять или удалять эти данные хоста; `readonly`/`ro` запрещает запись через конкретное монтирование. Если каталог назначения уже содержал файлы, они скрываются смонтированным содержимым.

Права bind mount и права корневой файловой системы задаются отдельно: `--read-only` делает root filesystem контейнера доступной для чтения, сохраняя возможность записи в специально подключённые writable mounts. Read-only bind mount сам по себе не делает всю root filesystem неизменяемой.
