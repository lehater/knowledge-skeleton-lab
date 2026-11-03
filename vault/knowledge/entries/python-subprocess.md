---
id: 01a1a116-22e6-798c-bb16-f4771a6a63f2
type: knowledge
name: "Python subprocess"
lifecycle: enriched
review_status: proposed
kind: software
sources:
  - "https://docs.python.org/3.15/library/subprocess.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python subprocess

subprocess запускает дочерние программы, соединяет stdin/stdout/stderr и получает return code. run предоставляет завершённый результат, Popen — управление процессом и каналами. Вход — команда, аргументы и параметры окружения; выход — статус и при необходимости захваченные данные.

Timeout, check и режим текст/bytes определяют контракт результата. shell=True передаёт дополнительную интерпретацию shell и требует корректного обращения с недоверенными данными. Pipes нужно обслуживать без взаимной блокировки; ожидание завершения не гарантирует, что любой объём вывода безопасно поместится в памяти.
