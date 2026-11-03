---
id: 01a1a1c0-7a68-796d-97c6-df12ac13f16c
type: knowledge
name: "Java Locks and Atomics"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/concurrent/locks/package-summary.html"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/concurrent/atomic/package-summary.html"
in_topic:
  - "[[knowledge/entries/java-concurrency]]"
  - "[[knowledge/entries/synchronization]]"
---
# Java Locks and Atomics

Lock/Condition предоставляют библиотечную синхронизацию с явными операциями; atomic-классы — операции над отдельными переменными с заданными memory effects. Вход — разделяемое состояние и конкурирующие обращения; выход — координированный доступ. Атомарность одной операции не обеспечивает инвариант нескольких независимых переменных.
