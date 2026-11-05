---
id: 01a197fa-80bc-78f5-a7ae-0a99697efbac
type: knowledge
name: "LangSmith Run"
kind: data_structure
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/langsmith-observability]]"
sources:
  - "https://docs.langchain.com/langsmith/run-data-format"
  - "https://docs.langchain.com/langsmith/observability-concepts"
---
# LangSmith Run

Run — структурированная запись единицы работы в LangSmith, например `llm`, `tool`, `retriever` или композиции `chain`. Содержит ID, входы/выходы, начало/конец, ошибку, tags и события streaming.

`trace_id` объединяет runs одной операции и равен ID корневого run; `parent_run_id` указывает непосредственного родителя, `dotted_order` задаёт положение и порядок в иерархии. Это контракт записи для API, экспорта и собственного инструментария. Поле `session_id` в этом формате означает tracing project ID, а многоходовую беседу группируют через thread metadata.
