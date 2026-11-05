---
id: 01a1a1c0-7cce-766b-a6d6-932c9eda26cf
type: knowledge
name: "Java Annotations"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-9.html#jls-9.6"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-9.html#jls-9.7"
  - "https://small.r7rs.org/attachment/r7rs.pdf"
in_topic:
  - "[[knowledge/entries/java-platform-and-library]]"
  - "[[knowledge/entries/metaprogramming]]"
---
# Java Annotations

Аннотации добавляют метаданные объявлениям и использованиям типов. Annotation interface определяет элементы; Target и Retention ограничивают место применения и сохранение. Выход — сведения для компилятора, обработки или reflection. Аннотация сама не исполняет прикладное поведение: его обеспечивает потребляющий инструмент.
