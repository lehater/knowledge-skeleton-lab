# Как читать Collector с разных инженерных точек зрения в Obsidian

На примере девяти Knowledge для тематического и структурного видов достаточно фильтра по предикату. Для функционального он находит исполнителя Pipeline, но обязанности Receiver, Processor и Exporter раскрываются в тексте. Для информационного вида требуется ещё один вход — конфигурация маршрута. Одни и те же девять рёбер допускают как передачу через Processor, так и передачу сразу в Exporter. **Для этого среза расширение словаря не требуется.**

База исследования от 3 ноября 2026 года — [main, 5c8606c](https://github.com/lehater/knowledge-skeleton-lab/tree/5c8606c7075b77f4175952596663e84176c54a6d). Действуют [рабочий контракт](../../AGENTS.md), [Discovery Skill](../../.agents/skills/knowledge-graph-discovery/SKILL.md), [правила](../../rules/README.md), [концепция](../../docs/concept.md) и [ADR-001](../../docs/decisions/0001-graph-projections.md). [Принятое исследование #29](engineering-views-and-graph-semantics.md) разделило статические связи и путь результата Runner. [Draft #30](https://github.com/lehater/knowledge-skeleton-lab/pull/30) сопоставил назначение функции, обмен и сценарий. В [эксперименте #28](https://github.com/lehater/knowledge-skeleton-lab/pull/28) две политики Runner дали разное число обращений к модели при одной структуре. Его предложение по Canvas не входит в ADR. Здесь проверяем перенос этих выводов на другой механизм.

## 1. Одна модель и границы её утверждений

Каждая строка ниже прочитана из YAML карточки **источника**. Выбраны все рёбра, оба конца которых принадлежат указанным девяти Knowledge. Названия Collector-компонентов сокращены. Идентификаторы строк используются только для чтения таблиц отчёта.

| Ребро | Откуда | Предикат | Куда | Статус |
|---|---|---|---|---|
| T1 | [Observability & Operations](../../vault/knowledge/entries/observability-operations.md) | in_topic | [Harness Engineering](../../vault/knowledge/entries/harness-engineering.md) | main |
| T2 | [Unified Observability](../../vault/knowledge/entries/unified-observability.md) | in_topic | Observability & Operations | main |
| T3 | [OpenTelemetry](../../vault/knowledge/entries/opentelemetry.md) | in_topic | Unified Observability | main |
| S1 | [Collector](../../vault/knowledge/entries/opentelemetry-collector.md) | part_of | OpenTelemetry | main |
| S2 | [Pipeline](../../vault/knowledge/entries/opentelemetry-collector-pipeline.md) | part_of | Collector | main |
| S3 | [Receiver](../../vault/knowledge/entries/opentelemetry-collector-receiver.md) | part_of | Pipeline | main |
| S4 | [Processor](../../vault/knowledge/entries/opentelemetry-collector-processor.md) | part_of | Pipeline | main |
| S5 | [Exporter](../../vault/knowledge/entries/opentelemetry-collector-exporter.md) | part_of | Pipeline | main |
| F1 | Collector | executes | Pipeline | main |

S1 использует значение OpenTelemetry как набора средств, в который входит Collector. S3–S5 обозначают роли в архитектуре pipeline. S4 не задаёт минимальное число processors в конфигурации. F1 и S2 имеют общие концы, но отвечают на разные вопросы. Обход от Harness к компонентам использует входящие рёбра, не требует записывать обратные и не порождает прямое утверждение «Receiver входит в Harness Engineering». [Архитектура Collector](https://opentelemetry.io/docs/collector/architecture/).

### Пять проекций

| Вид | Выбор на этих девяти Knowledge | Что можно прочитать |
|---|---|---|
| Тематический | T1–T3. От Harness по входящим in_topic, глубина 3 | Направление → подтема → технология. В полном vault у корня видны также другие направления. |
| Структурный | S1–S5. От OpenTelemetry по входящим part_of, глубина 3 | Collector содержит Pipeline, в нём различаются три роли. Порядок обработки из состава не выводится. |
| Функциональный | F1. От Collector по исходящим executes, затем ответственности компонентов из таблицы ниже | Исполнитель — Collector, исполняемая организация обработки — Pipeline. У трёх ролей в этом срезе нет исходящих executes к самостоятельным функциям. |
| Информационный | В YAML **0** рёбер потока. Выбрать конфигурацию A или B и прочитать колонки входа, результата и потребителя ниже | Вид показывает границы передачи и условия доставки. Число рёбер YAML не меняется при смене маршрута. |
| Комбинированный | Объединение T1–T3, S1–S5, F1. Прочитать от Harness до Pipeline, затем рядом открыть маршрут A/B | Девять Knowledge и девять направленных фактов. Один переход фокуса связывает карту темы с механизмом. Строки A/B поясняют работу этого же Pipeline, не попадают в счётчик рёбер. |

### Проверка цепочки «компонент → функция → входные данные → результат → потребитель»

Проверяем на двух вариантах одного traces-pipeline. A использует OTLP receiver, batch processor и сетевой OTLP exporter. В B тот же receiver и exporter, список processors отсутствует. Предполагаются поддержка traces, настроенный endpoint и включение компонентов в service.pipelines. Это два документально допустимых примера, не конфигурация проекта и не запись фактического запуска. Слова «пакет» и «потребитель» обозначают роли внутри примера, а стрелка в заголовке — порядок чтения колонок. Данные поступают **на вход функции**. [Конфигурация](https://opentelemetry.io/docs/collector/configuration/) · [архитектура](https://opentelemetry.io/docs/collector/architecture/) · [batch processor](https://github.com/open-telemetry/opentelemetry-collector/blob/main/processor/batchprocessor/README.md).

| Компонент | Выполняемая функция | Входные данные | Результат | Непосредственный потребитель |
|---|---|---|---|---|
| Receiver, A/B | Принять OTLP traces и передать во внутренний pipeline | Телеметрия отправителя | Данные traces на внутренней границе Collector | A — batch processor. B — exporter |
| Processor, только A | Сгруппировать данные для последующей передачи | Данные traces от receiver | Пакет для экспорта при выполнении условия отправки | Exporter |
| Exporter, A/B | Отправить телеметрию по настроенному протоколу | A — выход batch processor. B — выход receiver | Исходящая передача, успешность зависит от endpoint | Принимающая сторона настроенного endpoint |

**Статус всех передач в таблице — локальное описание конфигурации.** В A маршрут Receiver → Processor → Exporter. В B маршрут Receiver → Exporter. В обоих случаях Exporter → endpoint относится к конфигурации. В общей архитектуре один receiver может обслуживать несколько pipelines, а фильтрующий processor может отбросить данные. Утверждение «в запуске пакет дошёл» требует наблюдения конкретного исполнения. Контракт экспортера и путь конкретного пакета имеют разные условия истинности. [Collector resiliency](https://opentelemetry.io/docs/collector/resiliency/).

## 2. Матрица отношений

Тип обеих карточек остаётся knowledge. Ограничение концов относится к тому, **что обозначает карточка**: технология, деятельность, информационный объект, тема. Это определяется по содержанию и первоисточнику. Необязательный kind может помочь найти карточку, но сам не доказывает допустимость связи. Аналоги в стандартах ниже поясняют смысл, а направление YAML определяют [правила отношений](../../rules/relations.md).

| Класс | Предикат | Семантика | Направление | Пример | Источник стандарта / метода | Хранение | Viewpoint | Статус |
|---|---|---|---|---|---|---|---|---|
| Тематический | in_topic | В какой теме источник рассматривает предмет? | Предмет → тема | T3 | ETCLOVG, [Figure 4](https://picrew.github.io/LLM-Harness/main.pdf#page=8), авторская рубрикация | YAML | Темы | существующий |
| Тематическая иерархия | broader | Какая тема шире по охвату? | Узкая тема → широкая | Agentic Software Engineering → Software Engineering | [SKOS §8](https://www.w3.org/TR/skos-reference/#semantic-relations), близко к skos:broader | YAML | Масштаб темы | существующий |
| Таксономический | specializes | Частным видом чего является источник? | Подтип → тип | GenAI Inference Span → OpenTelemetry Span | [UML Generalization, §9](https://www.omg.org/spec/UML/2.5.1/PDF) | YAML | Классификация | существующий |
| Структурный | part_of | Частью какого целого является источник? | Часть → целое | S2–S5 | [ArchiMate Composition](https://archimate-community.pages.opengroup.org/workgroups/archimate-101/), в методе читается от целого к части. YAML не импортирует правила владения UML | YAML | Состав | существующий |
| Реализация | realizes | Какую именованную абстракцию воплощает реализация? | Реализация → абстракция | Python asyncio TaskGroup → Structured Concurrency | [UML Realization, §7](https://www.omg.org/spec/UML/2.5.1/PDF), [ArchiMate Realization](https://archimate-community.pages.opengroup.org/workgroups/archimate-101/) | YAML | Реализации | существующий |
| Функциональный | executes | Кто обеспечивает исполнение чего? | Исполнитель → исполняемое | F1 | [TRAK SVp-04](https://governance.foundation/assets/frameworks/trak/TRAK_ArchitectureViewpoints.pdf#page=91) Resource performs Function, [ArchiMate Assignment](https://archimate-community.pages.opengroup.org/workgroups/archimate-101/) и [Arcadia](https://mbse-capella.org/arcadia-qna) — аналоги назначения ответственности. Pipeline в main обозначает исполняемую структуру | YAML | Исполнение | существующий |
| Управление | schedules | Кто планирует исполнение? | Планировщик → исполняемая работа | Python asyncio Event Loop → Task | Проектный термин, конкретная [семантика asyncio](https://docs.python.org/3/library/asyncio-task.html) | YAML | Планирование | существующий |
| Управление | manages | Кто управляет жизненным циклом? | Управляющий → управляемое | Python asyncio TaskGroup → Task | Проектный термин, [контракт TaskGroup](https://docs.python.org/3/library/asyncio-task.html#task-groups) | YAML | Жизненный цикл | существующий |
| Зависимость и сервис | Dependency / Serving | Что требуется клиенту? Кто предоставляет возможность? | UML клиент → поставщик. ArchiMate поставщик → потребитель | Сетевому exporter нужен совместимый endpoint для доставки | [UML Dependency, §7](https://www.omg.org/spec/UML/2.5.1/PDF), [ArchiMate Serving](https://archimate-community.pages.opengroup.org/workgroups/archimate-101/) | Контракт в тексте с условием | Интеграция | локальное описание |
| Информация | Flow / Functional Exchange / ObjectFlow | Какие данные пересекают границу? | Отправитель → получатель с указанием содержимого. В Capella выходной порт функции → входной | Batch передаёт пакет exporter только в A | [Arcadia](https://mbse-capella.org/arcadia-qna), [TRAK SVp-02](https://governance.foundation/assets/frameworks/trak/TRAK_ArchitectureViewpoints.pdf) Port Connection exchanges Interaction Element, [UML ObjectFlow, §15](https://www.omg.org/spec/UML/2.5.1/PDF) | Таблица A/B | Поток | локальное описание |
| Доступ к данным | Access, IDEF0 Input / Output | Кто читает или формирует данные? Какова их роль для функции? | Функция читает/пишет объект. В IDEF0 вход → функция → выход | Batch принимает данные traces и выдаёт пакет | [ArchiMate Access](https://archimate-community.pages.opengroup.org/workgroups/archimate-101/), [IDEF0 в примере NIST](https://pages.nist.gov/circular-economy-manufacturing-models/instructions.html) | Колонки входа/результата | Функция и данные | локальное описание |
| Поведение | Triggering / ControlFlow | При каком условии управление переходит дальше? | Предыдущее поведение → последующее, с условием | По истечении таймера batch возможна отправка | [ArchiMate Triggering](https://archimate-community.pages.opengroup.org/workgroups/archimate-101/), [UML Activity, §15](https://www.omg.org/spec/UML/2.5.1/PDF) | Таблица переходов или Mermaid | Сценарий | локальное описание |
| Ограничение | Constraint / IDEF0 Control | При каком условии допустима операция? | Условие ограничивает элемент или набор элементов | Все компоненты выбранного pipeline должны поддерживать traces | [UML Constraint, §7](https://www.omg.org/spec/UML/2.5.1/PDF), [NIST IDEF0](https://pages.nist.gov/circular-economy-manufacturing-models/instructions.html) | Текст Pipeline | Совместимость | локальное описание |
| Причинный | wasGeneratedBy / causes | Что породило конкретный результат? За счёт какого механизма? | В PROV результат → породившая деятельность. Для причинного объяснения нужны условия | Заполнение очереди exporter может привести к потере данных. Причину потери конкретного пакета надо установить отдельно | [W3C PROV-O](https://www.w3.org/TR/prov-o/#wasGeneratedBy) описывает происхождение, не универсальную причинность | Механизм в тексте, фактический исход в trace | Эксплуатация | локальное описание. Безусловный causes отклонён |
| Сравнительный | better_than / related | По какому критерию один вариант предпочтительнее? | Сопоставляемые варианты + критерий + условия | A группирует отправки, B пропускает стадию. Выигрыш по задержке здесь не измерен | [SKOS related](https://www.w3.org/TR/skos-reference/#associative), симметричная ассоциация не задаёт сравнение | Таблица вариантов и критериев | Выбор | отклонён как ребро |

**Проверка кандидатов на расширение.** Статус «рекомендуемый кандидат» для YAML не присвоен ни одному предикату. Ниже — запросы, которые восемь предикатов действительно не выражают, и причина решения.

| Предложение | Запрос, недоступный через восемь предикатов | Отличие и решение |
|---|---|---|
| sends_to | Кто непосредственно получает выход receiver? | part_of указывает целое, executes — исполняемое. Адресат различен в A и B. Отклонить безусловное ребро. |
| consumes / produces | Какие функции принимают или выдают конкретный тип данных? | Связь с типом входа/результата отличается от реализации, исполнения и управления. Для данного среза нет пары самостоятельных Knowledge «функция — соответствующий тип пакета». Представить локально. Раздельные пары также не восстановят маршрут. |
| depends_on | От какого интерфейса зависит доставка? | Ни manages, ни realizes не выражают необходимость интерфейса для клиента. В примере зависимость относится к сетевому exporter, поддерживаемому сигналу и настройке endpoint. Оставить в контракте. |
| performs как замена executes | Какой компонент выполняет Pipeline? | Уже отвечает F1. Нового запроса нет. Отклонить синоним. |
| triggers / causes / better_than | Что инициировало отправку, почему произошла потеря, какой вариант быстрее? | schedules описывает планирование, не событие, причину или измерение. Каждому вопросу нужны дополнительные условия, наблюдения или критерий. Оставить локально. |

## 3. Что где хранить

| Носитель | Решающий тест | Применение |
|---|---|---|
| Самостоятельный Knowledge | Первичный источник определяет самостоятельный референт. Есть конкретная польза от повторного обращения или межкарточного запроса. Сначала сверить имя и aliases | Pipeline и Processor уже имеют идентичность. Значение endpoint и пакет этого запуска остаются деталями |
| YAML-ребро | Можно назвать две существующие карточки, направление и разрешённый предикат. Утверждение сохраняет смысл и при смене допустимой конфигурации в заявленном масштабе | Collector executes Pipeline. Обратное чтение вычисляется |
| Текст / таблица Knowledge | Факт принадлежит одной ответственности либо для него нужны участники, данные и условие одновременно | В Pipeline удобно сопоставить A и B. В Exporter — описать границы очереди и повторов |
| Mermaid в Markdown | Нужно увидеть ветвление, повтор или порядок. У схемы есть владелец, исходная конфигурация и условие | Варианты передачи с processor и без него. Схема читается как сценарий в карточке Pipeline |
| Canvas | Нужна сохранённая пространственная карта уже подтверждённых YAML-фактов | Показать три части Pipeline и отдельно подписать executes. По ADR-001 линии Canvas воспроизводят YAML. Размещать сценарий как новую систему рёбер Canvas нельзя |

Если изменение третьего аргумента (маршрут, сигнал, время, критерий) меняет истинность пары, сохранить весь контекст вместе. W3C описывает представление n-арного отношения отдельным объектом, но в данном случае строка таблицы уже удерживает участников и условие. [W3C Working Group Note](https://www.w3.org/TR/swbp-n-aryRelations/).

## 4. Как получить виды в Obsidian

| Средство | Действие и ожидаемый результат | Граница проверки |
|---|---|---|
| K-Plex | Распознать поля YAML как relationship properties. Фокус Pipeline. В Graph Lenses выбрать Relationships → Show matching → Relationship property → is → part_of. В пределах девяти карточек ожидаются S2, S3, S4, S5. Затем выбрать executes — остаётся входящее F1. При просмотре пары Collector/Pipeline сверить **поле и направление** по карточке | Линза действует в видимом соседстве. Quick Filter по имени/тегу не заменяет фильтр рёбер. Переход между фокусами расширяет охват. Поддержку показа обоих подписанных направлений одновременно в установленной версии не проверяли. [Документация K-Plex](https://community.obsidian.md/plugins/k-plex) |
| Встроенный Graph | Глобальный граф показывает файлы и внутренние ссылки. Поиском или группой можно выбрать файлы с нужным свойством | Фильтр узлов не отбирает конкретное ребро между оставшимися файлами. Штатный переключатель только part_of либо только executes не документирован. [Obsidian Graph](https://help.obsidian.md/plugins/graph) |
| Bases | Таблица файлов из knowledge/entries с непустым part_of, колонки file.name и part_of. Для чтения состава Pipeline выбрать строки, где список part_of содержит ссылку на Pipeline. Результат в срезе — Receiver, Processor и Exporter | Фильтр проверяет свойство файла. Один файл даёт одну строку, список целей остаётся значением ячейки. Это проверяемый табличный вид, не рекурсивный граф рёбер. [Синтаксис Bases](https://help.obsidian.md/bases/syntax) |
| Canvas | Разместить карточки из среза и воспроизвести S2–S5/F1 с направлениями и подписями | Получится статическая схема. Автоматическая перестройка по выбору предикатов в проекте отсутствует. [Obsidian Canvas](https://help.obsidian.md/plugins/canvas) · [ADR-001](../../docs/decisions/0001-graph-projections.md) |

Пример фильтра Bases для вставки в блок `base` существующей заметки. Поле `part_of` в схеме vault — список ссылок. Папка задаёт границу поиска, а сравнение выбранного свойства исключает обычные упоминания Pipeline в теле заметки. [Функции list и link](https://help.obsidian.md/bases/functions).

```yaml
filters:
  and:
    - 'file.inFolder("knowledge/entries")'
    - 'list(part_of).contains(link("knowledge/entries/opentelemetry-collector-pipeline"))'
views:
  - type: table
    name: Части Pipeline
    order:
      - file.name
      - part_of
```

**Что проверено на практике:** выборка YAML и направления рёбер на фиксированном main. [GUI-пилот владельца](k-plex-etclovg-gui-validation-2026-11-01.md) ранее подтвердил тематическую навигацию по 7 направлениям и 35 подразделам. Новый GUI-прогон Collector и исполнение A/B не проводились. Возможности интерфейсов выше установлены по документации, а числа в строках — ожидаемые результаты для явно ограниченного среза. Глобальный граф с произвольным фильтром рёбер среди четырёх проверенных средств не подтверждён.

## 5. Минимальное решение

| Приоритет | Решение | Проверяемый результат |
|---|---|---|
| P0 | Сохранять различие между составом, ответственностью, конфигурацией и наблюдением | По S4 нельзя заключить, что Processor участвовал в запуске. A и B имеют один YAML-граф |
| P1 | Проверить две линзы на Pipeline и прочитать рядом одну таблицу A/B из этого отчёта | Читатель называет состав, исполнителя и непосредственного потребителя Receiver в обоих случаях. Только если таблица помогает, перенести её в существующую карточку Pipeline |
| P2 | Вернуться к словарю, если нужен межкарточный запрос об устойчивой паре на нескольких механизмах | Для кандидата указать два существующих Knowledge, первоисточник, направление и вопрос, недоступный действующим предикатам. Для текущего среза таких добавлений нет |
| P3 | При совместном показе S2 и F1 подобрать различимые подписи в доступном виде | Читатель без угадывания отличает «Pipeline входит в Collector» от «Collector исполняет Pipeline» |

Первый шаг в Obsidian занимает одно переключение линзы в фокусе Pipeline: part_of должно показать состав, executes — исполнителя. Затем в строке Receiver можно проверить, почему этот же жест не способен показать получателя данных без выбора A или B.
