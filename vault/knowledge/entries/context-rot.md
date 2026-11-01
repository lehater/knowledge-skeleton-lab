---
id: 01a197cb-40ab-7973-96ba-2edcfb77e2ae
type: knowledge
name: "Context Rot"
kind: problem
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/context-drift-and-limits]]"
sources:
  - "https://www.trychroma.com/research/context-rot"
  - "https://www.anthropic.com/research/effective-context-engineering-for-ai-agents"
---
# Context Rot

Context Rot — наблюдаемое ухудшение надёжности работы языковой модели с информацией по мере увеличения входного контекста. В исследовании Chroma 2025 года оценены 18 моделей: влияние длины входа зависело от задачи, отвлекающих фрагментов и структуры текста.

Это **эффект качества обработки длинного контекста**, а не переполнение формального лимита токенов и не обязательно потеря состояния агента.
