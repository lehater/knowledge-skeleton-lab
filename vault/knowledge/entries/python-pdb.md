---
id: 01a1a116-2618-77b4-b82d-df4992a807f5
type: knowledge
name: "Python pdb"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/pdb.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
  - "[[knowledge/entries/python-execution-model]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python pdb

pdb — интерактивный отладчик для выполнения Python: breakpoints, пошаговое продвижение, просмотр стека и значений, а также post-mortem после исключения. Вход — программа или контекст отказа и команды пользователя; выход — управляемое выполнение и диагностическое состояние.

Проверка выражений в отладчике может исполнять код и менять состояние программы. Просмотр frame отражает конкретный запуск, а не общий граф зависимостей. Изменение тайминга при остановках ограничивает применимость отладки к гонкам и конкурентным отказам.
