---
id: 01a1a114-55f5-723f-8d38-d3fa3d7923f2
type: knowledge
name: "Python asyncio.Queue"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/library/asyncio-queue.html"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
---
# Python asyncio.Queue

asyncio.Queue передаёт элементы между asynchronous producers и consumers. put/get могут приостановиться, когда очередь заполнена или пуста; maxsize > 0 ограничивает число элементов, а значение 0 означает отсутствие такого лимита.

Получение элемента не равно завершению обработки: task_done и join учитывают незавершённые работы. Queue не является thread-safe и не предназначена для обмена между произвольными потоками. Ограниченная конфигурация создаёт backpressure, но не гарантирует ограничение памяти самих элементов. Поэтому весь класс Queue не объявляется безусловной реализацией Bounded Asynchronous Queue.
