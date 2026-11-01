# ETCLOVG — подтверждённые названия и минимальные Knowledge

Источник: Junjie Li et al., *Agent Harness Engineering: A Survey*, Figure 4 — https://picrew.github.io/LLM-Harness/main.pdf#page=8

**Область:** только схема Figure 4: 1 корневое название, 7 направлений, 35 подразделов. Источник подтверждает **названия и авторскую группировку**, а не независимый онтологический статус или `part_of`/`specializes`.

**Состояние:** 43/43 названия `source_verified=true`; самостоятельность и предметные рёбра `semantic_review_status=not_reviewed`. Все Knowledge имеют `review_status: proposed` и `lifecycle: skeleton`. Множественные и составные названия не разбиваются автоматически.

**Повторное использование:** `HE00` (название из статьи *Agent Harness Engineering*) сопоставлено существующему Knowledge `Harness Engineering`, с сохранением ID и добавлением alias и источника. Старый Category с названием `Agent Harness Engineering` остаётся частью legacy-модели и требует отдельного решения о миграции.

**Структура:** `parent_id` в CSV и таблице ниже означает только рубрикацию авторами статьи. На первом проходе **рёбра из этой рубрикации не генерировались**. В каталоге Knowledge добавлено 42 подтверждённых каркаса без навязанных категорий (валидатор v0 выдаёт предупреждения о пустом `categories`).

