---
id: 01a1a1c0-7b50-7af7-9973-8fcadea5a021
type: knowledge
name: "Java Stream Pipelines"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/stream/package-summary.html"
part_of:
  - "[[knowledge/entries/java-se]]"
in_topic:
  - "[[knowledge/entries/java-platform-and-library]]"
---
# Java Stream Pipelines

Stream pipeline соединяет источник, промежуточные преобразования и терминальную операцию. Промежуточные операции ленивы; терминальная операция запускает обработку и потребляет поток. Это обработка элементов, отличная от I/O streams. Parallel-вариант требует соблюдения контрактов функций и источника.
