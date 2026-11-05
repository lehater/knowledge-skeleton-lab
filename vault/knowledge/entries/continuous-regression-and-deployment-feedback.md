---
id: 01a196ec-2a78-7636-818c-f0765c6462d2
type: knowledge
name: "Continuous Regression and Deployment Feedback"
kind: practice
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/verification-evaluation]]"
sources:
  - "https://docs.langchain.com/langsmith/evaluation-concepts"
  - "https://docs.langchain.com/langsmith/compare-experiment-results"
  - "https://docs.langchain.com/langsmith/manage-datasets-in-application"
  - "https://docs.langchain.com/langsmith/test-react-agent-pytest"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Continuous Regression and Deployment Feedback

Регрессионная оценка сравнивает новую версию с прежним поведением на подготовленных примерах. В LangSmith experiment сохраняет результаты конкретной версии на dataset, а сравнение показывает улучшения и ухудшения по отдельным примерам и критериям.

После развёртывания online evaluators оценивают runs или threads; найденные проблемы можно преобразовать в offline-примеры для проверки исправлений. Тестовые assertions задают условия прохождения автоматических проверок, feedback хранит оценки, а deployment-процесс использует эти результаты при решении о выпуске. Canary-анализ уже представлен отдельным Knowledge.
