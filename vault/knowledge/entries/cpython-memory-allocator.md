---
id: 01a1a114-51ec-7223-beed-381d2ca7a025
type: knowledge
name: "CPython Memory Allocator"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/c-api/memory.html"
in_topic:
  - "[[knowledge/entries/python-memory-management]]"
part_of:
  - "[[knowledge/entries/cpython]]"
---
# CPython Memory Allocator

Менеджер памяти CPython размещает объекты и внутренние данные в private heap, используя домены и аллокаторы для разных задач. Вход — запрос выделения, изменения или освобождения блока; выход — память либо ошибка выделения. Выбор аллокатора зависит от сборки и размера/назначения данных.

Расширения должны использовать согласованную пару API выделения и освобождения. Смешивание Python memory API с произвольным free/malloc для одного блока повреждает управление памятью. Освобождение объекта не гарантирует немедленного возврата памяти ОС: caches и арены могут её сохранять.
