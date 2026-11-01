---
id: 01a1981a-9b1a-7a33-8591-69773ecf2708
type: knowledge
name: "OpenAI Evals Registry Definition"
lifecycle: enriched
review_status: proposed
kind: structure
in_topic:
  - "[[knowledge/entries/task-and-benchmark-grounding]]"
sources:
  - "https://github.com/openai/evals/blob/main/docs/build-eval.md"
---
# OpenAI Evals Registry Definition

В открытом проекте `openai/evals` eval определяется набором данных и выбранным eval class. YAML в `evals/registry/evals` задаёт ID, метрики, `class` и аргумент `samples_jsonl`. Формат ID различает имя, split и версию; изменение определения требует изменения версии для сопоставимости результатов.

Каждая строка JSONL — один пример с `input`; для шаблонов Match, Includes и FuzzyMatch поле `ideal` содержит правильный ответ или список ответов. Model-graded шаблоны могут требовать другие поля согласно grading prompt. Это реестровая модель библиотеки, отличная от объекта eval в Evals API.
