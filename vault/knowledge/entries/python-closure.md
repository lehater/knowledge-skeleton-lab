---
id: 01a1a114-487b-78b6-a969-d480c2839a20
type: knowledge
name: "Python Closure"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/reference/executionmodel.html#resolution-of-names"
  - "https://docs.python.org/3.15/reference/datamodel.html#user-defined-functions"
  - "https://www.cs.tufts.edu/comp/150FP/archive/peter-landin/mechanical-eval.pdf"
in_topic:
  - "[[knowledge/entries/python-functions-and-iteration]]"
specializes:
  - "[[knowledge/entries/closure]]"
---
# Python Closure

Замыкание сохраняет доступ вложенной функции к связям свободных переменных из окружающей функции. Вход — определение вложенной функции в конкретном окружении; выход — function object, который может использовать эти связи после возврата внешней функции.

Сохраняется доступ к переменной, а не обязательная копия её значения в момент создания: позднее связывание объясняет поведение функций, созданных в цикле. nonlocal позволяет перепривязать ближайшую подходящую внешнюю связь. Глобальные имена разрешаются через namespace модуля и не являются closure cells.
