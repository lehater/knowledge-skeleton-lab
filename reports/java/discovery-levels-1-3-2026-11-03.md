# Java: уровни 1–3 и общие концепции программирования

> Первоначальный срез PR #35. Последующее сопоставление Python/Java, актуальные суммарные числа и ограничения: [Общие концепции Python и Java](common-concepts-python-java-2026-11-03.md). Статистика ниже относится к началу PR до этого продолжения.

Дата: 03.11.2026. База: GitHub `main`, `029c4c5672cd218514337a4896941ba5a34e90cd`. Ветка: `discovery/java-levels-1-3`.

## Результат

Созданы **77 Java Knowledge**: **1 корень + 12 направлений + 64 основных понятия третьего уровня**. Обновлённых ранее существовавших Java Knowledge — **0**: в базе таких карточек нет. Созданы **17 общих Knowledge**, обогащены **3 существующих**: Concurrency, Concurrent Programming и Future. Их UUID и прежние отношения сохранены. Итого 94 новых, 3 обновлённых Knowledge; все 97 карточек среза содержательны.

В полном графе **424 Knowledge и 493 YAML-отношения** против 330/388 в исходном `main`. Это обзор основ языка с репрезентативным платформенным слоем, а не каталог каждого API и каждой синтаксической детали.

## Версия и источники

