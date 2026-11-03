---
id: 01a1a114-574d-7448-adb8-b1cb7820dbf1
type: knowledge
name: "CPython"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/glossary.html#term-CPython"
  - "https://docs.python.org/3.15/library/dis.html"
  - "https://docs.python.org/3.15/c-api/"
  - "https://docs.python.org/3.15/howto/free-threading-python.html"
in_topic:
  - "[[knowledge/entries/python-implementations-and-integration]]"
realizes:
  - "[[knowledge/entries/python]]"
executes:
  - "[[knowledge/entries/python-code-object]]"
  - "[[knowledge/entries/python-code-block]]"
---
# CPython

CPython — основная реализация Python, написанная на C и предоставляющая Python/C API для расширений и встраивания. Она компилирует код в внутреннее исполняемое представление и обеспечивает его выполнение, работу объектов и стандартной библиотеки.

Байткод, подсчёт ссылок и детали интерпретатора относятся к CPython и зависят от версии/сборки. В CPython 3.15 существуют сборки с GIL и free-threaded режимом; поддержка нативных расширений должна соответствовать выбранному режиму. Реализация языка не является видом самого языка: связь с Python выражается realizes.
