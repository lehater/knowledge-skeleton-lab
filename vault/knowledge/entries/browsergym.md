---
id: 01a197da-288c-75fa-ad54-b5bb9f25702b
type: knowledge
name: "BrowserGym"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/browser-evaluation-environments]]"
sources:
  - "https://github.com/ServiceNow/BrowserGym"
---
# BrowserGym

Расширяемая исследовательская среда для веб-агентов с интерфейсом Gymnasium. Агент получает наблюдение после `reset`, передаёт действие в `step` и получает новое наблюдение, награду и признаки завершения. Через интеграции среда предоставляет задачи нескольких бенчмарков, включая WebArena; новые задачи определяются наследованием `AbstractBrowserTask`.
