---
id: 01a197d2-2236-74b6-bf33-93e57295b290
type: knowledge
name: "LangGraph Store"
kind: construct
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/long-term-persistent-memory-systems]]"
sources:
  - "https://docs.langchain.com/oss/python/langgraph/stores"
  - "https://docs.langchain.com/oss/python/langgraph/persistence"
---
# LangGraph Store

LangGraph Store — интерфейс хранения определяемых приложением данных **вне состояния конкретного потока**. По документации LangGraph Store применяется для долговременной памяти и повторного использования сведений между threads.

**Вход:** данные приложения, например предпочтения или факты. **Результат:** сохранённые записи, доступные для чтения в разных потоках исполнения.

**Отличие от Checkpointer:** Store хранит данные приложения между потоками, а Checkpointer — снимки состояния одного потока. Устойчивость к рестарту зависит от реализации Store; `InMemoryStore` существует только в памяти процесса.
