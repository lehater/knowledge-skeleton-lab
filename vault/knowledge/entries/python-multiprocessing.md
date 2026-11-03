---
id: 01a1a114-569f-7823-b955-c5661e5ae4d9
type: knowledge
name: "Python multiprocessing"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/multiprocessing.html"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
---
# Python multiprocessing

multiprocessing запускает работы в отдельных процессах, позволяя использовать несколько CPU независимо от общего GIL одного интерпретатора. Process, pools, queues и pipes предоставляют запуск и обмен данными; вход — target и данные, выход — эффекты, сообщения и exit status.

Обычные объекты между процессами не разделяются автоматически; обмен часто требует сериализации. Shared memory и manager имеют отдельные контракты. Методы запуска и их defaults зависят от платформы и версии; в Python 3.14+ fork больше не является default ни на одной платформе. Завершение процесса не эквивалентно кооперативной отмене coroutine.
