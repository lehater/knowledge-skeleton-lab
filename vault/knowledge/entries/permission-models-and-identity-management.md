---
id: 01a196ec-2a78-7244-a41e-5413331e95fd
type: knowledge
name: "Permission Models and Identity Management"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/governance-security]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
  - "https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization"
  - "https://code.claude.com/docs/en/permissions"
---
# Permission Models and Identity Management

Управление идентичностью устанавливает участников взаимодействия, а модель разрешений определяет доступные им операции и ресурсы. В harness важно различать пользователя, агентное приложение и внешний сервис: предоставление инструменту credentials не означает разрешение на любое действие от имени пользователя.

В HTTP-авторизации MCP 2025-11-25 клиент получает access token для конкретного ресурса, сервер проверяет его audience и полномочия; scopes ограничивают запрашиваемый доступ. Локальные инструменты могут использовать другой механизм: Claude Code применяет правила allow/ask/deny к инструментам и их параметрам. Это разные уровни контроля. Аутентификация и действующий токен не устанавливают сами по себе допустимость конкретной операции; проверка должна соответствовать её ресурсу и контексту.