Нормативная база — **Java SE 27**, актуальный стабильный feature release на дату исследования: [объявление GA](https://inside.java/2026/09/15/jdk-27-available/), [JLS 27](https://docs.oracle.com/javase/specs/jls/se27/html/index.html), [JVMS 27](https://docs.oracle.com/javase/specs/jvms/se27/html/index.html), [API 27](https://docs.oracle.com/en/java/javase/27/docs/api/index.html). URL закрепляют редакцию 27, а не неизменяемый patch-снимок.

В карточках используются конкретные главы JLS, JVMS и API. Preview/incubator не рассматриваются как постоянная семантика. Например, карточка patterns описывает устойчивые type/record patterns; она не утверждает, что любой экспериментальный pattern входит в основной язык. Старые Oracle Tutorials используются только для устойчивого определения общих понятий Class/Interface/Inheritance; языковая норма проверяется по JLS 27.

Общие определения дополнительно опираются на официальную документацию Python/Rust/Go, спецификацию Python typing и первичную публикацию Luca Cardelli *Basic Polymorphic Typechecking*. Для языконезависимых карточек выделено пересечение смыслов источников: Java-specific ограничения туда не перенесены. Недоступные PDF и страницы OpenJDK не использованы как замена прочитанному материалу.

## Восстановление и идентичность

Прочитаны AGENTS, действующий Discovery Skill, все `rules/`, concept и ADR-001. Восстановлены 374 файла точного снимка main с проверкой blob SHA. Изучены корневой Python, его 11 направлений и соответствующие понятия третьего уровня; сопоставлены имена/aliases всего графа. Открытые исследовательские PR не меняют действующую схему.

Общие Concurrency, Concurrent Programming и Future переиспользованы вместо создания Java-дубликатов. Context & Memory Management описывает контекст агента, поэтому не подменяет память языка. Protocol and Interface Standards также имеет другой референт, чем Programming Interface. Python Class, Python Closure, Python Exception Handling и другие языковые карточки сохранили свои названия, содержание и UUID.

## Структура уровней 1–3

Корень — [Java](../../vault/knowledge/entries/java.md). В направлениях есть навигация по понятиям; общие концепции доступны отдельным разделом корневой карточки. Двенадцать направлений — исследовательская группировка по содержанию спецификаций, а не объявленная авторами JLS единственная таксономия.

Уровни — порядок исследования от языка, а не композиция или кратчайший путь по любым рёбрам.

| Направление уровня 2 | Основные понятия уровня 3 |
| --- | --- |
| [Java Syntax and Semantics](../../vault/knowledge/entries/java-syntax-and-semantics.md) | [Java Lexical Structure](../../vault/knowledge/entries/java-lexical-structure.md), [Java Expressions and Evaluation](../../vault/knowledge/entries/java-expressions.md), [Java Control Flow](../../vault/knowledge/entries/java-control-flow.md), [Java Patterns and Switch](../../vault/knowledge/entries/java-patterns-and-switch.md), [Java Definite Assignment](../../vault/knowledge/entries/java-definite-assignment.md) |
| [Java Types and Values](../../vault/knowledge/entries/java-types-and-values.md) | [Java Primitive Types](../../vault/knowledge/entries/java-primitive-types.md), [Java Reference Types and Null](../../vault/knowledge/entries/java-reference-types.md), [Java Variables and Final](../../vault/knowledge/entries/java-variables-and-final.md), [Java Arrays](../../vault/knowledge/entries/java-arrays.md), [Java Conversions and Boxing](../../vault/knowledge/entries/java-conversions-and-boxing.md), [Java String](../../vault/knowledge/entries/java-string.md) |
| [Java Classes and Interfaces](../../vault/knowledge/entries/java-classes-and-interfaces.md) | [Java Class](../../vault/knowledge/entries/java-class.md), [Java Interface](../../vault/knowledge/entries/java-interface.md), [Java Record Class](../../vault/knowledge/entries/java-record.md), [Java Enum Class](../../vault/knowledge/entries/java-enum.md), [Java Nested and Anonymous Classes](../../vault/knowledge/entries/java-nested-classes.md), [Java Object Equality and Hashing](../../vault/knowledge/entries/java-object-contract.md) |
| [Java Inheritance and Dispatch](../../vault/knowledge/entries/java-inheritance-and-dispatch.md) | [Java Inheritance and Subtyping](../../vault/knowledge/entries/java-inheritance-and-subtyping.md), [Java Overriding and Dynamic Dispatch](../../vault/knowledge/entries/java-overriding.md), [Java Overloading](../../vault/knowledge/entries/java-overloading.md), [Java Abstract Final and Sealed Types](../../vault/knowledge/entries/java-sealed-types.md) |
| [Java Methods and Functions](../../vault/knowledge/entries/java-methods-and-functions.md) | [Java Methods and Argument Passing](../../vault/knowledge/entries/java-methods.md), [Java Lambda Expressions](../../vault/knowledge/entries/java-lambda.md), [Java Functional Interface](../../vault/knowledge/entries/java-functional-interface.md), [Java Method References](../../vault/knowledge/entries/java-method-reference.md) |
| [Java Generics](../../vault/knowledge/entries/java-generics.md) | [Java Parameterized Types and Bounds](../../vault/knowledge/entries/java-parameterized-types.md), [Java Wildcards and Capture](../../vault/knowledge/entries/java-wildcards.md), [Java Type Erasure](../../vault/knowledge/entries/java-type-erasure.md), [Java Type Inference](../../vault/knowledge/entries/java-type-inference.md) |
| [Java Exceptions and Resource Handling](../../vault/knowledge/entries/java-exceptions-and-resources.md) | [Java Throwable Hierarchy](../../vault/knowledge/entries/java-throwable.md), [Java Checked Exceptions](../../vault/knowledge/entries/java-checked-exceptions.md), [Java Exception Handling](../../vault/knowledge/entries/java-exception-handling.md), [Java Try-with-Resources](../../vault/knowledge/entries/java-try-with-resources.md), [Java AutoCloseable](../../vault/knowledge/entries/java-autocloseable.md) |
| [Java Packages and Modules](../../vault/knowledge/entries/java-packages-and-modules.md) | [Java Package](../../vault/knowledge/entries/java-package.md), [Java Import Declarations](../../vault/knowledge/entries/java-import.md), [Java Module](../../vault/knowledge/entries/java-module.md), [Java Access Control and Scope](../../vault/knowledge/entries/java-access-and-scope.md), [Java Module Services](../../vault/knowledge/entries/java-services.md) |
| [Java Execution Model](../../vault/knowledge/entries/java-execution-model.md) | [Java Virtual Machine](../../vault/knowledge/entries/java-jvm.md), [Java Class File](../../vault/knowledge/entries/java-class-file.md), [Java Class Loading Linking and Initialization](../../vault/knowledge/entries/java-class-lifecycle.md), [Java Binary Compatibility](../../vault/knowledge/entries/java-binary-compatibility.md), [Java Development Kit](../../vault/knowledge/entries/java-jdk.md) |
| [Java Memory and Lifetime](../../vault/knowledge/entries/java-memory-and-lifetime.md) | [Java Automatic Memory Management](../../vault/knowledge/entries/java-automatic-memory-management.md), [Java Reachability and Reference Objects](../../vault/knowledge/entries/java-reachability.md), [Java Object Initialization](../../vault/knowledge/entries/java-object-initialization.md), [Java External Resource Lifetime](../../vault/knowledge/entries/java-resource-lifetime.md) |
| [Java Concurrency](../../vault/knowledge/entries/java-concurrency.md) | [Java Thread](../../vault/knowledge/entries/java-thread.md), [Java Memory Model](../../vault/knowledge/entries/java-memory-model.md), [Java Monitors and Wait Sets](../../vault/knowledge/entries/java-monitors.md), [Java Volatile and Final Publication](../../vault/knowledge/entries/java-publication.md), [Java Executors and Futures](../../vault/knowledge/entries/java-executors-and-futures.md), [Java Locks and Atomics](../../vault/knowledge/entries/java-locks-and-atomics.md) |
| [Java Platform and Standard Library](../../vault/knowledge/entries/java-platform-and-library.md) | [Java SE Platform](../../vault/knowledge/entries/java-se.md), [Java Collections Framework](../../vault/knowledge/entries/java-collections.md), [Java Stream Pipelines](../../vault/knowledge/entries/java-streams.md), [Java I/O and Files](../../vault/knowledge/entries/java-io-and-files.md), [Java Networking](../../vault/knowledge/entries/java-networking.md), [Java Date and Time](../../vault/knowledge/entries/java-time.md), [Java Core Reflection](../../vault/knowledge/entries/java-reflection.md), [Java Annotations](../../vault/knowledge/entries/java-annotations.md), [Java Platform Services](../../vault/knowledge/entries/java-platform-services.md), [Java Arbitrary-Precision Numbers](../../vault/knowledge/entries/java-numbers.md) |

Общие концепции не считаются дополнительными Java-specific узлами в этих 77. Они тематически связаны с соответствующим направлением, где это обосновано; принадлежность к теме не означает исключительную принадлежность языку. Новых самостоятельных карточек четвёртого уровня нет. Детали методов, фаз и ограничений остаются в заметках.

## Общие понятия и точки последующего сравнения

Следующая таблица задаёт **кандидатов для будущего исследования**, а не готовое утверждение `realizes` между всеми перечисленными парами. Даже совпадающие слова могут обозначать различные контракты.

| Общие Knowledge | Пересечение с существующим Python | Важное различие для будущей проверки |
| --- | --- | --- |
| Type System, Type Inference | Type Hints, Generics and Typing Protocols, runtime-типы | Проверки компилятора Java и внешняя статическая проверка Python имеют разные гарантии |
| Class, Inheritance, Polymorphism | Class, Inheritance and MRO, ABC, Callable | Классы Python создаются при исполнении; MRO и множественное наследование не переносятся в Java |
| Programming Interface, Generic Programming | Protocol, ABC, Generics | Структурное соответствие, номинальный интерфейс и стирание параметров требуют раздельного анализа |
| Mutability | Mutability and Aliasing, Object | Final-ссылка не означает глубокой неизменяемости объекта |
| Lexical Scope, Closure | Namespace and Scope, Closure | Захват привязки и final/effectively-final захват — разные правила |
| Exception Handling, Resource Management | Exception Handling, Context Manager | Checked analysis, suppressed exceptions и __exit__-подавление не являются общими гарантиями |
| Garbage Collection | CPython Reference Counting, Cyclic GC, Weak Reference | Общая цель освобождения памяти и конкретные алгоритмы/сроки различаются |
| Thread, Concurrency, Concurrent Programming, Synchronization | threading, asyncio, multiprocessing | Поток, coroutine и Task не взаимозаменяемы; GIL не свойство общей Concurrency |
| Memory Model | threading и разделяемое состояние | JMM нельзя автоматически приписать Python; нужна отдельная нормативная проверка его гарантий |
| Future | asyncio.Future, concurrent.futures | Отмена и связь с вычислением задаются конкретным API |
| Reflection | Data Model, metaclass, special methods | Пересечение частичное: introspection и вмешательство в семантику создания типа различаются |

Все 20 общих карточек уже можно использовать как определения при сравнении технологий; некоторые пары потребуют новых language-specific карточек в следующей задаче.

### Новые общие Knowledge

[Type System](../../vault/knowledge/entries/type-system.md), [Class](../../vault/knowledge/entries/class.md), [Programming Interface](../../vault/knowledge/entries/programming-interface.md), [Inheritance](../../vault/knowledge/entries/inheritance.md), [Polymorphism](../../vault/knowledge/entries/polymorphism.md), [Generic Programming](../../vault/knowledge/entries/generic-programming.md), [Exception Handling](../../vault/knowledge/entries/exception-handling.md), [Garbage Collection](../../vault/knowledge/entries/garbage-collection.md), [Thread](../../vault/knowledge/entries/thread.md), [Synchronization](../../vault/knowledge/entries/synchronization.md), [Memory Model](../../vault/knowledge/entries/memory-model.md), [Mutability](../../vault/knowledge/entries/mutability.md), [Lexical Scope](../../vault/knowledge/entries/lexical-scope.md), [Closure](../../vault/knowledge/entries/closure.md), [Type Inference](../../vault/knowledge/entries/type-inference.md), [Resource Management](../../vault/knowledge/entries/resource-management.md), [Reflection](../../vault/knowledge/entries/reflection.md).

### Переиспользованные Knowledge

| Knowledge | Сохранённый UUID |
| --- | --- |
| [Concurrency](../../vault/knowledge/entries/concurrency.md) | `01a18e44-0955-7e3e-a1a7-cc5a831419bc` |
| [Concurrent Programming](../../vault/knowledge/entries/concurrent-programming.md) | `01a18e44-0873-7181-bacc-8ee298dfa5b6` |
| [Future](../../vault/knowledge/entries/future.md) | `01a18e44-0a64-75c8-8969-caebc0fb2551` |

## Отношения

Добавлено **105 YAML-рёбер**, удалений старых рёбер нет. У изменённого среза 106 исходящих рёбер: одно прежнее Concurrency → in_topic → Concurrent Programming сохранено.

| Предикат | Добавлено | Смысл и граница |
| --- | ---: | --- |
| in_topic | 95 | Тематическая принадлежность, включая общие концепции в соответствующих Java-направлениях |
| specializes | 3 | Record Class и Enum Class — виды Java Class; Functional Interface — вид Java Interface |
| part_of | 7 | Конкретные библиотечные семейства API входят в платформу Java SE |
| realizes | 0 | Систематическое сопоставление абстракций и реализаций отложено |
| executes | 0 | Нет искусственного превращения семантики или контракта в исполняющий компонент |
| schedules | 0 | Политики конкретных runtime/executor не исследуются в этой итерации |
| manages | 0 | Тематические карточки памяти не назначаются управляющими компонентами |
| broader | 0 | Дополнительная иерархия включения тем не понадобилась |

Состав Java из тематических направлений через part_of не утверждается. JVM не записана как specializes Java, JDK — как реализация JVM. Wikilinks в тексте дают навигацию; предметные типизированные рёбра хранятся только в YAML.

## Семантические пробелы

Существующих предикатов достаточно для текущего среза. Полезные факты о преобразовании исходника в class-представление, соответствии аргумента параметру, выборе реализации метода, захвате привязки и разрешении имени описаны текстом. Они не сводятся автоматически к part_of/realizes/executes; новые предикаты не введены.

Групповые обзорные карточки Executors and Futures, Locks and Atomics, I/O and Files раскрывают контракт и основные различия на третьем уровне. При последующем функциональном моделировании конкретные контракты и исполняющие компоненты следует выделять по самостоятельной пользе, сохраняя эти обзорные Knowledge как темы.

## Проверка

- `node tools/validate.mjs`: PASS, **424 Knowledge / 493 links**.
- `node --test tools/validate.test.mjs`: PASS, **12/12**.
- `git diff --check` и проверка пробелов новых файлов: PASS.
- Проверены уникальность новых имён/UUID, цели YAML- и текстовых wikilinks, охват каждого направления третьим уровнем и сохранение прежних UUID/рёбер.
- Python, Harness Engineering, правила, схема, валидатор, ADR и представления не изменены.
- GitHub CI: результат проверяется на HEAD Draft PR; ссылка и статус фиксируются в описании PR.

Валидатор проверяет техническую целостность; содержание сверено с источниками при Discovery. Примеры на локальном JDK 27 и представления Obsidian GUI не исполнялись: работа посвящена извлечению семантики, а не проверке runtime или визуализации.

## Следующая итерация

Сначала проверить понятность навигации Java → направление → понятие в Obsidian. Затем отдельной задачей сопоставить небольшой вертикальный срез, например Class/Inheritance или Exception Handling/Resource Management, с конкретными конструкциями Python и Java. Для каждой пары отдельно определить, нужен ли specializes, realizes или только тематическое отношение. Массовое назначение realizes по совпадению терминов недопустимо.

За границей: HotSpot и другие реализации JVM/JDK, JIT и GC-алгоритмы, bytecode internals, альтернативные runtime, полный каталог стандартной библиотеки, сторонние frameworks, build/package ecosystem, детальное FFM/JNI и экспериментальные возможности.
