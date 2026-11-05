---
id: 01a195fd-0b9f-7504-a633-cd9a9e313d46
type: knowledge
name: "Long-running Agent Harness"
kind: component
lifecycle: enriched
review_status: proposed
specializes:
  - "[[knowledge/entries/agent-harness]]"
sources:
  - "https://www.anthropic.com/research/effective-harnesses-for-long-running-agents"
---
# Long-running Agent Harness

Long-running Agent Harness — harness для координации длительной работы через несколько сеансов.

Long-running Agent Harness организует продвижение по задаче через множество сеансов с разными контекстными окнами.

В эксперименте Anthropic начальный сеанс создаёт окружение, список функций и файл прогресса; последующие сеансы читают историю Git и прогресс, выполняют небольшой объём работы, проверяют результат и оставляют обновлённые артефакты для продолжения.

Здесь восстанавливается **рабочий контекст проекта** из сохранённых файлов, а не память запущенного процесса.
