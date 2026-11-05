---
id: 01a1982d-ec5f-7200-a64d-ddd001c621bb
type: knowledge
name: "LangSmith Experiment Comparison"
lifecycle: enriched
review_status: proposed
kind: method
in_topic:
  - "[[knowledge/entries/continuous-regression-and-deployment-feedback]]"
sources:
  - "https://docs.langchain.com/langsmith/compare-experiment-results"
  - "https://docs.langchain.com/langsmith/evaluation-concepts"
---
# LangSmith Experiment Comparison

LangSmith Experiment Comparison — метод сопоставления результатов экспериментов на одном dataset.

LangSmith experiment представляет результаты версии приложения на dataset: ответы, оценки и трассы по примерам. Comparison view сопоставляет эксперименты одного набора с выбранным исходным experiment, выделяя ухудшения и улучшения по feedback keys. Доступны фильтры по ошибкам, latency и metadata и различия структурированных outputs.

Такое сравнение показывает конкретные регрессировавшие примеры, а не только среднюю оценку; статистическую значимость изменения нельзя вывести из одного цветового индикатора.
