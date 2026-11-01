---
id: 01a197d2-2235-766c-a053-ef19d876d063
type: knowledge
name: "LangGraph Checkpointer"
kind: construct
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/mid-term-session-state-and-cross-run-persistence]]"
sources:
  - "https://docs.langchain.com/oss/python/langgraph/checkpointers"
  - "https://docs.langchain.com/oss/python/langgraph/persistence"
---
# LangGraph Checkpointer

LangGraph Checkpointer — компонент сохранения состояния графа в виде **checkpoints** для отдельного `thread_id`.

**Вход:** состояние потока при исполнении графа. **Результат:** сохранённые состояния, позволяющие продолжить выполнение, исследовать историю состояний и использовать interrupt/resume.

Постоянство между перезапусками зависит от backend: `InMemorySaver` хранит данные только в оперативной памяти; для сохранения после рестарта нужен устойчивый backend, например SQLite или PostgreSQL. Checkpointer не является общим межпоточным хранилищем фактов.
