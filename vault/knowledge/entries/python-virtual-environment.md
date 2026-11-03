---
id: 01a1a114-594c-7bf2-8de8-a48ea0464f5e
type: knowledge
name: "Python Virtual Environment"
lifecycle: enriched
review_status: proposed
kind: structure
sources:
  - "https://docs.python.org/3.15/library/venv.html"
in_topic:
  - "[[knowledge/entries/python-implementations-and-integration]]"
---
# Python Virtual Environment

Виртуальное окружение создаётся поверх базовой установки Python и содержит собственные site directories для пакетов проекта. venv формирует окружение; запуск его интерпретатора выбирает соответствующие пути и место установки зависимостей.

Вход — base installation и параметры создания, выход — интерпретатор/конфигурация и отдельный набор устанавливаемых пакетов. Изоляция от системных site-packages действует по умолчанию и может быть изменена. Окружения обычно воспроизводят из описания зависимостей, а не переносят между произвольными путями и ОС. venv не изолирует процессы, файловую систему или сеть.
