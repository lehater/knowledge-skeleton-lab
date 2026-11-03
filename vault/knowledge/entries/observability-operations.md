---
id: 01a196ec-2a78-7154-be0d-f87937ca93a0
type: knowledge
name: "Observability & Operations"
kind: topic
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/harness-engineering]]"
sources:
  - "https://opentelemetry.io/docs/concepts/observability-primer/"
  - "https://sre.google/sre-book/monitoring-distributed-systems/"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Observability & Operations

Наблюдаемость позволяет объяснять поведение работающей системы по её телеметрии. Эксплуатация использует эти данные для обнаружения деградации, диагностики и поддержания уровня сервиса. В harness это связывает зарегистрированные операции агента, модели и инструментов с задержками, ошибками и расходом ресурсов.

Трассы и метрики описывают выполнение. Оценивание качества добавляет критерий успешности результата; управление исполнением принимает решения о продолжении, остановке или повторе. Эти ответственности взаимодействуют, но запись span сама по себе не оценивает ответ и не управляет агентным циклом.
