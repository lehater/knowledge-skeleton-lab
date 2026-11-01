---
id: 01a197c2-3249-7409-b57e-b6dc0df6e494
type: knowledge
name: "MCP Tool Definition"
kind: construct
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/tool-description-discovery-and-selection]]"
sources:
  - "https://modelcontextprotocol.io/specification/2026-07-28/server/tools"
---
# MCP Tool Definition

Определение инструмента в MCP описывает доступную для вызова операцию: уникальное в пределах сервера `name`, человекочитаемое `description`, схему параметров `inputSchema`, а также необязательные `title`, `outputSchema`, `annotations` и `icons`.

Сервер возвращает определения доступных инструментов в ответе `tools/list`. Определение описывает интерфейс инструмента, но не саму реализацию его действий.
