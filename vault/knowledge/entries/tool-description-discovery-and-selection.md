---
id: 01a196ec-2a78-7d15-bda4-e2bec72d67a0
type: knowledge
name: "Tool Description, Discovery, and Selection"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/tool-interface-protocol]]"
sources:
  - "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Tool Description, Discovery, and Selection

Описание инструмента определяет его имя, назначение и контракт параметров; обнаружение позволяет клиенту получить перечень доступных инструментов. В MCP это выполняется с помощью определений Tool и запроса `tools/list`.

**Выбор** инструмента под конкретную задачу зависит от модели и логики приложения. MCP стандартизует описание и обнаружение, но не предписывает единственный алгоритм выбора.
