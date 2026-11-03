---
id: 01a1a114-57f3-7183-a0d3-1f358dd8001b
type: knowledge
name: "CPython Free Threading"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/howto/free-threading-python.html"
in_topic:
  - "[[knowledge/entries/python-implementations-and-integration]]"
---
# CPython Free Threading

Free-threaded сборка CPython позволяет исполнять Python-код несколькими потоками параллельно при отключённом GIL. Она доступна начиная с 3.13 и меняет механизмы защиты объектов и управления ссылками; выигрыш зависит от характера нагрузки.

Вход — программа с корректной синхронизацией и совместимые расширения, выход — возможный параллелизм на CPU. Встроенные типы имеют внутренние защиты, но они не заменяют прикладной протокол синхронизации. Расширение без поддержки режима может включить GIL обратно; наличие free-threaded binary не доказывает, что GIL выключен в текущем процессе.
