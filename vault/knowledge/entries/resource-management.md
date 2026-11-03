---
id: 01a1a1c4-1497-784e-aba9-2cbf2479902f
type: knowledge
name: "Resource Management"
lifecycle: enriched
review_status: proposed
kind: practice
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#objects-values-and-types"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/AutoCloseable.html"
in_topic:
  - "[[knowledge/entries/java-exceptions-and-resources]]"
  - "[[knowledge/entries/java-memory-and-lifetime]]"
---
# Resource Management

Управление ресурсами организует получение, использование и освобождение ограниченных внешних средств: файлов, соединений или дескрипторов. Вход — запрос владения и операция; выход — результат с завершённым обязательством освобождения либо переданным владением. Корректность охватывает обычный и исключительный выход. Область использования, явное закрытие и автоматическая очистка памяти имеют разные контракты.
