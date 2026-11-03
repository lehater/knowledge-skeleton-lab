---
id: 01a18e44-0982-7137-be54-c7c797e37b04
type: knowledge
name: "Parallelism"
review_status: proposed
kind: model
lifecycle: enriched
in_topic:
  - "[[knowledge/entries/concurrent-programming]]"
sources:
  - "https://doc.rust-lang.org/book/ch17-00-async-await.html"
  - "https://kotlinlang.org/docs/coroutines-basics.html"
---
# Parallelism

Параллелизм — одновременное физическое исполнение нескольких вычислений на разных исполнительных ресурсах. Вход — работы, допускающие перекрытие, и ресурсы; выход — одновременно выполняемые действия. Ускорение зависит от доли независимой работы, накладных расходов и доступных ресурсов.

Конкурентная программа может исполняться чередованием на одном ресурсе. Python multiprocessing и некоторые варианты потоков допускают параллелизм, но его наличие не следует из async/await или количества asyncio Tasks. Java virtual threads увеличивают удобство конкурентного ожидания, а не число CPU.
