---
id: 01a1a1c0-6b19-7ff1-9710-5e62b943b465
type: knowledge
name: "Java Memory and Lifetime"
lifecycle: enriched
review_status: proposed
kind: topic
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-12.html"
  - "https://docs.oracle.com/javase/specs/jvms/se27/html/jvms-2.html"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/ref/package-summary.html"
in_topic:
  - "[[knowledge/entries/java]]"
---
# Java Memory and Lifetime

Здесь рассматриваются создание объектов, достижимость и освобождение памяти, а также граница времени жизни внешнего ресурса. Вход — создание и использование объектов; выход — инициализированное состояние и возможность последующего освобождения. Алгоритмы сборщиков остаются выбором реализации.

Основные понятия: [[knowledge/entries/java-automatic-memory-management|Java Automatic Memory Management]], [[knowledge/entries/java-reachability|Java Reachability and Reference Objects]], [[knowledge/entries/java-object-initialization|Java Object Initialization]], [[knowledge/entries/java-resource-lifetime|Java External Resource Lifetime]].
