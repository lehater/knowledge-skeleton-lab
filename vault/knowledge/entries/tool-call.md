---
id: 01a197aa-8736-705e-9686-1644281f4695
type: knowledge
name: "Tool Call"
kind: construct
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/single-agent-inner-loop]]"
sources:
  - "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
  - "https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works"
  - "https://openai.github.io/openai-agents-python/running_agents/"
---
# Tool Call

Tool Call — структурированный запрос модели на вызов доступного инструмента (имя инструмента и аргументы). Исполнение происходит в приложении или на стороне сервиса, а не внутри самой модели.

В MCP вызов инструмента выполняет клиент посредством запроса JSON-RPC `tools/call` с `name` и `arguments`. Это протокольный этап после выбора инструмента; решение модели вызвать инструмент не является само по себе MCP-сообщением.
