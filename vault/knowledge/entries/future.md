---
id: 01a18e44-0a64-75c8-8969-caebc0fb2551
type: knowledge
name: "Future"
review_status: proposed
kind: program_construct
lifecycle: enriched
sources:
  - "https://doc.rust-lang.org/book/ch17-00-async-await.html"
  - "https://docs.python.org/3/library/asyncio-task.html"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/concurrent/Future.html"
  - "https://kotlinlang.org/docs/coroutines-basics.html"
in_topic:
  - "[[knowledge/entries/asynchronous-programming]]"
---
# Future

Future представляет результат вычисления, который может стать доступен позднее, вместе с состоянием завершения. Вход — связь с вычислением; выход потребителю — значение, отказ или иное состояние завершения по контракту. Ожидание, опрос и отмена зависят от API. Сам объект Future не означает отдельный поток, самостоятельный запуск работы или гарантированную остановку вычисления при отмене.

Kotlin Deferred, Java Future, Python asyncio.Future и Rust Future показывают общую идею ещё не полученного результата при разных способах продвижения вычисления. Rust Future может требовать polling и не является только контейнером завершения. asyncio.Future.result() не блокирует до готовности; Java Future.get() может блокировать. Отмена результата, доставка сигнала вычислению и фактическая остановка — отдельные события. Составная карточка Java Executors and Futures связана `in_topic`, поскольку целиком не обозначает один Future.
