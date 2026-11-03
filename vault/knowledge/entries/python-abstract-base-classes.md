---
id: 01a1a114-476c-71f6-acff-2d0a317cb802
type: knowledge
name: "Python Abstract Base Classes"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/library/abc.html"
  - "https://docs.python.org/3.15/library/collections.abc.html"
in_topic:
  - "[[knowledge/entries/python-classes-and-protocols]]"
  - "[[knowledge/entries/programming-interface]]"
  - "[[knowledge/entries/subtyping]]"
---
# Python Abstract Base Classes

ABC описывает абстрактный интерфейс и может предоставлять общую реализацию. abc.ABC/ABCMeta и abstractmethod позволяют отложить создание экземпляров до реализации обязательных методов. collections.abc задаёт интерфейсы контейнеров, iterable и других объектов.

Проверки isinstance/issubclass учитывают наследование и зарегистрированные virtual subclasses. Такая регистрация не добавляет методов и не помещает ABC в MRO. Вход — определение интерфейса и класса, выход — ограничение инстанцирования или проверка принадлежности. Наличие одного имени метода ещё не доказывает выполнение полного семантического контракта.
