---
id: 01a1981a-9928-7e89-a1b5-309fb49d9a71
type: knowledge
name: "Inspect AI Sample"
lifecycle: enriched
review_status: proposed
kind: program_construct
in_topic:
  - "[[knowledge/entries/inspect-ai-dataset]]"
sources:
  - "https://inspect.aisi.org.uk/datasets.html"
---
# Inspect AI Sample

Sample — запись тестового примера Inspect. Обязательный `input` содержит строку или список chat messages; `choices`, `target`, ID и metadata дополняют постановку. `target` задаёт идеальный вывод: буквальное значение, список значений или текстовое руководство для model grader. Он не является полученным ответом и сам не задаёт способ сравнения.

Для агентных задач запись может указывать sandbox, файлы и setup script. Эти поля задают начальные условия примера, которые необходимо подготовить перед решением.
