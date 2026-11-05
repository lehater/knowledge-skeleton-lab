---
id: 01a1a1c0-74ae-7919-9494-c3a8abfcfcbd
type: knowledge
name: "Java AutoCloseable"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/AutoCloseable.html"
in_topic:
  - "[[knowledge/entries/java-exceptions-and-resources]]"
  - "[[knowledge/entries/programming-interface]]"
  - "[[knowledge/entries/resource-management]]"
---
# Java AutoCloseable

Библиотечный интерфейс задаёт close() для освобождения удерживаемого ресурса. Try-with-resources вызывает его при выходе из области использования. Close может бросить исключение; идемпотентность не является общим требованием AutoCloseable. Контракт закрытия следует уточнять у конкретного типа.

Это конкретный интерфейсный контракт, задающий обязательство close. Реализующий его объект может владеть ресурсом. Сам AutoCloseable не выполняет закрытие всех реализаций: вызов организует использующий код, в том числе try-with-resources.
