---
id: 01a1a114-4958-77c7-a806-5503b2925cac
type: knowledge
name: "Python Iterator"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/tutorial/classes.html#iterators"
  - "https://docs.python.org/3.15/builtins/stdtypes.html#iterator-types"
in_topic:
  - "[[knowledge/entries/python-functions-and-iteration]]"
---
# Python Iterator

Итератор выдаёт очередной элемент через __next__ и возвращает себя из __iter__. Завершение обозначается StopIteration. Iterable предоставляет способ получить итератор, но не обязательно является им. for и другие потребители запрашивают элементы по этому контракту.

Вход — последовательные запросы следующего значения, выход — элементы или завершение. Итератор обычно расходуется и не обязан позволять повторный проход; iterable может создавать независимые итераторы. Пользовательские классы и генераторы реализуют тот же интерфейс. Асинхронная итерация использует отдельные методы __aiter__/__anext__.
