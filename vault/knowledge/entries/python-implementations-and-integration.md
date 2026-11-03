---
id: 01a1a113-e2c2-7252-ad73-46fc83f54890
type: knowledge
name: "Python Implementations and Integration"
lifecycle: enriched
review_status: proposed
kind: topic
sources:
  - "https://docs.python.org/3.15/glossary.html#term-CPython"
  - "https://docs.python.org/3.15/c-api/"
  - "https://docs.python.org/3.15/extending/extending.html"
  - "https://docs.python.org/3.15/extending/embedding.html"
  - "https://docs.python.org/3.15/library/venv.html"
in_topic:
  - "[[knowledge/entries/python]]"
---
# Python Implementations and Integration

Реализация языка обеспечивает выполнение Python на конкретной платформе; CPython предоставляет интерпретатор и Python/C API. Расширения добавляют нативные функции и типы, встраивание позволяет C/C++ приложению запускать Python, а правила ABI определяют двоичную совместимость.

Вход — программа, конфигурация интерпретатора и при необходимости нативный код; выход — работающая среда и результаты вызовов через её границы. Виртуальное окружение отделяет установленные пакеты проекта. Детали байткода, GIL и управления памятью относятся к реализации; venv не является механизмом изоляции процессов или ОС.

Основные понятия: [[knowledge/entries/cpython|CPython]], [[knowledge/entries/cpython-gil|CPython Global Interpreter Lock]], [[knowledge/entries/cpython-free-threading|CPython Free Threading]], [[knowledge/entries/python-extension-module|Python Native Extension Module]], [[knowledge/entries/python-embedding|Python Embedding]], [[knowledge/entries/python-stable-abi|CPython Limited API and Stable ABI]], [[knowledge/entries/python-virtual-environment|Python Virtual Environment]].
