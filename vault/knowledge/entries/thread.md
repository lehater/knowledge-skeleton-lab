---
id: 01a1a1c4-1247-7887-b681-9924211ad275
type: knowledge
name: "Thread"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://doc.rust-lang.org/book/ch16-01-threads.html"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/Thread.html"
in_topic:
  - "[[knowledge/entries/java-concurrency]]"
---
# Thread

Поток — отдельная последовательность исполнения внутри среды программы, способная продвигаться конкурентно с другими. Вход — запускаемое вычисление и контекст; выход — его действия и завершение. Порядок взаимодействий требует координации. Отображение на поток ОС, политика планирования и способы ожидания завершения задаются средой; поток не тождественен coroutine или Future.
