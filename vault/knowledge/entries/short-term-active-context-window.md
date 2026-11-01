---
id: 01a196ec-2a78-792d-b758-9c5eba0e8d7a
type: knowledge
name: "Short-Term Active Context Window"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/context-memory-management]]"
sources:
  - "https://platform.claude.com/docs/en/build-with-claude/context-windows"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Short-Term Active Context Window

Активное контекстное окно ограничивает объём токенов, которые модель может обработать в текущем запросе. В него входят переданные сообщения и другой контекст, включая данные инструментов. Увеличение окна не делает автоматически полезным весь накопленный материал: для агента важно отбирать релевантные данные.
