---
id: 01a1a114-579f-740f-a616-aa1eea1f1784
type: knowledge
name: "CPython Global Interpreter Lock"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/howto/free-threading-python.html"
  - "https://docs.python.org/3.15/c-api/threads.html"
in_topic:
  - "[[knowledge/entries/python-implementations-and-integration]]"
---
# CPython Global Interpreter Lock

GIL в соответствующей сборке CPython координирует доступ потоков к интерпретатору: выполнение Python-кода требует владения lock. При блокирующем I/O или в нативном вычислении поток может освобождать его. Это ограничивает параллельное выполнение Python-кода потоками одного интерпретатора.

GIL не делает составную последовательность операций приложения атомарной и не отменяет потребность в locks. Free-threaded сборка может работать с отключённым GIL; некоторые расширения способны включить его обратно. Поэтому наличие GIL не записано как безусловная составная часть любой допустимой сборки CPython.
