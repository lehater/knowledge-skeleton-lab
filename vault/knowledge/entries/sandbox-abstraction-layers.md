---
id: 01a196ec-2a78-7c8b-8360-8c8a18a62aa5
type: knowledge
name: "Sandbox Abstraction Layers"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://gvisor.dev/docs/architecture_guide/intro/"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Sandbox Abstraction Layers

Уровни абстракции песочницы различаются тем, где обслуживаются обращения исполняемой нагрузки и обеспечивается граница изоляции: примитивы Linux ограничивают обращения к общему ядру; application kernel, как в gVisor, обрабатывает системный интерфейс в отдельном слое; виртуальная машина размещает нагрузку с гостевым ядром под управлением гипервизора.
