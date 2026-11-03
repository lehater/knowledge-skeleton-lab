---
id: 01a1a114-4604-7a17-ac45-e9fa915aaf9d
type: knowledge
name: "Python Inheritance and MRO"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/tutorial/classes.html#inheritance"
  - "https://docs.python.org/3.15/reference/datamodel.html#custom-classes"
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
  - "https://www.cs.utexas.edu/~wcook/papers/InheritanceSubtyping90/CookPOPL90.pdf"
in_topic:
  - "[[knowledge/entries/python-classes-and-protocols]]"
  - "[[knowledge/entries/inheritance]]"
  - "[[knowledge/entries/subtyping]]"
  - "[[knowledge/entries/dynamic-dispatch]]"
  - "[[knowledge/entries/subtype-polymorphism]]"
---
# Python Inheritance and MRO

Наследование позволяет классу использовать и переопределять поведение базовых классов. При поиске методов порядок Method Resolution Order согласует множественное наследование; Python использует C3-линеаризацию. Вход — базовые классы и имя атрибута, выход — найденный член либо ошибка.

super() продолжает поиск по MRO и поддерживает кооперативные цепочки вызовов, а не просто вызывает «родителя». Несовместимые требования к порядку баз могут сделать определение класса ошибочным. Наследование задаёт отношение подтипов классов; оно отличается от наличия экземпляра или композиции объектов.
