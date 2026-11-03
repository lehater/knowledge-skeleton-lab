---
id: 01a1a114-471b-7efe-8e17-b7ff5caea502
type: knowledge
name: "Python Metaclass"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#metaclasses"
  - "https://small.r7rs.org/attachment/r7rs.pdf"
in_topic:
  - "[[knowledge/entries/python-classes-and-protocols]]"
  - "[[knowledge/entries/metaprogramming]]"
---
# Python Metaclass

Метакласс определяет создание объектов-классов. По умолчанию используется type; пользовательский метакласс может подготовить namespace и обработать имя, bases и результат выполнения тела класса, возвращая новый class object.

Это точка для проверки деклараций или преобразования структуры создаваемого класса. Метакласс выбирается с учётом базовых классов; несовместимые метаклассы вызывают конфликт. Создание класса и создание экземпляра различаются. Пользовательский метакласс не является обязательным для обычной объектной модели, а его настройка не означает управление жизненным циклом всех экземпляров.
