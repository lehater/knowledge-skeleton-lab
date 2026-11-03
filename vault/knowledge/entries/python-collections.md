---
id: 01a1a116-2424-7ac7-aeac-e1b1330ba8fd
type: knowledge
name: "Python collections"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/collections.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python collections

collections предоставляет специализированные контейнеры: deque для операций с концов, Counter для подсчёта, defaultdict для получения отсутствующих значений, ChainMap для объединённого доступа и namedtuple для именованных полей tuple. Вход — элементы и операции, выход — контейнеры и результаты запросов.

Каждый контейнер задаёт отдельный контракт, а не ускоряет любую заменяемую коллекцию. ChainMap ищет по цепочке, но изменяет первое отображение; namedtuple сохраняет неизменяемость tuple на уровне полей. Эти реализации отличаются от абстрактных интерфейсов collections.abc.
