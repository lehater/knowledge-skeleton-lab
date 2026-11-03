---
id: 01a1a1c4-139a-7095-973b-7149c761f9c8
type: knowledge
name: "Lexical Scope"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://docs.python.org/3.15/tutorial/classes.html#python-scopes-and-namespaces"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-6.html#jls-6.3"
  - "https://small.r7rs.org/attachment/r7rs.pdf"
  - "https://www.cs.tufts.edu/comp/150FP/archive/peter-landin/mechanical-eval.pdf"
in_topic:
  - "[[knowledge/entries/java-packages-and-modules]]"
---
# Lexical Scope

Лексическая область видимости определяет доступность привязки имени по расположению объявления и использования в тексте программы. Вход — имя, место использования и вложенные области; выход — выбранная привязка или ошибка разрешения. Время жизни объекта и доступность имени — разные вопросы. Правила затенения, локальных областей и специальных объявлений определяет язык.

Общая идея — разрешать свободные имена по лексическому окружению определения. Python nonlocal и Java захват локальных переменных выражают разные дополнительные правила. Scope, доступность члена (access control) и время жизни объекта различаются; составные языковые карточки этих областей связаны тематически, без утверждения, что всё их содержание является видом lexical scope.
