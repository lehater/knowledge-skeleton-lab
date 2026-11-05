---
id: 01a1a114-506a-7508-a8d0-73a888826811
type: knowledge
name: "Python Traceback"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#traceback-objects"
in_topic:
  - "[[knowledge/entries/python-exceptions-and-resources]]"
---
# Python Traceback

Python Traceback — формальный runtime-тип traceback object Python.

Traceback представляет путь распространения исключения через execution frames с положениями в коде. При раскрутке стека добавляются связанные traceback objects; исключение предоставляет их через __traceback__. Это вход для диагностики причины и места отказа.

Traceback описывает фактический путь конкретного исключения, а не статическую зависимость модулей. Он удерживает ссылки на frame и их окружение, что может продлевать жизнь объектов. Отформатированная строка traceback отличается от самих объектов, а наличие traceback не означает, что исключение осталось необработанным.
