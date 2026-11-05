---
id: 01a1a1c0-7a1c-7641-a200-9d57950d6e87
type: knowledge
name: "Java Executors and Futures"
lifecycle: enriched
review_status: proposed
kind: topic
sources:
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/concurrent/package-summary.html"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/concurrent/ExecutorService.html"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
in_topic:
  - "[[knowledge/entries/java-concurrency]]"
  - "[[knowledge/entries/future]]"
  - "[[knowledge/entries/asynchronous-programming]]"
  - "[[knowledge/entries/task-scheduling]]"
  - "[[knowledge/entries/task-cancellation]]"
---
# Java Executors and Futures

Executor отделяет отправку работы от политики исполнения; ExecutorService добавляет shutdown и результаты Future. Submit принимает работу, Future сообщает завершение, результат или отказ. ShutdownNow лишь пытается остановить активные работы. CompletableFuture дополняет модель композицией стадий; отмена не гарантирует прерывание любой операции.

Общие концепции здесь разделены по ответственности: планирование/исполнение работы, представление результата Future и протокол отмены. Узел описывает их совместно, поэтому не является целиком реализацией Future. Для сравнения: asyncio.Future ожидается через await и result() не ждёт готовности; Java Future.get() может блокировать.
