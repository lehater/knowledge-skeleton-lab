# Типизированные отношения единого Knowledge Graph v1

Все рёбра направлены `source → predicate → target`; обе стороны — Knowledge.

| Предикат | Утверждение |
| --- | --- |
| `in_topic` | source обсуждается в тематической области target |
| `broader` | тема source уже, чем тема target |
| `specializes` | source является частным **видом** target |
| `part_of` | source является составной **частью** target |
| `realizes` | source — конкретная реализация абстракции/принципа target |
| `schedules` | source планирует выполнение target |
| `executes` | source непосредственно обеспечивает выполнение target |
| `manages` | source управляет жизненным циклом/завершением target |

Правила:
1. Добавлять только прямые обоснованные отношения; одна пара `source + predicate + target` хранится однократно.
2. Нельзя превращать рубрикацию в `part_of`, `specializes`, `realizes` или `broader` автоматически. Для неё допустимо **ровно доказуемое** `in_topic`.
3. `broader`, `specializes`, `part_of` ацикличны по отдельности. Обратные рёбра и замыкания не сохраняются.
4. `realizes` не означает `uses`; `in_topic` не означает `is-a`. Сходство терминов не основание для ребра.
5. Отсутствие связей допустимо. Противоречивые/недоказанные гипотезы помещать в ревью, не в YAML.
6. Происхождение подтверждённых ETCLOVG `in_topic` — [реестр](../reports/harness-engineering/etclovg-registry-v0.2.csv) и Figure 4 первоисточника. Старые тематические рёбра мигрированы из `categories` **без новой семантической проверки**.

Представления: [ADR-001](../docs/decisions/0001-graph-projections.md); внешний Graph/K-Plex — только проекция YAML.
