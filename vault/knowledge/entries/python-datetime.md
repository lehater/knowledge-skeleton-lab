---
id: 01a1a116-2179-7fcc-b63e-6df4ddb30381
type: knowledge
name: "Python datetime"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/datetime.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python datetime

datetime предоставляет date, time, datetime и timedelta для календарных значений, длительностей, форматирования и арифметики. Вход — компоненты времени или значения, выход — объекты времени, интервалы и представления.

Naive значение не задаёт однозначную временную зону; aware содержит информацию tzinfo для интерпретации момента. Правила реальных зон доступны через zoneinfo. Календарное локальное время и измерение прошедшей длительности имеют разные контракты; смешение naive/aware либо игнорирование переходов зон приводит к ошибкам сравнения и планирования.
