---
id: 01a1a114-55ad-74ea-ada5-c3bd2b1dbd1d
type: knowledge
name: "Python asyncio.Runner"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/library/asyncio-runner.html"
in_topic:
  - "[[knowledge/entries/python-concurrency]]"
---
# Python asyncio.Runner

Runner управляет event loop и context для нескольких верхнеуровневых запусков asyncio. При run он выполняет переданный awaitable и возвращает результат или исключение; выход из context manager закрывает loop, завершает asynchronous generators и освобождает executor.

Инициализация ресурсов отложена до использования. run нельзя вызывать при уже работающем loop в том же потоке. asyncio.run предоставляет упрощённый однократный вход, тогда как Runner позволяет переиспользовать контекст нескольких запусков. Его управление loop отличается от планирования отдельных Tasks внутри loop.
