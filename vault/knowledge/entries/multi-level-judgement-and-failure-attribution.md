---
id: 01a196ec-2a78-7ddf-85f2-dc5ae93ccf3f
type: knowledge
name: "Multi-Level Judgement and Failure Attribution"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/verification-evaluation]]"
sources:
  - "https://docs.langchain.com/langsmith/evaluate-complex-agent"
  - "https://inspect.aisi.org.uk/scoring-policy.html"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Multi-Level Judgement and Failure Attribution

Многоуровневое оценивание разделяет проверку итогового ответа, траектории инструментальных вызовов и отдельного шага. End-to-end результат показывает успешность задачи, более локальные проверки помогают исследовать, где поведение отклонилось от критерия.

Атрибуция отказа дополнительно различает ошибку проверяемого ответа, сбой выполнения и отсутствие вердикта измерителя. В Inspect неверный ответ учитывается в метрике, exception записывается как sample error, а `Score.unscored()` исключается из численного агрегирования. Поэтому качество следует читать вместе с покрытием оценивания и ошибками.
