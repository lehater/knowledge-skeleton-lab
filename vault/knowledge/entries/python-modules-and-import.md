---
id: 01a1a113-e024-7ad1-b8e7-a036a874fe8b
type: knowledge
name: "Python Modules and Import"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://docs.python.org/3.15/tutorial/modules.html"
  - "https://docs.python.org/3.15/reference/import.html"
  - "https://docs.python.org/3.15/whatsnew/3.15.html#pep-810-explicit-lazy-imports"
in_topic:
  - "[[knowledge/entries/python]]"
---
# Python Modules and Import

Модули задают именованные пространства организации кода; пакеты организуют пространство имён модулей. Импорт соединяет поиск, загрузку и связывание имён, используя кэш sys.modules, module spec, finders и loaders.

Вход — имя модуля и контекст поиска; результат — доступ к объекту модуля или импортированным именам либо исключение. Обычная первичная загрузка исполняет код модуля, повторный импорт обычно использует кэш. В Python 3.15 явный lazy import позволяет отложить загрузку до использования имени. Import package отличается от устанавливаемого distribution package.
