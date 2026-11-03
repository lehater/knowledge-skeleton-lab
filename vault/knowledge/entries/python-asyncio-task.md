---
id: 01a18e73-6cf5-778f-8eb4-934600af6a12
type: knowledge
name: "Python asyncio.Task"
review_status: proposed
kind: program_construct
lifecycle: enriched
sources:
  - "https://docs.python.org/3/library/asyncio-task.html"
  - "https://docs.python.org/3.15/library/asyncio-task.html#task-object"
  - "https://docs.python.org/3.15/library/asyncio-task.html#eager-task-factory"
realizes:
  - "[[knowledge/entries/asynchronous-task]]"
executes:
  - "[[knowledge/entries/python-coroutine-object]]"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
  - "[[knowledge/entries/cooperative-task-scheduling]]"
  - "[[knowledge/entries/task-cancellation]]"
  - "[[knowledge/entries/task-lifecycle]]"
specializes:
  - "[[knowledge/entries/python-asyncio-future]]"
---
# Python asyncio.Task

Task выполняет coroutine и хранит её результат, исключение или состояние отмены. Ожидание незавершённого Future приостанавливает coroutine; готовность позволяет продолжить её. Task наследует API Future за исключением внешнего set_result/set_exception и не является thread-safe.

cancel запрашивает доставку CancelledError; coroutine может его перехватить, поэтому запрос не равен завершённой отмене. Планирование кооперативное. Eager execution может выполнить coroutine синхронно при создании Task и завершиться без постановки в очередь loop. Приложению нужно сохранять сильную ссылку на выполняемую Task или использовать TaskGroup.
