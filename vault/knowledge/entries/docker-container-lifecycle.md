---
id: 01a197e5-4b6d-7fbb-a65d-1912279e0e8b
type: knowledge
name: "Docker Container Lifecycle"
kind: model
lifecycle: enriched
review_status: proposed
sources:
  - "https://docs.docker.com/reference/cli/docker/container/create/"
  - "https://docs.docker.com/reference/cli/docker/container/start/"
  - "https://docs.docker.com/reference/cli/docker/container/stop/"
  - "https://docs.docker.com/reference/cli/docker/container/kill/"
  - "https://docs.docker.com/reference/cli/docker/container/rm/"
---
# Docker Container Lifecycle

Жизненный цикл Docker-контейнера разделяет создание, исполнение и удаление. `docker create` создаёт записываемый слой над образом и конфигурацию со статусом Created, без запуска процесса; `docker start` запускает созданный или остановленный контейнер.

`docker stop` посылает главному процессу сигнал остановки (по умолчанию SIGTERM), ждёт grace period и затем при необходимости посылает SIGKILL. `docker kill` сразу посылает указанный сигнал, по умолчанию SIGKILL; пользовательский сигнал может и не завершать процесс. `docker rm` удаляет объект контейнера; `--force` предварительно посылает SIGKILL.

Остановка исполнения и удаление объекта — разные операции. Параметр `rm --volumes` удаляет анонимные тома, но сохраняет именованные.
