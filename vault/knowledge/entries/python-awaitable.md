---
id: 01a1a114-54a6-787b-b41e-36db92149f20
type: knowledge
name: "Python Awaitable"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#awaitable-objects"
  - "https://docs.python.org/3.15/library/asyncio-task.html#awaitables"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
  - "[[knowledge/entries/async-await]]"
---
# Python Awaitable

Awaitable — объект, допустимый в await: coroutine object, asyncio.Task, asyncio.Future или совместимый пользовательский объект. __await__ обычно возвращает итератор протокола ожидания; generator-based coroutines имеют отдельное исключение из этого правила.

Вход — ожидание вычисления, выход — итоговое значение либо исключение. await не создаёт Task автоматически для любой вложенной coroutine и не гарантирует фактической приостановки: результат уже может быть готов. Поддержка конкретного низкоуровневого протокола ожидания зависит от asynchronous framework.
