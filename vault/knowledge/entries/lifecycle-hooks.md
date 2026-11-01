---
id: 01a196ec-2a78-7ef0-bd90-7a849e0fd3d1
type: knowledge
name: "Lifecycle Hooks"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/governance-security]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
  - "https://code.claude.com/docs/en/hooks"
---
# Lifecycle Hooks

Lifecycle hooks — обработчики, вызываемые harness в определённых точках работы для проверок, добавления контекста или регистрации событий. Конфигурация связывает событие и matcher с обработчиком; его вход содержит сведения о сессии и операции, а результат интерпретируется по контракту события.

В Claude Code `PreToolUse` получает имя и параметры до исполнения инструмента и поддерживает решения allow/deny/ask; `PostToolUse` вызывается после выполнения. Проверка до действия может его заблокировать, обработчик после действия не отменяет уже совершённый эффект. Hooks — точки интеграции контроля, а не полная граница изоляции: они охватывают только события, которые действительно генерирует runtime. Их права, ошибки и таймауты также влияют на поведение защиты.
