---
id: 01a1a27a-4899-75aa-a997-84eed86de998
type: knowledge
name: "Dynamic Dispatch"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
  - "https://docs.racket-lang.org/guide/classes.html"
in_topic:
  - "[[knowledge/entries/polymorphism]]"
---
# Dynamic Dispatch

Динамическая диспетчеризация выбирает вызываемую реализацию операции при исполнении на основе фактического получателя или других участвующих значений согласно модели языка. Вход — вызов, получатель и контекст; выход — выбранная реализация либо отказ разрешения. Это позволяет общему вызову получать различное поведение для разных объектов.

В Java виртуальный вызов использует runtime-класс получателя после статического выбора сигнатуры перегрузки. Python связывает методы через поиск атрибутов, MRO и дескрипторы. Эти правила не означают одинакового алгоритма поиска или multiple dispatch во всех языках.
