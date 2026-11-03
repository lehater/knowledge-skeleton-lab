---
id: 01a1a114-584c-73d5-bba0-e40f2c6a059a
type: knowledge
name: "Python Native Extension Module"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/extending/extending.html"
  - "https://docs.python.org/3.15/c-api/"
in_topic:
  - "[[knowledge/entries/python-implementations-and-integration]]"
specializes:
  - "[[knowledge/entries/python-module]]"
---
# Python Native Extension Module

Нативный extension module добавляет Python функции и типы, реализованные на C/C++ или совместимом уровне. Модуль инициализируется через C API и участвует в обычном импорте. Вход — Python-аргументы, выход — Python-объекты или корректно установленная ошибка API.

Преобразование аргументов, владение ссылками и управление ошибками входят в ответственность расширения. Совместимость зависит от ABI, платформы и режима интерпретатора. Нативный модуль работает с привилегиями процесса: механизм расширения предоставляет интеграцию, а не sandbox.
