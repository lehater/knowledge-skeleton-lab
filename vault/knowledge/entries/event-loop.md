---
id: 01a18e44-0ac1-798d-aed3-ca5f8c8a6e26
type: knowledge
name: "Event Loop"
review_status: proposed
kind: mechanism
lifecycle: enriched
sources:
  - "https://docs.python.org/3/library/asyncio-eventloop.html"
  - "https://docs.libuv.org/en/v1.x/design.html"
in_topic:
  - "[[knowledge/entries/asynchronous-programming]]"
  - "[[knowledge/entries/task-scheduling]]"
---
# Event Loop

Цикл событий повторно получает события и готовые работы, определяет доступные обработчики и вызывает их. Вход — зарегистрированные события, callbacks и таймеры; выход — вызовы обработчиков и продвижение ожидающих вычислений. Он связывает внешнюю готовность с исполнением кода.

Libuv и asyncio показывают разные реализации этой организации. I/O polling, операции в пуле потоков и очереди готовых callbacks различаются. Блокирующий обработчик задерживает дальнейшее обслуживание того же loop; один loop не определяет threading всей программы.
