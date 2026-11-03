---
id: 01a1a114-4ce5-731d-b4cf-e9eb281dab62
type: knowledge
name: "Python Execution Frame"
lifecycle: enriched
review_status: proposed
kind: structure
sources:
  - "https://docs.python.org/3.15/reference/executionmodel.html#structure-of-a-program"
  - "https://docs.python.org/3.15/reference/datamodel.html#frame-objects"
  - "https://docs.python.org/3.15/library/inspect.html"
in_topic:
  - "[[knowledge/entries/python-execution-model]]"
  - "[[knowledge/entries/reflection]]"
---
# Python Execution Frame

Frame содержит контекст конкретного выполнения блока: исполняемый code object, пространства имён и сведения о продолжении. Он позволяет интерпретатору продолжать вычисление, а отладчику и traceback — наблюдать его состояние.

Вход — блок и окружение, выход — выполнение с локальными связями, возвратом или исключением. Рекурсивные вызовы одного кода имеют разные frame. Генераторы и корутины могут сохранять приостановленный контекст. Ссылки на frame способны удерживать объекты; возможности изменения locals и безопасного доступа зависят от версии и режима реализации.
