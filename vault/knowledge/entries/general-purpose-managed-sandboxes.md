---
id: 01a196ec-2a78-79ac-92fd-ee9815708387
type: knowledge
name: "General-Purpose Managed Sandboxes"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://modal.com/docs/guide/sandboxes"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# General-Purpose Managed Sandboxes

Управляемые песочницы предоставляют программно создаваемую среду исполнения недоверенного кода, жизненным циклом которой управляет клиент через API провайдера. В Modal клиент создаёт Sandbox, запускает команды через `exec`, читает вывод процесса и завершает среду через `terminate`; выполнение не ограничено одним языком.
