---
id: 01a1a1c0-7899-77f8-a383-50a183346d10
type: knowledge
name: "Java External Resource Lifetime"
lifecycle: enriched
review_status: proposed
kind: property
sources:
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/AutoCloseable.html"
in_topic:
  - "[[knowledge/entries/java-memory-and-lifetime]]"
  - "[[knowledge/entries/java-exceptions-and-resources]]"
  - "[[knowledge/entries/resource-management]]"
---
# Java External Resource Lifetime

Java External Resource Lifetime — время владения внешним ресурсом Java.

Файл, сокет или иной внешний ресурс требует собственного протокола завершения. AutoCloseable и try-with-resources связывают освобождение с областью использования. Время доступности объекта и время владения ресурсом различаются; GC не заменяет своевременный close при ограниченном числе дескрипторов.
