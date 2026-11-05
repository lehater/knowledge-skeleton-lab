---
id: 01a18e44-0955-7e3e-a1a7-cc5a831419bc
type: knowledge
name: "Concurrency"
review_status: proposed
kind: property
lifecycle: enriched
in_topic:
  - "[[knowledge/entries/concurrent-programming]]"
sources:
  - "https://doc.rust-lang.org/book/ch17-00-async-await.html"
  - "https://kotlinlang.org/docs/coroutines-basics.html"
---
# Concurrency

Конкурентность — возможность нескольких вычислений продвигаться в перекрывающиеся периоды. Ответственность модели — описывать независимое продвижение и взаимодействие работ. Вход — несколько работ и события; выход — их результаты с допустимым взаимным порядком. Параллелизм означает одновременное физическое исполнение; конкурентность возможна и при чередовании на одном исполнителе.

Перекрытие относится к времени жизни и продвижению вычислений, а не обязательно к одновременному использованию нескольких CPU. Java Concurrency и Python Concurrency — составные языковые области, тематически связанные с общей моделью. [[knowledge/entries/parallelism|Parallelism]] — отдельное свойство исполнения; [[knowledge/entries/asynchronous-programming|Asynchronous Programming]] задаёт способ организации ожидания и продолжения.
