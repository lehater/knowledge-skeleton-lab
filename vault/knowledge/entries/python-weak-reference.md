---
id: 01a1a114-519b-7a3f-8a3d-5a396863924a
type: knowledge
name: "Python Weak Reference"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/library/weakref.html"
in_topic:
  - "[[knowledge/entries/python-memory-management]]"
---
# Python Weak Reference

Слабая ссылка позволяет получить объект, пока он существует, не удерживая его живым сама по себе. Вход — поддерживающий weak references объект; выход обращения — объект или None после его удаления. Weak mappings полезны для caches, которые не должны определять время жизни значений.

До фактического удаления объект может ещё возвращаться даже без обычных сильных ссылок. Поддержка слабых ссылок зависит от типа. Callback или finalizer позволяет реагировать на удаление, но захваченная сильная ссылка на referent может нарушить задуманный жизненный цикл.
