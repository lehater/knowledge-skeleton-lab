---
id: 01a1a116-209e-718d-815b-60ddea00d9d8
type: knowledge
name: "Python re"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/re.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python re

re предоставляет регулярные выражения для поиска, сопоставления, разбиения и замены фрагментов текста. Вход — pattern и str либо bytes, выход — Match, найденные фрагменты, изменённая строка или отсутствие совпадения.

Типы pattern и текста должны согласовываться: str и bytes не смешиваются. Экранирование строки Python и синтаксис regex — два разных уровня, поэтому raw strings часто упрощают запись pattern. Регулярное выражение описывает шаблон текста и не заменяет полноценный parser для произвольной грамматики.
