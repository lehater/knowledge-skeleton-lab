---
id: 01a196ec-2a78-76dd-9852-cc8a67e2d7ea
type: knowledge
name: "Scalability and Session Management"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/tool-interface-protocol]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
  - "https://modelcontextprotocol.io/specification/2025-11-25/basic/transports"
  - "https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http"
---
# Scalability and Session Management

Масштабирование инструментального обмена требует разделять состояние приложения, отдельный запрос и транспортное соединение. Эта подтема отвечает за обслуживание нескольких клиентов, принадлежность состояния, завершение запросов и поведение при разрыве связи; транспортная сессия не равнозначна истории агента или восстановлению его задачи.

В MCP 2025-11-25 Streamable HTTP сервер мог выдавать `Mcp-Session-Id`; клиент передавал его в последующих запросах, а завершение сессии использовало DELETE. В редакции 2026-07-28 каждый запрос отправляется отдельным POST с JSON-ответом или собственным SSE-потоком; транспортные session IDs, GET/DELETE и возобновление через `Last-Event-ID` исключены. Закрытие SSE означает отмену соответствующего запроса. Поэтому маршрутизацию и восстановление проектируют под конкретную версию протокола, а сохранение долгоживущего состояния задачи обеспечивают отдельно.
