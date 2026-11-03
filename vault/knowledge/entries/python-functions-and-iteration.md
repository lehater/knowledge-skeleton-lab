---
id: 01a1a113-df9b-7552-b275-332d933a0813
type: knowledge
name: "Python Functions and Iteration"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://docs.python.org/3.15/tutorial/controlflow.html#defining-functions"
  - "https://docs.python.org/3.15/tutorial/classes.html#iterators"
  - "https://docs.python.org/3.15/reference/expressions.html#yield-expressions"
in_topic:
  - "[[knowledge/entries/python]]"
---
# Python Functions and Iteration

Функции отделяют повторно используемое вычисление от места вызова; параметры связываются с переданными объектами, результат возвращается через return или исключение. Функции являются объектами: их можно передавать, сохранять, замыкать и преобразовывать декораторами.

Итерация задаёт последовательное получение значений через протокол iterator. Генераторы сохраняют состояние между выдачами значений и упрощают ленивое вычисление. Эти механизмы описывают организацию вычисления; asyncio использует отдельные coroutine objects и задачи поверх языковых средств приостановки.

Основные понятия: [[knowledge/entries/python-function|Python Function]], [[knowledge/entries/python-argument-binding|Python Argument Binding]], [[knowledge/entries/python-closure|Python Closure]], [[knowledge/entries/python-decorator|Python Decorator]], [[knowledge/entries/python-iterator|Python Iterator]], [[knowledge/entries/python-generator|Python Generator]], [[knowledge/entries/python-callable|Python Callable]].
