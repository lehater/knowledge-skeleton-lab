---
id: 01a1a1c0-72fa-7190-8935-b7fdbeffb519
type: knowledge
name: "Java Type Erasure"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-4.html#jls-4.6"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-4.html#jls-4.7"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-4.html#jls-4.12.2"
in_topic:
  - "[[knowledge/entries/java-generics]]"
---
# Java Type Erasure

Стирание отображает параметризованные типы и type variables в непараметризованные типы и преобразует сигнатуры. Оно объясняет ограничения reifiable-проверок и совместимость с raw types. Generic metadata не равнозначны runtime-проверке каждого аргумента типа; unchecked операции могут привести к heap pollution.
