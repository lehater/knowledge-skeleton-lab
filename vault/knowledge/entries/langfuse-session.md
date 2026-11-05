---
id: 01a197fa-7f8c-7f34-8f63-e04ea02931b6
type: knowledge
name: "Langfuse Session"
kind: data_structure
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/langfuse]]"
sources:
  - "https://langfuse.com/docs/observability/features/sessions"
---
# Langfuse Session

Session группирует traces многоходового взаимодействия в Langfuse для просмотра истории, анализа и добавления scores. Приложение передаёт общий `sessionId` и распространяет его на дочерние observations; совпадение ID объединяет также их traces.

ID должен быть US-ASCII строкой короче 200 символов; слишком длинный ID отбрасывается. Назначение идентификатора — корреляция записей наблюдения, поэтому приложение отвечает за его согласованность между ходами.
