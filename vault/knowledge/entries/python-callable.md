---
id: 01a1a114-4def-7563-adf7-6904cd0e74a4
type: knowledge
name: "Python Callable"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#callable-types"
  - "https://docs.python.org/3.15/reference/datamodel.html#emulating-callable-objects"
in_topic:
  - "[[knowledge/entries/python-functions-and-iteration]]"
---
# Python Callable

Callable — объект, поддерживающий операцию вызова. К ним относятся функции, методы, классы и экземпляры с __call__. Вход — аргументы, выход — возвращаемый объект или исключение; точный контракт определяется вызываемым объектом.

callable(x) проверяет потенциальную вызываемость, но не гарантирует успешность конкретного вызова. Функция является видом callable; callable не обязательно является function object. Executor принимает callable для фонового запуска, а coroutine object, уже полученный от async function, сам по себе не является callable.
