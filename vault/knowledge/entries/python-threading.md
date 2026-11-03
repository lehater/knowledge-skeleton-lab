---
id: 01a1a114-564e-735b-a489-e63c67fd8fd6
type: knowledge
name: "Python threading"
lifecycle: enriched
review_status: proposed
kind: software
sources:
  - "https://docs.python.org/3.15/library/threading.html"
  - "https://docs.python.org/3.15/howto/free-threading-python.html"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
  - "[[knowledge/entries/thread]]"
  - "[[knowledge/entries/synchronization]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python threading

threading предоставляет создание и координацию потоков одного процесса через Thread, locks, events и другие primitives. Потоки разделяют память; start запускает target, join ожидает завершения. Вход — callable и аргументы, выход — эффекты его выполнения и состояние потока.

В стандартной GIL-сборке CPython один поток за раз выполняет Python-код, но I/O и некоторые нативные операции могут освобождать GIL. Free-threaded сборка допускает иной параллелизм. Общие изменяемые данные требуют согласованной синхронизации; штатного безопасного принудительного убийства произвольного Thread нет.

Модуль включает и API потоков, и средства синхронизации; он не обозначает один поток или подтип общей Thread. Поэтому общие концепции связаны через in_topic.
