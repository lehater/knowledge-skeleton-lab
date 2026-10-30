# Pilot 001 — Asynchronous Programming

Дата: 2026-10-30. Генератор: Codex. База Git: `00852469ae57d3d1e75f49c984401666789405f1`.
Вход: `prompts/first-discovery.md`, `experiments/asynchronous-programming/brief.md` и правила из AGENTS.md.
Исходное дерево чистое, текущая ветка оказалась `main`; для соблюдения запрета её изменения создана `experiment/first-discovery`.

## Scope и источники

Языконезависимый вводный срез исполнения, ожидания, управления жизненным циклом и потоком данных. Concurrency и parallelism — соседние понятия. Один конкретный API включён для проверки realizes. Исключены учебные шаги, код, подробные API, распределённая архитектура и полная инженерная таксономия.

Все следующие страницы открыты веб-инструментом 2026-10-30; это живые URL, локальных снимков нет, поэтому повторная загрузка может отличаться. Python-страницы отданы как документация 3.15.2; версии Kotlin/Rust/.NET не закреплены. Выводы ограничены общими понятиями, без переноса API-гарантий между языками.

| Код | Первичный источник | Использование |
| --- | --- | --- |
| P0 | https://docs.python.org/3/library/asyncio.html | Вводный scope, I/O |
| P1 | https://docs.python.org/3/library/asyncio-task.html | Awaitables, Task object, Task groups, cancellation |
| P2 | https://docs.python.org/3/library/asyncio-eventloop.html | Preface, Scheduling callbacks |
| P3 | https://docs.python.org/3/library/asyncio-queue.html | Queue, maxsize, put |
| R | https://doc.rust-lang.org/book/ch17-00-async-await.html | Введение и Parallelism and Concurrency |
| K | https://kotlinlang.org/docs/coroutines-basics.html | Suspending functions; Coroutine scope and structured concurrency |
| M | https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/ | Введение; Don't block, await instead |

Дополнительная страница `https://kotlinlang.org/docs/cancellation-and-timeouts.html` вернула пустое читаемое содержимое; не использована как доказательство. Microsoft вернул баннер авторизации, но содержательный текст доступен; оснований выводить доступность всего сайта нет.

## Независимый baseline тем (до генерации узлов)

Метод: извлечь тематические различия из введений и разделов источников, отфильтровать по brief, затем зафиксировать список до записи YAML. Независимость здесь означает внешнее основание списка, а не отдельного проверяющего. Число узлов не использовалось как знаменатель покрытия. Одна тема может покрываться несколькими узлами; упоминание только в категории не считается покрытием.

| ID | Тема | Основание | Планируемое соответствие slug Knowledge |
| --- | --- | --- | --- |
| B01 | Concurrency против parallelism | R, M | concurrency; parallelism |
| B02 | Асинхронная модель | R, M | asynchronous-programming |
| B03 | Приостановка и возобновление | K, R | coroutine-suspension |
| B04 | Синтаксическая модель async/await | R, M | async-await |
| B05 | Coroutine как вычисление | K | coroutine |
| B06 | Task и future, различие ролей | P1, R | asynchronous-task; future |
| B07 | Event loop | P2 | event-loop |
| B08 | Runtime и планирование | R, P2 | asynchronous-runtime; task-scheduling |
| B09 | Кооперативное исполнение | P1, Task object | cooperative-task-scheduling |
| B10 | Жизненный цикл задачи | K | task-lifecycle |
| B11 | Отмена | K, P1 | task-cancellation |
| B12 | Structured concurrency | K, P1 | structured-concurrency |
| B13 | I/O-bound работа | R, P0 | io-bound-work |
| B14 | Backpressure | P3, интерпретация ожидания производителя | backpressure; bounded-asynchronous-queue |
| B15 | Ошибки и распространение сбоев | K, P1 | Нет отдельного узла |
| B16 | Таймауты ожидания | P1, Timeouts | Нет отдельного узла |

B14 — вывод из поведения ограниченной очереди, а не дословное название раздела. Это снижает уверенность. Streams, каналы, синхронизация, callback-адаптация и разграничение CPU-bound/I/O-bound полезны для следующего прохода, но не включены в baseline данного минимального среза. Baseline не исчерпывает область.

## Inventory и категории

В исходном Git нет Knowledge/categories; `vault/templates/` содержит лишь шаблоны, `vault/views/` — Bases. Совпадающих референтов и aliases нет. Существующие ID не изменяются. Все новые сущности proposed, Knowledge — skeleton; имя и aliases проверены перед созданием. Отдельного общего узла Task без уточнения контекста нет.

