---
id: 01a1a114-524d-7c6e-a434-3e45da254803
type: knowledge
name: "Python I/O Streams"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/library/io.html"
  - "https://docs.python.org/3.15/reference/compound_stmts.html#the-with-statement"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python I/O Streams

io предоставляет текстовые, буферизованные бинарные и raw streams с операциями чтения и записи. Текстовый поток принимает/выдаёт str и выполняет кодирование; бинарный работает с bytes-like данными. Возможность seek, чтения и записи определяется конкретным потоком.

Потоки объединяют данные из файлов, памяти и других источников единым интерфейсом. Буферизация отделяет запись приложением от физической передачи; close/flush имеют разные обязанности. Файловые потоки поддерживают context manager для закрытия. Кодировку следует задавать согласно формату данных, а не выводить из типа файла.
