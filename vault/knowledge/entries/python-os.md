---
id: 01a1a116-21de-76c4-9098-4a532d87a5f7
type: knowledge
name: "Python os"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/os.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python os

os предоставляет интерфейс к возможностям операционной системы: окружению, файловым дескрипторам, каталогам, процессам и metadata. Вход — пути, параметры и системные операции, выход — данные ОС, изменённое состояние или OSError.

Одинаковая доступная функциональность стремится иметь переносимый интерфейс, но набор возможностей и права зависят от платформы. os не создаёт автоматически границу изоляции для кода. Для высокоуровневого запуска дочерних команд документация направляет к subprocess, для объектных путей — к pathlib.
