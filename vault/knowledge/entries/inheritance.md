---
id: 01a1a1c4-1098-7887-a3a7-34bc24fe18c7
type: knowledge
name: "Inheritance"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/tutorial/java/concepts/inheritance.html"
  - "https://docs.python.org/3.15/tutorial/classes.html"
  - "https://www.cs.utexas.edu/~wcook/papers/InheritanceSubtyping90/CookPOPL90.pdf"
in_topic:
  - "[[knowledge/entries/java-inheritance-and-dispatch]]"
---
# Inheritance

Наследование — механизм определения класса/типа на основе существующих с получением предусмотренных языком членов и возможностью расширения поведения. Вход — базовые определения и новое объявление; результат — производное определение. Оно поддерживает повторное использование и иерархии; кратность, видимость и правила разрешения членов зависят от языка. Наследование реализации и отношение подтипов требуют отдельного анализа.

Cook, Hill и Canning отделяют инкрементальное построение определения от совместимости типов: наследование само по себе не доказывает [[knowledge/entries/subtyping|Subtyping]]. Java задаёт собственные ограничения наследования и переопределения; Python поддерживает несколько баз и C3 MRO. Общий принцип не задаёт ни число баз, ни универсальную гарантию поведенческой подстановки.
