# Evidence и отчёты

Отчёт — свидетельство конкретной проверки; **не нормативное правило и не Knowledge-узел**. Для текущей очистки каждый этап имеет собственный отчёт в Git вне `vault/`.

## Node audit (Stage 1)

Выполни [rules/discovery.md](../rules/discovery.md). Создай реестр с одним результатом на каждый текущий `vault/knowledge/entries/*.md`: `path`, `id`, `name`, `evidence_status`, `evidence_url`, `evidence_location`, `identity_note`, `decision`.

Решения фиксируются отдельно: `verified/keep`, `unresolved/investigate`, `unsupported/remove_candidate`. Отсутствие имени в одном источнике не доказывает его несуществование; не удаляй узлы автоматически.

## Relation audit (Stage 2)

Указывать триплет `source / predicate / target`, доказательство и вердикт для **каждого** старого ребра. `INSUFFICIENT_EVIDENCE` хранить отдельно от доказанного ложного отношения. GUI и static — независимые результаты.

Отчёты предыдущих пилотов не имеют нормативной силы. Новые ошибки фиксируются отдельной ревизией, не стираются задним числом.
