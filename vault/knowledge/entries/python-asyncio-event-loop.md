---
id: 01a18e73-6cf5-7c42-99ea-18b32afd9c45
type: knowledge
name: "Python asyncio Event Loop"
review_status: proposed
kind: mechanism
lifecycle: enriched
sources:
  - "https://docs.python.org/3/library/asyncio-eventloop.html"
  - "https://docs.python.org/3/library/asyncio-task.html"
  - "https://docs.python.org/3.15/library/asyncio-eventloop.html"
  - "https://docs.python.org/3.15/library/asyncio-task.html#task-object"
  - "https://docs.python.org/3.15/library/asyncio-task.html#eager-task-factory"
realizes:
  - "[[knowledge/entries/event-loop]]"
schedules:
  - "[[knowledge/entries/python-asyncio-task]]"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
---
# Python asyncio Event Loop

Event loop организует выполнение asyncio Tasks и callbacks, обработку таймеров и I/O. Вход — готовые к продолжению работы и события, выход — вызовы обработчиков и продвижение вычислений. В одном потоке loop выполняет одну Task за раз; ожидание позволяет обслуживать другие работы.

Блокирующий код задерживает остальные работы этого loop. Связь schedules описывает ответственность планировщика: eager Task, завершившаяся синхронно, может вообще не попасть в очередь. Работа с loop обычно скрыта за asyncio.run/Runner; выбор реализации и доступные I/O операции зависят от платформы.
