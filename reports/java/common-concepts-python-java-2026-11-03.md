# Общие концепции Python и Java

Дата: 03.11.2026. Репозиторий: `lehater/knowledge-skeleton-lab`. Продолжение существующего Draft PR #35, ветка `discovery/java-levels-1-3`.

Принятая база: `main` → `029c4c5672cd218514337a4896941ba5a34e90cd`. Начало этой итерации: `493d66919a782a3dd83b75de5ca390c82ebc2ef5`. Исходная Java-карта этого PR ещё не принята. Merge не выполнялся.

## Результат и инвентаризация

До изменений в ветке было **424 Knowledge / 493 ребра**, включая 77 Java-specific Knowledge и 20 содержательных общих концепций. Помимо них уже существовали заготовки асинхронных понятий и соответствующие Python-карточки. Поиск по имени, aliases и содержанию не выявил дублей, требующих объединения или изменения UUID.

В этой итерации создано **15 общих Knowledge**, обогащено **33 существующих общих Knowledge**: 20 содержательных определений и 13 заготовок. Эти 48 общих карточек составляют исследованный концептуальный срез; число не означает исчерпывающую онтологию программирования. Языковые определения сохранены, добавлены сопоставления и необходимые пояснения.

Новые концепции: Static Typing, Dynamic Typing, Nominal Typing, Structural Typing, Subtyping, Parametric Polymorphism, Subtype Polymorphism, Dynamic Dispatch, Function, Object, Execution Model, Automatic Memory Management, Metaprogramming, Data Abstraction, Exception.

Из заготовок раскрыты Parallelism, Coroutine, Coroutine Suspension and Resumption, Asynchronous Programming, Async/await, Asynchronous Task, Asynchronous Runtime, Event Loop, Task Scheduling, Cooperative Task Scheduling, Task Lifecycle, Task Cancellation, Structured Concurrency. Остальные 20 определений переиспользованы с прежними UUID и дополнены общими основаниями/границами сравнения. Из Task Lifecycle удалена нерелевантная ссылка на MAUI performance, добавлены профильные источники.

## Концептуальная карта

Ссылки ведут к каноническим Knowledge. Группы ниже — навигация отчёта; новые узлы-рубрики и дополнительные поля не создавались.

