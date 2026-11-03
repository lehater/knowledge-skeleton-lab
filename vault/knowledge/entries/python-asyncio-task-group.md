---
id: 01a18e44-0c80-72ef-a9ba-f41996c944cd
type: knowledge
name: "Python asyncio.TaskGroup"
review_status: proposed
kind: program_construct
lifecycle: enriched
sources:
  - "https://docs.python.org/3/library/asyncio-task.html"
  - "https://docs.python.org/3.15/library/asyncio-task.html#task-groups"
  - "https://docs.python.org/3.15/reference/datamodel.html#asynchronous-context-managers"
realizes:
  - "[[knowledge/entries/structured-concurrency]]"
manages:
  - "[[knowledge/entries/python-asyncio-task]]"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
  - "[[knowledge/entries/task-cancellation]]"
specializes:
  - "[[knowledge/entries/python-async-context-manager]]"
---
# Python asyncio.TaskGroup

TaskGroup — asynchronous context manager для создания и совместного завершения asyncio Tasks. Он удерживает ссылки на созданные задачи и при выходе ожидает их завершения, задавая структурированную область жизни конкурентных работ.

При отказе задачи, кроме обычной отмены, группа отменяет остальные и собирает ошибки в ExceptionGroup/BaseExceptionGroup; KeyboardInterrupt и SystemExit имеют особую обработку. Отмена требует корректного поведения coroutine: подавление CancelledError может нарушить протокол. Пустая группа допустима. Группа управляет жизненным циклом своих задач, а исполняет их event loop. TaskGroup доступен с Python 3.11.
