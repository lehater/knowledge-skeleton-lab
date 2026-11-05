---
id: 01a197fa-d888-7917-a1f0-c2d0d5623e43
type: knowledge
name: "OpenTelemetry GenAI Semantic Conventions"
kind: specification
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/opentelemetry]]"
  - "[[knowledge/entries/unified-observability]]"
sources:
  - "https://github.com/open-telemetry/semantic-conventions-genai/blob/244465e94b9d7167fa5ed5c31a4b2b49ab6ddee5/docs/gen-ai/README.md"
  - "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
---
# OpenTelemetry GenAI Semantic Conventions

Соглашения об именах и содержании телеметрии операций генеративного AI: inference, agents, tools, embeddings и взаимодействий через MCP. Они дополняют общую модель OpenTelemetry специализированными spans, metrics, events и атрибутами.

Описанная редакция отдельного репозитория `semantic-conventions-genai`, коммит `244465e`, имеет статус **Development**. Это изменяемые соглашения, а не стабильный контракт всех инструментаций. Старые страницы `semconv/gen-ai` объявлены перенесёнными; при интеграции необходимо сопоставить поддерживаемую редакцию SDK с используемыми именами. Opt-in для записи содержимого описан отдельно от версии схемы.
