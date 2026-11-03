---
id: 01a1a1c0-72b1-70f6-b228-57f11c861f4a
type: knowledge
name: "Java Wildcards and Capture"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-4.html#jls-4.5.1"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-5.html#jls-5.1.10"
in_topic:
  - "[[knowledge/entries/java-generics]]"
---
# Java Wildcards and Capture

Wildcard обозначает неизвестный аргумент параметризованного типа. Верхняя граница задаётся ? extends T, нижняя — ? super T. Capture conversion вводит свежую переменную типа для анализа. Допустимые чтение и запись следуют границам; неизвестный тип нельзя считать произвольным выбранным вызывающим типом.