| Область | Общие определения |
| --- | --- |
| Типовые правила | [Type System](../../vault/knowledge/entries/type-system.md), [Static Typing](../../vault/knowledge/entries/static-typing.md), [Dynamic Typing](../../vault/knowledge/entries/dynamic-typing.md), [Nominal Typing](../../vault/knowledge/entries/nominal-typing.md), [Structural Typing](../../vault/knowledge/entries/structural-typing.md), [Subtyping](../../vault/knowledge/entries/subtyping.md), [Type Inference](../../vault/knowledge/entries/type-inference.md) |
| Абстракции и объекты | [Data Abstraction](../../vault/knowledge/entries/data-abstraction.md), [Object](../../vault/knowledge/entries/object.md), [Class](../../vault/knowledge/entries/class.md), [Programming Interface](../../vault/knowledge/entries/programming-interface.md), [Inheritance](../../vault/knowledge/entries/inheritance.md), [Polymorphism](../../vault/knowledge/entries/polymorphism.md), [Subtype Polymorphism](../../vault/knowledge/entries/subtype-polymorphism.md), [Dynamic Dispatch](../../vault/knowledge/entries/dynamic-dispatch.md) |
| Обобщения и функции | [Generic Programming](../../vault/knowledge/entries/generic-programming.md), [Parametric Polymorphism](../../vault/knowledge/entries/parametric-polymorphism.md), [Function](../../vault/knowledge/entries/function.md), [Lexical Scope](../../vault/knowledge/entries/lexical-scope.md), [Closure](../../vault/knowledge/entries/closure.md) |
| Состояние, исходы и ресурсы | [Mutability](../../vault/knowledge/entries/mutability.md), [Exception](../../vault/knowledge/entries/exception.md), [Exception Handling](../../vault/knowledge/entries/exception-handling.md), [Resource Management](../../vault/knowledge/entries/resource-management.md) |
| Исполнение и память | [Execution Model](../../vault/knowledge/entries/execution-model.md), [Automatic Memory Management](../../vault/knowledge/entries/automatic-memory-management.md), [Garbage Collection](../../vault/knowledge/entries/garbage-collection.md), [Memory Model](../../vault/knowledge/entries/memory-model.md), [Synchronization](../../vault/knowledge/entries/synchronization.md) |
| Конкурентная организация | [Concurrency](../../vault/knowledge/entries/concurrency.md), [Parallelism](../../vault/knowledge/entries/parallelism.md), [Concurrent Programming](../../vault/knowledge/entries/concurrent-programming.md), [Thread](../../vault/knowledge/entries/thread.md), [Structured Concurrency](../../vault/knowledge/entries/structured-concurrency.md) |
| Асинхронная организация | [Asynchronous Programming](../../vault/knowledge/entries/asynchronous-programming.md), [Async/await](../../vault/knowledge/entries/async-await.md), [Coroutine](../../vault/knowledge/entries/coroutine.md), [Coroutine Suspension and Resumption](../../vault/knowledge/entries/coroutine-suspension.md), [Future](../../vault/knowledge/entries/future.md), [Asynchronous Task](../../vault/knowledge/entries/asynchronous-task.md), [Asynchronous Runtime](../../vault/knowledge/entries/asynchronous-runtime.md), [Event Loop](../../vault/knowledge/entries/event-loop.md) |
| Планирование и жизненный цикл | [Task Scheduling](../../vault/knowledge/entries/task-scheduling.md), [Cooperative Task Scheduling](../../vault/knowledge/entries/cooperative-task-scheduling.md), [Task Lifecycle](../../vault/knowledge/entries/task-lifecycle.md), [Task Cancellation](../../vault/knowledge/entries/task-cancellation.md) |
| Программные представления | [Reflection](../../vault/knowledge/entries/reflection.md), [Metaprogramming](../../vault/knowledge/entries/metaprogramming.md) |

## Основания обобщения

Общие определения получены не только сопоставлением двух документаций. Работы Cardelli и Wegner *On Understanding Types, Data Abstraction, and Polymorphism* и Cardelli *Type Systems* задают независимые основания типовых правил, интерфейсов, абстракции и полиморфизма. Работа Cook, Hill и Canning *Inheritance Is Not Subtyping* обосновывает разделение наследования и подтипирования. Модель Landin *The Mechanical Evaluation of Expressions* описывает closure как выражение с окружением и исполнение через состояния абстрактной машины.

R7RS задаёт ещё одну независимую спецификацию типов значений, лексических привязок, процедур, изменяемого хранилища, исключений и макросов. Go specification и Go Memory Model проверяют применимость различий nominal/structural и общую ответственность модели памяти. Документация Kotlin, Rust, C#, libuv и C++ Core Guidelines подтверждает концепции асинхронного исполнения и управления ресурсами за пределами Python/Java. Racket Reference даёт независимый пример рефлексивного доступа к объектам и классам.

URL конкретных прочитанных материалов находятся в `sources` соответствующих Knowledge. Отдельного evidence-реестра нет. Эти источники подтверждают принцип; их частные гарантии не переносятся на все языки. Например, Cardelli использует более узкую терминологию static type system / dynamic checking, а R7RS явно употребляет dynamically typed: терминологическая граница отмечена в Type System и Dynamic Typing.

## Покрытие пересечений

