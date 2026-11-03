---
id: 01a1a1c0-7932-7583-83a8-74c253a07c69
type: knowledge
name: "Java Memory Model"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-17.html#jls-17.4"
in_topic:
  - "[[knowledge/entries/java-concurrency]]"
---
# Java Memory Model

JMM определяет допустимые наблюдения чтений разделяемой памяти. Happens-before выводится из program order и synchronizes-with; корректно синхронизированные программы получают гарантию sequential consistency. Это контракт для исполнения и оптимизаций, а не описание размещения heap или CPU-кэшей.
