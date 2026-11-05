---
id: 01a1a116-267c-7f30-97ed-3e01f6f556f0
type: knowledge
name: "Python profiling"
lifecycle: enriched
review_status: proposed
kind: software
sources:
  - "https://docs.python.org/3.15/library/profiling.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
  - "[[knowledge/entries/python-execution-model]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python profiling

Пакет profiling в Python 3.15 объединяет средства измерения частоты и длительности выполнения кода. Статистическое семплирование наблюдает состояние периодически, детерминированное трассирование учитывает события вызовов. Вход — исполняемая нагрузка, выход — профиль для поиска узких мест.

Способы сбора различаются накладными расходами и детализацией. Измерение зависит от репрезентативности нагрузки; короткий запуск или изменение поведения из-за instrumentation может исказить вывод. Профиль служит основанием для выбора оптимизации, а не доказательством ускорения всех сценариев.
