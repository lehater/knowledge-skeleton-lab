---
id: 01a1a114-41f1-799d-b08f-1522e0176a39
type: knowledge
name: "Python Assignment"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/reference/simple_stmts.html#assignment-statements"
in_topic:
  - "[[knowledge/entries/python-syntax-and-semantics]]"
---
# Python Assignment

Присваивание сначала вычисляет правую часть, затем связывает имена с полученными объектами или изменяет атрибуты и элементы целевых объектов. Вход — выражение и target; результат — новая связь либо мутация. Распаковка сопоставляет получаемые элементы составным целям.

Простое a = b не копирует объект: оба имени могут ссылаться на него. Повторное связывание имени отличается от изменения объекта. Составное присваивание может использовать in-place протокол и имеет собственные правила вычисления цели; аннотация не вводит автоматическую проверку типа.
