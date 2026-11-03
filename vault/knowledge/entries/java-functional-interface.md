---
id: 01a1a1c0-71da-739a-ab4c-ac299acdcfb5
type: knowledge
name: "Java Functional Interface"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-9.html#jls-9.8"
specializes:
  - "[[knowledge/entries/java-interface]]"
in_topic:
  - "[[knowledge/entries/java-methods-and-functions]]"
---
# Java Functional Interface

Функциональный интерфейс представляет один логический abstract-контракт метода, с учётом эквивалентных унаследованных сигнатур и методов Object; sealed-интерфейс не функциональный. Он служит целевым типом лямбд и method references. Наличие default/static методов само по себе не нарушает этот контракт.
