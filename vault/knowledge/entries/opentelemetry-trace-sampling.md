---
id: 01a197fa-1f41-75f7-9245-3d14dc47e00e
type: knowledge
name: "OpenTelemetry Trace Sampling"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/opentelemetry-trace]]"
sources:
  - "https://opentelemetry.io/docs/concepts/sampling/"
---
# OpenTelemetry Trace Sampling

Trace sampling выбирает сохраняемую часть трассировочных данных. Head sampling принимает решение рано, без анализа всей trace: он эффективен, но не может гарантированно сохранить все traces с позднее обнаруженной ошибкой. Tail sampling анализирует все или большинство spans и выбирает traces по ошибкам, длительности или атрибутам.

Tail sampling требует stateful-обработки и хранения поступающих данных до решения, что увеличивает эксплуатационную сложность. Если head sampling уже отбросил часть traces, последующий tail sampler не может вернуть их; выборки влияют на полноту анализа отдельных запусков.
