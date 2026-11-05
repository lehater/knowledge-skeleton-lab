---
id: 01a1a114-5389-7c04-9841-79d75c25df6b
type: knowledge
name: "Python pickle"
lifecycle: enriched
review_status: proposed
kind: software
sources:
  - "https://docs.python.org/3.15/library/pickle.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python pickle

pickle сериализует поддерживаемые Python-объекты в байтовый поток и восстанавливает их, сохраняя общие ссылки и рекурсивные структуры. Вход — объект или pickle bytes, выход — bytes или восстановленный граф объектов. Для классов и функций важно наличие импортируемых определений.

Протокол и доступность определений влияют на совместимость. Unpickling способен исполнять произвольный код: формат предназначен для доверенных данных. Это механизм сохранения Python-объектов, а не универсальный безопасный формат межсистемного обмена. Текстовое представление JSON имеет другой контракт.
