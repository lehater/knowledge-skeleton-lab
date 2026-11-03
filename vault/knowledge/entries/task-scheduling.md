---
id: 01a18e44-0b19-774e-b49e-e4d8aee1009f
type: knowledge
name: "Task Scheduling"
review_status: proposed
kind: mechanism
lifecycle: enriched
sources:
  - "https://docs.python.org/3/library/asyncio-eventloop.html"
  - "https://kotlinlang.org/docs/coroutines-basics.html"
  - "https://docs.libuv.org/en/v1.x/design.html"
in_topic:
  - "[[knowledge/entries/concurrent-programming]]"
---
# Task Scheduling

Планирование задач определяет, когда и на каком исполнителе готовая работа получает возможность продвинуться. Вход — работы, их готовность и политика; выход — выбор следующего исполнения или размещения. Планирование отличается от выполнения выбранной работы и управления временем её жизни.

Политика может быть кооперативной или вытесняющей; правила справедливости и параллелизма требуют собственного контракта. Event loop, dispatcher и executor не становятся одним референтом только потому, что участвуют в продвижении работ.