Категории (предметные области, не формы документов):

| Slug | Граница | broader |
| --- | --- | --- |
| concurrent-programming | Область координации одновременно продвигающихся вычислений, включая соседство с параллелизмом | — |
| asynchronous-programming | Область программирования с отложенным завершением и ожиданием | concurrent-programming |
| asynchronous-execution | Исполнение и организация возобновления | asynchronous-programming |
| asynchronous-lifecycle | Управление сроком жизни и отменой | asynchronous-programming |
| asynchronous-flow-control | Регулирование потока между асинхронными производителем и потребителем | asynchronous-programming |

Четыре broader обоснованы сужением предметной области: async является рассматриваемым подходом к конкурентному программированию (R, K, P0), остальные три — аспекты async, подтверждённые P1–P3. Это предложенная навигация, не универсальная классификация. Несколько родителей контракт допускает, но здесь второй необходимый родитель не найден; демонстрационный ромб ради GUI не добавлялся.

## Выбранные Knowledge и границы

Категории в таблице сокращены: C=concurrent-programming, A=asynchronous-programming, E=asynchronous-execution, L=asynchronous-lifecycle, F=asynchronous-flow-control. Каждая строка соответствует одному файлу `vault/knowledge/entries/<slug>.md` и одному categories-ребру. Полные имена находятся в YAML/H1.

| Slug | Отличимая граница | Категория | Источник |
| --- | --- | --- | --- |
| concurrency | Продвижение нескольких вычислений с перекрывающимися сроками жизни | C | R |
| parallelism | Одновременное исполнение; не alias concurrency | C | R |
| asynchronous-programming | Модель программирования с отложенным завершением | A | R, M |
| coroutine | Приостанавливаемое вычисление, не функция-объявление и не handle задачи | E | K |
| coroutine-suspension | Приостановка с последующим возобновлением; не блокировка потока | E | K |
| async-await | Совместная синтаксическая модель выражения асинхронного ожидания | E | M, R |
| future | Представление будущего результата; ленивость Rust не универсализируется | E | R, P1 |
| asynchronous-task | Управляемая единица асинхронного исполнения; не обещает отдельного потока | E | P1, K |
| event-loop | Цикл обработки готовой работы и событий | E | P2 |
| asynchronous-runtime | Среда координации исполнения async-операций | E | R |
| task-scheduling | Выбор времени/порядка исполнения задач | E | P2 |
| cooperative-task-scheduling | Планирование с передачей управления участниками | E | P1 |
| task-lifecycle | Последовательность состояний от создания до завершения | L | K |
| task-cancellation | Запрос прекращения исполнения, не гарантия немедленной остановки | L | P1 |
| structured-concurrency | Структурирование связанных сроков жизни задач | L | K |
| io-bound-work | Работа с ограничением скорости ввода/вывода | A | R |
| backpressure | Обратное регулирование скорости производителя потребителем | F | P3, вывод |
| bounded-asynchronous-queue | Очередь с ограничением ёмкости и асинхронным ожиданием | F | P3 |
| python-asyncio-task-group | Конкретный API asyncio.TaskGroup, отличимый от общего принципа | L | P1 |

Общая уверенность в границах умеренная: определения task/future и async/await различаются по языкам; names не объявлены универсальными типами языка. Aliases узки: Coroutine, Future и Async/await в исходном корпусе не конфликтуют, но не добавлены отдельными дублирующими узлами.

## Направленные связи

Всего 25 записанных рёбер: 19 categories, 4 broader, 1 specializes, 1 realizes; part_of — 0. Для categories основанием служит граница и источник каждой строки таблицы выше; записана только самая конкретная категория. Для broader основания приведены в разделе категорий. Все 25 утверждений proposed.

| source → predicate → target | Проверяемое основание |
| --- | --- |
| cooperative-task-scheduling → specializes → task-scheduling | Кооперативность ограничивает общий способ планирования; P1, Task object явно описывает cooperative scheduling |
| python-asyncio-task-group → realizes → structured-concurrency | P1, Task cancellation и Task groups: API обеспечивает структурированное ожидание и обработку связанных задач; это механизм реализации принципа, а не просто использование |

Слабосвязный граф соединён через категории; связность только Knowledge-подграфа не заявляется. Источники не считаются рёбрами графа.

## Не включённые кандидаты и неопределённости

