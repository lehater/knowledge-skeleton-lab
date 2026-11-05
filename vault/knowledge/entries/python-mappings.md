---
id: 01a1a114-4444-7820-94e1-576bf1632c80
type: knowledge
name: "Python Mappings"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/builtins/stdtypes.html#mapping-types-dict-frozendict"
  - "https://docs.python.org/3.15/whatsnew/3.15.html#pep-814-add-frozendict-built-in-type"
in_topic:
  - "[[knowledge/entries/python-data-and-types]]"
---
# Python Mappings

Отображение связывает ключи со значениями и предоставляет поиск по ключу. dict — изменяемое отображение с сохранением порядка вставки; ключи должны быть hashable. Равенство ключей и согласованный hash определяют обращение к одному элементу. Отсутствующий ключ при обычном индексировании вызывает KeyError.

В Python 3.15 появился неизменяемый frozendict: он сохраняет порядок вставки и hashable, если все ключи и значения hashable. frozendict не наследуется от dict. Оба относятся к отображениям; принадлежность одному протоколу не означает наследование между реализациями.
