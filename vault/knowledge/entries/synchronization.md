---
id: 01a1a1c4-129d-79f0-9a4e-f6985f827cb9
type: knowledge
name: "Synchronization"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://doc.rust-lang.org/book/ch16-03-shared-state.html"
  - "https://go.dev/ref/mem"
in_topic:
  - "[[knowledge/entries/java-concurrency]]"
---
# Synchronization

Синхронизация координирует доступ к разделяемым данным и порядок взаимодействий конкурентных вычислений. Вход — обращения и условия координации; выход — допустимые упорядоченные действия. Взаимное исключение защищает критический участок, другие средства устанавливают ожидание или публикацию. Гарантии видимости задаёт контракт механизма и модель памяти; сама синхронизация не гарантирует прогресс или отсутствие deadlock.
