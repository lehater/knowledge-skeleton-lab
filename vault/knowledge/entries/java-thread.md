---
id: 01a1a1c0-78eb-7c7a-b086-2b4d33dd468c
type: knowledge
name: "Java Thread"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/Thread.html"
  - "https://doc.rust-lang.org/book/ch16-01-threads.html"
in_topic:
  - "[[knowledge/entries/java-concurrency]]"
realizes:
  - "[[knowledge/entries/thread]]"
---
# Java Thread

Thread представляет отдельное выполнение с start, run, join и завершением. Platform threads обычно отображаются на потоки ОС; virtual threads планируются runtime поверх carrier-потоков. Они разделяют память и требуют синхронизации. Virtual threads подходят для множества блокирующих работ, а не обещания ускорить CPU-вычисление.
