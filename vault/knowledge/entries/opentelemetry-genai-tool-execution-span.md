---
id: 01a197fa-d939-76fd-8008-ce414b060a29
type: knowledge
name: "OpenTelemetry GenAI Tool Execution Span"
lifecycle: enriched
review_status: proposed
specializes:
  - "[[knowledge/entries/opentelemetry-span]]"
in_topic:
  - "[[knowledge/entries/opentelemetry-genai-semantic-conventions]]"
sources:
  - "https://github.com/open-telemetry/semantic-conventions-genai/blob/244465e94b9d7167fa5ed5c31a4b2b49ab6ddee5/docs/gen-ai/gen-ai-spans.md"
---
# OpenTelemetry GenAI Tool Execution Span

Span фактического исполнения инструмента с `gen_ai.operation.name=execute_tool`, именем `execute_tool {gen_ai.tool.name}` и kind `INTERNAL`. Обязательны имя операции и инструмента; `gen_ai.tool.call.id` записывается, когда идентификатор предоставлен моделью или провайдером. Запрос моделью tool call и последующее исполнение имеют разные границы: этот span описывает исполнение. Аргументы и результат являются opt-in содержимым. Соглашение Development.
