---
id: 01a18e44-0955-7e3e-a1a7-cc5a831419bc
type: knowledge
name: "Concurrency"
review_status: proposed
kind: model
lifecycle: enriched
in_topic:
  - "[[knowledge/entries/concurrent-programming]]"
sources:
  - "https://doc.rust-lang.org/book/ch17-00-async-await.html"
---
# Concurrency

Конкурентность — возможность нескольких вычислений продвигаться в перекрывающиеся периоды. Ответственность модели — описывать независимое продвижение и взаимодействие работ. Вход — несколько работ и события; выход — их результаты с допустимым взаимным порядком. Параллелизм означает одновременное физическое исполнение; конкурентность возможна и при чередовании на одном исполнителе.
