---
id: 01a197e5-8afa-710a-9294-caa0e01c0953
type: knowledge
name: "Modal Sandbox Resource Configuration"
lifecycle: enriched
review_status: proposed
kind: specification
in_topic:
  - "[[knowledge/entries/modal-sandbox]]"
sources:
  - "https://modal.com/docs/guide/sandbox-resources"
  - "https://modal.com/docs/guide/resources"
---
# Modal Sandbox Resource Configuration

Modal Sandbox Resource Configuration — контракт ресурсных параметров requests/limits Modal Sandbox.

Modal разделяет requests и limits ресурсов Sandbox. Request гарантирует минимальное количество физических CPU cores и памяти в MiB; среда может использовать больше при свободной мощности хоста. Request сам по себе не является верхним пределом. Пара `(request, limit)` в `cpu` или `memory` задаёт оба значения.

CPU limit вызывает throttling, тогда как hard memory limit завершает контейнер через OOM при попытке превысить память. Ресурсные requests проверяются при создании на допустимый максимум; это проверка планируемости, отличная от ограничения фактического расхода работающего контейнера.
