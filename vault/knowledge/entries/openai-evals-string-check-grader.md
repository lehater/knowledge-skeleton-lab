---
id: 01a1981a-9adb-7b87-a14a-db03ae0373ab
type: knowledge
name: "OpenAI Evals String Check Grader"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/openai-evals-api-eval]]"
sources:
  - "https://developers.openai.com/api/docs/guides/graders"
  - "https://developers.openai.com/api/reference/resources/evals/methods/create"
---
# OpenAI Evals String Check Grader

JSON-конфигурация grader с `type="string_check"` задаёт строковые `input`, `reference` и операцию сравнения. Операция `eq` возвращает 1 при полном совпадении с учётом регистра и 0 иначе; `like` проверяет вхождение, `ilike` — вхождение без учёта регистра.

В `testing_criteria` grader может получать проверяемый текст из `sample` и эталон из `item` через шаблоны. Такая проверка задаёт точный критерий по строкам; семантически равнозначные перефразирования автоматически правильными не становятся.
