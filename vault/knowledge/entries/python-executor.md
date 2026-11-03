---
id: 01a1a114-56ef-71f8-a3ef-194aab940d05
type: knowledge
name: "Python concurrent.futures.Executor"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/library/concurrent.futures.html"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
schedules:
  - "[[knowledge/entries/python-callable]]"
---
# Python concurrent.futures.Executor

Executor — абстрактный интерфейс асинхронного запуска callable. submit планирует fn с аргументами и возвращает concurrent.futures.Future для получения результата; map организует вычисление над входными коллекциями. shutdown управляет завершением использования ресурсов.

Конкретные executors выполняют работу в потоках, процессах или отдельных интерпретаторах. Future этого API отличается от asyncio.Future: result может блокировать вызывающий поток. Отмена pending work не останавливает уже выполняющийся callable. Ожидание задачами результатов друг друга в ограниченном пуле способно вызвать deadlock.
