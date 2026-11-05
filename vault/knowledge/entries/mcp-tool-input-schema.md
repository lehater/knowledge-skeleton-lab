---
id: 01a197c2-3249-76dd-871e-fc9fcbcfb061
type: knowledge
name: "MCP Tool Input Schema"
kind: specification
lifecycle: enriched
review_status: proposed
part_of:
  - "[[knowledge/entries/mcp-tool-definition]]"
sources:
  - "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
---
# MCP Tool Input Schema

MCP Tool Input Schema — JSON Schema допустимых аргументов tools/call.

`inputSchema` — обязательное поле определения MCP-инструмента с JSON Schema входных параметров вызова. Схема задаёт допустимую структуру `arguments` запроса `tools/call`.

Для инструмента без аргументов допускается, например, `{"type":"object","additionalProperties":false}`. В спецификации **2026-07-28** по умолчанию используется JSON Schema 2020-12, если `$schema` не указан.
