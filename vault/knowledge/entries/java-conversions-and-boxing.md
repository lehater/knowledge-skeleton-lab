---
id: 01a1a1c0-6e76-7b07-96be-8d80f0d4f5d3
type: knowledge
name: "Java Conversions and Boxing"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-5.html"
in_topic:
  - "[[knowledge/entries/java-types-and-values]]"
---
# Java Conversions and Boxing

Контекст присваивания, вызова или приведения определяет допустимые преобразования. Boxing связывает примитивы с обёртками, unboxing извлекает значение; unboxing null вызывает NullPointerException. Сужение может потерять данные либо потребовать runtime-проверки. Совместимость типов зависит от контекста, а не только исходного значения.
