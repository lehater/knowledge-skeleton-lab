---
id: 01a196ec-2a78-7b95-bf33-8c1299d83b10
type: knowledge
name: "Browser Evaluation Environments"
kind: component
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://github.com/ServiceNow/BrowserGym"
  - "https://github.com/web-arena-x/webarena"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Browser Evaluation Environments

Среды оценки браузерных агентов предоставляют исполняемые веб-задачи, интерфейс действий и наблюдений и механизм проверки результата. В BrowserGym агент взаимодействует со средой через `reset` и `step`; шаг возвращает наблюдение, награду и признаки завершения. WebArena предоставляет самостоятельно развёртываемые сайты и требует восстановить их начальное состояние для повторяемых экспериментов.
