---
id: 01a1a1c0-6b65-747d-b5b8-4d1f23337ebd
type: knowledge
name: "Java Concurrency"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-17.html"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/Thread.html"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/concurrent/package-summary.html"
in_topic:
  - "[[knowledge/entries/java]]"
  - "[[knowledge/entries/concurrency]]"
  - "[[knowledge/entries/concurrent-programming]]"
---
# Java Concurrency

Языковая модель памяти и библиотечные контракты определяют совместную работу потоков. Thread, мониторы, executors, locks и atomics решают разные задачи. Вход — работы и разделяемое состояние; выход — результаты и упорядоченные взаимодействия. Корректность требует соблюдения правил синхронизации.

Основные понятия: [[knowledge/entries/java-thread|Java Thread]], [[knowledge/entries/java-memory-model|Java Memory Model]], [[knowledge/entries/java-monitors|Java Monitors and Wait Sets]], [[knowledge/entries/java-publication|Java Volatile and Final Publication]], [[knowledge/entries/java-executors-and-futures|Java Executors and Futures]], [[knowledge/entries/java-locks-and-atomics|Java Locks and Atomics]].
