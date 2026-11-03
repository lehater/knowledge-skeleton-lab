---
id: 01a1a114-48db-7953-8553-e7dd97f7a9bb
type: knowledge
name: "Python Decorator"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/reference/compound_stmts.html#function-definitions"
  - "https://docs.python.org/3.15/reference/compound_stmts.html#class-definitions"
in_topic:
  - "[[knowledge/entries/python-functions-and-iteration]]"
---
# Python Decorator

Декоратор — callable, применяемый к создаваемой функции или классу и возвращающий объект, который будет связан с объявленным именем. Несколько декораторов применяются вложенно, начиная с ближайшего к определению. Вход — исходный объект, выход — исходный или заменяющий объект.

Декоратор может обернуть вызов, добавить регистрацию или преобразовать класс. Применение происходит при выполнении определения, а не автоматически перед каждым вызовом. Поведение каждого вызова меняется только если возвращён соответствующий wrapper; сигнатуру и метаданные при этом нужно сохранять осознанно.
