---
id: 01a1a116-2119-740a-9dc8-02006eaab7d3
type: knowledge
name: "Python decimal"
lifecycle: enriched
review_status: proposed
kind: software
sources:
  - "https://docs.python.org/3.15/library/decimal.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
  - "[[knowledge/entries/python-data-and-types]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python decimal

decimal предоставляет десятичную арифметику с настраиваемым контекстом точности, округления, сигналов и traps. Вход — Decimal и операции, выход — десятичные результаты и сигналы контекста. Это полезно там, где контракт требует контролируемого десятичного округления.

Представимые десятичные дроби могут храниться точно, но конечная точность контекста ограничивает результаты вычислений. Создание Decimal из уже приближённого float сохраняет его приближение; исходную десятичную величину обычно задают строкой. Модель decimal отличается от двоичной арифметики float.
