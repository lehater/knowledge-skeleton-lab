---
id: 01a18e44-0aed-7e4c-9762-064e0d97abed
type: knowledge
name: "Asynchronous Runtime"
review_status: proposed
kind: technology
lifecycle: enriched
sources:
  - "https://doc.rust-lang.org/book/ch17-00-async-await.html"
  - "https://docs.libuv.org/en/v1.x/design.html"
in_topic:
  - "[[knowledge/entries/asynchronous-programming]]"
---
# Asynchronous Runtime

Асинхронная среда исполнения предоставляет механизмы продвижения асинхронных работ: планирование, ожидание событий и вызов готовых продолжений. Вход — работы, таймеры и I/O-события; выход — их продвижение и завершение. Конкретный runtime определяет threading, очереди и поддерживаемые операции.

Event loop — возможный механизм такой среды; среда не обязана сводиться к одному loop или потоку. Python asyncio объединяет loop и вспомогательные API. Семантика async/await и устройство конкретной среды относятся к разным уровням.
