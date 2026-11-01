# Контракт данных v1 — единый Knowledge

## Узлы

**Единственный тип узла:** `type: knowledge`, путь `vault/knowledge/entries/<slug>.md`. Отдельного `type: category` и каталога `vault/taxonomy/categories/` больше нет. Все ссылки — пути от корня `vault/`.

Обязательные поля: `id` (UUIDv7, устойчивый), `type`, `name`, `lifecycle: skeleton|enriched`, `review_status: proposed|accepted|rejected`, непустой `sources` (HTTP(S) URL). H1 точно равен `name`. Для `skeleton` тело после H1 пусто.

Необязательные поля: `aliases`, `kind` (`artifact`, `construct`, `mechanism`, `model`, `pattern`, `practice`, `problem`, `property`, `result`, `structure`, `technology`).

## Связи

У Knowledge допустимы `in_topic`, `broader`, `specializes`, `part_of`, `realizes`, `schedules`, `executes`, `manages`. Все направлены Knowledge → Knowledge; могут отсутствовать. Подробнее: [relations.md](relations.md).

Формат полей — только простые строки и списки строк YAML; ссылку записывать как quoted wikilink без расширения `.md`:

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

**Evidence-first:** наличие и употребление названия проверяется чтением источника, а не только форматом URL. Допустим Knowledge без любых отношений. Семантический статус подтверждения имени и семантического ревью хранятся в реестре Discovery, **не** являются новыми полями YAML.

Точечные изменения схемы — отдельное решение с миграцией и тестами. Не путать `broader` (тематически более широкое) и `specializes` (частный вид), `part_of` (часть целого).
