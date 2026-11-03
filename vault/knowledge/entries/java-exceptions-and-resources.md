---
id: 01a1a1c0-6a3a-77ef-946e-0e2439387431
type: knowledge
name: "Java Exceptions and Resource Handling"
lifecycle: enriched
review_status: proposed
kind: topic
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-11.html"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-14.html"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/AutoCloseable.html"
in_topic:
  - "[[knowledge/entries/java]]"
---
# Java Exceptions and Resource Handling

Исключения обеспечивают нелокальную передачу управления обработчику; checked analysis проверяет часть исключений при компиляции. Завершение работы с ресурсом организуется try-with-resources и AutoCloseable. Выход — результат или распространяемое исключение после завершающих действий.

Основные понятия: [[knowledge/entries/java-throwable|Java Throwable Hierarchy]], [[knowledge/entries/java-checked-exceptions|Java Checked Exceptions]], [[knowledge/entries/java-exception-handling|Java Exception Handling]], [[knowledge/entries/java-try-with-resources|Java Try-with-Resources]], [[knowledge/entries/java-autocloseable|Java AutoCloseable]].
