---
id: 01a197cb-4026-74b9-909f-1d9fee5f7693
type: knowledge
name: "Context Compaction"
kind: mechanism
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/long-horizon-context-techniques]]"
sources:
  - "https://www.anthropic.com/research/effective-context-engineering-for-ai-agents"
  - "https://platform.claude.com/docs/en/build-with-claude/compaction-threshold"
---
# Context Compaction

Context Compaction — сокращение истории взаимодействия путём формирования сводки и продолжения агентной работы с более коротким контекстом. Цель — удержать существенные решения и прогресс, уменьшая объём истории, передаваемой модели.

**Вход:** разросшаяся история сообщений. **Выход:** сжатая сводка для продолжения. Компромисс — риск потери важных деталей при чрезмерном сокращении.