| ID | Уровень | Термин в источнике | Группа автора | Knowledge |
| --- | ---: | --- | --- | --- |
| HE00 | 0 | Agent Harness Engineering |  | `vault/knowledge/entries/harness-engineering.md` |
| E00 | 1 | Execution Environment & Sandbox | Agent Harness Engineering | `vault/knowledge/entries/execution-environment-sandbox.md` |
| E01 | 2 | General-Purpose Managed Sandboxes | Execution Environment & Sandbox | `vault/knowledge/entries/general-purpose-managed-sandboxes.md` |
| E02 | 2 | Computer-Use Agent Infrastructure | Execution Environment & Sandbox | `vault/knowledge/entries/computer-use-agent-infrastructure.md` |
| E03 | 2 | Code-Specialized Sandboxes | Execution Environment & Sandbox | `vault/knowledge/entries/code-specialized-sandboxes.md` |
| E04 | 2 | Framework-Integrated Runtimes | Execution Environment & Sandbox | `vault/knowledge/entries/framework-integrated-runtimes.md` |
| E05 | 2 | Browser Evaluation Environments | Execution Environment & Sandbox | `vault/knowledge/entries/browser-evaluation-environments.md` |
| E06 | 2 | OS-Level Permission Sandboxes | Execution Environment & Sandbox | `vault/knowledge/entries/os-level-permission-sandboxes.md` |
| E07 | 2 | Sandbox Abstraction Layers | Execution Environment & Sandbox | `vault/knowledge/entries/sandbox-abstraction-layers.md` |
| T00 | 1 | Tool Interface & Protocol | Agent Harness Engineering | `vault/knowledge/entries/tool-interface-protocol.md` |
| T01 | 2 | Protocol and Interface Standards | Tool Interface & Protocol | `vault/knowledge/entries/protocol-and-interface-standards.md` |
| T02 | 2 | Tool Description, Discovery, and Selection | Tool Interface & Protocol | `vault/knowledge/entries/tool-description-discovery-and-selection.md` |
| T03 | 2 | Tool-Augmented Training and Integration | Tool Interface & Protocol | `vault/knowledge/entries/tool-augmented-training-and-integration.md` |
| T04 | 2 | Scalability and Session Management | Tool Interface & Protocol | `vault/knowledge/entries/scalability-and-session-management.md` |
| C00 | 1 | Context & Memory Management | Agent Harness Engineering | `vault/knowledge/entries/context-memory-management.md` |
| C01 | 2 | Short-Term Active Context Window | Context & Memory Management | `vault/knowledge/entries/short-term-active-context-window.md` |
| C02 | 2 | Mid-Term Session State and Cross-Run Persistence | Context & Memory Management | `vault/knowledge/entries/mid-term-session-state-and-cross-run-persistence.md` |
| C03 | 2 | Long-Term Persistent Memory Systems | Context & Memory Management | `vault/knowledge/entries/long-term-persistent-memory-systems.md` |
| C04 | 2 | Long-Horizon Context Techniques | Context & Memory Management | `vault/knowledge/entries/long-horizon-context-techniques.md` |
| C05 | 2 | Context Drift and Limits | Context & Memory Management | `vault/knowledge/entries/context-drift-and-limits.md` |
| L00 | 1 | Lifecycle & Orchestration | Agent Harness Engineering | `vault/knowledge/entries/lifecycle-orchestration.md` |
| L01 | 2 | Single-Agent Inner Loop | Lifecycle & Orchestration | `vault/knowledge/entries/single-agent-inner-loop.md` |
| L02 | 2 | Multi-Agent Orchestration Patterns | Lifecycle & Orchestration | `vault/knowledge/entries/multi-agent-orchestration-patterns.md` |
| L03 | 2 | Full Lifecycle Task Pipelines | Lifecycle & Orchestration | `vault/knowledge/entries/full-lifecycle-task-pipelines.md` |
| O00 | 1 | Observability & Operations | Agent Harness Engineering | `vault/knowledge/entries/observability-operations.md` |
| O01 | 2 | Tracing and Monitoring Platforms | Observability & Operations | `vault/knowledge/entries/tracing-and-monitoring-platforms.md` |
| O02 | 2 | Agent-Specific Operations Platforms | Observability & Operations | `vault/knowledge/entries/agent-specific-operations-platforms.md` |
| O03 | 2 | Cost Tracking and Optimization | Observability & Operations | `vault/knowledge/entries/cost-tracking-and-optimization.md` |
| O04 | 2 | Reliability Engineering | Observability & Operations | `vault/knowledge/entries/reliability-engineering.md` |
| O05 | 2 | Unified Observability | Observability & Operations | `vault/knowledge/entries/unified-observability.md` |
| V00 | 1 | Verification & Evaluation | Agent Harness Engineering | `vault/knowledge/entries/verification-evaluation.md` |
| V01 | 2 | Task and Benchmark Grounding | Verification & Evaluation | `vault/knowledge/entries/task-and-benchmark-grounding.md` |
| V02 | 2 | Pre-Execution Readiness Validation | Verification & Evaluation | `vault/knowledge/entries/pre-execution-readiness-validation.md` |
| V03 | 2 | Controlled Execution and Trace Capture | Verification & Evaluation | `vault/knowledge/entries/controlled-execution-and-trace-capture.md` |
| V04 | 2 | Multi-Level Judgement and Failure Attribution | Verification & Evaluation | `vault/knowledge/entries/multi-level-judgement-and-failure-attribution.md` |
| V05 | 2 | Continuous Regression and Deployment Feedback | Verification & Evaluation | `vault/knowledge/entries/continuous-regression-and-deployment-feedback.md` |
| G00 | 1 | Governance & Security | Agent Harness Engineering | `vault/knowledge/entries/governance-security.md` |
| G01 | 2 | Permission Models and Identity Management | Governance & Security | `vault/knowledge/entries/permission-models-and-identity-management.md` |
| G02 | 2 | Lifecycle Hooks | Governance & Security | `vault/knowledge/entries/lifecycle-hooks.md` |
| G03 | 2 | Component Hardening | Governance & Security | `vault/knowledge/entries/component-hardening.md` |
| G04 | 2 | Declarative Constitutions | Governance & Security | `vault/knowledge/entries/declarative-constitutions.md` |
| G05 | 2 | Audit Infrastructure | Governance & Security | `vault/knowledge/entries/audit-infrastructure.md` |
| G06 | 2 | Agent Security Landscape | Governance & Security | `vault/knowledge/entries/agent-security-landscape.md` |

CSV: [`etclovg-registry-v0.2.csv`](etclovg-registry-v0.2.csv). В нём сохранены признаки наличия в источнике, подтверждённости названия, статуса семантического ревью и предыдущие точные совпадения.

**Дальнейшие итерации:** (1) обсудить семантические границы узлов, (2) независимо подтвердить конкретные предикаты на выборке, (3) добавить обоснованные рёбра, (4) отдельно мигрировать legacy Category/Knowledge к единому типу, только после проверки K-Plex. Никакие неопределённые связи ради связности не добавлять.
