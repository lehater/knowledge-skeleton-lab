---
id: 01a196ec-2a78-7aad-9874-0d71be78c12f
type: knowledge
name: "Mid-Term Session State and Cross-Run Persistence"
kind: topic
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/context-memory-management]]"
sources:
  - "https://docs.temporal.io/workflows"
  - "https://openai.github.io/openai-agents-python/sessions/"
  - "https://docs.langchain.com/oss/python/langgraph/persistence"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Mid-Term Session State and Cross-Run Persistence

Сохранение состояния между запусками позволяет продолжать работу агента или оркестратора после завершения вызова, паузы либо перезапуска.

По способу продолжения различаются: **история диалога** (OpenAI Agents SDK Session), **checkpoint состояния потока** (LangGraph Checkpointer), **восстановление управления по журналу событий** (Temporal Workflow Replay) и **файл прогресса**, читаемый следующим сеансом (Anthropic).

Это не один и тот же формат состояния: граница восстановления определяется конкретным механизмом. Долговременная память о фактах между различными потоками — отдельная задача, например LangGraph Store.
