---
id: 01a197d2-2236-7578-a88a-cd36a6a59716
type: knowledge
name: "Agent Progress File"
kind: artifact
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/mid-term-session-state-and-cross-run-persistence]]"
sources:
  - "https://www.anthropic.com/research/effective-harnesses-for-long-running-agents"
---
# Agent Progress File

Agent Progress File — файл фиксации состояния работы агента между независимыми сеансами. В эксперименте Anthropic по долгоживущим coding agents использовался `claude-progress.txt` вместе с историей Git и перечнем функций.

**Вход:** описание завершённой работы, оставшихся задач и полезного контекста. **Выход:** записи для следующего сеанса агента, который начинает работу с новым контекстным окном.

Это практический артефакт **передачи прогресса** между сеансами, а не снимок исполняемого процесса и не механизм replay.
