---
id: 01a197da-2a5e-7d1d-bfea-753d2fdbb62b
type: knowledge
name: "Claude Computer Use Reference Environment"
kind: software
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/computer-use-agent-infrastructure]]"
sources:
  - "https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool"
---
# Claude Computer Use Reference Environment

Эталонная среда Anthropic для computer-use объединяет виртуальный X11-дисплей Xvfb, графический рабочий стол, приложения, реализации инструментов и агентный цикл. Реализации переводят запросы модели в операции среды и возвращают результаты. В документации эталонная реализация запускается в Docker-контейнере; изоляция и разрешения среды требуют отдельной настройки.
