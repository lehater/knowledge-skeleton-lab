---
id: 01a1a1c0-706b-7f87-ab3a-b39ebffaa96b
type: knowledge
name: "Java Overriding and Dynamic Dispatch"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-8.html#jls-8.4.8"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-15.html#jls-15.12.4.4"
in_topic:
  - "[[knowledge/entries/java-inheritance-and-dispatch]]"
  - "[[knowledge/entries/dynamic-dispatch]]"
  - "[[knowledge/entries/subtype-polymorphism]]"
---
# Java Overriding and Dynamic Dispatch

Переопределение задаёт новую реализацию унаследованного экземплярного метода с согласованной сигнатурой и ограничениями результата/доступа. При виртуальном вызове реализация выбирается по runtime-классу получателя. Static методы скрываются; поля не участвуют в такой диспетчеризации.
