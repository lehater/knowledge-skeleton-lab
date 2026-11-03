---
id: 01a1a113-ddb1-7ffb-8384-4e258426245f
type: knowledge
name: "Python"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/tutorial/"
  - "https://docs.python.org/3.15/reference/"
  - "https://docs.python.org/3.15/library/"
  - "https://docs.python.org/3.15/extending/embedding.html"
  - "https://www.python.org/downloads/source/"
---
# Python

Python — язык программирования общего назначения с динамической типизацией, высокоуровневыми структурами данных и поддержкой процедурного, объектного и функционального стиля. Программы описывают вычисления над объектами; реализации языка обеспечивают их исполнение, а стандартная библиотека — типовые прикладные возможности. Python применяют для автоматизации, интеграции и разработки приложений, в том числе как встраиваемый язык.

Вход реализации — исходный код и данные; результат — вычисленные значения, эффекты ввода-вывода либо исключения. Семантика языка задаёт значения конструкций, модель данных — операции объектов, модель исполнения — связывание имён и выполнение блоков. Модули организуют код; конкурентное выполнение использует библиотечные средства поверх этих правил.

Исследование опирается на стабильную документацию Python **3.15.2**, проверенную 03.11.2026. CPython — реализация Python; его байткод, подсчёт ссылок и GIL имеют собственные границы применимости. Аннотации типов поддерживают внешние инструменты проверки и сами по себе не проверяют аргументы при вызове. Экосистема сторонних пакетов шире стандартной библиотеки.

## Карта изучения

