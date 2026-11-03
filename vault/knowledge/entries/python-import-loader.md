---
id: 01a1a114-4b80-70e6-8774-08b3bdbfc1c1
type: knowledge
name: "Python Import Loader"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/reference/import.html#loading"
  - "https://docs.python.org/3.15/library/importlib.html#importlib.abc.Loader"
in_topic:
  - "[[knowledge/entries/python-modules-and-import]]"
---
# Python Import Loader

Loader обеспечивает создание и выполнение модуля по найденному spec. create_module может предоставить объект либо передать создание стандартному механизму; exec_module выполняет инициализацию в пространстве имён уже подготовленного модуля. Результат наблюдается через заполненные атрибуты.

Перед выполнением import machinery помещает объект в кэш и задаёт служебные атрибуты. Ошибка исполнения распространяется наружу. Namespace packages обходятся без обычного исполняющего loader; связь ниже относится к ответственности loader для загружаемых им модулей, а не к утверждению, что каждый импорт вызывает loader.
