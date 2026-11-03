---
id: 01a1a114-5553-7a6a-bec1-303ecffb75ed
type: knowledge
name: "Python Async Context Manager"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#asynchronous-context-managers"
  - "https://docs.python.org/3.15/reference/compound_stmts.html#the-async-with-statement"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
  - "[[knowledge/entries/python-exceptions-and-resources]]"
  - "[[knowledge/entries/resource-management]]"
---
# Python Async Context Manager

Async context manager определяет awaitable __aenter__ и __aexit__ для входа и выхода с возможностью приостановки. async with ожидает вход, исполняет блок и после успешного входа ожидает завершение выхода, передавая сведения об исключении.

Вход — объект менеджера и контекст выполнения, выход — связанное значение и завершение контекста. Он подходит для ресурсов, чья инициализация или очистка требует asynchronous I/O. Это отдельный протокол от синхронного __enter__/__exit__; объект может реализовать один или оба. TaskGroup — конкретный вид async context manager.
