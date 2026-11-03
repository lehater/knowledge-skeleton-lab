---
id: 01a18e44-09db-7430-aad0-8e0aba3805bb
type: knowledge
name: "Coroutine"
review_status: proposed
kind: construct
lifecycle: enriched
sources:
  - "https://kotlinlang.org/docs/coroutines-basics.html"
  - "https://kotlinlang.org/spec/asynchronous-programming-with-coroutines.html"
  - "https://small.r7rs.org/attachment/r7rs.pdf"
in_topic:
  - "[[knowledge/entries/asynchronous-programming]]"
---
# Coroutine

Корутина представляет вычисление, способное приостановиться с сохранением состояния и позднее продолжиться с места приостановки. Вход — запуск/возобновление и передаваемые данные; выход — очередная приостановка, результат или отказ. Конкретная модель задаёт точки приостановки, передачу управления и представление сохранённого состояния.

Python coroutine object реализует этот принцип через протокол языка; Kotlin suspending functions показывают другой вариант. Корутина не обязана иметь отдельный поток ОС или самостоятельно планировать себя. Java virtual thread не отождествляется с корутиной Python по одному сходству приостановки.
