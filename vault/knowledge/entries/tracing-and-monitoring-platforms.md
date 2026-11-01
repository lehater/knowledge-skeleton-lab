---
id: 01a196ec-2a78-7cbc-8162-0572772592a0
type: knowledge
name: "Tracing and Monitoring Platforms"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/observability-operations]]"
sources:
  - "https://arize.com/docs/phoenix/tracing/llm-traces"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Tracing and Monitoring Platforms

Платформы трассировки и мониторинга принимают телеметрию приложения, сохраняют структуру вызовов и предоставляют её для поиска причин ошибок и задержек. Для LLM-приложений значимы вызовы модели, инструментов и retrieval, их входы/выходы и вложенность. Пример — Phoenix: принимает трассы по OTLP, показывает дерево и временную последовательность операций, исключения и задержки отдельных компонентов.
