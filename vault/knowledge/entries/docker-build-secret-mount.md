---
id: 01a197e4-f772-7660-98a7-b6f3263c05d9
type: knowledge
name: "Docker Build Secret Mount"
kind: mechanism
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://docs.docker.com/build/building/secrets/"
---
# Docker Build Secret Mount

Временное предоставление секрета из build-клиента внутри контейнера сборки на время инструкции. Клиент передаёт секрет через `docker build --secret`, Dockerfile использует `RUN --mount=type=secret`. Источником служит файл или переменная окружения клиента; внутри сборки секрет предоставляется файлом, переменной или обоими способами. Docker рекомендует этот механизм вместо `ARG` и `ENV`, сохраняющихся в конечном образе. Временная доступность mount не является обещанием безопасного стирания копий, которые могла создать сама команда.
