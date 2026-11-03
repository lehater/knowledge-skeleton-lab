---
id: 01a1a114-50d0-7d1c-8f62-d7eab0e82888
type: knowledge
name: "CPython Reference Counting"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/c-api/refcounting.html"
  - "https://docs.python.org/3.15/reference/datamodel.html#objects-values-and-types"
in_topic:
  - "[[knowledge/entries/python-memory-management]]"
part_of:
  - "[[knowledge/entries/cpython]]"
---
# CPython Reference Counting

Подсчёт ссылок CPython отслеживает владение объектом сильными ссылками и участвует в освобождении объектов. C API различает owned и borrowed references; INCREF/DECREF меняют владение. Освобождение может запускать пользовательский код, поэтому расширения должны сохранять согласованное состояние до DECREF.

Циклические ссылки требуют дополнительной сборки. Immortal objects и free-threaded режим меняют детали счётчиков: наблюдаемое число не всегда равно числу обычных ссылок. Немедленная финализация не является гарантией языка Python и не заменяет явное закрытие ресурса.
