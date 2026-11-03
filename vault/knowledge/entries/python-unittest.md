---
id: 01a1a114-544c-7847-8dba-514f663caaac
type: knowledge
name: "Python unittest"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/unittest.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python unittest

unittest организует проверки через test cases, fixtures, suites, runners и results. Вход — тесты и проверяемый код; выход — результаты выполнения с failures/errors и отчётом. setUp/tearDown и cleanup помогают управлять ресурсами теста.

Runner отвечает за запуск и сбор результатов, assertions выражают ожидаемое поведение. Проверка доказывает соответствие конкретным тестовым случаям, а не полноту спецификации. Этот модуль является частью стандартной библиотеки; pytest и другие сторонние инструменты имеют собственные контракты и здесь не раскрываются.
