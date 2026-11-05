---
id: 01a197da-04fd-743c-85c4-4d5947dd0f30
type: knowledge
name: "Deep Agents Sandbox Backend"
kind: component
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/framework-integrated-runtimes]]"
sources:
  - "https://docs.langchain.com/oss/python/deepagents/sandboxes"
---
# Deep Agents Sandbox Backend

Deep Agents Sandbox Backend — абстрактный адаптер sandbox к инструментам Deep Agents.

Sandbox backend в Deep Agents — адаптер изолированной среды к файловым инструментам и инструменту `execute`. Провайдер реализует запуск shell-команды; `BaseSandbox` строит файловые операции поверх него. Результат `execute` содержит объединённый stdout/stderr, код завершения и признак усечения. Наличие `SandboxBackendProtocol` определяет доступность инструмента агенту.
