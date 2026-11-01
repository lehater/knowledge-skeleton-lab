---
id: 01a197cb-4089-7c22-9f99-3f9ebc61f5dc
type: knowledge
name: "Structured Agent Note-Taking"
kind: practice
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/long-horizon-context-techniques]]"
sources:
  - "https://www.anthropic.com/research/effective-context-engineering-for-ai-agents"
---
# Structured Agent Note-Taking

Structured Agent Note-Taking — ведение агентом заметок в постоянном внешнем хранилище, за пределами контекстного окна, с последующим чтением этих заметок при необходимости. Подход помогает сохранять цели, прогресс, зависимости и решения после сброса или сокращения активного контекста.

**Вход:** существенные факты и текущий прогресс. **Выход:** долговечные заметки, которые можно загрузить обратно в модель. Пример — файл `NOTES.md` или список задач.
