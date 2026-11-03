---
id: 01a1a1c4-12ee-7fad-8d1c-3bddbe09ef57
type: knowledge
name: "Memory Model"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://go.dev/ref/mem"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-17.html#jls-17.4"
in_topic:
  - "[[knowledge/entries/java-concurrency]]"
  - "[[knowledge/entries/concurrent-programming]]"
---
# Memory Model

Модель памяти задаёт допустимые наблюдения операций чтения и записи, особенно между конкурентными исполнителями. Вход — действия программы и отношения их упорядочения; выход — ограничения на наблюдаемые значения и допустимые преобразования реализации. Это семантический контракт, отличный от физической схемы памяти. Конкретные правила и поведение при data race следует проверять у каждого языка.

JMM — конкретная языковая модель этого класса; Go задаёт другой самостоятельный контракт. Из Python threading, GIL или free-threading нельзя вывести равенство с JMM. В существующем Python-срезе нет отдельного Knowledge с сопоставимым полным контрактом памяти: соответствие для симметрии не вводится. Модель памяти также отличается от распределения heap и времени жизни объектов.
