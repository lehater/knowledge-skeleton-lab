---
id: 01a1a1c0-7384-7395-af44-78770570f50a
type: knowledge
name: "Java Throwable Hierarchy"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-11.html#jls-11.1.1"
in_topic:
  - "[[knowledge/entries/java-exceptions-and-resources]]"
  - "[[knowledge/entries/exception]]"
---
# Java Throwable Hierarchy

иерархия

Исключения представлены объектами Throwable: Exception и Error задают разные ветви. Throw создаёт передачу управления к подходящему обработчику, runtime также сигнализирует нарушения ограничений. RuntimeException и Error относятся к unchecked; классификация не определяет автоматически возможность восстановления приложения.
