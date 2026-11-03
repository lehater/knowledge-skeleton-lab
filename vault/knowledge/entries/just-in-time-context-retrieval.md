---
id: 01a197cb-406c-7169-9aef-6d3d0191daef
type: knowledge
name: "Just-in-Time Context Retrieval"
kind: solution_pattern
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/context-memory-management]]"
sources:
  - "https://www.anthropic.com/research/effective-context-engineering-for-ai-agents"
---
# Just-in-Time Context Retrieval

Just-in-Time Context Retrieval — загрузка информации инструментами только в момент возникновения потребности, вместо предварительного помещения всего материала в контекст. Агент может хранить лёгкие указатели — пути файлов, поисковые запросы, ссылки — и обращаться по ним по мере исследования.

**Вход:** внешние источники и указатели. **Выход:** выбранные фрагменты рабочего контекста. **Компромисс:** дополнительное время на поиск и возможные неэффективные вызовы инструментов.
