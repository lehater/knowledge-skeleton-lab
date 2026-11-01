# Source Audit Stage 1B — resolving five legacy topic nodes

**Date:** 2026-11-01  
**Base:** `66c30b992a496b96a1e76da82aff03142f6af9fb` (Draft PR #7)  
**Scope:** only five priority nodes from Stage 1A. Audit of the 32 other legacy nodes and audit of surviving relations are **NOT_RUN**.

## Decision rule

A source must support the **intended referent**, not merely contain the same words in another domain. A descriptive topic may be retained if an authoritative source clearly describes the practice as an unambiguous equivalent. A legacy synthetic umbrella is removed when the source describes only separate mechanisms or an unrelated referent; this is **not** a claim that the words/concepts never exist anywhere.

## Decisions: 1 keep, 4 delete

| Knowledge | Source evidence | Outcome |
| --- | --- | --- |
| `Agent Workflow Design` | [Microsoft, Map agent flows to requirements](https://learn.microsoft.com/en-us/agents/architecture/map-agent-flows), sections *Organize agent workflows into input, transform, and output stages* and *Design effective solutions*. Relevant descriptive activity: designing workflows of agents; existing Anthropic source discusses agent orchestration. Microsoft does not declare this to be an independent standardized ontology class. | **KEEP** as descriptive, source-backed topic. Add Microsoft URL to `sources`; retain UUID, `name`, `review_status: proposed`, `broader` pending separate semantic review. |
| `Agent Development Tooling` | [Google Agent Development Kit](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/adk) establishes a specific toolkit, and [Anthropic](https://www.anthropic.com/research/building-effective-agents) describes frameworks. Neither defines the distinct umbrella node with the intended scope used in the trial graph. | **DELETE** synthetic grouping; preserve separate `Claude Agent SDK`. |
| `Asynchronous Execution` | Original [Python asyncio Event Loop](https://docs.python.org/3/library/asyncio-eventloop.html) documents concrete event-loop operations, not the old umbrella classification. [NVIDIA CUDA Asynchronous Execution](https://docs.nvidia.com/cuda/cuda-programming-guide/02-basics/asynchronous-execution.html) uses the *exact* title but in the distinct GPU-execution context. | **DELETE** unsupported Python-asyncio umbrella; preserve all 12 children. The runtime mechanism of asynchronous execution is real, but this legacy categorization was not evidence-grounded. |
| `Asynchronous Flow Control` | [Python asyncio Queue](https://docs.python.org/3/library/asyncio-queue.html) proves bounded queues. [Node.js Asynchronous flow control](https://nodejs.org/learn/asynchronous-work/asynchronous-flow-control) names callback sequencing; [Python Streams](https://docs.python.org/3/library/asyncio-stream.html) and [WHATWG Streams](https://streams.spec.whatwg.org/) describe backpressure and flow control. They do not define **this old node's intended single grouping** with its current name and scope. | **DELETE** ambiguous grouping; preserve `Backpressure` and `Bounded Asynchronous Queue`. No silent switch to the Node.js meaning. |
| `Asynchronous Lifecycle` | [Kotlin Coroutines basics](https://kotlinlang.org/docs/coroutines-basics.html), *Coroutine scope and structured concurrency*, explicitly defines a **coroutine's lifecycle**. This is not evidence for a distinct universal umbrella `Asynchronous Lifecycle`. | **DELETE** synthetic umbrella; preserve four specific source-backed nodes. |

**Rationale for deletion:** these four were `proposed` legacy Category-derived grouping cards, not externally identified independent entities in the scope in which the existing Knowledge graph used them. Their previously held IDs are available in Git history. No new substitute name or category was invented. The term itself is not declared nonexistent.

## Referential integrity

Verified incoming `in_topic` links before deletion:

- `Agent Development Tooling` — 1 from `claude-agent-sdk`.
- `Asynchronous Execution` — 12 from `async-await`, `asynchronous-runtime`, `asynchronous-task`, `cooperative-task-scheduling`, `coroutine-suspension`, `coroutine`, `event-loop`, `future`, `python-asyncio-event-loop`, `python-asyncio-task`, `python-coroutine-object`, `task-scheduling`.
- `Asynchronous Flow Control` — 2 from `backpressure`, `bounded-asynchronous-queue`.
- `Asynchronous Lifecycle` — 4 from `python-asyncio-task-group`, `structured-concurrency`, `task-cancellation`, `task-lifecycle`.

**19 incoming `in_topic` links removed** with their deleted targets. The four deleted cards each had one outgoing `broader`, so a total of **23 legacy edges** are removed. No replacement predicates were added.

All 19 children retain their own source lists, UUIDs and any other relations. Disconnected nodes are valid under the existing contract. This operation maintains referential integrity only; it **does not semantically certify surviving links**.

## Invariants and check boundaries

- Before: 81 Knowledge, 92 edges (42 ETCLOVG + 28 old `in_topic` + 8 retained `broader` + 14 old other relations).  
- After: **77 Knowledge, 69 edges** (23 removed). Verify by static CI.
- ETCLOVG 43 Knowledge and its 42 author-taxonomy `in_topic` remain unchanged.
- `Agent Workflow Design` is preserved with a stronger source; its three incoming `in_topic` and outgoing `broader` were **not** re-reviewed at this stage.
- Stage 1C: lightweight source review of the **32 remaining legacy notes**. Only then start Stage 2 semantic relation audit; do not rewire edges preemptively.
- No modifications to `main`, no merge, no extra archive copies of the deleted notes.

**Confidence boundary:** exact-name nonmatches alone do not demonstrate nonexistent phenomena. The deletion is justified by failure to ground **these specific legacy rubric identities**, while retaining all concrete source-supported children.
