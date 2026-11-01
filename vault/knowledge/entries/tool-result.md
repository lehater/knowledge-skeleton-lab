---
id: 01a197aa-877b-74d9-b65d-9e639ecc2e9a
type: knowledge
name: "Tool Result"
kind: construct
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/single-agent-inner-loop]]"
sources:
  - "https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works"
  - "https://openai.github.io/openai-agents-python/running_agents/"
---
# Tool Result

Tool Result — результат выполненного вызова инструмента, возвращаемый в контекст следующего обращения модели. В Claude API результат клиентского инструмента передаётся отдельным блоком `tool_result` после `tool_use`.
