---
id: 01a1a113-e258-7628-b656-531a4e9afb59
type: knowledge
name: "Python Concurrency"
lifecycle: enriched
review_status: proposed
kind: topic
sources:
  - "https://docs.python.org/3.15/library/concurrency.html"
  - "https://docs.python.org/3.15/library/asyncio-task.html"
  - "https://docs.python.org/3.15/library/threading.html"
  - "https://docs.python.org/3.15/library/multiprocessing.html"
  - "https://docs.python.org/3.15/library/concurrent.futures.html"
in_topic:
  - "[[knowledge/entries/python]]"
  - "[[knowledge/entries/concurrency]]"
  - "[[knowledge/entries/concurrent-programming]]"
---
# Python Concurrency

Средства Python для перекрывающихся вычислений и ожиданий включают threading, multiprocessing, concurrent.futures и asyncio. Потоки разделяют память процесса, процессы имеют отдельные пространства исполнения, а asyncio кооперативно выполняет задачи вокруг event loop.

Вход — независимые работы, события и данные; выход — результаты, исключения и состояния завершения. Выбор механизма зависит от I/O, CPU, стоимости передачи данных и синхронизации. Конкурентность не гарантирует параллелизм; возможность параллельного Python-кода в потоках зависит от реализации и GIL. Отмена и ожидание завершения входят в контракт конкретного механизма.

Основные понятия: [[knowledge/entries/python-awaitable|Python Awaitable]], [[knowledge/entries/python-coroutine-object|Python Coroutine Object]], [[knowledge/entries/python-asyncio-future|Python asyncio.Future]], [[knowledge/entries/python-asyncio-task|Python asyncio.Task]], [[knowledge/entries/python-asyncio-event-loop|Python asyncio Event Loop]], [[knowledge/entries/python-asyncio-task-group|Python asyncio.TaskGroup]], [[knowledge/entries/python-async-context-manager|Python Async Context Manager]], [[knowledge/entries/python-asyncio-runner|Python asyncio.Runner]], [[knowledge/entries/python-asyncio-queue|Python asyncio.Queue]], [[knowledge/entries/python-threading|Python threading]], [[knowledge/entries/python-multiprocessing|Python multiprocessing]], [[knowledge/entries/python-executor|Python concurrent.futures.Executor]], [[knowledge/entries/python-asyncio|Python asyncio]], [[knowledge/entries/python-thread-pool-executor|Python ThreadPoolExecutor]], [[knowledge/entries/python-process-pool-executor|Python ProcessPoolExecutor]], [[knowledge/entries/python-interpreter-pool-executor|Python InterpreterPoolExecutor]].
