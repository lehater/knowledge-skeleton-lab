---
id: 01a18e44-0ba2-70dc-a8e5-b019e196550b
type: knowledge
name: "Task Cancellation"
review_status: proposed
kind: mechanism
lifecycle: enriched
sources:
  - "https://docs.python.org/3/library/asyncio-task.html"
  - "https://kotlinlang.org/docs/coroutines-basics.html"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/concurrent/Future.html"
in_topic:
  - "[[knowledge/entries/task-lifecycle]]"
---
# Task Cancellation

Отмена задачи выражает запрос прекратить ненужную работу и согласовать её завершение с потребителями. Вход — запрос отмены и текущее состояние; выход — сигнал, изменённое состояние результата или завершение по контракту. Механизм должен учитывать очистку и возможное продолжение уже запущенного вычисления.

asyncio.Task.cancel доставляет CancelledError и допускает подавление; Java Future.cancel может отметить Future отменённым и попытаться прервать выполнение. Ни один общий контракт не обещает безопасного немедленного уничтожения произвольного вычисления.
