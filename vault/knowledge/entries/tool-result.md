---
id: 01a197aa-877b-74d9-b65d-9e639ecc2e9a
type: knowledge
name: "Tool Result"
kind: data_structure
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/single-agent-inner-loop]]"
sources:
  - "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
  - "https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works"
  - "https://openai.github.io/openai-agents-python/running_agents/"
---
# Tool Result

Tool Result — результат выполненного вызова инструмента, возвращаемый в контекст следующего обращения модели. В Claude API результат клиентского инструмента передаётся отдельным блоком `tool_result` после `tool_use`.

В MCP результат выполнения `tools/call` содержит `content`, может содержать `structuredContent`, а ошибка выполнения может быть помечена `isError: true`. Это протокольное представление результата, который приложение далее может передать модели.
