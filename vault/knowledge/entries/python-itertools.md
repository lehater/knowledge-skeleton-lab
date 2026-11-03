---
id: 01a1a116-252e-71d5-82d5-bde1a5cd7e27
type: knowledge
name: "Python itertools"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/itertools.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
  - "[[knowledge/entries/python-functions-and-iteration]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python itertools

itertools предоставляет комбинируемые средства построения итераторов: цепочки, фильтрацию, группировку, накопление и комбинации. Вход — iterable и параметры преобразования, выход — итератор результатов. Ленивость позволяет обрабатывать поток без обязательного хранения всех значений.

Бесконечные источники требуют ограничивающего потребителя. Некоторые операции сохраняют входные элементы или буферизуют данные; ленивый интерфейс не доказывает постоянную память для любой композиции. groupby объединяет соседние группы, а не все равные ключи произвольного неупорядоченного входа.
