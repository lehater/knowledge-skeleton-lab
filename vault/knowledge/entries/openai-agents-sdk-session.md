---
id: 01a197d2-2236-79fb-b34c-395b84c1265f
type: knowledge
name: "OpenAI Agents SDK Session"
kind: construct
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/mid-term-session-state-and-cross-run-persistence]]"
sources:
  - "https://openai.github.io/openai-agents-python/sessions/"
---
# OpenAI Agents SDK Session

Session в OpenAI Agents SDK хранит историю взаимодействия, связанную с идентификатором сеанса, и позволяет повторно использовать её между вызовами `Runner.run()`.

**Вход:** новые сообщения, вызовы инструментов и другие элементы диалога. **Выход:** история, добавляемая к входу последующего запуска; новые элементы автоматически сохраняются в том же сеансе.

Хранилище выбирается отдельно: SQLite в памяти для временного сеанса или файл SQLite/другой поддерживаемый backend для сохранения между запусками приложения. **Сохранение истории диалога не равнозначно восстановлению всех побочных эффектов исполнения.**
