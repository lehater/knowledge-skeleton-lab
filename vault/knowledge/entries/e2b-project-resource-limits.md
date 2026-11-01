---
id: 01a197e5-8bf8-704f-af23-c87c66df0056
type: knowledge
name: "E2B Project Resource Limits"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/e2b-sandbox]]"
sources:
  - "https://docs.e2b.dev/billing"
---
# E2B Project Resource Limits

E2B задаёт зависящие от плана пределы CPU, RAM, диска, непрерывного времени работы, числа одновременно работающих сред и скорости их создания. Выделяемые CPU и RAM настраиваются при сборке custom template через `cpuCount` и `memoryMB`. Максимум непрерывной работы ограничивает один интервал исполнения, а не весь срок существования среды: pause/resume начинает новый интервал.

API rate limits применяются по проекту и endpoint и разделяются всеми его API keys и клиентами, включая SDK/CLI. Превышение возвращает HTTP 429 с `Retry-After`; обращения к разным IDs одного параметризованного endpoint используют общую квоту.
