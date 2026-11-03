---
id: 01a197c2-324a-7122-9c81-0304f0d2bf8c
type: knowledge
name: "MCP Tool List Changed Notification"
kind: data_structure
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/tool-description-discovery-and-selection]]"
sources:
  - "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
---
# MCP Tool List Changed Notification

`notifications/tools/list_changed` — уведомление MCP-сервера об изменении перечня доступных инструментов.

В редакции **2026-07-28** сервер с возможностью `tools.listChanged` должен рекомендательно (SHOULD) отправлять уведомление клиентам, открывшим поток `subscriptions/listen` с `toolsListChanged: true`. Уведомление сообщает о смене списка, не заменяет повторный `tools/list`.
