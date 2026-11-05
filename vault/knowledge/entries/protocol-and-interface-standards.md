---
id: 01a196ec-2a78-7a27-9b34-e8cf943319bd
type: knowledge
name: "Protocol and Interface Standards"
kind: topic
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/tool-interface-protocol]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
  - "https://modelcontextprotocol.io/specification/2026-07-28/basic/transports"
  - "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
---
# Protocol and Interface Standards

Стандарты протоколов и интерфейсов задают совместимый обмен между агентным приложением и поставщиком возможностей: формат сообщений, методы, метаданные, схемы аргументов, результатов и ошибок. Они позволяют заменить конкретное подключение без переопределения смысла каждой операции.

В MCP сообщения кодируются JSON-RPC; transport binding задаёт доставку через stdio или Streamable HTTP, а методы `tools/list` и `tools/call` — обнаружение и вызов инструментов. Определение Tool содержит имя и `inputSchema`, может задавать `outputSchema`. Транспорт и контракт инструмента относятся к разным уровням: успешная доставка не доказывает корректность бизнес-результата. При интеграции необходимо учитывать редакцию спецификации; стандарт обмена не предписывает алгоритм выбора инструмента или оркестрацию задачи.
