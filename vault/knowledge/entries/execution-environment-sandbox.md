---
id: 01a196ec-2a78-79d8-8c62-b34a5e1b0a24
type: knowledge
name: "Execution Environment & Sandbox"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/harness-engineering]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=11"
  - "https://csrc.nist.gov/glossary/term/sandbox"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Execution Environment & Sandbox

В таксономии ETCLOVG это слой инфраструктуры, в котором физически исполняются действия агента: команды, код и взаимодействия с приложениями. Sandbox задаёт контролируемую область доступа исполняемого ПО к ресурсам.

Среда предоставляет инструменты и состояние для выполнения задачи; механизм изоляции ограничивает доступ, а возможность сброса состояния поддерживает повторяемое выполнение. Наличие runtime, браузерного интерфейса или управляемого сервиса само по себе не определяет конкретную границу изоляции: её задаёт выбранная реализация и конфигурация.
