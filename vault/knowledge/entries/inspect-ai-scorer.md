---
id: 01a1981a-99bd-7e69-ba73-afda19bceb1a
type: knowledge
name: "Inspect AI Scorer"
lifecycle: enriched
review_status: proposed
kind: program_construct
in_topic:
  - "[[knowledge/entries/inspect-ai-task]]"
sources:
  - "https://inspect.aisi.org.uk/custom-scorers.html"
  - "https://inspect.aisi.org.uk/scorers.html"
---
# Inspect AI Scorer

Scorer проверяет полученный результат по target либо другой рубрике. Контракт пользовательской функции — асинхронное получение TaskState и Target с возвратом Score; Score содержит значение и может включать извлечённый ответ и объяснение. Метрики агрегируют полученные scores.

Выбор scorer определяет смысл правильности. Например, `match()` по умолчанию проверяет конец ответа, игнорируя регистр и пробелы; `location="exact"` требует совпадения всего вывода. Model grader вместо буквального совпадения использует руководство из target. Поэтому reference answer и процедура проверки — разные части постановки оценки.
