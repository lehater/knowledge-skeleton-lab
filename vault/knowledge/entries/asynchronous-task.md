---
id: 01a18e44-0a93-7030-96bf-b0968ae2a18b
type: knowledge
name: "Asynchronous Task"
review_status: proposed
kind: process
lifecycle: enriched
sources:
  - "https://docs.python.org/3/library/asyncio-task.html"
  - "https://kotlinlang.org/docs/coroutines-basics.html"
  - "https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/"
in_topic:
  - "[[knowledge/entries/asynchronous-programming]]"
  - "[[knowledge/entries/task-lifecycle]]"
---
# Asynchronous Task

Asynchronous Task — тип управляемого асинхронного исполнения работы.

Асинхронная задача — управляемая единица работы, чьё продвижение и завершение могут быть отделены от места запуска. Вход — вычисление и контекст исполнения; выход — состояние завершения, результат или отказ. Handles могут предоставлять ожидание и запрос отмены; конкретный контракт определяет доступные состояния.

asyncio.Task добавляет исполнение корутины к Future-подобному результату. В других API Task, Job и submitted work разделяют эти обязанности иначе. Объект, представляющий результат, сам по себе не является универсальным исполнителем задачи.
