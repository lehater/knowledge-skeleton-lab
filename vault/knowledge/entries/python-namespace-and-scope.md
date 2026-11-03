---
id: 01a1a114-4c33-73ce-beb7-5332983e64ac
type: knowledge
name: "Python Namespace and Scope"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://docs.python.org/3.15/reference/executionmodel.html#naming-and-binding"
  - "https://docs.python.org/3.15/tutorial/classes.html#python-scopes-and-namespaces"
in_topic:
  - "[[knowledge/entries/python-execution-model]]"
---
# Python Namespace and Scope

Namespace сопоставляет имена объектам; scope задаёт, где конкретная связь видима. Разрешение имени использует ближайшее подходящее окружение. Вход — имя и контекст блока, выход — объект или NameError/UnboundLocalError.

Связывание имени внутри функции делает его локальным для блока, если нет global/nonlocal. Обычные методы не получают область класса как замыкание; доступ к атрибутам идёт через объект или класс. Annotation scopes имеют особые правила. Поэтому схема «local → enclosing → global → builtins» полезна для функций, но требует уточнений для классов и аннотаций.
