---
id: 01a1a1c0-6fd0-7c4e-861b-71f301f4334b
type: knowledge
name: "Java Nested and Anonymous Classes"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-8.html#jls-8.1.3"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-15.html#jls-15.9.5"
in_topic:
  - "[[knowledge/entries/java-classes-and-interfaces]]"
---
# Java Nested and Anonymous Classes

Вложенные классы размещают тип рядом с контекстом использования: member, local или anonymous. Inner-класс может обращаться к окружающему экземпляру; static nested-класс такого экземпляра не требует. Захват локальных переменных ограничен final/effectively final. Вложенность сама по себе не означает композицию объектов.
