---
id: 01a196ec-2a78-731e-87af-1760a57218b3
type: knowledge
name: "Tool Interface & Protocol"
kind: topic
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/harness-engineering]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
  - "https://developers.openai.com/api/docs/guides/function-calling"
  - "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
---
# Tool Interface & Protocol

Слой интерфейсов инструментов связывает решения модели с внешними данными и действиями. Его ответственность — представить доступную возможность, передать корректно оформленный вызов исполнителю и вернуть результат, связанный с исходным запросом. В OpenAI function calling приложение предоставляет схему функции, получает имя и аргументы вызова, исполняет свой код и передаёт модели output с идентификатором вызова.

Основные механизмы — описание и обнаружение инструментов, контракты параметров и результатов, сообщения об ошибках и правила обмена между клиентом и сервером. MCP стандартизует `tools/list` и `tools/call`; конкретный backend выполняет операцию. Контракт не определяет стратегию агента и не заменяет авторизацию: доступность описания инструмента и право совершить действие — разные вопросы.
