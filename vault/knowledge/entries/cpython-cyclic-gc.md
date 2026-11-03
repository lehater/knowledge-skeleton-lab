---
id: 01a1a114-513d-7a60-a5e5-1ea8fefd7e52
type: knowledge
name: "CPython Cyclic Garbage Collection"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/library/gc.html"
in_topic:
  - "[[knowledge/entries/python-memory-management]]"
part_of:
  - "[[knowledge/entries/cpython]]"
realizes:
  - "[[knowledge/entries/garbage-collection]]"
---
# CPython Cyclic Garbage Collection

Циклический сборщик CPython дополняет подсчёт ссылок обнаружением недостижимых циклически связанных объектов. Модуль gc предоставляет запуск сборки, настройки частоты и диагностический доступ. Вход — отслеживаемые объекты и их достижимость, результат — обнаружение и возможное освобождение мусора.

Не все типы объектов отслеживаются одинаково; отключение автоматической сборки допустимо только с пониманием образования циклов. Поколения, пороги и условия запуска зависят от версии и сборки. Этот механизм управляет памятью объектов, а не гарантированным своевременным освобождением файлов или сетевых соединений.
