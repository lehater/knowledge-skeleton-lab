---
id: 01a1a114-42b8-736e-b488-149f75874c60
type: knowledge
name: "Python Object"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#objects-values-and-types"
in_topic:
  - "[[knowledge/entries/python-data-and-types]]"
---
# Python Object

Объект — единица представления данных Python с идентичностью, типом и значением. Имена и контейнеры удерживают ссылки на объекты; создание и операции над ними формируют вычисление программы. is сравнивает идентичность, == — равенство согласно типу.

Тип определяет допустимые операции и изменяемость. id уникален среди одновременно живущих объектов; совпадение id с адресом памяти — особенность CPython. Достижимость влияет на время жизни, но момент освобождения не задан языком. Функции, классы и модули также представлены объектами.
