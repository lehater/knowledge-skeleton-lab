---
id: 01a18e44-0a09-729b-b252-39e2ee6057f0
type: knowledge
name: "Coroutine Suspension and Resumption"
review_status: proposed
kind: mechanism
lifecycle: enriched
sources:
  - "https://kotlinlang.org/docs/coroutines-basics.html"
  - "https://kotlinlang.org/spec/asynchronous-programming-with-coroutines.html"
in_topic:
  - "[[knowledge/entries/coroutine]]"
---
# Coroutine Suspension and Resumption

Приостановка корутины сохраняет необходимый контекст вычисления и передаёт управление; возобновление продолжает его с сохранённой позиции. Вход — точка приостановки и состояние; выход — временная передача управления, затем продолжение с данными или исключением. Это механизм внутри модели корутин.

Возможная точка приостановки не означает, что она обязательно произойдёт: операция может уже иметь результат. Сохранение стека, state machine и правила возобновления зависят от реализации; приостановка корутины не тождественна блокировке потока.
