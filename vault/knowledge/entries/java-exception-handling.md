---
id: 01a1a1c0-7426-7a7f-989e-dea331881295
type: knowledge
name: "Java Exception Handling"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-14.html#jls-14.20"
in_topic:
  - "[[knowledge/entries/java-exceptions-and-resources]]"
---
# Java Exception Handling

Try/catch выбирает подходящий обработчик; finally задаёт завершающее действие при выходе. Если finally само завершается резко, исходная причина выхода может быть заменена. Выход — продолжение после обработки либо дальнейшее распространение исключения; завершение процесса лежит вне обычного выхода из try.
