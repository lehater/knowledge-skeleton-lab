---
id: 01a197fa-80fa-7a5e-9cce-5353367d15fd
type: knowledge
name: "LangSmith Thread"
kind: data_structure
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/langsmith-observability]]"
sources:
  - "https://docs.langchain.com/langsmith/observability-concepts"
---
# LangSmith Thread

Thread — последовательность traces многоходовой сессии в LangSmith. Каждый ход, включающий сообщение пользователя и последующие действия агента, записывается отдельным trace; общий `thread_id` в metadata связывает ходы. Thread сохраняет вложенную структуру runs и данные времени.

Trajectory — представление той же сессии как плоского упорядоченного списка human, AI и tool сообщений без повторов и без вложенности runs. Thread удобен для анализа исполнения между ходами, trajectory — для чтения обмена сообщениями.
