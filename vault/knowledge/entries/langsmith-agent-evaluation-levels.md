---
id: 01a1982d-eb4d-7149-b212-33afc767dcf6
type: knowledge
name: "LangSmith Agent Evaluation Levels"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/multi-level-judgement-and-failure-attribution]]"
sources:
  - "https://docs.langchain.com/langsmith/evaluate-complex-agent"
---
# LangSmith Agent Evaluation Levels

В руководстве LangSmith различаются final response, trajectory и single step evaluation. Первое проверяет ответ на запрос, второе — путь инструментальных вызовов, третье — выбранное действие в заданном контексте. Для локальной проверки можно подать конкретное состояние напрямую компоненту, вместо повторения всего сценария.

Например, правильность маршрутизации в refund path проверяют отдельно от итогового ответа. Это локализует наблюдаемое отклонение, но само по себе не устанавливает единственную первопричину.
