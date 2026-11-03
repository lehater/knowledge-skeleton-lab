---
id: 01a18e44-09af-7b7b-9588-dec954be27d3
type: knowledge
name: "Asynchronous Programming"
review_status: proposed
kind: practice
lifecycle: enriched
broader:
  - "[[knowledge/entries/concurrent-programming]]"
sources:
  - "https://doc.rust-lang.org/book/ch17-00-async-await.html"
  - "https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/"
---
# Asynchronous Programming

Асинхронное программирование организует начало операций и получение их результатов как разделённые этапы. Пока операция ожидает завершения, программа может передать управление другой работе. Вход — операции, зависимости и события завершения; выход — продолжения, результаты или отказы по контракту.

Callbacks, Future и async/await — разные способы выразить эту организацию. Она полезна при ожидании I/O, но не обещает CPU-параллелизма или отсутствия блокирующего кода. asyncio и Java executors/futures обслуживают разные варианты асинхронной работы.
