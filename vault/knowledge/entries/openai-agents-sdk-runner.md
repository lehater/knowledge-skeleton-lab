---
id: 01a197aa-8823-7265-9f0c-eac1f66f995c
type: knowledge
name: "OpenAI Agents SDK Runner"
kind: construct
lifecycle: enriched
review_status: proposed
realizes:
  - "[[knowledge/entries/single-agent-inner-loop]]"
sources:
  - "https://openai.github.io/openai-agents-python/running_agents/"
  - "https://openai.github.io/openai-agents-python/ref/run/"
---
# OpenAI Agents SDK Runner

`Runner` — класс OpenAI Agents SDK для выполнения агентного цикла. Он вызывает модель, исполняет запрошенные инструменты, добавляет результаты к входу следующей итерации и завершает цикл при итоговом ответе. Он также поддерживает handoff между агентами и ограничение `max_turns`.
