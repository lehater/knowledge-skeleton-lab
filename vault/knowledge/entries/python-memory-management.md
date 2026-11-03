---
id: 01a1a113-e179-7840-8324-f0d49259f5e9
type: knowledge
name: "Python Memory Management"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#objects-values-and-types"
  - "https://docs.python.org/3.15/c-api/memory.html"
  - "https://docs.python.org/3.15/library/gc.html"
in_topic:
  - "[[knowledge/entries/python]]"
---
# Python Memory Management

Язык предоставляет автоматическое управление временем жизни объектов, оставляя стратегию освобождения памяти реализации. Объект, доступный из программы, сохраняется; недостижимость допускает сборку, но не обещает немедленную финализацию.

В CPython размещением занимается менеджер памяти, временем жизни — подсчёт ссылок вместе со сборкой циклов. Слабые ссылки позволяют наблюдать объект, не удерживая его живым. Вход — выделения памяти и изменение достижимости, результат — размещение и возможное освобождение. Режим сборки CPython влияет на детали учёта ссылок и аллокаторы; закрытие внешнего ресурса требует отдельного управления.

Основные понятия: [[knowledge/entries/cpython-reference-counting|CPython Reference Counting]], [[knowledge/entries/cpython-cyclic-gc|CPython Cyclic Garbage Collection]], [[knowledge/entries/python-weak-reference|Python Weak Reference]], [[knowledge/entries/cpython-memory-allocator|CPython Memory Allocator]].
