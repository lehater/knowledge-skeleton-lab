---
id: 01a1a116-2044-7710-ba8c-b6da075c8eb2
type: knowledge
name: "Python InterpreterPoolExecutor"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/library/concurrent.futures.html#interpreterpoolexecutor"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
specializes:
  - "[[knowledge/entries/python-thread-pool-executor]]"
executes:
  - "[[knowledge/entries/python-callable]]"
---
# Python InterpreterPoolExecutor

InterpreterPoolExecutor — подкласс ThreadPoolExecutor, где worker-потоки используют собственные интерпретаторы с отдельным runtime state. Это позволяет получать многоядерное выполнение при отдельных GIL. API возвращает Future; callable, аргументы и результат передаются посредством pickle.

Изменяемые объекты и состояние модулей не разделяются между интерпретаторами как в обычном пуле потоков. Инициализация и совместимость расширений требуют учёта этой границы. Доступен с Python 3.14. Отдельные интерпретаторы одного процесса отличаются от процессов и не образуют OS sandbox.
