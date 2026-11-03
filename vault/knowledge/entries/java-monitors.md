---
id: 01a1a1c0-797d-702c-8306-bbcdb6007f90
type: knowledge
name: "Java Monitors and Wait Sets"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-17.html#jls-17.1"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-17.html#jls-17.2"
in_topic:
  - "[[knowledge/entries/java-concurrency]]"
---
# Java Monitors and Wait Sets

У объекта есть монитор и wait set. Synchronized обеспечивает взаимное исключение; wait освобождает монитор, ожидает и затем повторно захватывает его. Notify не передаёт владение немедленно. Условие проверяют в цикле, учитывая spurious wakeup; операции ожидания требуют владения монитором.
