---
id: 01a1981a-9a0e-7faa-bea9-4046b5e4ae07
type: knowledge
name: "OpenAI Evals API Eval Definition"
lifecycle: enriched
review_status: proposed
kind: artifact
in_topic:
  - "[[knowledge/entries/task-and-benchmark-grounding]]"
sources:
  - "https://developers.openai.com/api/reference/resources/evals/methods/create"
  - "https://developers.openai.com/api/docs/guides/evals"
---
# OpenAI Evals API Eval Definition

OpenAI Evals API Eval Definition — сохраняемое определение оценки Evals API.

Объект `eval`, создаваемый через `POST /evals`, хранит определение оценки: конфигурацию схемы данных и список `testing_criteria` с graders. Полученный ID используется для отдельных runs с конкретными данными и настройками модели.

Определение задаёт проверяемое поведение, а run применяет его к данным. Это контракт Evals API; YAML-реестр проекта `openai/evals` использует отдельную модель определения.
