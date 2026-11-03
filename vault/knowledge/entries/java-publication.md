---
id: 01a1a1c0-79d1-7d76-a50c-ff4794c69e4c
type: knowledge
name: "Java Volatile and Final Publication"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-17.html#jls-17.4.5"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-17.html#jls-17.5"
in_topic:
  - "[[knowledge/entries/java-concurrency]]"
  - "[[knowledge/entries/synchronization]]"
  - "[[knowledge/entries/memory-model]]"
---
# Java Volatile and Final Publication

Запись volatile happens-before последующего чтения того же поля; unlock — последующего lock того же монитора. Final-поля имеют особую семантику после корректного конструирования. Эти гарантии обеспечивают видимость, но volatile сам по себе не делает составной read-modify-write атомарным.
