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
in_topic:
  - "[[knowledge/entries/python]]"
---
# Python Data and Types

Модель данных определяет объекты через идентичность, тип и значение; тип задаёт поддерживаемые операции. Имена ссылаются на объекты, поэтому несколько имён могут обозначать один изменяемый объект. Динамическая типизация означает, что тип принадлежит объекту, а допустимость операции проверяется при выполнении.

Встроенные числа, последовательности, отображения и множества дают основные формы данных. Аннотации, обобщённые типы и Protocol описывают контракты для статического анализа; они не заменяют runtime-семантику. Поведение пользовательских классов раскрывается в объектных протоколах.
