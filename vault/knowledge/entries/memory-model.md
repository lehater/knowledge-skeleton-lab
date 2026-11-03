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
---
# Memory Model

Модель памяти задаёт допустимые наблюдения операций чтения и записи, особенно между конкурентными исполнителями. Вход — действия программы и отношения их упорядочения; выход — ограничения на наблюдаемые значения и допустимые преобразования реализации. Это семантический контракт, отличный от физической схемы памяти. Конкретные правила и поведение при data race следует проверять у каждого языка.
