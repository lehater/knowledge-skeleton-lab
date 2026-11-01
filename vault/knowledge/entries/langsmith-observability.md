---
id: 01a197fa-807f-787d-bd1a-640d9f6b6cad
type: knowledge
name: "LangSmith Observability"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/tracing-and-monitoring-platforms]]"
  - "[[knowledge/entries/agent-specific-operations-platforms]]"
sources:
  - "https://docs.langchain.com/langsmith/observability-concepts"
  - "https://docs.langchain.com/langsmith/annotate-code"
  - "https://docs.langchain.com/langsmith/log-traces-to-agent"
---
# LangSmith Observability

LangSmith Observability записывает, показывает и анализирует шаги AI-агента. Интеграции автоматически собирают вызовы; для собственного кода доступны `traceable`, Python context manager `trace` и явное построение `RunTree`. Вход — инструментированные операции приложения, выход — связанные runs с данными для диагностики.

Отправка выполняется в фоне; standalone SDK требует завершить `client.flush()` перед выходом процесса. Выбор backend-контейнера трасс зависит от workspace: agent-based Cloud направляет данные по agent ID и environment, старые и self-hosted workspaces используют tracing projects.
