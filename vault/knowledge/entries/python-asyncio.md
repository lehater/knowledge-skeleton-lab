---
id: 01a1a116-1ec4-72b2-b7f8-66f795a83531
type: knowledge
name: "Python asyncio"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/asyncio.html"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
---
# Python asyncio

asyncio — библиотека конкурентного кода с async/await, объединяющая event loop, Tasks, Future, сетевые операции и синхронизацию. Вход — coroutines, события и I/O, выход — результаты работ и обработка завершения/ошибок. Высокоуровневые API скрывают настройку loop, низкоуровневые позволяют интегрировать callbacks и transports.

Библиотека подходит для I/O-bound задач. Блокирующий callable внутри loop останавливает продвижение соседних задач, если его явно не вынести в другой механизм. asyncio — часть стандартной библиотеки; синтаксис async/await принадлежит языку и может использоваться другими frameworks.
