---
id: 01a1a1c0-733a-7c76-8ff2-60a12de89f51
type: knowledge
name: "Java Type Inference"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-18.html"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-14.html#jls-14.4"
in_topic:
  - "[[knowledge/entries/java-generics]]"
---
# Java Type Inference

Компилятор выводит неизвестные типы из ограничений контекста и аргументов: reduction, incorporation и resolution. Отдельные правила var выводят локальный тип из инициализатора. Выход — согласованные статические типы либо диагностика; inference не превращает Java в динамически типизированный язык.
