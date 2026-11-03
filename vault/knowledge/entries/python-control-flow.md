---
id: 01a1a114-4258-777b-b384-9a1478ff0a59
type: knowledge
name: "Python Control Flow"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/reference/compound_stmts.html"
  - "https://docs.python.org/3.15/tutorial/controlflow.html"
in_topic:
  - "[[knowledge/entries/python-syntax-and-semantics]]"
---
# Python Control Flow

Управляющие инструкции выбирают и повторяют выполнение suites. if проверяет истинность, while повторяет блок по условию, for получает элементы iterable. break завершает цикл, continue начинает следующую итерацию, else цикла выполняется при завершении без break.

match сопоставляет объект с паттернами, проверяет guards и выбирает первый подходящий case; захватывающий паттерн связывает имя. Это структурное сопоставление, а не просто проверка равенства. Вход — условия или объект перебора, выход — выбранное выполнение и его эффекты; исключения и return могут прервать обычный путь.
