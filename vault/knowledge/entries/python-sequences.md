---
id: 01a1a114-43ec-79cf-95f4-dfacbe23b558
type: knowledge
name: "Python Sequences"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/builtins/stdtypes.html#sequence-types-list-tuple-range"
  - "https://docs.python.org/3.15/builtins/stdtypes.html#text-sequence-type-str"
  - "https://docs.python.org/3.15/library/io.html"
in_topic:
  - "[[knowledge/entries/python-data-and-types]]"
---
# Python Sequences

Последовательность хранит упорядоченные элементы и предоставляет индексирование, срезы и перебор. list изменяем, tuple и range неизменяемы; range компактно описывает арифметический диапазон. Операции принимают индексы, границы или элементы и возвращают элемент, срез либо новый объект.

str представляет Unicode-текст, bytes — неизменяемую последовательность байтов, bytearray — изменяемую. Переход между текстом и байтами требует кодирования/декодирования. Срез встроенной list создаёт новую внешнюю коллекцию, сохраняя ссылки на элементы; это не глубокая копия.
