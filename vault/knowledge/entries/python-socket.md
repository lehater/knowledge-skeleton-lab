---
id: 01a1a116-2354-7d02-b9ee-d650a269dca1
type: knowledge
name: "Python socket"
lifecycle: enriched
review_status: proposed
kind: software
sources:
  - "https://docs.python.org/3.15/library/socket.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python socket

socket предоставляет Python-интерфейс к сетевым сокетам ОС. Вход — адреса, параметры соединения и байтовые данные; выход — соединения, принятые/отправленные данные и сетевые ошибки. Объект поддерживает операции создания, connect/listen/accept, передачи и закрытия согласно выбранному протоколу.

Блокирующий, неблокирующий режим и timeout меняют условия ожидания. Семейства адресов и возможности зависят от ОС. TCP передаёт поток байтов: границы сообщений должен задавать прикладной протокол. TLS предоставляется отдельным ssl, а asyncio может организовать событийное обслуживание I/O.
