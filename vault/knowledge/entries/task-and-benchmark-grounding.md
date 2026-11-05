---
id: 01a196ec-2a78-7958-982f-ec60239d6056
type: knowledge
name: "Task and Benchmark Grounding"
kind: topic
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/verification-evaluation]]"
sources:
  - "https://inspect.aisi.org.uk/tasks.html"
  - "https://inspect.aisi.org.uk/datasets.html"
  - "https://developers.openai.com/api/docs/guides/evals"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Task and Benchmark Grounding

Привязка оценки к задаче задаёт, какие примеры предъявляются системе, какие начальные условия и ожидаемые результаты заданы и как проверяется полученный вывод. В Inspect рецепт Task соединяет dataset, solver и scorer; Sample хранит вход и возможный target. В Evals API схема item и testing criteria задаются в определении eval, конкретные данные используются в runs.

Reference или target описывает ожидаемый результат, scorer/grader задаёт процедуру проверки, метрика агрегирует оценки. Набор примеров и критерий вместе определяют смысл измерения; одинаковые данные при разных критериях могут измерять разное поведение.
