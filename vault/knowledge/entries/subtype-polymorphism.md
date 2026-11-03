---
id: 01a1a27a-4862-7240-bb4f-a6ba94303dec
type: knowledge
name: "Subtype Polymorphism"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
specializes:
  - "[[knowledge/entries/polymorphism]]"
in_topic:
  - "[[knowledge/entries/subtyping]]"
---
# Subtype Polymorphism

Полиморфизм подтипов позволяет одному контексту работать со значениями разных подтипов общего типа через разрешённые им операции. Вход — значение совместимого подтипа и общий контракт; выход — допустимое использование с сохранением конкретного поведения. В классификации Cardelli и Wegner это inclusion polymorphism.

Динамическая диспетчеризация выбирает реализацию операции и часто обслуживает такой полиморфизм, но обозначает другой механизм. Подтипирование может быть структурным: общий пользовательский базовый класс не является универсальным требованием.
