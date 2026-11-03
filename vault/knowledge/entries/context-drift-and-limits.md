---
id: 01a196ec-2a78-7042-ad6a-f7d88fbdef11
type: knowledge
name: "Context Drift and Limits"
kind: topic
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/context-memory-management]]"
sources:
  - "https://www.anthropic.com/research/effective-context-engineering-for-ai-agents"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Context Drift and Limits

Context Drift and Limits — область изучения ограничений контекста агента: конечной ёмкости окна модели и ухудшения качества поиска или использования информации при увеличении контекста.

Даже пока формальный предел контекстного окна не достигнут, увеличение его объёма может усложнять поиск нужной информации и удержание фокуса. Исследования длинного контекста описывают ухудшение точности при росте входных токенов и наличии отвлекающих фрагментов.

Здесь зафиксировано ограничение качества обработки контекста; **Context Rot** выделен отдельным Knowledge.
