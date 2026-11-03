---
id: 01a1a114-4ace-7c80-8bc5-823b72897a5f
type: knowledge
name: "Python Import System"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/reference/import.html"
  - "https://docs.python.org/3.15/whatsnew/3.15.html#pep-810-explicit-lazy-imports"
in_topic:
  - "[[knowledge/entries/python-modules-and-import]]"
  - "[[knowledge/entries/python-execution-model]]"
---
# Python Import System

Система импорта ищет модуль, создаёт и инициализирует его при необходимости и поддерживает кэш sys.modules. Инструкция import дополнительно связывает результат с локальным именем. Finders возвращают module spec, loader обеспечивает загрузку; hooks позволяют менять поиск.

Объект помещается в sys.modules до выполнения кода, что позволяет разрешать рекурсивные импорты, но допускает наблюдение частично инициализированного модуля. Неудачная первичная загрузка удаляет запись этого модуля. В Python 3.15 lazy import откладывает загрузку до использования имени, поэтому ошибка или побочный эффект могут возникнуть позднее обычного import.
