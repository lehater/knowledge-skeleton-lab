---
id: 01a197e4-f735-7601-af61-5dc39868b63c
type: knowledge
name: "E2B Sandbox Environment Variables"
kind: mechanism
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/e2b-sandbox]]"
sources:
  - "https://docs.e2b.dev/sandbox/environment-variables"
---
# E2B Sandbox Environment Variables

Параметр `envs` передаёт переменные окружения при создании E2B Sandbox либо для отдельного вызова исполнения кода или команды. Переменные отдельного вызова перекрывают одноимённые глобальные только для этой команды. Документация прямо указывает: область действия ограничена командой, но значения не являются приватными на уровне ОС. Это механизм передачи параметров процессу, а не изоляция секрета от выполняемого кода.
