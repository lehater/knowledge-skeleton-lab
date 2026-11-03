---
id: 01a1a1c4-1045-7f1d-8976-eb564e537253
type: knowledge
name: "Programming Interface"
lifecycle: enriched
review_status: proposed
kind: interface
sources:
  - "https://docs.oracle.com/javase/tutorial/java/concepts/interface.html"
  - "https://docs.python.org/3.15/library/typing.html#typing.Protocol"
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
in_topic:
  - "[[knowledge/entries/java-classes-and-interfaces]]"
  - "[[knowledge/entries/data-abstraction]]"
---
# Programming Interface

Программный интерфейс — доступный потребителю набор операций и их контрактов, позволяющий взаимодействовать с сущностью через определённую границу. Вход — обращения по контракту; выход — предусмотренные результаты и эффекты. Интерфейс как общая идея не требует единой языковой конструкции: явное объявление интерфейса и структурный протокол — разные формы её выражения.

Абстракция интерфейса шире ключевого слова interface: Cardelli и Wegner рассматривают интерфейсы классов и модулей, отделимые от внутреннего представления. Java interface задаёт номинальный контракт, Python Protocol — структурный контракт статического анализа, ABC — другой механизм абстрактного интерфейса. Совпадение операций не доказывает одинаковых гарантий проверки или поведения.