- Task → specializes → Future: справедливо для некоторых API, но не доказано для общего языконезависимого Task; в YAML отсутствует.
- Event loop → part_of → asynchronous-runtime: типично, но не универсально и не нужно для выбранного среза; отсутствует.
- Coroutine → specializes → Future: перенос Python awaitable-иерархии на общие понятия был бы ошибкой; отсутствует.
- bounded-asynchronous-queue → realizes → backpressure: очередь может обеспечивать механизм давления, однако общий backpressure не сформулирован как контракт; отсутствует.
- Async/await → realizes → asynchronous-programming: синтаксис не реализует всю модель; отсутствует.
- Cancellation → part_of → lifecycle: предметная связь процесса и описания состояний неоднозначна; отсутствует.
- Error propagation и timeout: самостоятельные кандидаты B15/B16 отложены для ограничения первого среза, а не из-за исчерпания квоты.
- Promise не признан глобальным alias Future: роли производителя/потребителя зависят от API. Awaitable, executor, continuation, channels, asynchronous streams — кандидаты следующего исследования.
- Предикаты uses/depends_on могли бы отвечать на вопрос «какая среда исполняет механизм?», но `uses` не различает синтаксис, исполнение и владение. Контрпример: async/await используется без единственного общего event loop. Изменений онтологии не предложено к принятию и не внесено.

## Метрики и ревью

19 Knowledge + 5 categories = 24 узла; квота 30 Knowledge соблюдена. Дублей референтов по самопроверке генератора: 0/24; независимая проверка дублей NOT_RUN.

Покрытие baseline: 14/16 = 87.5% тем имеют явное соответствие Knowledge; B15/B16 отсутствуют. Это номинальное покрытие по таблице, не проверенная полнота объяснений пустых каркасов. При исключении выводного B14 подтверждаемое прямыми темами покрытие составляет 13/16 = 81.25%. Конкретный TaskGroup — намеренный дополнительный узел для различения принципа и реализации, не дополнительная тема baseline.

Самопроверка генератора: 24/24 узла и 25/25 рёбер сопоставлены с приведёнными основаниями; это проверка прослеживаемости, **не независимая оценка точности**. Семантическая точность узлов и рёбер: N/A (независимо проверенная выборка 0 узлов / 0 рёбер). Независимое семантическое ревью: NOT_RUN, отдельный проверяющий не запускался. Semantic PASS не заявлен; приёмка по этому пункту остаётся открытой.

GUI Obsidian/Bases/Graph, Backlinks и типы графового плагина: NOT_RUN. Статические ссылки не доказывают работоспособность GUI.

## Проверки и воспроизведение

Изменены 25 файлов эксперимента: 19 новых `vault/knowledge/entries/*.md`, 5 новых `vault/taxonomy/categories/*.md` (полный перечень slug в таблицах выше) и этот отчёт. Правила, шаблоны, views и brief не изменены.

Первый запуск в системном Node v16.14.0:

```text
> node tools/validate.mjs
PASS static: {"categories":5,"knowledge":19,"links":25}; semantic review: NOT_RUN
> node --test tools/validate.test.mjs
node.exe: bad option: --test
```

Это ошибка совместимости окружения, а не тестовый FAIL. Для выполнения тестов официальный `https://nodejs.org/dist/v22.14.0/win-x64/node.exe` загружен в `%TEMP%/knowledge-skeleton-node-22.14.0/node.exe`; системная установка и репозиторий не менялись. Повторный запуск:

```text
> <temporary Node v22.14.0> --test tools/validate.test.mjs
TAP version 13
ok 1 - empty vault bootstrap is valid
ok 2 - category and knowledge link validate
ok 3 - reject missing targets and duplicate IDs
ok 4 - detect cycles in category DAG
1..4
# tests 4
# suites 0
# pass 4
# fail 0
# cancelled 0
# skipped 0
# todo 0
```

Проверка diff: прочитаны все 24 созданных YAML/H1; ссылки, направления и счётчики сопоставлены с таблицами отчёта. `git diff --cached --check` проверяет включаемые файлы перед фиксацией. В ходе работы появились сторонние изменения `vault/.obsidian/app.json`, `appearance.json`, `core-plugins.json`; агент их не создавал, не откатывает и не включает в коммит. Их появление не считается выполненным GUI-тестом.

Коммит результата: коммит с этим отчётом (`git log -1 --format=%H -- reports/pilot-001-discovery.md` после фиксации); самоссылочный SHA внутрь коммита не записывается. База указана в начале, diff воспроизводится командой `git diff 00852469ae57d3d1e75f49c984401666789405f1 HEAD -- vault reports`.
