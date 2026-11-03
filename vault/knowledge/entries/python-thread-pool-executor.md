---
id: 01a1a116-1f7f-7bc7-8a76-d8a8a8fed9d1
type: knowledge
name: "Python ThreadPoolExecutor"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/library/concurrent.futures.html#threadpoolexecutor"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
---
# Python ThreadPoolExecutor

ThreadPoolExecutor выполняет submitted callables в пуле потоков. Он предоставляет контракт Executor: submit возвращает Future, shutdown завершает использование пула. Потоки делят память процесса, а ограничение max_workers задаёт степень одновременно обслуживаемых работ.

Пул удобен для блокирующего I/O; CPU-параллелизм Python-кода зависит от GIL и реализации. Ожидание другой работы того же исчерпанного пула может привести к deadlock. Ошибка initializer ломает пул. Передача управления в пул отличается от кооперативной приостановки coroutine в event loop.
