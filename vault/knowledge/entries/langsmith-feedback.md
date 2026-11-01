---
id: 01a197fa-8179-75fa-8b41-284402244ee4
type: knowledge
name: "LangSmith Feedback"
lifecycle: enriched
review_status: proposed
part_of:
  - "[[knowledge/entries/langsmith-observability]]"
sources:
  - "https://docs.langchain.com/langsmith/feedback-data-format"
---
# LangSmith Feedback

Feedback — запись критерия и оценки для trace либо промежуточного run в LangSmith. Контракт включает собственный ID, `run_id`, `session_id` tracing project, `key`, числовой score или категориальное value, комментарий, сведения об источнике и необязательную correction.

Feedback может поступить из приложения, UI или evaluator и связывает сигнал качества с конкретным шагом исполнения. Он хранит результат оценки; метод получения этого результата относится к отдельной системе evaluation.
