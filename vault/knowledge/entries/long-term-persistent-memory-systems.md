---
id: 01a196ec-2a78-796f-abc7-c05b60f8d729
type: knowledge
name: "Long-Term Persistent Memory Systems"
kind: component
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/context-memory-management]]"
sources:
  - "https://www.anthropic.com/research/effective-context-engineering-for-ai-agents"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Long-Term Persistent Memory Systems

Long-Term Persistent Memory Systems — подсистема долговременной внешней памяти агента.

Долговременная внешняя память сохраняет информацию за пределами текущего контекстного окна. Агент может записывать заметки, результаты и прогресс в файлы или иное хранилище, а затем выборочно возвращать их в контекст после смены сеанса или сжатия истории.

Внешнее сохранение отличается от нахождения информации в текущем запросе модели.
