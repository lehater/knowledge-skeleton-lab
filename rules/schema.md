# Schema v1 — единый Knowledge

## Узел

**Единственный доменный тип:** `type: knowledge`. Путь: `vault/knowledge/entries/<slug>.md`. Категории, самостоятельные типы Domain/Area и файловые иерархии тем не требуются.

Обязательные YAML-поля:
- `id`: уникальный **UUIDv7**, постоянный на протяжении жизни идентичности;
- `type: knowledge`;
- `name`: название, соответствующее H1;
- `lifecycle: skeleton | enriched`;
- `review_status: proposed | accepted | rejected`;
- `sources`: непустой список HTTP(S)-URL (технический минимум).

Необязательные поля:
- `aliases`: список альтернативных названий **того же референта**;
- `kind`: `artifact | construct | mechanism | model | pattern | practice | problem | property | result | structure | technology`;
- поля отношений из [relations.md](relations.md): `in_topic`, `broader`, `specializes`, `part_of`, `realizes`, `schedules`, `executes`, `manages`.

Каждое поле-отношение — список quoted wikilink в формате `"[[knowledge/entries/slug]]"` (путь от `vault/`, без `.md`). Обратные ссылки вычисляются. Для `skeleton` тело содержит только заголовок `# name`; контент добавляется позже.

```yaml
---
id: 019a0000-0000-7000-8000-000000000001
type: knowledge
name: "Single-Agent Inner Loop"
lifecycle: skeleton
review_status: proposed
in_topic:
  - "[[knowledge/entries/lifecycle-orchestration]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Single-Agent Inner Loop
```

## Важное различие

- `sources` заполнено = **формально есть указатель**, но не подтверждено наличие термина.
- `source_verified` = результат **ручной/агентной проверки источника**; регистрируется в отчёте аудита, а не в этом YAML.
- `review_status` = решение о принятии **самого Knowledge**; не повышается автоматически при успешном анализе URL или CI.
- `semantic_review_status` = независимый статус оценки смысла и отношений, в evidence-реестре, не в YAML.

Ни одно поле `categories` и никакой узел `type: category` не действуют. Присутствующие legacy-данные подлежат отдельному evidence-аудиту, а не получают подтверждение автоматически от этого документа.
