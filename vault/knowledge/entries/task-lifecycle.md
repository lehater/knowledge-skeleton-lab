---
id: 01a18e44-0b74-7c03-9f1e-f47abb87cf06
type: knowledge
name: "Task Lifecycle"
review_status: proposed
kind: model
lifecycle: enriched
sources:
  - "https://kotlinlang.org/docs/coroutines-basics.html"
  - "https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/"
in_topic:
  - "[[knowledge/entries/concurrent-programming]]"
---
# Task Lifecycle

Жизненный цикл задачи описывает переход от создания и возможности запуска через исполнение/ожидание к терминальному исходу. Вход — события запуска, завершения, отказа или отмены; выход — состояние и доступные операции над задачей. Набор состояний зависит от API.

Не каждый контракт имеет отдельное наблюдаемое состояние running. Запрос отмены может предшествовать фактическому завершению либо быть отклонён. Java Future и asyncio.Task различаются моментом признания отмены; переносить один автомат состояний на все языки нельзя.
