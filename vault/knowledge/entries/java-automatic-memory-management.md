---
id: 01a1a1c0-77b1-7185-aa83-9bb27e1bcce6
type: knowledge
name: "Java Automatic Memory Management"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jvms/se27/html/jvms-2.html#jvms-2.5.3"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/ref/package-summary.html"
in_topic:
  - "[[knowledge/entries/java-memory-and-lifetime]]"
  - "[[knowledge/entries/garbage-collection]]"
specializes:
  - "[[knowledge/entries/automatic-memory-management]]"
---
# Java Automatic Memory Management

Память объектов управляется автоматически; JVM heap предоставляет место для экземпляров и массивов. Выбор алгоритма и размещения относится к реализации. Недостижимость допускает освобождение, но не задаёт приложению точный момент сборки. Утечка возможна при ненужном удержании достижимых объектов.

Спецификация JVM требует автоматического освобождения heap через garbage collector, оставляя выбор системы и алгоритма реализации. Поэтому языковая модель — частный вид Automatic Memory Management; конкретный collector в этом узле не назван.
