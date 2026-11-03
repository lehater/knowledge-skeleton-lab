---
id: 01a1a1c4-0fea-7731-8998-9e39fb4183c2
type: knowledge
name: "Class"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.oracle.com/javase/tutorial/java/concepts/class.html"
  - "https://docs.python.org/3.15/tutorial/classes.html"
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
  - "https://docs.racket-lang.org/guide/classes.html"
in_topic:
  - "[[knowledge/entries/java-classes-and-interfaces]]"
  - "[[knowledge/entries/data-abstraction]]"
---
# Class

Класс описывает общие состояние и поведение семейства объектов и правила создания экземпляров. Вход — определение класса; результат — доступный для использования объектный шаблон/тип. Экземпляры обладают собственным состоянием и используют определённые классом операции. Число суперклассов, время создания класса и его изменяемость задаёт конкретный язык.

Общий референт — определение семейства экземпляров, их данных и операций. Java Class и Python Class — языковые виды этой конструкции, поэтому связь с ними задаётся `specializes`. У Java объявление анализируется статически и наследование классов одиночное; Python class исполняется, создавая объект-класс, и допускает множественные базы. Класс и объект, являющийся его экземпляром, не находятся в отношении `specializes` друг к другу.
