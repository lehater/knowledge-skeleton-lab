# Harness Engineering — Discovery Level 3: Single-Agent Inner Loop

**Date:** 2026-11-01  
**Mode:** `discover` from `.agents/skills/knowledge-graph-discovery/SKILL.md`  
**Base:** `main` at `f38c431e3b46d62ef9bf1929f8529c9d296d9000`  
**Branch:** `experiment/harness-discovery-l3-single-agent-loop`  
**Node/edge evidence:** [CSV](discovery-l3-single-agent-loop-evidence-2026-11-01.csv)

## 1. Restored baseline and boundaries

Source of truth: repository `main`. Read `AGENTS.md`, `docs/concept.md`, all normative `rules/`, the Discovery Skill, the 43-row ETCLOVG registry and all 77 Knowledge entries. Baseline: **77 Knowledge / 62 directed edges**. The baseline includes **42 `in_topic` ETCLOVG relations**, and 20 previously audited legacy relations (see `reports/relation-audit-stage2-2026-11-01.md`). Eight predicates permitted: `in_topic`, `broader`, `specializes`, `part_of`, `realizes`, `schedules`, `executes`, `manages`. No schema/Skill/validator changes.

The 35 ETCLOVG subtopics and seven branches are **authorial topic headings** from [Survey Figure 4, printed p.8](https://picrew.github.io/LLM-Harness/main.pdf#page=8), not evidence of strict subtyping, composition or exhaustive coverage. The map below is research prioritization, **not additional edges**.

## 2. Candidate map: all seven directions

| Direction (existing Knowledge) | Existing subtopics in graph | Next semantic candidates and boundary | Primary sources / Knowledge to reuse |
| --- | --- | --- | --- |
| **E: Execution Environment & Sandbox (7)** | General-Purpose Managed Sandboxes; Computer-Use Agent Infrastructure; Code-Specialized Sandboxes; Framework-Integrated Runtimes; Browser Evaluation Environments; OS-Level Permission Sandboxes; Sandbox Abstraction Layers | Sandbox isolation and permission limits, execution environment lifecycle; distinguish OS enforcement from harness policy | [Docker resource constraints](https://docs.docker.com/engine/containers/resource_constraints); reuse existing `agent-harness`, no generic sandbox duplication |
| **T: Tool Interface & Protocol (4)** | Protocol and Interface Standards; Tool Description, Discovery, and Selection; Tool-Augmented Training and Integration; Scalability and Session Management | Tool schema, discovery vs invocation, request/response; prioritize tool contract after single-agent loop | [MCP tools specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/specification/2026-07-28/server/tools.mdx); reuse new `tool-call` and `tool-result` across future studies |
| **C: Context & Memory Management (5)** | Short-Term Active Context Window; Mid-Term Session State and Cross-Run Persistence; Long-Term Persistent Memory Systems; Long-Horizon Context Techniques; Context Drift and Limits | Context selection/compaction vs durable harness execution state; avoid conflating prompt history with operational persistence | [Anthropic context engineering](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents); reuse `long-running-agent-harness` only if its precise identity fits |
| **L: Lifecycle & Orchestration (3)** | Single-Agent Inner Loop; Multi-Agent Orchestration Patterns; Full Lifecycle Task Pipelines | **First:** ReAct, tool call/result, stopping, stateless/hybrid execution and concrete runner. **Later:** delegation, task runner, checkpoints; distinguish orchestration from `Task Scheduling` in asyncio | [Survey §6](https://picrew.github.io/LLM-Harness/main.pdf#page=27); [OpenAI Agents SDK runner](https://openai.github.io/openai-agents-python/running_agents/); reuse `single-agent-inner-loop`, `agent-harness`, `claude-agent-sdk`, `initializer-coding-agent-pattern` |
| **O: Observability & Operations (5)** | Tracing and Monitoring Platforms; Agent-Specific Operations Platforms; Cost Tracking and Optimization; Reliability Engineering; Unified Observability | Agent/run trace vs tool span and telemetry conventions; existing `audit-infrastructure` is not equivalent to tracing | [OpenTelemetry GenAI agent spans](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md) |
| **V: Verification & Evaluation (5)** | Task and Benchmark Grounding; Pre-Execution Readiness Validation; Controlled Execution and Trace Capture; Multi-Level Judgement and Failure Attribution; Continuous Regression and Deployment Feedback | Trace grading, attribution, regression gate; avoid equating test execution with grading | [OpenAI agent evals](https://developers.openai.com/api/docs/guides/agent-evals); candidate reuse `controlled-execution-and-trace-capture` |
| **G: Governance & Security (6)** | Permission Models and Identity Management; Lifecycle Hooks; Component Hardening; Declarative Constitutions; Audit Infrastructure; Agent Security Landscape | Approval gates and guardrails/hook decisions; distinguish policy evaluation from sandbox enforcement | [OpenAI human review and guardrails](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals); [Claude Code hooks](https://support.claude.com/en/articles/14554000-claude-code-power-user-tips); reuse `lifecycle-hooks` |

**Scope decisions:** Some headings are composites or problem categories (e.g. `Context Drift and Limits`, `Reliability Engineering`, `Tool-Augmented Training and Integration`). None is required to have children. No relation is inferred from a table-of-contents nesting. Multi-area identity does not imply `specializes`.

## 3. Why the first slice is Single-Agent Inner Loop

The [Survey §6.2, printed p.27](https://picrew.github.io/LLM-Harness/main.pdf#page=27) defines it as one agent repeatedly using tools and feedback, and explicitly cites ReAct, stateless replay and hybrid execution. Independent implementation evidence comes from [Anthropic's tool-use loop](https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works) and [OpenAI's SDK Runner loop](https://openai.github.io/openai-agents-python/running_agents/).

This slice is foundational for multi-agent orchestration and full-lifecycle task runners; it has inspectable primary sources, seven nonduplicate named referents and seven narrow claims. Its terminology is simpler and testable before addressing persistence, context compaction or multi-agent coordination.

## 4. What is represented (not a prescriptive execution pipeline)

**Existing abstraction reused (unchanged):** `single-agent-inner-loop`, UUID `01a196ec-2a78-7ecf-95bb-477273e5f7fe`, with its pre-existing `in_topic → lifecycle-orchestration`.

**Seven new Knowledge**, all `review_status: proposed`, `lifecycle: skeleton`:

| Knowledge | Kind | Responsibility / distinction | Outgoing predicate |
| --- | --- | --- | --- |
| `react-reasoning-and-acting` | pattern | Interleave reasoning traces with actions; research method, not entire runner | `in_topic → single-agent-inner-loop` |
| `tool-call` | construct | Model-produced structured request to invoke a tool; **not** execution itself | `in_topic → single-agent-inner-loop` |
| `tool-result` | construct | Result returned after tool execution, consumed by next model step; distinct from request | `in_topic → single-agent-inner-loop` |
| `agent-loop-stopping-conditions` | mechanism | End turn on completed output or enforce iteration budget/stop conditions | `in_topic → single-agent-inner-loop` |
| `stateless-replay` | model | Reconstruct model input from replayable conversation history | `in_topic → single-agent-inner-loop` |
| `hybrid-execution` | model | Combine replayable conversation history with externally persisted artifacts/state | `in_topic → single-agent-inner-loop` |
| `openai-agents-sdk-runner` | construct | Concrete SDK class that runs model/tool/result loop | `realizes → single-agent-inner-loop` |

**Directed evidence:** the [CSV](discovery-l3-single-agent-loop-evidence-2026-11-01.csv) records each node's UUID, exact source location, normalized-name rationale, and the source and rationale of its *specific* edge. `in_topic` is non-exclusive documented relevance, not containment. `realizes` is justified only for the concrete SDK Runner's documented loop behavior. No `broader`, `part_of`, `specializes` or functional arrows are conjectured.

**Reuse / duplication review:** compared the names, identities and existing 77 entries, including `agent-harness`, `claude-agent-sdk`, `long-running-agent-harness`, `event-loop`, `task-lifecycle` and `task-scheduling`. No semantic identity overlap warrants merging the seven new referents with them. In particular `Event Loop` (async scheduler) is distinct from the agent decision/tool loop, and `OpenAI Agents SDK Runner` is distinct from the `Claude Agent SDK`. The existing categories and UUIDs are unchanged.

## 5. Verification and review gates

| Gate | Result | Evidence / limitation |
| --- | --- | --- |
| Static | **PENDING_CI** | Expect 84 Knowledge / 69 relations; invoke `node tools/validate.mjs` and `node --test tools/validate.test.mjs` in PR GitHub Actions |
| Source | **PASS (author inspection, 7/7 new nodes and 7/7 edges)** | Primary and official sources read; exact locations and identity/edge justifications in CSV. Independent source replay NOT_RUN |
| Semantic | **NOT_RUN (independent)** | Author-proposed classifications and directional claims require reviewer validation; no acceptance of `review_status` |
| GUI | **NOT_RUN (new slice)** | Prior K-Plex owner review applies only to ETCLOVG baseline; new notes not yet inspected in Obsidian |

The static gate checks syntax and links, not source semantics. The Source gate records a performed source inspection, not a global semantic review. No old normative files or existing Knowledge changed.

## 6. Remaining questions and recommended next iteration

1. **P1:** Independently inspect the seven `in_topic` / `realizes` proposals; specifically, whether `Runner → realizes → Single-Agent Inner Loop` is too broad for a multi-agent-capable runner and whether state strategies should point to `Lifecycle & Orchestration` rather than to `Single-Agent Inner Loop`. Change only after evidence.
2. **P1:** Confirm intended granularity of `Tool Call` and `Tool Result`: generic contracts across providers vs provider-specific `tool_use` / `tool_result` wire formats. This pilot models the generic referents; protocol-specific implementations are deferred.
3. **P2:** Review terminology and distinctions of `Stateless Replay` and `Hybrid Execution` against [Codex's own explanation](https://openai.com/index/unrolling-the-codex-agent-loop/); do not equate stateless model API requests with a total lack of persisted runtime state.
4. **P2:** GUI inspection of new nodes, with `in_topic` and `realizes` lenses, after PR is reviewed.

**Next semantic slice:** `Tool Interface & Protocol → Tool Description, Discovery, and Selection`, especially tool schema, discovery and selection (MCP), reusing the new `Tool Call`/`Tool Result`. It is adjacent to, but not a decomposition of, the single-agent loop.

**Do not merge this Draft PR without review; no autonomous `main` writes.**
