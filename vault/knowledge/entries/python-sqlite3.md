---
id: 01a1a116-23c2-7e07-bd8a-31ccd46b7b7d
type: knowledge
name: "Python sqlite3"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/sqlite3.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python sqlite3

sqlite3 предоставляет DB-API интерфейс к SQLite — встраиваемой SQL базе без отдельного серверного процесса. Вход — соединение, SQL и связанные параметры, выход — строки результатов, изменения транзакции или исключение. Модуль зависит от доступной библиотеки SQLite и может отсутствовать в сборке.

Параметры следует передавать через placeholders вместо склейки SQL. Управление commit/rollback определяется настройками транзакций; выход из context manager соединения не равен его автоматическому close. Конкурентный доступ, блокировки и типы данных имеют ограничения SQLite и соответствующего Python API.
