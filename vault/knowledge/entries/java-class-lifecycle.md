---
id: 01a1a1c0-76e2-7193-b6d3-2cce5a15c240
type: knowledge
name: "Java Class Loading Linking and Initialization"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-12.html#jls-12.2"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-12.html#jls-12.3"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-12.html#jls-12.4"
in_topic:
  - "[[knowledge/entries/java-execution-model]]"
---
# Java Class Loading Linking and Initialization

Загрузка получает бинарное представление; linking включает verification, preparation и resolution. Инициализация исполняет требуемые static-инициализаторы. Вход — потребность в классе/интерфейсе; выход — готовность к использованию либо ошибка. Resolution допускает отложенное выполнение; загрузка и инициализация различаются.
