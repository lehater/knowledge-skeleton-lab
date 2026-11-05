# Schema v1 — единый Knowledge

## Узел

**Единственный доменный тип:** `type: knowledge`. Путь: `vault/knowledge/entries/<slug>.md`. Типов Domain/Area/Category и папочной иерархии для классификации нет.

Обязательные YAML-поля:
- `id`: уникальный постоянный UUIDv7;
- `type: knowledge`;
- `name`: название, совпадающее с H1;
- `lifecycle: skeleton | enriched`;
- `review_status: proposed | accepted | rejected`;
- `sources`: непустой список URL HTTP(S) выбранных источников.

Необязательные поля:
- `aliases`: альтернативные имена **того же** референта;
- `kind`: одно необязательное значение из [kinds.md](kinds.md) (27 значений, определения и границы обязательны при выборе);
- связи: `in_topic`, `broader`, `specializes`, `part_of`, `realizes`, `schedules`, `executes`, `manages` (см. [relations.md](relations.md)).

Каждая связь — список quoted wikilink вида `"[[knowledge/entries/slug]]"` (от `vault/`, без `.md`). Обратные ссылки вычисляются.

- **`skeleton`** — после frontmatter только `# name`, когда заготовлено лишь название.
- **`enriched`** — после `# name` короткое описание/утверждение из прочитанного источника. URL хранится в `sources`, дополнительный реестр не нужен.
- **`review_status: proposed`** — техническое значение при создании; не вводит обязательного отдельного процесса ревью.

Пример:

```yaml
---
id: 019a0000-0000-7000-8000-000000000001
type: knowledge
name: "Single-Agent Inner Loop"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/lifecycle-orchestration]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=27"
---
# Single-Agent Inner Loop

Один агент повторяет вызовы модели и инструментов, используя полученные результаты для следующего шага.
```

Legacy `categories` и `type: category` запрещены. Схема и валидатор сохраняют обратную совместимость с уже существующими Knowledge.
