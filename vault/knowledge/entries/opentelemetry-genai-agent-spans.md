---
id: 01a197fa-d8c3-7cd3-bdd4-2540355a42c9
type: knowledge
name: "OpenTelemetry GenAI Agent Spans"
kind: data_structure
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/opentelemetry-genai-semantic-conventions]]"
sources:
  - "https://github.com/open-telemetry/semantic-conventions-genai/blob/244465e94b9d7167fa5ed5c31a4b2b49ab6ddee5/docs/gen-ai/gen-ai-agent-spans.md"
---
# OpenTelemetry GenAI Agent Spans

Соглашения Development различают создание агента и его запуск. `create_agent` описывает создание, обычно в удалённом сервисе, со span kind `CLIENT`. `invoke_agent` описывает вызов удалённого агента как `CLIENT`, а исполнение агента внутри процесса — как `INTERNAL`.

`gen_ai.operation.name` идентифицирует операцию; `gen_ai.agent.name`, идентификатор и версия агента записываются по применимости и доступности. Имя span вызова — `invoke_agent {gen_ai.agent.name}` либо `invoke_agent`, если имя недоступно. Эти записи описывают границы операций, а не дают оценку качества ответа агента.
