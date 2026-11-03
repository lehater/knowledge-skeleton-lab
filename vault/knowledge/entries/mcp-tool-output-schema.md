---
id: 01a197c2-3249-7d0e-b9d4-01cbbc51d221
type: knowledge
name: "MCP Tool Output Schema"
kind: specification
lifecycle: enriched
review_status: proposed
part_of:
  - "[[knowledge/entries/mcp-tool-definition]]"
sources:
  - "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
---
# MCP Tool Output Schema

MCP Tool Output Schema — jSON Schema структурированного результата инструмента.

`outputSchema` — необязательное поле определения MCP-инструмента, описывающее структуру результата `structuredContent` в JSON Schema.

Если схема указана, сервер **MUST** возвращать структурированный результат, соответствующий ей; клиенту **SHOULD** проверять соответствие. В версии **2026-07-28** `structuredContent` может быть любым JSON-значением, а не только объектом.
