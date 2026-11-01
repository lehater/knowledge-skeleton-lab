---
id: 01a1982d-ece4-7b8e-882b-42d3f2709b7b
type: knowledge
name: "LangSmith Production Dataset Curation"
lifecycle: enriched
review_status: proposed
kind: practice
in_topic:
  - "[[knowledge/entries/continuous-regression-and-deployment-feedback]]"
sources:
  - "https://docs.langchain.com/langsmith/manage-datasets-in-application"
---
# LangSmith Production Dataset Curation

LangSmith позволяет переносить production traces в dataset вручную, из annotation queue либо по automation rule. Фильтры могут выбирать низкие feedback scores; Runs создаёт пример из trace, Threads — из завершившей активность беседы. Эксперт может редактировать reference outputs run-примера перед добавлением.

Так формируется материал для offline-регрессий из найденных production-проблем. Перенос фактического ответа в набор не делает его автоматически правильным эталоном.
