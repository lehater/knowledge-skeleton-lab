---
id: 01a1a114-4a16-7b84-beff-95026d048ec2
type: knowledge
name: "Python Module"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#modules"
  - "https://docs.python.org/3.15/tutorial/modules.html"
in_topic:
  - "[[knowledge/entries/python-modules-and-import]]"
---
# Python Module

Модуль — объект, задающий базовую организационную единицу кода и собственный namespace. Код Python-модуля содержит определения и инструкции, исполняемые при его инициализации; другие модули получают доступ через импорт. Файл .py — распространённая форма, но существуют и встроенные/нативные модули.

Вход — загрузка определения и обращения по имени, выход — объект модуля и его атрибуты. __name__ характеризует имя, __main__ — исполнение как главной программы. Глобальные переменные функции относятся к её модулю; import обычно переиспользует объект из sys.modules.
