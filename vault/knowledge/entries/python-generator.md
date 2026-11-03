---
id: 01a1a114-49bd-70c3-8da0-f52642624e4a
type: knowledge
name: "Python Generator"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/tutorial/classes.html#generators"
  - "https://docs.python.org/3.15/reference/expressions.html#yield-expressions"
in_topic:
  - "[[knowledge/entries/python-functions-and-iteration]]"
---
# Python Generator

Генератор — итератор с приостанавливаемым выполнением, создаваемый вызовом generator function или generator expression. next/send возобновляет вычисление до yield, возвращающего очередное значение; локальное состояние сохраняется между шагами. Завершение обозначается StopIteration.

yield from делегирует выполнение другому итератору; close/throw позволяют завершать или передавать исключение в приостановленный генератор. Сам вызов generator function не выполняет тело. Это ленивое последовательное вычисление, которое само по себе не создаёт поток или конкурентную Task.
