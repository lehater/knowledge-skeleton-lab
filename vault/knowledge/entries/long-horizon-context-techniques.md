---
id: 01a196ec-2a78-7a82-b436-5e7e2157e0d8
type: knowledge
name: "Long-Horizon Context Techniques"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/context-memory-management]]"
sources:
  - "https://www.anthropic.com/research/effective-context-engineering-for-ai-agents"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Long-Horizon Context Techniques

При задачах длиннее одного контекстного окна агенту необходимы способы сохранять существенный контекст между шагами. Anthropic описывает три подхода: **compaction** (сводка истории), **structured note-taking** (внешние заметки) и **sub-agent architectures** (раздельные контексты исполнителей).

Это разные техники продолжения работы, а не обязательные последовательные этапы.
