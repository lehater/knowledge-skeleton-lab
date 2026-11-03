---
id: 01a1a114-54f8-7532-bf6a-04d17b23131c
type: knowledge
name: "Python asyncio.Future"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/library/asyncio-future.html"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
---
# Python asyncio.Future

asyncio.Future хранит состояние ожидаемого результата и соединяет callback API с async/await. Завершение задаёт значение, исключение или отмену; await получает итог, а callbacks получают уведомление. Future привязан к event loop и не является thread-safe.

Его обычно создаёт loop или библиотечный код. Состояние результата не означает самостоятельное выполнение coroutine: эту ответственность добавляет Task. В отличие от concurrent.futures.Future, ожидание выполняется через await; result() у незавершённого asyncio.Future вызывает InvalidStateError.
