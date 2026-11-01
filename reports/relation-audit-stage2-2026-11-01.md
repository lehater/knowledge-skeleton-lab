# Stage 2 — audit and cleanup of all current Knowledge relations

**Date:** 2026-11-01. **Base commit:** `a74129c37c6e5bba831ac1989cd6a70fc7cd9922` (Draft PR #9).  
**Scope:** relationship predicates, direction and source-backed assertion. **No node, UUID, title or sources changed**.

## Inventory / results

**69 relations before audit:** **42 source-backed ETCLOVG** + **27 legacy**. The [complete 69-row audit registry](relation-audit-stage2-2026-11-01.csv) has one row per directional triple, verdict, primary evidence URL, source location and rationale. ETCLOVG relationships are derived from [source-checked registry](harness-engineering/etclovg-registry-v0.2.csv), which was already independently checked against Figure 4 in the prior review; **no full PDF reread in this iteration**.

- **42/42 ETCLOVG `in_topic` retained unchanged.** Source: [Agent Harness Engineering: A Survey, Figure 4](https://picrew.github.io/LLM-Harness/main.pdf#page=8). These are author-defined topic memberships, not `part_of` or `specializes`.
- **20/27 legacy relations retained**, with explicit domain or implementation evidence.
- **7/27 legacy relations removed**, without replacement or introduction of inferred hierarchy.
- **62 relations remain**: 46 `in_topic` (42 ETCLOVG + 4 retained legacy), 2 `broader`, 14 other specialized/functional relations.

## Removed relationships (7)

- `anthropic-autonomous-coding-demo —in_topic→ agent-harness-architecture`: Demo is a harness implementation, but no author source places this specific demo within the named wiki topical category
- `long-running-agent-harness —in_topic→ agent-harness-architecture`: Long-running harness is described, not explicitly grouped under the separate Agent Harness Architecture named topic
- `coding-agent-role —in_topic→ agent-workflow-design`: Two-agent pattern documented, but author never classified role under a separately named Agent Workflow Design topic
- `initializer-agent-role —in_topic→ agent-workflow-design`: Role documented, but no source-established membership in a named Agent Workflow Design topic
- `initializer-coding-agent-pattern —in_topic→ agent-workflow-design`: General Microsoft workflow guidance does not classify this particular Anthropic initializer/coding pattern
- `agent-harness-architecture —broader→ harness-engineering`: Harness architecture concerns design of a harness; neither source states the strict narrower-topic hierarchy; no automatic inference from related aspects
- `agent-workflow-design —broader→ harness-engineering`: Workflow design is broader than harness-only engineering; does not imply a strict subset of Harness Engineering

**Reasoning:** historical topic/category grouping had been transformed mechanically to `in_topic`; this migration guaranteed referential integrity, **not** correctness of a named-topic classification. The source-backed roles and patterns remain as Knowledge and retain their concrete `part_of`/`realizes` relations; the invalid `broader` relations are not automatically replaced by a weaker predicate.

## Retained legacy relationships

- **4 `in_topic`**: `Agent Harness → Agent Harness Architecture` is directly within wiki's *Boundary / Harness Components* scope; `Concurrency → Concurrent Programming`, `Parallelism → Concurrent Programming`, and `I/O-bound Work → Asynchronous Programming` are explicitly discussed in the [Rust Book Chapter 17](https://doc.rust-lang.org/book/ch17-00-async-await.html). These are **topic membership**, not subtype assertions.
- **2 `broader`**: `Agentic Software Engineering → Software Engineering` supported by the named software engineering research / SWEBOK scope; `Asynchronous Programming → Concurrent Programming` is supported by the Rust discussion of asynchronous programming as an approach to concurrency. `broader` is **still a valid predicate**; only the two unsupported usages were removed.
- **14 other relations**: all retained. [Anthropic source](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents) and [official quickstart README](https://github.com/anthropics/claude-quickstarts/tree/main/autonomous-coding) establish the initializer/coding roles, demo and long-running harness. **In particular, Anthropic explicitly calls Claude Agent SDK a general-purpose agent harness,** so `Claude Agent SDK —realizes→ Agent Harness` is **supported**, not an error. [Python asyncio tasks](https://docs.python.org/3/library/asyncio-task.html), [event loop](https://docs.python.org/3/library/asyncio-eventloop.html) and [coroutine data model](https://docs.python.org/3/reference/datamodel.html) support the `realizes`, `part_of`, `specializes`, `schedules`, `executes` and `manages` assertions. Each specific triple is justified in CSV.

## Review boundaries

- No globally universal ontology is claimed for author-defined topic buckets. The legacy four retained `in_topic` represent source-discussed topics, **not** an assertion of source-defined hierarchy.
- Old study labels and their nodes remain present until the separate Stage 3 cleanup; Stage 2 does not delete verified Knowledge.
- Static CI cannot prove semantic truth. This stage records source-based review; an independent second reviewer has not reproduced every decision (**independent semantic replay: NOT_RUN**).
- Zero new predicates, no automatic `broader ↔ in_topic` conversion, no new nodes, no altered UUID.
- All dependent Draft PRs remain unmerged; `main` unchanged.

## Next stage

Stage 3 presentation cleanup: remove obsolete `python-asyncio*.canvas` and old pilot Base/other outdated active Vault artifacts (Git history is enough), keep current useful K-Plex configuration and source-backed ETCLOVG views. Run CI and then manually verify resulting Obsidian/K-Plex display.
