---
id: 01a196ec-2a78-7ecf-95bb-477273e5f7fe
type: knowledge
name: "Single-Agent Inner Loop"
kind: process
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/lifecycle-orchestration]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
  - "https://www.anthropic.com/research/building-effective-agents"
  - "https://developers.openai.com/api/docs/guides/function-calling"
---
# Single-Agent Inner Loop

Внутренний цикл одного агента последовательно связывает вызов модели, выбранное действие и наблюдение из среды. Приложение передаёт задачу и контекст модели, исполняет запрошенный инструмент и возвращает результат для следующего решения. Источником сведений о выполнении служит реальный ответ инструмента, а не только текстовый план модели.

Цикл завершается при готовом ответе или заданном ограничении, например максимуме итераций; при препятствии возможен запрос человеку. Его ответственность — продвижение одной задачи через обратную связь среды. Отдельный tool call — один шаг, а не весь цикл; наблюдение ещё требует интерпретации и не доказывает успешность задачи.
