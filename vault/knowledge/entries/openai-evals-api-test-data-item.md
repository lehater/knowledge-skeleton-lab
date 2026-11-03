---
id: 01a1981a-9a8d-741f-a686-f4a9f9fd5094
type: knowledge
name: "OpenAI Evals API Test Data Item"
lifecycle: enriched
review_status: proposed
kind: data_structure
in_topic:
  - "[[knowledge/entries/openai-evals-api-eval]]"
sources:
  - "https://developers.openai.com/api/docs/guides/evals"
---
# OpenAI Evals API Test Data Item

В custom-наборе Evals API объект `item` содержит поля примера, соответствующие `item_schema`. Например, строка JSONL объединяет текст задания и размеченный человеком правильный label. Имена полей предметные и задаются схемой; `correct_label` в руководстве — пример, а не обязательное поле всех evals.

Шаблон `{{ item.correct_label }}` читает reference из данных; `{{ sample.output_text }}` — проверяемый вывод модели. Ожидаемый ответ и фактический результат принадлежат разным пространствам данных.
