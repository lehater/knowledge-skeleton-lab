---
id: 01a196ec-2a78-7e27-b5f8-e35829799139
type: knowledge
name: "Computer-Use Agent Infrastructure"
kind: component
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool"
  - "https://osworld-v1.xlang.ai/"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Computer-Use Agent Infrastructure

Инфраструктура computer-use обеспечивает графический рабочий стол, приложения, исполнение запросов мыши и клавиатуры и возврат снимков экрана агенту. В реализации Anthropic приложение посредничает между моделью и изолированной средой. Для исследовательской оценки OSWorld дополнительно задаёт начальное состояние задачи и проверяет результат её выполнения программой.