| Направление | Python | Java | Результат сопоставления |
| --- | --- | --- | --- |
| Типы и системы типов | Data and Types; Type Hints | Types and Values; Type Inference | Runtime-типизация Python отделена от статического typing-слоя; nominal/structural — отдельная ось |
| Объекты и классы | Object; Class | Class; Reference Types; Object Equality and Hashing | Языковые классы — виды общей Class; объект и его класс не связаны как subtype |
| Интерфейсы и абстракции | ABC; Generics and Typing Protocols | Interface; AutoCloseable | Protocol — структурный контракт; Java interface — номинальная конструкция; конкретный AutoCloseable не объявлен подтипом класса всех интерфейсов |
| Наследование и полиморфизм | Inheritance and MRO; Special Methods | Inheritance and Subtyping; Overriding; Overloading | Наследование, совместимость типов и выбор реализации разделены |
| Generics | Generics and Typing Protocols | Generics; Parameterized Types and Bounds | Общая основа — параметры типов; runtime-проверки и стирание имеют языковые границы |
| Функции и замыкания | Function; Closure | Methods; Lambda Expressions | Python Closure — вид Closure; Java Lambda тематически связана с захватом, поскольку захват не обязателен для каждой лямбды |
| Области видимости | Namespace and Scope | Access Control and Scope | Лексическое связывание отделено от accessibility и времени жизни |
| Состояние и изменяемость | Mutability and Aliasing | Variables and Final; Record; String | final, поверхностная неизменяемость и глубокая неизменяемость различаются |
| Исключения | Exception; Exception Handling | Throwable Hierarchy; Checked Exceptions; Exception Handling | Общая передача управления сохранена; checked analysis не приписан Python |
| Внешние ресурсы | Context Manager; Async Context Manager | Try-with-Resources; AutoCloseable; Resource Lifetime | Python-протокол шире освобождения ресурсов; Java задаёт специальный протокол close |
| Модель исполнения | Execution Model; Code Object; Frame | Execution Model; JVM | Частные модели связаны с общей Execution Model; форматы кода не объединены |
| Память и GC | Memory Management; CPython RC/Cyclic GC | Automatic Memory Management | Языковая модель, конкретный механизм и закрытие ресурса разделены |
| Конкурентность и параллелизм | Concurrency; multiprocessing; Free Threading | Concurrency; Thread | Перекрытие вычислений отделено от одновременного физического исполнения |
| Потоки, задачи и планирование | threading; Executor; asyncio.Task/Event Loop | Thread; Executors and Futures | Модуль, конкретный API, задача и планировщик не объявлены одной сущностью |
| Асинхронность и Future | Awaitable; Coroutine Object; asyncio.Future/Task | Executors and Futures | Общие Future/асинхронность связаны с языковыми карточками; искусственный Java Coroutine не создан |
| Синхронизация и memory model | threading; особенности CPython | Monitors; Locks and Atomics; JMM | JMM — вид Memory Model; отдельного полного Python-контракта в этом срезе нет |
| Reflection и metaprogramming | Frame; Code Object; AST; Metaclass; Decorator | Core Reflection; Annotations | Наблюдение представлений и построение/преобразование определений разделены |

## Отношения и контрольные проходы

Добавлено **145 YAML-рёбер**: `in_topic` **123**, `specializes` **17**, `realizes` **5**. Удалённых рёбер нет. Новых `part_of`, `broader`, `executes`, `schedules`, `manages` в этой итерации нет. Существующие функциональные рёбра asyncio сохраняются.

Пять новых `realizes` выбраны по ответственности: CPython Cyclic GC → Garbage Collection; Java Core Reflection → Reflection; Java Thread → Thread; Java Try-with-Resources → Resource Management; Python asyncio → Asynchronous Runtime. Языковые варианты классов, обработки исключений и execution models связаны `specializes`; составные обзоры и соседние аспекты — `in_topic`. AutoCloseable — конкретный контракт, поэтому не превращён в подтип общего Programming Interface.

Контроль обратных переходов по записанным YAML-рёбрам:

1. **Type System** ← `in_topic` ← Python Data and Types / Java Types and Values. Из первой языковой карточки видны Dynamic Typing и Type Hints, из второй — Static Typing. Переходы показывают общую область без вывода об одинаковом времени проверки.
2. **Class** ← `specializes` ← Python Class / Java Class. Общая карточка описывает определение семейства экземпляров; Python сохраняет runtime-создание class object и несколько баз, Java — свои правила объявления и наследования.
3. **Exception Handling** ← `specializes` ← Python Exception Handling / Java Exception Handling. Checked Exceptions связаны тематически, а не объявлены универсальным видом всякой обработки исключений. Scheme continuable exceptions дополнительно ограничивают слишком сильное обобщение о раскрутке стека.
4. **Future** ← `realizes` ← Python asyncio.Future (прежнее ребро); **Future** ← `in_topic` ← Java Executors and Futures (новое ребро). Различие предикатов намеренное: второй узел объединяет несколько абстракций. Python result() не ждёт готовности; Java get() может блокировать. Запрос отмены не доказывает остановку вычисления.
5. **Resource Management** ← `in_topic` ← Python Context Manager; ← `realizes` ← Java Try-with-Resources. Python-менеджер может лишь изменить контекст; Java-конструкция специально организует close. Ни одна связь не объявляет все пользовательские реализации корректно освобождающими любой ресурс при аварийном завершении процесса.

