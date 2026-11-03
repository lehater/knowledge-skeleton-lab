---
id: 01a1a114-4a7e-76db-8c8b-6804f861c619
type: knowledge
name: "Python Import Package"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/reference/import.html#packages"
  - "https://docs.python.org/3.15/tutorial/modules.html#packages"
in_topic:
  - "[[knowledge/entries/python-modules-and-import]]"
specializes:
  - "[[knowledge/entries/python-module]]"
---
# Python Import Package

Import package — модуль, который может содержать подмодули и подпакеты и имеет __path__. Regular package обычно включает __init__.py, исполняемый при загрузке; namespace package может объединять несколько участков поиска и не требует такого файла.

Вход — составное имя и путь поиска, выход — пространство имён для доступа к подмодулям. Устройство пакета помогает организовать код, но не определяет, как он устанавливается: distribution package может содержать несколько import packages. Пакет является видом модуля, а не отдельной гарантией физической папки.
