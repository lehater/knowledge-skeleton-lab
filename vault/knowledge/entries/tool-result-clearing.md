---
id: 01a197cb-4046-7ce0-8218-6fd6373efbbc
type: knowledge
name: "Tool Result Clearing"
kind: mechanism
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/long-horizon-context-techniques]]"
sources:
  - "https://platform.claude.com/docs/en/build-with-claude/context-editing"
  - "https://www.anthropic.com/research/effective-context-engineering-for-ai-agents"
---
# Tool Result Clearing

Tool Result Clearing — выборочное удаление устаревших результатов инструментов из активного контекста. В Claude API стратегия `clear_tool_uses_20250919` при достижении порога заменяет старые результаты заполнителями; по умолчанию удаляет только результаты, а опционально — также параметры вызова.

**Вход:** история с объёмными результатами инструментов. **Выход:** сокращённый контекст для модели. **Отличие:** исходная история у клиентского приложения может сохраняться без изменений; это не сводка всего разговора.
