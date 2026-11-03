---
id: 01a1a27a-4765-71af-846a-11f17c504ae7
type: knowledge
name: "Structural Typing"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
  - "https://go.dev/ref/spec"
in_topic:
  - "[[knowledge/entries/type-system]]"
  - "[[knowledge/entries/subtyping]]"
---
# Structural Typing

Структурная типизация устанавливает равенство или совместимость типов по их структуре: доступным членам, их типам и установленным правилам соответствия. Вход — требуемая и предоставленная структуры; выход — решение о совместимости. При структурном подтипировании явно объявлять наследование от требуемого интерфейса может быть не нужно.

Go interface satisfaction и Python typing.Protocol показывают этот принцип в разных системах. Совпадение имён методов без проверки сигнатур не выражает полный статический контракт; runtime duck typing и структурная проверка типов — разные механизмы. Java interface требует объявленной номинальной связи.
