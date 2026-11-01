# Миграция на единый Knowledge Graph v1 — 2026-11-01

**Статус:** экспериментальная ветка, миграция формата выполнена. Static/CI результаты и GUI должны оцениваться отдельно. **Это не автоматическое принятие семантики.**

## Изменение типа узлов

До: 72 Knowledge + 11 Category. После: **81 Knowledge, 0 Category** (9 бывших категорий перенесены с теми же UUID; 2 семантически совпадающих узла слиты с существующими Knowledge).

| Старый Category | Новое место | Идентичность |
| --- | --- | --- |
| Software Engineering | `knowledge/entries/software-engineering` | UUID сохранён, добавлен источник SWEBOK |
| Agentic Software Engineering | `knowledge/entries/agentic-software-engineering` | UUID сохранён, добавлен источник названия |
| Agent Harness Engineering | `knowledge/entries/harness-engineering` | **объединён**, UUID существующего Knowledge сохранён |
| Agent Harness Architecture | `knowledge/entries/agent-harness-architecture` | UUID сохранён, legacy proposed |
| Agent Workflow Design | `knowledge/entries/agent-workflow-design` | UUID сохранён, legacy proposed |
| Agent Development Tooling | `knowledge/entries/agent-development-tooling` | UUID сохранён, legacy proposed |
| Concurrent Programming | `knowledge/entries/concurrent-programming` | UUID сохранён |
| Asynchronous Programming | `knowledge/entries/asynchronous-programming` | **объединён**, UUID существующего Knowledge сохранён |
| Asynchronous Execution | `knowledge/entries/asynchronous-execution` | UUID сохранён, legacy proposed |
| Asynchronous Flow Control | `knowledge/entries/asynchronous-flow-control` | UUID сохранён, legacy proposed |
| Asynchronous Lifecycle | `knowledge/entries/asynchronous-lifecycle` | UUID сохранён, legacy proposed |

**Старые ID двух объединённых категорий (больше не действуют в графе):**
- `01a19620-e69b-7f73-b8f2-9ba82411ee05` → `01a195fd-0b17-702e-9c03-06e5e1cbf066` (Harness Engineering).
- `01a18e44-08a1-70c5-a206-13c292e982ed` → `01a18e44-09af-7b7b-9588-dec954be27d3` (Asynchronous Programming).

Все ранее существовавшие `categories` на Knowledge перенесены в `in_topic` с разрешением по этой таблице. Прежние связи `broader` между бывшими Category перенаправлены на Knowledge; **одно ранее гипотетическое** `Agent Harness Engineering → broader → Agentic Software Engineering` не перенесено, так как Harness может применяться вне инженерии ПО. Из старого `Asynchronous Programming` перенесена связь `broader → Concurrent Programming` на объединённый Knowledge.

**Важное ограничение:** старые категории `Agent Harness Architecture`, `Agent Workflow Design`, `Agent Development Tooling`, `Asynchronous Execution`, `Asynchronous Flow Control`, `Asynchronous Lifecycle` перенесены как **существующие предложенные узлы**, не как заново проверенные источником понятия. Названия/граничные смыслы и старые рёбра требуют независимого evidence-review; они не получили `source_verified=true` в этом процессе.

## Отдельная итерация: доказанные тематические связи ETCLOVG

По оригинальной схеме [Figure 4, Agent Harness Engineering: A Survey](https://picrew.github.io/LLM-Harness/main.pdf#page=8):
- 7 направлений `in_topic → Harness Engineering`;
- 35 подразделов `in_topic → соответствующее направление`;
- **42 новых тематических ребра**, источник и оригинальная структура сохранены в [CSV-реестре](harness-engineering/etclovg-registry-v0.2.csv).

`in_topic` говорит только, **в какой теме источник рассматривает узел**. Он не означает `part_of`, `specializes`, `realizes` или общее для отрасли соглашение.

## Валидация и границы

- Validator v1 запрещает legacy `category` и `categories` и валидирует все типизированные рёбра между Knowledge.
- Весь корпус должен иметь непустые `sources`. Глобальная дедупликация/семантический review не выполнялись.
- Старые Canvas оставлены как исторические проекции `asyncio`; GUI с новой схемой не запускался.
- `main` и PR #4 не менялись; изменения оформлены отдельным зависимым Draft PR.
