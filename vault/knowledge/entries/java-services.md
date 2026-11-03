---
id: 01a1a1c0-7616-7e75-adcd-60009245826a
type: knowledge
name: "Java Module Services"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-7.html#jls-7.7.3"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-7.html#jls-7.7.4"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/ServiceLoader.html"
in_topic:
  - "[[knowledge/entries/java-packages-and-modules]]"
---
# Java Module Services

Uses объявляет потребление сервиса, provides ... with — его поставщиков. ServiceLoader обнаруживает провайдеров по контракту сервиса. Вход — сервисный тип и окружение загрузки; выход — доступные поставщики. Это связывает контракт и расширяемость без жёсткого перечисления реализаций в потребителе.
