---
id: 01a1a114-4661-799f-a72b-5f69efe37a8f
type: knowledge
name: "Python Descriptor"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/howto/descriptor.html"
in_topic:
  - "[[knowledge/entries/python-classes-and-protocols]]"
  - "[[knowledge/entries/python-functions-and-iteration]]"
---
# Python Descriptor

Дескриптор настраивает доступ к атрибуту через __get__, __set__ и __delete__. Размещённый в классе объект-дескриптор участвует в lookup и получает экземпляр и/или класс; результатом становится вычисленное значение, bound method либо изменение состояния.

Data descriptors имеют приоритет над словарём экземпляра, non-data descriptors могут быть им перекрыты. property и связывание обычных методов используют этот механизм. Само хранение дескриптора в словаре экземпляра не запускает протокол автоматически. Он управляет доступом к атрибутам, а не временем жизни содержащего объекта.
