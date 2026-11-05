---
id: 01a1a113-deb7-787b-9807-6d1424596bd0
type: knowledge
name: "Python Data and Types"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#objects-values-and-types"
  - "https://docs.python.org/3.15/builtins/stdtypes.html"
  - "https://docs.python.org/3.15/library/typing.html"
  - "https://small.r7rs.org/attachment/r7rs.pdf"
in_topic:
  - "[[knowledge/entries/python]]"
  - "[[knowledge/entries/type-system]]"
  - "[[knowledge/entries/dynamic-typing]]"
---
# Python Data and Types

Python Data and Types — модель объектов, значений и типов Python.

Модель данных определяет объекты через идентичность, тип и значение; тип задаёт поддерживаемые операции. Имена ссылаются на объекты, поэтому несколько имён могут обозначать один изменяемый объект. Динамическая типизация означает, что тип принадлежит объекту, а допустимость операции проверяется при выполнении.

Встроенные числа, последовательности, отображения и множества дают основные формы данных. Аннотации, обобщённые типы и Protocol описывают контракты для статического анализа; они не заменяют runtime-семантику. Поведение пользовательских классов раскрывается в объектных протоколах.

Основные понятия: [[knowledge/entries/python-object|Python Object]], [[knowledge/entries/python-mutability|Python Mutability and Aliasing]], [[knowledge/entries/python-numeric-types|Python Numeric Types]], [[knowledge/entries/python-sequences|Python Sequences]], [[knowledge/entries/python-mappings|Python Mappings]], [[knowledge/entries/python-sets|Python Sets]], [[knowledge/entries/python-type-hints|Python Type Hints]], [[knowledge/entries/python-generics-and-protocols|Python Generics and Typing Protocols]].
