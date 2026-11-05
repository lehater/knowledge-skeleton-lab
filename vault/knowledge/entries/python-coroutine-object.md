---
id: 01a18e73-6cf5-7e0c-9c2f-51956999526a
type: knowledge
name: "Python Coroutine Object"
review_status: proposed
kind: program_construct
lifecycle: enriched
sources:
  - "https://docs.python.org/3/library/asyncio-task.html"
  - "https://docs.python.org/3/reference/datamodel.html"
  - "https://docs.python.org/3.15/reference/datamodel.html#coroutine-objects"
  - "https://docs.python.org/3.15/library/asyncio-task.html#coroutines"
realizes:
  - "[[knowledge/entries/coroutine]]"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
  - "[[knowledge/entries/python-functions-and-iteration]]"
  - "[[knowledge/entries/coroutine-suspension]]"
  - "[[knowledge/entries/async-await]]"
specializes:
  - "[[knowledge/entries/python-awaitable]]"
---
# Python Coroutine Object

Coroutine object возникает при вызове async def без yield и представляет приостанавливаемое вычисление. Его выполнение начинается при ожидании или запуске соответствующим механизмом; само создание не планирует работу. Результат — возвращённое значение либо исключение.

Объект сохраняет состояние между приостановками. Task обеспечивает его выполнение в asyncio, но вложенную coroutine можно непосредственно await без отдельной Task. Завершённую native coroutine нельзя повторно await. Async generator отличается от native coroutine и предоставляет протокол асинхронной итерации.
