---
id: 01a196ec-2a78-7487-ad21-699de4d89249
type: knowledge
name: "Lifecycle & Orchestration"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/harness-engineering]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
  - "https://www.anthropic.com/research/building-effective-agents"
  - "https://docs.langchain.com/oss/python/langgraph/persistence"
---
# Lifecycle & Orchestration

Управление жизненным циклом и оркестрация определяют, какой шаг задачи выполняется дальше, кто его исполняет и когда работа приостанавливается или завершается. Входы — задача, состояние и результаты предыдущих действий; выходы — очередной вызов, передача работы, запрос человеку либо завершение.

Workflow задаёт переходы кодом, агентный цикл допускает динамический выбор действий моделью. Координация нескольких исполнителей добавляет распределение задач и объединение результатов; сохранённое состояние позволяет продолжить работу после прерывания. Оркестрация использует результат проверки для решения о следующем шаге, но сам критерий качества относится к Verification & Evaluation. Persistence хранит состояние, а решение о продолжении принимает логика исполнения.
