---
id: 01a1a114-4fae-72f7-a49f-13f36861a904
type: knowledge
name: "Python ExceptionGroup"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/builtins/exceptions.html#exception-groups"
  - "https://docs.python.org/3.15/tutorial/errors.html#raising-and-handling-multiple-unrelated-exceptions"
in_topic:
  - "[[knowledge/entries/python-exceptions-and-resources]]"
  - "[[knowledge/entries/python-concurrency]]"
specializes:
  - "[[knowledge/entries/python-exception]]"
---
# Python ExceptionGroup

ExceptionGroup представляет несколько исключений в одной вложенной структуре и позволяет передать связанные отказы без потери отдельных причин. except* сопоставляет типы внутри группы и обрабатывает подходящие подгруппы; оставшиеся ошибки распространяются дальше.

ExceptionGroup содержит только подклассы Exception; BaseExceptionGroup допускает более широкие исключения. Это полезно при завершении нескольких конкурентных работ, в частности TaskGroup. Вход — коллекция отказов, выход — группа или обработанные подгруппы. Обычный except и except* имеют разную семантику; группы доступны начиная с Python 3.11.
