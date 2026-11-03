---
id: 01a1a1c4-10eb-776e-bceb-85e4de8785c7
type: knowledge
name: "Polymorphism"
lifecycle: enriched
review_status: proposed
kind: property
sources:
  - "https://www.microsoft.com/en-us/research/publication/basic-polymorphic-typechecking/"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-15.html#jls-15.12.4.4"
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
in_topic:
  - "[[knowledge/entries/java-inheritance-and-dispatch]]"
---
# Polymorphism

Полиморфизм позволяет данным или вычислениям иметь несколько типов либо работать с несколькими типами. Ответственность — выразить общее использование при различии конкретных типов. Вход — типизированные значения и общее вычисление; выход — согласованное использование в допустимых контекстах. Параметрический полиморфизм абстрагируется от типового параметра; динамическая диспетчеризация — отдельный механизм, а не определение всего полиморфизма.

Cardelli и Wegner различают параметрический и inclusion/subtype-полиморфизм, а также ad-hoc формы. [[knowledge/entries/parametric-polymorphism|Parametric Polymorphism]] и [[knowledge/entries/subtype-polymorphism|Subtype Polymorphism]] — разные виды. Перегрузка Java выбирает сигнатуру статически; виртуальный вызов выбирает реализацию динамически. Python поддерживает работу с разными объектами через протоколы; такая работа не требует общей пользовательской базы.
