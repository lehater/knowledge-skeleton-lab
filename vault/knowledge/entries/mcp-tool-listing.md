---
id: 01a197c2-3249-767a-879e-c86d409328b1
type: knowledge
name: "MCP Tool Listing (tools/list)"
kind: mechanism
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/tool-description-discovery-and-selection]]"
sources:
  - "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
---
# MCP Tool Listing (tools/list)

`tools/list` — запрос MCP-клиента к серверу для получения доступных инструментов и их определений. Ответ содержит список `tools`; для больших списков предусмотрена пагинация через `cursor` / `nextCursor`.

В версии **2026-07-28** список может зависеть от авторизации запроса, а серверу рекомендуется выдавать инструменты в детерминированном порядке. Это механизм **обнаружения**; выбор конкретного инструмента для задачи выполняется вне определения метода `tools/list`.
