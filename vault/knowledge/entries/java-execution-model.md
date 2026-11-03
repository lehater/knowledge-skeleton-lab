---
id: 01a1a1c0-6ad3-7b48-8882-9f817edb70fb
type: knowledge
name: "Java Execution Model"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-12.html"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-13.html"
  - "https://docs.oracle.com/javase/specs/jvms/se27/html/jvms-2.html"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/index.html"
in_topic:
  - "[[knowledge/entries/java]]"
---
# Java Execution Model

Модель связывает исходную программу, бинарное представление, загрузку, связывание и инициализацию. JVM задаёт абстрактное исполнение; JDK предоставляет инструменты. Вход — бинарный код и окружение; выход — выполнение либо ошибка загрузки/связывания. Оптимизации конкретной JVM относятся к следующей итерации.

Основные понятия: [[knowledge/entries/java-jvm|Java Virtual Machine]], [[knowledge/entries/java-class-file|Java Class File]], [[knowledge/entries/java-class-lifecycle|Java Class Loading Linking and Initialization]], [[knowledge/entries/java-binary-compatibility|Java Binary Compatibility]], [[knowledge/entries/java-jdk|Java Development Kit]].
