---
id: 01a1a1c0-701d-7771-9641-dc063893e539
type: knowledge
name: "Java Inheritance and Subtyping"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-8.html#jls-8.2"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-9.html#jls-9.1.3"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-4.html#jls-4.10"
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
  - "https://www.cs.utexas.edu/~wcook/papers/InheritanceSubtyping90/CookPOPL90.pdf"
in_topic:
  - "[[knowledge/entries/java-inheritance-and-dispatch]]"
  - "[[knowledge/entries/inheritance]]"
  - "[[knowledge/entries/subtyping]]"
  - "[[knowledge/entries/nominal-typing]]"
  - "[[knowledge/entries/subtype-polymorphism]]"
---
# Java Inheritance and Subtyping

Класс расширяет один непосредственный суперкласс и может реализовать несколько интерфейсов; интерфейсы допускают множественное наследование. Наследование задаёт получение членов, subtyping — отношения типов. Приватные члены и конструкторы не наследуются; эти правила влияют на допустимые обращения и расширение.

Номинальное подтипирование определяется объявлениями типов и их supertype-связями; совпадение методов двух независимых классов само по себе не устанавливает их совместимость. Связи с Inheritance и Subtyping тематические: карточка охватывает оба разных отношения.
