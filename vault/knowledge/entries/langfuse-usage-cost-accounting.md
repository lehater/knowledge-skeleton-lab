---
id: 01a197fa-da39-7bbc-9ba4-fb1a096624a0
type: knowledge
name: "Langfuse Usage and Cost Accounting"
kind: mechanism
lifecycle: enriched
review_status: proposed
part_of:
  - "[[knowledge/entries/langfuse]]"
in_topic:
  - "[[knowledge/entries/cost-tracking-and-optimization]]"
sources:
  - "https://langfuse.com/docs/observability/features/token-and-cost-tracking"
---
# Langfuse Usage and Cost Accounting

Langfuse раздельно принимает `usage_details` (единицы по типам) и `cost_details` (USD). Переданные значения приоритетнее вычисленных. При отсутствии стоимости модель сопоставляется по `model` с definition, содержащим цены по типам usage; стоимость вычисляется при ingestion. Изменённые определения применяются к новым generations, поэтому идентичность модели и действовавшие цены существенны для интерпретации суммы.

Usage можно получить из ответа провайдера или оценить токенизатором; такая оценка не равна точному provider count. Плоский `usage_details` требует непересекающихся buckets: cached/reasoning вычитаются из включающих input/output, `total` — их сумма. Иначе возникает двойной счёт. Автоматическая нормализация зависит от входной схемы; произвольные плоские ключи хранятся как переданы.
