---
id: 01a1a114-58a5-73ff-9eec-cf4ea10f3c8b
type: knowledge
name: "Python Embedding"
lifecycle: enriched
review_status: proposed
kind: practice
sources:
  - "https://docs.python.org/3.15/extending/embedding.html"
  - "https://docs.python.org/3.15/c-api/init.html"
in_topic:
  - "[[knowledge/entries/python-implementations-and-integration]]"
---
# Python Embedding

Встраивание позволяет основному C/C++ приложению инициализировать Python, передавать ему код и данные и получать результаты. В отличие от extension module, главным процессом управления выступает host application, вызывающее интерпретатор.

Host отвечает за конфигурацию поиска, инициализацию/финализацию, владение объектами и обработку ошибок на границе API. Наличие нескольких интерпретаторов требует соблюдения их правил изоляции состояния. Встраивание полезно для пользовательских scripts и расширяемости, но само по себе не ограничивает возможности исполняемого Python-кода.
