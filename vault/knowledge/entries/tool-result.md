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
  - "https://openai.github.io/openai-agents-python/agents/#tool-use-behavior"
---
# Tool Result

Tool Result — структурированное представление результата обработки вызова инструмента. В зависимости от протокола и политики выполнения приложение может передать его модели для следующего шага либо использовать как итоговый ответ без нового обращения к модели. В Claude API результат клиентского инструмента передаётся блоком `tool_result` в ответ на `tool_use`.

В MCP результат выполнения `tools/call` содержит `content`, может содержать `structuredContent`, а ошибка выполнения может быть помечена `isError: true`. Это протокольное представление результата, который приложение далее может передать модели.
