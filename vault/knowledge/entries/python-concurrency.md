---
id: 01a1a113-e258-7628-b656-531a4e9afb59
type: knowledge
name: "Python Concurrency"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://docs.python.org/3.15/library/concurrency.html"
  - "https://docs.python.org/3.15/library/asyncio-task.html"
  - "https://docs.python.org/3.15/library/threading.html"
  - "https://docs.python.org/3.15/library/multiprocessing.html"
  - "https://docs.python.org/3.15/library/concurrent.futures.html"
in_topic:
  - "[[knowledge/entries/python]]"
---
# Python Concurrency

Средства Python для перекрывающихся вычислений и ожиданий включают threading, multiprocessing, concurrent.futures и asyncio. Потоки разделяют память процесса, процессы имеют отдельные пространства исполнения, а asyncio кооперативно выполняет задачи вокруг event loop.

Вход — независимые работы, события и данные; выход — результаты, исключения и состояния завершения. Выбор механизма зависит от I/O, CPU, стоимости передачи данных и синхронизации. Конкурентность не гарантирует параллелизм; возможность параллельного Python-кода в потоках зависит от реализации и GIL. Отмена и ожидание завершения входят в контракт конкретного механизма.
