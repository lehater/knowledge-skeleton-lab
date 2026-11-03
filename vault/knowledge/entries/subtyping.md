---
id: 01a1a27a-47ac-797c-ab5e-b3d6dc3b6941
type: knowledge
name: "Subtyping"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
  - "https://www.cs.utexas.edu/~wcook/papers/InheritanceSubtyping90/CookPOPL90.pdf"
in_topic:
  - "[[knowledge/entries/type-system]]"
---
# Subtyping

Подтипирование задаёт отношение типов, позволяющее использовать значение более частного типа в контексте, допускающем более общий тип, по правилам выбранной системы типов. Вход — два типа и требуемый контекст; выход — допустимость подстановки. Отношение может устанавливаться номинально или структурно.

Наследование повторно использует или расширяет определения; подтипирование проверяет совместимость использования. Cook, Hill и Canning показывают, что эти отношения в общем случае различаются. Формальное подтипирование языка также не доказывает соблюдение всех прикладных поведенческих контрактов.
