---
id: 01a196ec-2a78-7deb-a70e-648cd3c6ba65
type: knowledge
name: "Agent-Specific Operations Platforms"
kind: software
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/observability-operations]]"
sources:
  - "https://docs.langchain.com/langsmith/observability-concepts"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Agent-Specific Operations Platforms

Платформы эксплуатации агентов предоставляют средства наблюдения и анализа, учитывающие агентные операции и многошаговые взаимодействия. В LangSmith единица работы фиксируется как run, связанное исполнение — как trace из вложенных runs, многоходовая сессия — как thread; feedback связывается с наблюдаемым run. Эти представления позволяют различить сбой одного шага и поведение агента между ходами. Запись исполнения здесь служит диагностике, а порядок действий задаёт исполняемое приложение.