Это проверка данных и смыслов обратных переходов. Отрисовка и фильтры конкретного Obsidian-плагина в этой среде не проверялись.

## Обманчивое сходство и границы словаря

- Python Protocol и Java interface имеют сходную роль контракта, но разные критерии установления совместимости.
- Python closure cells и Java final/effectively-final capture сохраняют разную семантику привязок. Ссылка на изменяемый объект не становится глубоко неизменяемой.
- Java final и Python immutable containers не означают неизменяемости всего достижимого графа. Record также не даёт такую гарантию.
- Python import может исполнять код модуля; Java import участвует в разрешении имён. Существующие различия сохранены; общая идентичность по слову import не введена.
- Поток, coroutine, Task и Future имеют разные обязанности. Java virtual thread не объединён с Python Coroutine Object; Java Stream Pipeline — не I/O stream и не async coroutine.
- Checked exceptions — статическая обязанность Java, а не общий контракт исключений. Scheme допускает также continuable exceptions.

Словарь выражает темы, виды и реализации, но не имеет предикатов для отдельных утверждений «захватывает привязку», «проверяет структурное соответствие», «выбирает реализацию метода», «производит результат» или «может заменить механизм при заданной конфигурации». Эти факты остаются в тексте; `realizes` не используется как универсальное соответствие. Предикат для экземпляра конкретного контракта также не введён.

Составные Knowledge Python Generics and Typing Protocols и Java Executors and Futures сохранены. Поэтому некоторые межъязыковые сравнения имеют тематические рёбра, а не точное соответствие отдельных библиотечных типов. Это предел детализации выбранного среза, а не повод менять таксономию или искусственно создавать симметричные узлы.

Не создавались отсутствующие Java-карточки Coroutine/Event Loop/Structured Concurrency и Python-карточка полного аналога JMM или определённого алгоритма вывода типов. Это ограничение текущего графа; оно не утверждает отсутствия таких подходов во всей экосистеме языка. Backpressure и Bounded Asynchronous Queue остаются соседними заготовками: они не требуются для корректного сопоставления исследованных типов, объектов и вычислительных механизмов.

## Проверка и итог PR

- `node tools/validate.mjs`: **PASS**, 439 Knowledge / 638 links.
- `node --test tools/validate.test.mjs`: **PASS**, 12/12.
- `git diff --check`: **PASS**.
- Сохранены все 424 UUID начала итерации и все прежние рёбра; удалений Knowledge нет.
- Проверены новые имена/aliases по всему графу: дублей нет; текстовые wikilinks изменённых карточек разрешаются.
- Нормативные файлы, схема, валидатор, ADR, исходная таксономия Python/Java и Harness Engineering не изменены.
- CI проверяется после отправки коммитов; окончательная ссылка и результат фиксируются в описании PR. GUI Obsidian и запуск языковых примеров не выполнялись.

С учётом первоначальной части PR относительно `main`: **77 новых Java-specific Knowledge**, **32 новых общих Knowledge**, **16 ранее существовавших общих Knowledge обогащены**, **250 добавленных рёбер** (`in_topic` 218, `specializes` 20, `part_of` 7, `realizes` 5). Эти числа отличаются от прироста текущей итерации: 17 общих карточек уже были созданы предыдущими коммитами PR.

Следующая полезная проверка — открыть Class, Exception Handling и Future в Obsidian, включить входящие `specializes`, `realizes`, `in_topic` и оценить, понятны ли различия Python/Java по общей карточке и её соседству. Схема, новые предикаты и дальнейшее дробление нужны только при конкретной подтверждённой потребности.
