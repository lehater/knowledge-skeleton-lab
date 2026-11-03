---
id: 01a1a1c0-6d19-7da7-ad35-1f816b3053bb
type: knowledge
name: "Java Definite Assignment"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-16.html"
in_topic:
  - "[[knowledge/entries/java-syntax-and-semantics]]"
---
# Java Definite Assignment

Анализ потока управления требует определённого присваивания перед чтением локальной переменной или blank final поля. Вход — пути выполнения; результат — допуск либо ошибка компиляции. Это статическая гарантия инициализации, отличная от default-значений полей и компонентов массива.
