---
id: 01a1a114-52d4-7a3e-bf26-20ff123007aa
type: knowledge
name: "Python pathlib"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/pathlib.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python pathlib

pathlib предоставляет объектное представление файловых путей. PurePath выполняет лексические операции без доступа к ОС; Path соединяет операции над путями с файловой системой. Вход — компоненты пути и операции, выход — путь, metadata, данные файла либо OSError.

Путь как объект не доказывает существование ресурса и не удерживает открытый файл. Семантика разделителей, разрешения имён и отдельных операций зависит от платформы и файловой системы. Работа через Path не изолирует программу от прав доступа и изменений файлов конкурентными процессами.
