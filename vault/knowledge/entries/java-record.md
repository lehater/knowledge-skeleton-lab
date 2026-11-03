---
id: 01a1a1c0-6f44-7252-a7ef-a3772fa4e01c
type: knowledge
name: "Java Record Class"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-8.html#jls-8.10"
specializes:
  - "[[knowledge/entries/java-class]]"
in_topic:
  - "[[knowledge/entries/java-classes-and-interfaces]]"
  - "[[knowledge/entries/mutability]]"
---
# Java Record Class

Record задаёт агрегат компонентов с соответствующими полями, accessor-методами и каноническим конструктором. Класс final; компоненты хранятся в final полях. Производные equals, hashCode и toString опираются на компоненты. Ссылочные компоненты могут указывать на изменяемые объекты.

Неизменность полей компонентов является поверхностной: изменение объекта по ссылочному компоненту допустимо. Поэтому record не объявляется универсальной реализацией глубокой неизменяемости.
