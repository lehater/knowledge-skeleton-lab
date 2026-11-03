---
id: 01a1a114-431e-70d7-add4-892dd086b83d
type: knowledge
name: "Python Mutability and Aliasing"
lifecycle: enriched
review_status: proposed
kind: property
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#objects-values-and-types"
  - "https://docs.python.org/3.15/tutorial/classes.html#a-word-about-names-and-objects"
in_topic:
  - "[[knowledge/entries/python-data-and-types]]"
  - "[[knowledge/entries/mutability]]"
---
# Python Mutability and Aliasing

Изменяемость определяет возможность менять состояние существующего объекта, сохраняя его идентичность. Aliasing возникает, когда на объект указывают несколько ссылок: изменение через одну становится наблюдаемым через остальные. Перепривязка отдельного имени этого эффекта не имеет.

list, dict и set изменяемы; числа, str и tuple — неизменяемы. Неизменяемый контейнер может ссылаться на изменяемые объекты, поэтому tuple не гарантирует глубокую неизменяемость. Выбор копирования и владения ссылками определяет, какие эффекты получит вызывающий код. Изменяемость и hashability — связанные, но разные свойства.
