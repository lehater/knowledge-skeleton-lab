---
id: 01a1a1c0-70b3-7ecc-80a1-4cd59229febb
type: knowledge
name: "Java Overloading"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-8.html#jls-8.4.9"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-15.html#jls-15.12.2"
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
in_topic:
  - "[[knowledge/entries/java-inheritance-and-dispatch]]"
  - "[[knowledge/entries/polymorphism]]"
---
# Java Overloading

Перегрузка объединяет методы одного имени с различными допустимыми сигнатурами. Компилятор выбирает применимый наиболее специфичный метод по типам аргументов и контексту, учитывая фазы преобразований и varargs. Результат — сигнатура вызова; runtime-классы аргументов не выбирают перегрузку повторно.
