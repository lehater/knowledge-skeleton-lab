---
id: 01a197fa-d9ff-7093-ad1b-2ad082a67e68
type: knowledge
name: "OpenTelemetry GenAI Content Capture"
kind: specification
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/opentelemetry-genai-semantic-conventions]]"
sources:
  - "https://github.com/open-telemetry/semantic-conventions-genai/blob/244465e94b9d7167fa5ed5c31a4b2b49ab6ddee5/docs/gen-ai/gen-ai-spans.md"
---
# OpenTelemetry GenAI Content Capture

OpenTelemetry GenAI Content Capture — нормативные правила opt-in записи содержимого GenAI-телеметрии.

Соглашения Development предусматривают явный opt-in записи инструкций, входных сообщений и ответов. По умолчанию инструментации не должны записывать это содержимое: оно может включать персональные данные и быть большим. Поддерживающая capture инструментация должна позволять настраивать запись и сигналы назначения.

Можно записывать содержимое в `gen_ai.system_instructions`, `gen_ai.input.messages`, `gen_ai.output.messages` либо хранить его отдельно и передавать ссылки в spans. Внешнее хранилище позволяет разделить доступ к эксплуатационной телеметрии и содержимому; его upload включается независимо от прямой записи содержимого в сигналы.
