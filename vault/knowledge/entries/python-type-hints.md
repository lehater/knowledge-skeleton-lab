---
id: 01a1a114-4500-7c97-9d78-06324df55ab3
type: knowledge
name: "Python Type Hints"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/library/typing.html"
  - "https://docs.python.org/3.15/reference/executionmodel.html#annotation-scopes"
  - "https://docs.python.org/3.15/library/typing.html#nominal-vs-structural-subtyping"
in_topic:
  - "[[knowledge/entries/python-data-and-types]]"
  - "[[knowledge/entries/python-functions-and-iteration]]"
  - "[[knowledge/entries/type-system]]"
  - "[[knowledge/entries/static-typing]]"
  - "[[knowledge/entries/nominal-typing]]"
---
# Python Type Hints

Аннотации описывают ожидаемые типы параметров, результатов и переменных для инструментов анализа. Вход для type checker — код с аннотациями, выход — диагностика совместимости. Python runtime сам по себе не проверяет соответствие аргументов этим аннотациям.

Union, Callable, TypeVar и параметризованные контейнеры выражают составные контракты. В современных версиях используются отдельные annotation scopes и отложенное вычисление многих аннотаций; код, читающий их, должен учитывать версию. Аннотация отличается от runtime-типа объекта и не превращает динамическое выполнение в статически проверяемую гарантию.
