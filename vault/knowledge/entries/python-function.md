---
id: 01a1a114-47c5-775d-a973-db7db456e32d
type: knowledge
name: "Python Function"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/tutorial/controlflow.html#defining-functions"
  - "https://docs.python.org/3.15/reference/compound_stmts.html#function-definitions"
in_topic:
  - "[[knowledge/entries/python-functions-and-iteration]]"
---
# Python Function

Функция — вызываемый объект, созданный выполнением def или lambda и содержащий код вместе с доступом к окружению. Вызов связывает аргументы с параметрами и выполняет тело; выход — значение return, None при обычном достижении конца либо исключение.

Функция является значением первого класса и может быть аргументом или результатом другой функции. Определение обычной функции не исполняет её тело. Значения по умолчанию вычисляются при определении, поэтому изменяемый default может разделяться между вызовами. Generator и coroutine functions при вызове возвращают специальные объекты отложенного выполнения.