| Направление | Основные понятия третьего уровня |
| --- | --- |
| [[knowledge/entries/python-syntax-and-semantics|Syntax and Semantics]] | [[knowledge/entries/python-lexical-analysis|Lexical Analysis]], [[knowledge/entries/python-expressions|Expressions]], [[knowledge/entries/python-assignment|Assignment]], [[knowledge/entries/python-control-flow|Control Flow]] |
| [[knowledge/entries/python-data-and-types|Data and Types]] | [[knowledge/entries/python-object|Object]], [[knowledge/entries/python-mutability|Mutability and Aliasing]], [[knowledge/entries/python-numeric-types|Numeric Types]], [[knowledge/entries/python-sequences|Sequences]], [[knowledge/entries/python-mappings|Mappings]], [[knowledge/entries/python-sets|Sets]], [[knowledge/entries/python-type-hints|Type Hints]], [[knowledge/entries/python-generics-and-protocols|Generics and Typing Protocols]] |
| [[knowledge/entries/python-classes-and-protocols|Classes and Object Protocols]] | [[knowledge/entries/python-class|Class]], [[knowledge/entries/python-inheritance-and-mro|Inheritance and MRO]], [[knowledge/entries/python-descriptor|Descriptor]], [[knowledge/entries/python-special-methods|Special Methods]], [[knowledge/entries/python-metaclass|Metaclass]], [[knowledge/entries/python-abstract-base-classes|Abstract Base Classes]] |
| [[knowledge/entries/python-functions-and-iteration|Functions and Iteration]] | [[knowledge/entries/python-function|Function]], [[knowledge/entries/python-argument-binding|Argument Binding]], [[knowledge/entries/python-closure|Closure]], [[knowledge/entries/python-decorator|Decorator]], [[knowledge/entries/python-iterator|Iterator]], [[knowledge/entries/python-generator|Generator]], [[knowledge/entries/python-callable|Callable]] |
| [[knowledge/entries/python-modules-and-import|Modules and Import]] | [[knowledge/entries/python-module|Module]], [[knowledge/entries/python-package|Import Package]], [[knowledge/entries/python-import-system|Import System]], [[knowledge/entries/python-import-finder|Import Finder]], [[knowledge/entries/python-import-loader|Import Loader]] |
| [[knowledge/entries/python-execution-model|Execution Model]] | [[knowledge/entries/python-code-block|Code Block]], [[knowledge/entries/python-namespace-and-scope|Namespace and Scope]], [[knowledge/entries/python-code-object|Code Object]], [[knowledge/entries/python-execution-frame|Execution Frame]], [[knowledge/entries/python-ast|Abstract Syntax Tree]], [[knowledge/entries/cpython-bytecode|CPython Bytecode]] |
| [[knowledge/entries/python-exceptions-and-resources|Exceptions and Resource Handling]] | [[knowledge/entries/python-exception|Exception]], [[knowledge/entries/python-exception-handling|Exception Handling]], [[knowledge/entries/python-exception-group|ExceptionGroup]], [[knowledge/entries/python-context-manager|Context Manager]], [[knowledge/entries/python-traceback|Traceback]] |
| [[knowledge/entries/python-memory-management|Memory Management]] | [[knowledge/entries/cpython-reference-counting|CPython Reference Counting]], [[knowledge/entries/cpython-cyclic-gc|CPython Cyclic Garbage Collection]], [[knowledge/entries/python-weak-reference|Weak Reference]], [[knowledge/entries/cpython-memory-allocator|CPython Memory Allocator]] |
| [[knowledge/entries/python-standard-library|Standard Library]] | [[knowledge/entries/python-io-streams|I/O Streams]], [[knowledge/entries/python-pathlib|pathlib]], [[knowledge/entries/python-json|json]], [[knowledge/entries/python-pickle|pickle]], [[knowledge/entries/python-logging|logging]], [[knowledge/entries/python-unittest|unittest]], [[knowledge/entries/python-re|re]], [[knowledge/entries/python-decimal|decimal]], [[knowledge/entries/python-datetime|datetime]], [[knowledge/entries/python-os|os]], [[knowledge/entries/python-subprocess|subprocess]], [[knowledge/entries/python-socket|socket]], [[knowledge/entries/python-sqlite3|sqlite3]], [[knowledge/entries/python-collections|collections]], [[knowledge/entries/python-itertools|itertools]], [[knowledge/entries/python-functools|functools]], [[knowledge/entries/python-pdb|pdb]], [[knowledge/entries/python-profiling|profiling]] |
| [[knowledge/entries/python-concurrency|Concurrency]] | [[knowledge/entries/python-awaitable|Awaitable]], [[knowledge/entries/python-coroutine-object|Coroutine Object]], [[knowledge/entries/python-asyncio-future|asyncio.Future]], [[knowledge/entries/python-asyncio-task|asyncio.Task]], [[knowledge/entries/python-asyncio-event-loop|asyncio Event Loop]], [[knowledge/entries/python-asyncio-task-group|asyncio.TaskGroup]], [[knowledge/entries/python-async-context-manager|Async Context Manager]], [[knowledge/entries/python-asyncio-runner|asyncio.Runner]], [[knowledge/entries/python-asyncio-queue|asyncio.Queue]], [[knowledge/entries/python-threading|threading]], [[knowledge/entries/python-multiprocessing|multiprocessing]], [[knowledge/entries/python-executor|concurrent.futures.Executor]], [[knowledge/entries/python-asyncio|asyncio]], [[knowledge/entries/python-thread-pool-executor|ThreadPoolExecutor]], [[knowledge/entries/python-process-pool-executor|ProcessPoolExecutor]], [[knowledge/entries/python-interpreter-pool-executor|InterpreterPoolExecutor]] |
| [[knowledge/entries/python-implementations-and-integration|Implementations and Integration]] | [[knowledge/entries/cpython|CPython]], [[knowledge/entries/cpython-gil|CPython Global Interpreter Lock]], [[knowledge/entries/cpython-free-threading|CPython Free Threading]], [[knowledge/entries/python-extension-module|Native Extension Module]], [[knowledge/entries/python-embedding|Embedding]], [[knowledge/entries/python-stable-abi|CPython Limited API and Stable ABI]], [[knowledge/entries/python-virtual-environment|Virtual Environment]] |
