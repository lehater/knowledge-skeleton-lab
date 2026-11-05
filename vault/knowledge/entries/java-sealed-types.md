---
id: 01a1a1c0-7103-75cb-ab74-049a432d9ebc
type: knowledge
name: "Java Abstract Final and Sealed Types"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-8.html#jls-8.1.1"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-9.html#jls-9.1.1"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-14.html#jls-14.11.1.1"
in_topic:
  - "[[knowledge/entries/java-inheritance-and-dispatch]]"
---
# Java Abstract Final and Sealed Types

Abstract ограничивает непосредственное создание экземпляров, final запрещает наследование, sealed ограничивает допустимых непосредственных наследников. Non-sealed снова открывает ветвь расширения. Эти модификаторы управляют разными свойствами типа; ограниченная иерархия используется при проверке исчерпывающего switch.
