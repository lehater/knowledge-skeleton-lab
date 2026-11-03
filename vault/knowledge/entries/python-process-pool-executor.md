---
id: 01a1a116-1fe4-77e7-bf47-5b69aabba377
type: knowledge
name: "Python ProcessPoolExecutor"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/library/concurrent.futures.html#processpoolexecutor"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
specializes:
  - "[[knowledge/entries/python-executor]]"
executes:
  - "[[knowledge/entries/python-callable]]"
---
# Python ProcessPoolExecutor

ProcessPoolExecutor выполняет callables в пуле процессов и предоставляет Future для результатов. Отдельные процессы обходят ограничение общего GIL одного интерпретатора; передача функций, аргументов и результатов требует совместимости с pickle.

Модуль __main__ должен быть импортируем worker-процессом; интерактивные определения и lambdas не подходят как универсальный вариант. Размер пула, метод запуска и initializer определяют ресурсы и стоимость старта. Этот механизм даёт CPU-параллелизм ценой сериализации и отдельных пространств памяти; отмена Future не убивает уже выполняемый callable.
