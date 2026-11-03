---
id: 01a1a1c0-7583-760b-a43d-35a9d97f4b9a
type: knowledge
name: "Java Module"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-7.html#jls-7.7"
in_topic:
  - "[[knowledge/entries/java-packages-and-modules]]"
---
# Java Module

Именованный модуль объединяет пакеты и объявляет requires, exports, opens, uses и provides. Readability и экспорт определяют обычную доступность; opens поддерживает рефлексивный доступ. Вход — module declaration и окружение; результат — явно ограниченные межмодульные зависимости и границы доступа.
