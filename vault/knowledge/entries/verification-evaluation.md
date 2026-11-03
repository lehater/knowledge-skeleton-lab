---
id: 01a196ec-2a78-72dc-ad45-5b277223d58a
type: knowledge
name: "Verification & Evaluation"
kind: topic
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/harness-engineering]]"
sources:
  - "https://docs.langchain.com/langsmith/evaluation-concepts"
  - "https://docs.langchain.com/langsmith/evaluate-complex-agent"
  - "https://inspect.aisi.org.uk/scoring-policy.html"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Verification & Evaluation

Проверка и оценивание задают критерии качества, применяют их к выполнению системы и интерпретируют результаты. Предмет проверки может быть итоговым ответом, последовательностью действий либо отдельным шагом. Нужно различать результат агента и работоспособность измерительной процедуры: сбой scorer или среды не равнозначен неверному ответу.

Offline-оценка сравнивает версии на подготовленных примерах; online-оценка исследует production runs и threads. Трасса предоставляет данные, критерий превращает их в оценку, а решение о выпуске или изменении исполнения принимается отдельно.
