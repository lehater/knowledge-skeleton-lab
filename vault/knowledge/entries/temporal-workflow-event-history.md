---
id: 01a197d2-2236-77e0-919b-42ff7bd876c3
type: knowledge
name: "Temporal Workflow Event History"
kind: artifact
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/mid-term-session-state-and-cross-run-persistence]]"
sources:
  - "https://docs.temporal.io/workflows"
---
# Temporal Workflow Event History

Event History в Temporal — упорядоченный журнал событий исполнения Workflow: запланированные действия, результаты Activities, таймеры и внешние сигналы.

**Вход:** события, возникающие при выполнении Workflow. **Результат:** долговечная история, по которой Temporal восстанавливает состояние Workflow после остановки.

Это журнал событий **оркестратора**, а не история сообщений языковой модели.
