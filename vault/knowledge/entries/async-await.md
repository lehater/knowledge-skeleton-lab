---
id: 01a18e44-0a36-714a-a7d9-926a642daac2
type: knowledge
name: "Async/await"
review_status: proposed
kind: program_construct
lifecycle: enriched
sources:
  - "https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/"
  - "https://doc.rust-lang.org/book/ch17-00-async-await.html"
in_topic:
  - "[[knowledge/entries/asynchronous-programming]]"
---
# Async/await

Async/await — семейство языковых конструкций для записи асинхронных вычислений и ожидания их результатов в последовательной форме. Вход — определение вычисления и ожидаемая операция; выход — продолжение с результатом либо исключением, при необходимости после приостановки.

Точное действие async и await задаёт язык: начало вычисления, необходимость runtime и правила ожидания различаются у Python, Rust и C#. Await готового результата может не приостанавливать выполнение. Java Future.get — библиотечное ожидание и не является конструкцией async/await.
