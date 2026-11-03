# Python: исследование уровней 1–3

Дата: 03.11.2026. База: GitHub `main`, `5c8606c7075b77f4175952596663e84176c54a6d`. Ветка: `discovery/python-levels-1-3`.

## Результат и граница

Добавлены **94 Knowledge**, обогащены **4 существующих**. Срез: **98 содержательных карточек = 1 корень + 11 направлений + 86 понятий третьего уровня**. Все карточки имеют компактное инженерное описание и официальные источники. Уровень означает порядок исследования от Python, а не глубину произвольного пути в графе. Например, специализация Generator → Iterator и тематическая принадлежность обоих к Functions and Iteration не превращают Generator в четвёртый уровень.

Основная версия — стабильная **Python 3.15.2**, опубликованная 25.10.2026 согласно [списку исходных релизов](https://www.python.org/downloads/source/); документация зафиксирована URL ветки `/3.15/`. URL ветки закрепляет minor-версию, а не неизменяемый снимок patch-релиза. Существенные отличия 3.15 (lazy imports, frozendict, profiling, abi3t) отмечены в карточках по [What’s New](https://docs.python.org/3.15/whatsnew/3.15.html). Поведение CPython, ОС и конкретной сборки явно отделено от семантики языка.

## Восстановление и переиспользование

Прочитаны AGENTS, действующий Discovery Skill, все `rules/`, concept и ADR-001. В исходном графе — 236 Knowledge и 228 YAML-рёбер. Корневого Python и большинства языковых понятий нет. Сопоставлены названия, aliases и содержание, включая общие понятия исполнения и конкурентности.

Сохранены UUID и прежние корректные отношения:

- `python-coroutine-object`: `01a18e73-6cf5-7e0c-9c2f-51956999526a`;
- `python-asyncio-task`: `01a18e73-6cf5-778f-8eb4-934600af6a12`;
- `python-asyncio-event-loop`: `01a18e73-6cf5-7c42-99ea-18b32afd9c45`;
- `python-asyncio-task-group`: `01a18e44-0c80-72ef-a9ba-f41996c944cd`.

Общие Coroutine, Event Loop, Asynchronous Task, Future и Structured Concurrency переиспользованы как цели отношений реализаций; новые Python-specific карточки не подменяют эти общие абстракции. Общее Context & Memory Management относится к контексту агента, поэтому не переименовано в управление памятью Python. Execution Environment & Sandbox также не тождествен модели исполнения языка.

Открытые PR #28, #30, #31, #32 проверены как контекст. Их предложения не включены в нормативные правила. Таксономия Harness и старые карточки за пределами четырёх Python-узлов не изменены.

## Покрытие

Полная навигация на все 86 понятий находится в [корневом Python](../../vault/knowledge/entries/python.md); каждое направление также содержит ссылки на свой основной срез. Таблица ниже — объяснение границ исследования, а не новая нормативная таксономия.

| Направление уровня 2 | Понятий уровня 3 | Ответственность среза |
| --- | ---: | --- |
| Syntax and Semantics | 4 | Токены/отступы, выражения, присваивание, управление потоком, включая match |
| Data and Types | 8 | Объект, изменяемость, числа, последовательности, отображения, множества, annotations, generics/Protocol |
| Classes and Object Protocols | 6 | Класс, MRO, дескриптор, special methods, метакласс, ABC |
| Functions and Iteration | 7 | Function/callable, связывание аргументов, closure, decorator, iterator, generator |
| Modules and Import | 5 | Module/package, import machinery, finder и loader; lazy import внутри machinery |
| Execution Model | 6 | Block, namespaces/scopes, code object, frame, AST, CPython bytecode |
| Exceptions and Resource Handling | 5 | Exception, обработка, ExceptionGroup, context manager, traceback |
| Memory Management | 4 | CPython refcount, cyclic GC, allocator, weak references |
| Standard Library | 18 | I/O, пути, JSON/pickle/SQLite, текст, числа, время, ОС/процессы, сеть, контейнеры, функциональные средства, testing/logging/debugging/profiling |
| Concurrency | 16 | asyncio/awaitable/coroutine/Future/Task/loop/group/runner/queue, async context manager, threading, multiprocessing, Executor и три вида pools |
| Implementations and Integration | 7 | CPython, GIL/free threading, extension, embedding, Limited API/Stable ABI, venv |
| **Всего** | **86** | Все одиннадцать направлений имеют третий уровень |

Основные узлы имеют одно направление для подсчёта; межтематические рёбра дополнительно связывают предметные области. asyncio, threading и multiprocessing рассматриваются в Concurrency и имеют `part_of` Standard Library. Это не смешение языка с библиотекой: две разные связи отвечают на разные вопросы.

## Отношения

Добавлены **160** YAML-рёбер; прежние 228 сохранены. В полном графе теперь **330 Knowledge / 388 рёбер**.

| Предикат | Добавлено | Пример и проверяемый смысл |
| --- | ---: | --- |
| in_topic | 111 | Descriptor относится к Classes and Object Protocols и Functions and Iteration |
| specializes | 13 | Generator — вид Iterator; Task — подкласс asyncio.Future; package — вид module |
| part_of | 26 | pathlib входит в стандартную библиотеку; finder/loader — компоненты import machinery |
| executes | 6 | CPython выполняет code object/блок; loader исполняет модуль; pools выполняют callable |
| realizes | 2 | CPython реализует Python; asyncio.Future реализует общую Future |
| manages | 1 | Runner управляет жизненным циклом event loop |
| schedules | 1 | Executor планирует выполнение callable |
| broader | 0 | Новая иерархия включения тем не требуется |
| **Всего** | **160** | Считаются новые тройки относительно main |

Отдельно сохранены семь прежних рёбер четырёх Python-карточек: четыре `realizes`, по одному `executes`, `schedules`, `manages`. Поэтому для **всего исследованного среза** исходящих YAML-рёбер 167: in_topic 111, specializes 13, part_of 26, executes 7, realizes 6, manages 2, schedules 2. Дельта и суммарный срез намеренно различены.

Функциональное чтение среза:

1. CPython обеспечивает выполнение кода; block/frame/code object показывают различие единицы кода, контекста конкретного выполнения и представления кода.
2. Import finder ищет spec, loader выполняет инициализацию модуля; кэш и lazy import описаны условиями в карточке machinery.
3. Event loop планирует asyncio Tasks; Task выполняет coroutine; TaskGroup управляет завершением своих Tasks; Runner — жизненным циклом loop.
4. Executor планирует callable, конкретный pool обеспечивает его выполнение в выбранной среде.

Не добавлены фиктивные `manages` для descriptor/metaclass, композиция Python из направлений или CPython → specializes → Python. Условие maxsize не превращает весь asyncio.Queue в Bounded Asynchronous Queue. Free-threaded сборки не позволяют объявить GIL обязательной частью любого CPython.

## Семантические пробелы

**Кандидат для отдельного обсуждения — `execution_context_for`.** Пара: Python Execution Frame → Python Code Block. [Execution model](https://docs.python.org/3.15/reference/executionmodel.html#structure-of-a-program) говорит, что блок исполняется во frame; frame хранит контекст и продолжение. Это отличается от ответственности исполнителя: `Frame → executes → Block` не записано. Возможный запрос — найти контекст выполнения единицы кода. Одна подтверждённая пара ещё не доказывает необходимость расширения словаря; предикат не добавлен.

Другие полезные сведения остаются внутри карточек:

- ссылки frame на code object и namespaces;
- преобразования text → tokens → AST → code object;
- ожидание конкретного Future конкретной Task и отмена соседних Tasks;
- результаты функций, исключения и настройки исполнения;
- условия, при которых runtime или API требуют другой компонент.

Для таких фактов текущие восемь предикатов не дают точного универсального бинарного ребра. В этой итерации новые предикаты не нужны для завершения согласованного трёхуровневого среза. Кандидаты из PR #32 остаются отдельным исследованием. Eager execution особенно важно: Task может завершиться при создании и не поступить в очередь loop; `schedules` обозначает ответственность loop, а не журнал событий любого запуска.

## Проверка и оставшаяся область

- `node tools/validate.mjs`: PASS, 330 Knowledge / 388 links.
- `node --test tools/validate.test.mjs`: PASS, 12/12.
- `git diff --check`: PASS.
- Проверены отсутствие дублей новых имён/UUID, существование целей, направления связей и неизменность четырёх переиспользованных UUID. Все 98 карточек — enriched.
- Проверены HTTP-страницы источников и anchors; исправлены изменённый mapping anchor в 3.15 и вынесенная страница threads C API. Это обычная проверка конкретных ссылок, без evidence-реестра.
- Валидатор доказывает техническую целостность; корректность содержимого проверялась по документации при извлечении. Надпись валидатора `semantic review: NOT_RUN` не означает обязательный дополнительный этап.

За границей: полный каталог стандартной библиотеки и каждого API, прикладные frameworks и сторонние пакеты, packaging/build/publish toolchain, внутренние алгоритмы GC/allocator, C-структуры CPython, детали JIT/opcodes, полноценные карточки альтернативных реализаций, benchmark и практические упражнения. Детали второго порядка (например, методы Task, отдельные правила signature, дескрипторные hooks) описаны внутри карточек; уровень 4 не создан. Представления Obsidian GUI и исполнение примеров на Python 3.15 в этой итерации не тестировались.

Следующее полезное действие — открыть Python в Obsidian из ветки PR и проверить понятность пути CPython → code object и Runner → loop → Task → coroutine, переключая функциональные предикаты. Углублять четвёртый уровень стоит после конкретного вопроса к этому срезу.
