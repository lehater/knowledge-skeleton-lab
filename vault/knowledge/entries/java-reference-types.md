---
id: 01a1a1c0-6d9f-7581-ac27-429d9c652093
type: knowledge
name: "Java Reference Types and Null"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-4.html#jls-4.3"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-4.html#jls-4.12.2"
in_topic:
  - "[[knowledge/entries/java-types-and-values]]"
  - "[[knowledge/entries/object]]"
---
# Java Reference Types and Null

Классы, интерфейсы и массивы задают ссылочные типы. Переменная хранит ссылочное значение, включая null, а не сам объект. Несколько ссылок могут обозначать один объект. Статический тип ограничивает обращения; null не является экземпляром класса и требует учёта при разыменовании.
