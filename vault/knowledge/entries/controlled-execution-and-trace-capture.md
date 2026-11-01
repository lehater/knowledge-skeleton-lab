---
id: 01a196ec-2a78-79b8-82e7-8b7c8cbf5950
type: knowledge
name: "Controlled Execution and Trace Capture"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/verification-evaluation]]"
sources:
  - "https://inspect.aisi.org.uk/sandboxing.html"
  - "https://inspect.aisi.org.uk/eval-logs.html"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Controlled Execution and Trace Capture

Контролируемое оценочное исполнение связывает конфигурацию задачи и модели, подготовленную среду и запись полученного результата. В Inspect каждый sample получает собственную sandbox, а EvalLog сохраняет параметры, результаты и ошибки. После выполнения ресурсы обычно очищаются; для диагностики среду можно оставить через `--no-sandbox-cleanup`.

Трасса используется для анализа конкретной попытки и проверки оценок. Статус выполнения evaluation и score агента — разные данные; запись истории сама по себе не гарантирует детерминированное воспроизведение внешних сервисов.
