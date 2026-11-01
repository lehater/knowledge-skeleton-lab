# Stage 1C — облегчённый аудит 32 legacy Knowledge

**Дата:** 2026-11-01.  
**Предыдущий HEAD:** `748c38612b3dd11fae5f518ca07be2a90b45aae6`, Draft PR #8.  
**Scope:** имена, референты, первичные источники. **Не аудит отношений**.

## Принцип проверки

Переиспользованы внешние первоисточники: документация Rust, Python, Kotlin, Microsoft .NET, IEEE CS, Anthropic и официальный GitHub quickstart. Каждое из 32 названий сверено с источником до уровня прямого названия **либо однозначного описательного эквивалента**; статус и место в источнике записаны в [реестре](node-source-audit-32-2026-11-01.csv).

`verified` здесь означает **подтверждённый референт**, а не то, что термин является обязательной универсальной онтологической категорией. В реестре различаются:
- `exact`: название явно употреблено;
- `qualified_title`: добавлен язык, продукт или автор;
- `equivalent`: референт ясно описан без дословного заголовка;
- `descriptive_equivalent`: нормализованное название для непосредственно описанной роли, паттерна или темы. Такое имя не нужно выдавать за официальный стандартный термин.

## Итог Stage 1C

- **32/32** получили доказательство имени / однозначного эквивалента, `evidence_status=verified`, с конкретной ссылкой и местом;
- **0** удалённых узлов: в этом срезе не обнаружено ранее не проверенных самостоятельных синтетических рубрик, сравнимых с удалёнными на Stage 1B;
- Исправлено **2 несовпадения источника и названия**, сохранены оба существующих UUID:
  - `Backpressure`: дополнен официальный [Node.js, Backpressuring in Streams](https://nodejs.org/learn/modules/backpressuring-in-streams), раздел **How Does Backpressure Resolve These Issues?**. Исходный Python `asyncio.Queue(maxsize)` подтверждал ограниченную очередь, но не употреблял `Backpressure`.
  - `Task Lifecycle`: дополнен [Microsoft Learn, Improve app performance](https://learn.microsoft.com/en-us/dotnet/maui/deployment/performance), раздел **Use asynchronous programming → Fundamentals**: lifecycle of asynchronous `Task` / `TaskStatus`. Kotlin описывает жизненный цикл **корутины**, что без этого источника не доказывало общий заголовок `Task Lifecycle`.

## Прямое доказательство нормализованных названий

`anthropic-autonomous-coding-demo` — официальный [README Anthropic autonomous-coding](https://github.com/anthropics/claude-quickstarts/tree/main/autonomous-coding) имеет H1 **Autonomous Coding Agent Demo**; префикс `Anthropic` в Knowledge — указание издателя. Это не абстрактный паттерн, а конкретный демонстрационный артефакт.

Три длинных названия `initializer-coding-agent-pattern`, `initializer-agent-role`, `coding-agent-role` не являются дословными заголовками Anthropic; они **однозначно соответствуют** двум конкретным ролям и двухчастному решению, описанному в [Effective harnesses for long-running agents](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents), раздел *The long-running agent problem*. Их идентичность допустима как локальное описательное нормализованное имя, а не как самостоятельный универсально определённый отраслевой паттерн. Сущности не разделяются и не сливаются.

`task-scheduling` и `concurrent-programming` аналогично подтверждаются описанным механизмом и областью работы, но **не** утверждаются нормативными рубриками исходного источника.

## Сводка всей Node-очистки

| Источник доказательств | Количество | Итог |
| --- | ---: | --- |
| ETCLOVG registry, ранее проверено по Figure 4 | 43 | Source-verified names в авторской схеме; recheck NOT_RUN |
| `Agent Harness Architecture`, Stage 1A | 1 | Заголовок проверен |
| `Agent Workflow Design`, Stage 1B | 1 | Подтверждена описательная практика Microsoft |
| 32 текущих legacy Knowledge, этот реестр | 32 | Verified с evidence location |
| **Итого оставшихся Knowledge** | **77** | **Все 77 имеют источник и evidence-запись** |

Четыре искусственные legacy рубрики и 23 их старых ребра исключены ранее в PR #8, поэтому **активный срез в зависимой цепочке = 77 Knowledge**.

## Ограничения

- `review_status` **сохраняется `proposed`**; автоматическое `accepted` не выполнялось. У многих legacy узлов есть лишь описательный эквивалент, не формальный термин отраслевой онтологии.
- Установлен референт узла, **не** проверены предметные `broader`, `in_topic`, `realizes`, `executes` и прочие связи. Stage 2 Relation audit ещё **NOT_RUN**.
- Проверка `sources` не доказывает актуальность всех адресов навсегда, абсолютную полноту предметной области либо отсутствие внешних смысловых дублей за пределами набора.
- Открытие SWEBOK по `computer.org` может требовать дополнительных прав; факт названия проверен по официальной индексируемой публикации IEEE CS SWEBOK и её описанию.
- Две новые ссылки дополняют `sources`, не удаляя старые; предметные рёбра и другие поля не менялись.
- GUI после Node-очистки `NOT_RUN`; PR основан на PR #8, остальные зависимые PR остаются Draft и `main` не затронут.

## Следующий шаг

**Stage 2 — Relation audit.** Сверить **каждое из текущих рёбер** с каноническим предикатом, направлением и доказательствами; опираться на подтверждённый состав узлов. Удалить либо исправить неподтверждённые связи, но не возвращать искусственные тематические рубрики. Исторические Canvas/Bases удалять на Stage 3 по отдельному scope.
