# Harness Engineering — следующий слой исследования

**Срез:** `Lifecycle & Orchestration → Single-Agent Inner Loop`.  
**Основание:** [Agent Harness Engineering: A Survey, §6.2](https://picrew.github.io/LLM-Harness/main.pdf#page=27), [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/running_agents/), [Anthropic Tool Use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works).

## Куда углублять семь направлений

| Направление | Следующий содержательный вопрос | Подходящий источник |
| --- | --- | --- |
| Execution Environment & Sandbox | Изоляция процесса и лимиты ресурсов | [Docker resource constraints](https://docs.docker.com/engine/containers/resource_constraints/) |
| Tool Interface & Protocol | Схема инструмента, обнаружение и вызов | [MCP specification](https://modelcontextprotocol.io/specification) |
| Context & Memory Management | Ограничение контекста и сжатие | [Anthropic context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) |
| Lifecycle & Orchestration | **Цикл одного агента: модель → инструмент → результат → продолжение** | [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/running_agents/) |
| Observability & Operations | Трассы агентных вызовов | [OpenTelemetry GenAI](https://opentelemetry.io/docs/specs/semconv/gen-ai/) |
| Verification & Evaluation | Оценка поведения и результатов агентов | [OpenAI Agent Evals](https://platform.openai.com/docs/guides/agent-evals) |
| Governance & Security | Permissions, approvals, guardrails | [OWASP Agentic Security](https://genai.owasp.org/) |

Это навигация по будущим источникам, а не новые отношения графа. Темы не требуют обязательного разложения на дочерние узлы.

## Что добавлено

Существующий `Single-Agent Inner Loop` переиспользован с прежним UUID. Добавлены семь содержательных Knowledge с источниками непосредственно в `sources`:

- `ReAct (Reasoning and Acting)` — паттерн чередования рассуждения и действия;
- `Tool Call` и `Tool Result` — запрос инструмента и возвращаемый результат;
- `Agent Loop Stopping Conditions` — завершение и ограничения цикла;
- `Stateless Replay` и `Hybrid Execution` — два способа ведения состояния;
- `OpenAI Agents SDK Runner` — конкретный программный исполнитель цикла.

Добавлено шесть `in_topic → Single-Agent Inner Loop` и одно `Runner —realizes→ Single-Agent Inner Loop`. Смысл отношений соответствует выбранным источникам; иерархия оглавления не использовалась как `part_of` или `specializes`.

Содержимое записано в самих Knowledge (`lifecycle: enriched`); отдельный evidence-реестр не нужен. Старые 77 Knowledge, UUID и действующие предикаты не менялись.

## Следующее направление

`Tool Interface & Protocol → Tool Description, Discovery, and Selection`. Изучить контракт MCP Tools и переиспользовать уже существующие `Tool Call` и `Tool Result`.
