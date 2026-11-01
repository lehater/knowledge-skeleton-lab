---
id: 01a196ec-2a78-7c8c-ac1d-e9a88d6d30c3
type: knowledge
name: "Framework-Integrated Runtimes"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://docs.langchain.com/oss/python/deepagents/sandboxes"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Framework-Integrated Runtimes

Интегрированные с агентным фреймворком среды исполнения подключают операции файлов и запуска команд к инструментам агента. В Deep Agents sandbox backend задаёт среду исполнения и добавляет `execute` к файловым инструментам. Фреймворк использует контракт backend, а изоляцию обеспечивает выбранная песочница провайдера.
