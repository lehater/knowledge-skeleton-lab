---
id: 01a1982d-eca6-722e-b4df-2f4bda51a533
type: knowledge
name: "LangSmith Online Evaluation"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/continuous-regression-and-deployment-feedback]]"
sources:
  - "https://docs.langchain.com/langsmith/online-evaluations-llm-as-judge"
  - "https://docs.langchain.com/langsmith/evaluation-concepts"
---
# LangSmith Online Evaluation

Online evaluator применяет критерий к production run или thread. Правило задаёт фильтры и sampling rate; оценка превращается в feedback, связанный с наблюдаемым исполнением. Reference output обычно отсутствует, поэтому выбирают проверяемые без эталона свойства.

Доступны backfill прошлых runs/threads и ограничение расходов. Обработка backfill асинхронна; если последующее webhook-действие требует score, фильтр должен ожидать его наличия, а не полагаться на порядок правил.
