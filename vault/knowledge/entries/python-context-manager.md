---
id: 01a1a114-500a-7092-bbbd-24e5d3432eeb
type: knowledge
name: "Python Context Manager"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#with-statement-context-managers"
  - "https://docs.python.org/3.15/reference/compound_stmts.html#the-with-statement"
in_topic:
  - "[[knowledge/entries/python-exceptions-and-resources]]"
  - "[[knowledge/entries/python-classes-and-protocols]]"
---
# Python Context Manager

Context manager предоставляет __enter__/__exit__ для входа и выхода из контекста выполнения. with получает менеджер, вызывает enter, передаёт его результат в as и выполняет блок; после успешного enter вызывает exit при выходе из блока.

exit получает сведения об исключении и может подавить его, вернув истинное значение. Если enter сам завершился ошибкой, exit этого менеджера не вызывается. Менеджер может управлять файлом, блокировкой или другим ресурсом, но конкретная ответственность определяется реализацией. async with использует awaitable методы __aenter__/__aexit__.
