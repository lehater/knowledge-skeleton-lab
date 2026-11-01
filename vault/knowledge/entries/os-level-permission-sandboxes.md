---
id: 01a196ec-2a78-7f98-9b06-48bffd6282b1
type: knowledge
name: "OS-Level Permission Sandboxes"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://github.com/containers/bubblewrap#readme"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# OS-Level Permission Sandboxes

Песочницы на уровне разрешений ОС ограничивают доступ запускаемого приложения к ресурсам хоста средствами операционной системы. В Linux Bubblewrap позволяет задавать видимые файлы и режимы доступа, отдельные пространства процессов и сети, а также фильтры системных вызовов. Конкретные доступы и границу защиты определяет конфигурация песочницы; один механизм не задаёт всю политику безопасности.
