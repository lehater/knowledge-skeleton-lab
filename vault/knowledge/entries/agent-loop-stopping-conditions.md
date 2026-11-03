---
id: 01a197aa-87ac-71e4-9862-3c429ea3fa6e
type: knowledge
name: "Agent Loop Stopping Conditions"
kind: constraint
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/single-agent-inner-loop]]"
sources:
  - "https://www.anthropic.com/research/building-effective-agents"
  - "https://openai.github.io/openai-agents-python/running_agents/"
---
# Agent Loop Stopping Conditions

Agent Loop Stopping Conditions — критерии и ограничения завершения агентного цикла.

Условия завершения управляют окончанием агентного цикла: агент может выдать итоговый результат, а исполнитель может ограничить число итераций. В OpenAI Agents SDK Runner превышение `max_turns` приводит к `MaxTurnsExceeded`.
