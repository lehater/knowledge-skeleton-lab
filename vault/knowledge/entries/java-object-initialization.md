---
id: 01a1a1c0-784e-755d-ae47-507cce04d23b
type: knowledge
name: "Java Object Initialization"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-12.html#jls-12.5"
in_topic:
  - "[[knowledge/entries/java-memory-and-lifetime]]"
---
# Java Object Initialization

Создание экземпляра включает выделение памяти, default-значения и выполнение процедуры инициализации с конструкторами и instance initializers. Выход — инициализированный объект либо исключение. Вызов переопределяемого метода при конструировании способен наблюдать ещё не завершённую инициализацию состояния подкласса.
