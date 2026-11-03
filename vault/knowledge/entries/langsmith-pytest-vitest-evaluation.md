---
id: 01a1982d-ed25-7ca0-8d3e-b051c837a978
type: knowledge
name: "LangSmith Pytest and Vitest Evaluation"
lifecycle: enriched
review_status: proposed
kind: software
in_topic:
  - "[[knowledge/entries/continuous-regression-and-deployment-feedback]]"
sources:
  - "https://docs.langchain.com/langsmith/test-react-agent-pytest"
---
# LangSmith Pytest and Vitest Evaluation

LangSmith Pytest and Vitest Evaluation — программные интеграции LangSmith с Pytest/Vitest.

Интеграции LangSmith с Pytest/Vitest совмещают assertions тестового runner и запись inputs, reference outputs, outputs и feedback. Тест может проверять обязательный tool call, допустимую ошибку численного ответа или вердикт judge.

Логирование feedback обеспечивает анализ, а assertion задаёт условие прохождения теста. В примере judge-вызов трассируется отдельно от агента через `trace_feedback`/`wrapEvaluator`. Интеграция позволяет включать проверки в обычный запуск тестов; решение о блокировке релиза задаёт pipeline.
