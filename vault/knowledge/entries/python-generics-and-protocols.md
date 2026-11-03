---
id: 01a1a114-455b-7108-a61a-d11af29c0396
type: knowledge
name: "Python Generics and Typing Protocols"
lifecycle: enriched
review_status: proposed
kind: topic
sources:
  - "https://docs.python.org/3.15/library/typing.html#building-generic-types-and-type-aliases"
  - "https://docs.python.org/3.15/library/typing.html#typing.Protocol"
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
  - "https://docs.python.org/3.15/library/typing.html#nominal-vs-structural-subtyping"
in_topic:
  - "[[knowledge/entries/python-data-and-types]]"
  - "[[knowledge/entries/programming-interface]]"
  - "[[knowledge/entries/structural-typing]]"
  - "[[knowledge/entries/parametric-polymorphism]]"
  - "[[knowledge/entries/generic-programming]]"
---
# Python Generics and Typing Protocols

Обобщённые классы, функции и aliases связывают типы входов и результатов через параметры типов, например сохранение типа элемента контейнера. Protocol описывает набор членов для структурного подтипирования: совместимый класс может не наследоваться от объявленного протокола.

Вход — описание параметров и структуры интерфейса, выход статического анализа — проверка их согласованности. Параметризованные generic-типы не проверяют содержимое контейнеров автоматически при выполнении. runtime_checkable допускает ограниченную проверку наличия членов, а не их сигнатур. Это иной контракт, чем абстрактный класс с обязательными abstract methods.

Общие оси: параметры типов выражают Parametric Polymorphism, а Protocol — Structural Typing. Карточка объединяет эти механизмы, поэтому её тематические связи не утверждают, что generics и protocols тождественны.
