---
id: 01a1a1c0-726f-7690-882d-2d9a202f7a59
type: knowledge
name: "Java Parameterized Types and Bounds"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-4.html#jls-4.4"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-4.html#jls-4.5"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-8.html#jls-8.4.4"
in_topic:
  - "[[knowledge/entries/java-generics]]"
---
# Java Parameterized Types and Bounds

Параметры типа позволяют объявлять семейства типов и обобщённые методы. Bounds ограничивают доступные операции. Аргументы типа — ссылочные типы; параметризация обычно инвариантна: List<Integer> не подтип List<Number>. Ограничения проверяются при компиляции и не означают отдельный runtime-класс для каждого аргумента.
