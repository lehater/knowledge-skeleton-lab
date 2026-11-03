---
id: 01a1a1c4-1138-72c2-9b55-5afdf3e145e6
type: knowledge
name: "Generic Programming"
lifecycle: enriched
review_status: proposed
kind: practice
sources:
  - "https://doc.rust-lang.org/book/ch10-00-generics.html"
  - "https://docs.python.org/3.15/library/typing.html"
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
in_topic:
  - "[[knowledge/entries/java-generics]]"
  - "[[knowledge/entries/polymorphism]]"
---
# Generic Programming

Обобщённое программирование выражает алгоритмы и структуры с параметрами типов, сохраняя общую форму вычисления. Вход — типовые параметры, ограничения и данные; выход — повторно используемое определение для допустимых типов. Ограничения описывают доступные операции. Способ получения исполняемого кода и доступность параметров во время исполнения определяются технологией.

В этом срезе рассматривается программирование с параметрами типов; его типовой основой служит [[knowledge/entries/parametric-polymorphism|Parametric Polymorphism]]. Практика построения reusable-алгоритмов и механизм полиморфизма имеют разные референты. Java generics проверяются компилятором и используют erasure; Python generics задают отношения типов для анализатора, сохраняя динамическое исполнение.
