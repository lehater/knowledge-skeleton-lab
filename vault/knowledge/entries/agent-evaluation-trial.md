---
id: 01a1982d-ea42-7211-84a4-28509b2cf41e
type: knowledge
name: "Agent Evaluation Trial"
lifecycle: enriched
review_status: proposed
kind: process
in_topic:
  - "[[knowledge/entries/controlled-execution-and-trace-capture]]"
sources:
  - "https://www.anthropic.com/research/demystifying-evals-for-ai-agents"
---
# Agent Evaluation Trial

Agent Evaluation Trial — тип одной попытки исполнения оценочной задачи агентом.

Trial — одна попытка агента решить заданную тестовую задачу. Повторные trials нужны, поскольку поведение меняется между запусками. Запись попытки описывает действия, а outcome — конечное состояние среды; эти данные позволяют проверять разные аспекты одного исполнения.
