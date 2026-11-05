---
id: 01a196ec-2a78-7d96-8d3a-82dd8d6782dd
type: knowledge
name: "Declarative Constitutions"
kind: specification
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/governance-security]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
  - "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback"
  - "https://code.claude.com/docs/en/permissions"
---
# Declarative Constitutions

Declarative Constitutions — декларативно заданные правила допустимого поведения.

Декларативная конституция выражает принципы допустимого поведения отдельно от пошаговой логики задачи. Её назначение — сделать правила явными и доступными для применения и изменения. Нужно различать принципы, формирующие поведение модели, и исполняемую конфигурацию runtime.

В Constitutional AI список принципов используется для самокритики и исправления ответов при обучении, затем для получения AI preferences и обучения с обратной связью. В прикладном harness декларативные настройки могут задавать проверяемые правила действий: например, Claude Code хранит permission rules с allow/ask/deny. Это разные механизмы применения правил, а не единый формат конституции. Сам текст политики не является enforcement: граница гарантии определяется обучением модели либо конкретным обработчиком и проверками runtime.
