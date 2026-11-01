---
id: 01a1982d-ec1b-7af9-a461-0d5d5f1bf8c8
type: knowledge
name: "Inspect AI Evaluation Retry"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/controlled-execution-and-trace-capture]]"
  - "[[knowledge/entries/multi-level-judgement-and-failure-attribution]]"
sources:
  - "https://inspect.aisi.org.uk/handling-errors.html"
  - "https://inspect.aisi.org.uk/eval-logs.html"
---
# Inspect AI Evaluation Retry

`inspect eval-retry` и `eval_retry()` повторно запускают evaluation, прерванную ошибкой, с возможностью сохранить уже завершённые samples. Исходный log остаётся, новый сохраняет task ID. Восстановление определения требует задачи из функции с `@task`.

Повтор инфраструктурно неудачной попытки отличается от признания неверного ответа успешным. `retry_on_error` и `fail_on_error` задают обработку sample errors и порог отказа; состояние и ошибки нужно учитывать при анализе итоговых результатов.
