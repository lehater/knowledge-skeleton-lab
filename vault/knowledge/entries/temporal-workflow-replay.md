---
id: 01a197d2-2236-74d0-89d6-1097be8e150f
type: knowledge
name: "Temporal Workflow Replay"
kind: mechanism
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/mid-term-session-state-and-cross-run-persistence]]"
sources:
  - "https://docs.temporal.io/workflows"
---
# Temporal Workflow Replay

Workflow Replay в Temporal повторно выполняет код Workflow от начала, используя сохранённый Event History для восстановления состояния до точки остановки.

**Вход:** код Workflow и его Event History. **Результат:** восстановленное состояние управления исполнением.

Код Workflow должен принимать детерминированные решения при воспроизведении истории; результаты завершённых Activities повторно используются из истории, а не вычисляются заново. Temporal Replay отличается от воспроизведения истории сообщений для следующего запроса к LLM.
