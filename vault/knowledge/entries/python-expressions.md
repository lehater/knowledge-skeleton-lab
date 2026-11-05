---
id: 01a1a114-418c-7dc5-a905-55f64e385ad7
type: knowledge
name: "Python Expressions"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/reference/expressions.html"
in_topic:
  - "[[knowledge/entries/python-syntax-and-semantics]]"
---
# Python Expressions

Выражение описывает вычисление значения из литералов, имён, вызовов и операций. Приоритет и ассоциативность задают группировку, а правила вычисления — порядок получения операндов. Вызовы и доступ к атрибутам могут иметь побочные эффекты и порождать исключения.

and/or применяют короткое замыкание и возвращают выбранный операнд, а не обязательно bool; цепочка сравнений вычисляет общий операнд один раз. Операторы обращаются к протоколам типов. Comprehensions строят коллекции, generator expression формирует ленивый генератор. Приостановка через yield/await имеет отдельные правила контекста.
