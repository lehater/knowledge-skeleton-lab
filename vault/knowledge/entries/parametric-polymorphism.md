---
id: 01a1a27a-4801-75b0-834b-fc0b8c14b017
type: knowledge
name: "Parametric Polymorphism"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
specializes:
  - "[[knowledge/entries/polymorphism]]"
in_topic:
  - "[[knowledge/entries/generic-programming]]"
---
# Parametric Polymorphism

Параметрический полиморфизм описывает единое определение через параметры типов, позволяя применять его к разным допустимым типам с сохранением типовых зависимостей. Вход — полиморфное определение и выбор типов; выход — согласованное использование определения в конкретном типовом контексте. Bounds могут ограничивать доступные операции.

Общая идея не задаёт стирание типов, мономорфизацию или наличие runtime metadata. Java generics и параметры типов в Python type hints выражают её с разными правилами проверки и исполнения. Наличие generic-параметра в языке с reflection и эффектами не обещает строгую теорему параметричности для любого кода.
