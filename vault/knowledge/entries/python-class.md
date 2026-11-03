---
id: 01a1a114-45b5-790a-861a-6fef2e657dd9
type: knowledge
name: "Python Class"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/tutorial/classes.html"
  - "https://docs.python.org/3.15/reference/datamodel.html#basic-customization"
in_topic:
  - "[[knowledge/entries/python-classes-and-protocols]]"
specializes:
  - "[[knowledge/entries/python-callable]]"
---
# Python Class

Класс — объект, определяющий тип создаваемых экземпляров и их поведение. Выполнение class формирует пространство имён тела и передаёт его метаклассу; результат связывается с именем класса. Вызов класса обычно использует __new__ для создания экземпляра и __init__ для его инициализации.

Атрибуты класса и экземпляра имеют разные места хранения. Обычная функция, найденная через экземпляр, может стать bound method, получающим self. __init__ не создаёт объект и должен возвращать None. Изменяемый атрибут класса может оказаться общим для экземпляров.
