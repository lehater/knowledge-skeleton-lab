---
id: 01a1a1c0-7a1c-7641-a200-9d57950d6e87
type: knowledge
name: "Java Executors and Futures"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/concurrent/package-summary.html"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/concurrent/ExecutorService.html"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
in_topic:
  - "[[knowledge/entries/java-concurrency]]"
---
# Java Executors and Futures

Executor отделяет отправку работы от политики исполнения; ExecutorService добавляет shutdown и результаты Future. Submit принимает работу, Future сообщает завершение, результат или отказ. ShutdownNow лишь пытается остановить активные работы. CompletableFuture дополняет модель композицией стадий; отмена не гарантирует прерывание любой операции.
