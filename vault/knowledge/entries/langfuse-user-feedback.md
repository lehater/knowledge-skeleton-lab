---
id: 01a197fa-8045-7efb-92c2-2538617bcef5
type: knowledge
name: "Langfuse User Feedback"
lifecycle: enriched
review_status: proposed
part_of:
  - "[[knowledge/entries/langfuse]]"
sources:
  - "https://langfuse.com/docs/observability/features/user-feedback"
---
# Langfuse User Feedback

Langfuse сохраняет пользовательскую обратную связь как scores, связанные с trace. Backend передаёт trace ID интерфейсу; интерфейс или сервер отправляет имя критерия, значение и необязательный комментарий. Для Browser SDK документация предусматривает отдельный ключ с правом только на приём scores.

Feedback позволяет искать низко оценённые ответы и передавать примеры в последующую оценку. Явная оценка пользователем и выведенный из поведения сигнал имеют разные основания: повтор запроса или копирование ответа требуют интерпретации.
