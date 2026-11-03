---
id: 01a1a114-455b-7108-a61a-d11af29c0396
type: knowledge
name: "Python Generics and Typing Protocols"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/library/typing.html#building-generic-types-and-type-aliases"
  - "https://docs.python.org/3.15/library/typing.html#typing.Protocol"
in_topic:
  - "[[knowledge/entries/python-data-and-types]]"
---
# Python Generics and Typing Protocols

Обобщённые классы, функции и aliases связывают типы входов и результатов через параметры типов, например сохранение типа элемента контейнера. Protocol описывает набор членов для структурного подтипирования: совместимый класс может не наследоваться от объявленного протокола.

Вход — описание параметров и структуры интерфейса, выход статического анализа — проверка их согласованности. Параметризованные generic-типы не проверяют содержимое контейнеров автоматически при выполнении. runtime_checkable допускает ограниченную проверку наличия членов, а не их сигнатур. Это иной контракт, чем абстрактный класс с обязательными abstract methods.
