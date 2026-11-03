---
id: 01a1a114-4821-73ad-88a6-87d64d4a9544
type: knowledge
name: "Python Argument Binding"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/tutorial/controlflow.html#more-on-defining-functions"
  - "https://docs.python.org/3.15/reference/expressions.html#calls"
in_topic:
  - "[[knowledge/entries/python-functions-and-iteration]]"
---
# Python Argument Binding

Связывание аргументов сопоставляет позиционные и именованные значения параметрам функции, применяет defaults и формирует *args/**kwargs. Позиционные-only параметры отмечаются /, keyword-only следуют после *. Несогласованный вызов, например два значения одного параметра, вызывает TypeError.

Передаются ссылки на объекты: мутация переданного изменяемого объекта может быть видна вызывающему коду, а перепривязка локального параметра — нет. Аннотации не участвуют в автоматической проверке вызова. Механизм отделяет форму интерфейса от алгоритма тела функции.
