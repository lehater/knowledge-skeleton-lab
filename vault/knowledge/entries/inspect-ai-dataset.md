---
id: 01a1981a-98e4-7e2a-957e-a6dc163f7572
type: knowledge
name: "Inspect AI Dataset"
lifecycle: enriched
review_status: proposed
kind: program_construct
in_topic:
  - "[[knowledge/entries/inspect-ai-task]]"
sources:
  - "https://inspect.aisi.org.uk/reference/inspect_ai.dataset.html"
  - "https://inspect.aisi.org.uk/datasets.html"
---
# Inspect AI Dataset

Dataset — абстрактный интерфейс последовательности объектов Sample: доступ по индексу и срезу, фильтрация, сортировка и перемешивание. Readers адаптируют CSV, JSON/JSONL и Hugging Face к этой модели. `FieldSpec` отображает имена полей источника в поля Sample; функция преобразования применяется, когда одного переименования недостаточно. Набор предоставляет примеры для задачи, а критерий их оценки определяется scorer.
