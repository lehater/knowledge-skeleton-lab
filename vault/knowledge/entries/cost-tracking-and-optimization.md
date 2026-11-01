---
id: 01a196ec-2a78-71a0-a09b-3ee31eaffbc2
type: knowledge
name: "Cost Tracking and Optimization"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/observability-operations]]"
sources:
  - "https://langfuse.com/docs/observability/features/token-and-cost-tracking"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Cost Tracking and Optimization

Учёт связывает usage вызовов модели с денежными затратами и агрегирует их по моделям, пользователям и сценариям для поиска источников расходов. В Langfuse usage и USD cost — отдельные данные; при вычислении затрат нужны количества по типам и соответствующие цены. Эти данные поддерживают решения об оптимизации, но сами по себе её не выполняют.
