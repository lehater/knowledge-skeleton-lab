---
id: 01a1a1c0-7d68-75f8-88a2-0bba32e77bcc
type: knowledge
name: "Java"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-1.html"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/index.html"
  - "https://inside.java/2026/09/15/jdk-27-available/"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/index.html"
---
# Java

Java — язык общего назначения со статической типизацией, классами, интерфейсами и поддержкой конкурентного исполнения. Семантика определяет допустимые программы, операции и гарантии; реализация обычно переводит исходный код в JVM class-представление. Вход — программа и данные; выход — результаты, эффекты или исключения.

Срез зафиксирован по Java SE **27**, стабильной на 03.11.2026. Язык, платформа Java SE, абстрактная JVM и комплект JDK описаны раздельно. Рассматриваются устойчивые возможности основного стандарта; preview/incubator не объявляются постоянной семантикой. Детали HotSpot и других реализаций отложены.

## Карта изучения

Уровни — порядок исследования от языка, а не композиция или кратчайший путь по любым рёбрам.

| Направление уровня 2 | Основные понятия уровня 3 |
| --- | --- |
| [[knowledge/entries/java-syntax-and-semantics|Java Syntax and Semantics]] | [[knowledge/entries/java-lexical-structure|Java Lexical Structure]], [[knowledge/entries/java-expressions|Java Expressions and Evaluation]], [[knowledge/entries/java-control-flow|Java Control Flow]], [[knowledge/entries/java-patterns-and-switch|Java Patterns and Switch]], [[knowledge/entries/java-definite-assignment|Java Definite Assignment]] |
| [[knowledge/entries/java-types-and-values|Java Types and Values]] | [[knowledge/entries/java-primitive-types|Java Primitive Types]], [[knowledge/entries/java-reference-types|Java Reference Types and Null]], [[knowledge/entries/java-variables-and-final|Java Variables and Final]], [[knowledge/entries/java-arrays|Java Arrays]], [[knowledge/entries/java-conversions-and-boxing|Java Conversions and Boxing]], [[knowledge/entries/java-string|Java String]] |
| [[knowledge/entries/java-classes-and-interfaces|Java Classes and Interfaces]] | [[knowledge/entries/java-class|Java Class]], [[knowledge/entries/java-interface|Java Interface]], [[knowledge/entries/java-record|Java Record Class]], [[knowledge/entries/java-enum|Java Enum Class]], [[knowledge/entries/java-nested-classes|Java Nested and Anonymous Classes]], [[knowledge/entries/java-object-contract|Java Object Equality and Hashing]] |
| [[knowledge/entries/java-inheritance-and-dispatch|Java Inheritance and Dispatch]] | [[knowledge/entries/java-inheritance-and-subtyping|Java Inheritance and Subtyping]], [[knowledge/entries/java-overriding|Java Overriding and Dynamic Dispatch]], [[knowledge/entries/java-overloading|Java Overloading]], [[knowledge/entries/java-sealed-types|Java Abstract Final and Sealed Types]] |
| [[knowledge/entries/java-methods-and-functions|Java Methods and Functions]] | [[knowledge/entries/java-methods|Java Methods and Argument Passing]], [[knowledge/entries/java-lambda|Java Lambda Expressions]], [[knowledge/entries/java-functional-interface|Java Functional Interface]], [[knowledge/entries/java-method-reference|Java Method References]] |
| [[knowledge/entries/java-generics|Java Generics]] | [[knowledge/entries/java-parameterized-types|Java Parameterized Types and Bounds]], [[knowledge/entries/java-wildcards|Java Wildcards and Capture]], [[knowledge/entries/java-type-erasure|Java Type Erasure]], [[knowledge/entries/java-type-inference|Java Type Inference]] |
| [[knowledge/entries/java-exceptions-and-resources|Java Exceptions and Resource Handling]] | [[knowledge/entries/java-throwable|Java Throwable Hierarchy]], [[knowledge/entries/java-checked-exceptions|Java Checked Exceptions]], [[knowledge/entries/java-exception-handling|Java Exception Handling]], [[knowledge/entries/java-try-with-resources|Java Try-with-Resources]], [[knowledge/entries/java-autocloseable|Java AutoCloseable]] |
| [[knowledge/entries/java-packages-and-modules|Java Packages and Modules]] | [[knowledge/entries/java-package|Java Package]], [[knowledge/entries/java-import|Java Import Declarations]], [[knowledge/entries/java-module|Java Module]], [[knowledge/entries/java-access-and-scope|Java Access Control and Scope]], [[knowledge/entries/java-services|Java Module Services]] |
| [[knowledge/entries/java-execution-model|Java Execution Model]] | [[knowledge/entries/java-jvm|Java Virtual Machine]], [[knowledge/entries/java-class-file|Java Class File]], [[knowledge/entries/java-class-lifecycle|Java Class Loading Linking and Initialization]], [[knowledge/entries/java-binary-compatibility|Java Binary Compatibility]], [[knowledge/entries/java-jdk|Java Development Kit]] |
| [[knowledge/entries/java-memory-and-lifetime|Java Memory and Lifetime]] | [[knowledge/entries/java-automatic-memory-management|Java Automatic Memory Management]], [[knowledge/entries/java-reachability|Java Reachability and Reference Objects]], [[knowledge/entries/java-object-initialization|Java Object Initialization]], [[knowledge/entries/java-resource-lifetime|Java External Resource Lifetime]] |
| [[knowledge/entries/java-concurrency|Java Concurrency]] | [[knowledge/entries/java-thread|Java Thread]], [[knowledge/entries/java-memory-model|Java Memory Model]], [[knowledge/entries/java-monitors|Java Monitors and Wait Sets]], [[knowledge/entries/java-publication|Java Volatile and Final Publication]], [[knowledge/entries/java-executors-and-futures|Java Executors and Futures]], [[knowledge/entries/java-locks-and-atomics|Java Locks and Atomics]] |
| [[knowledge/entries/java-platform-and-library|Java Platform and Standard Library]] | [[knowledge/entries/java-se|Java SE Platform]], [[knowledge/entries/java-collections|Java Collections Framework]], [[knowledge/entries/java-streams|Java Stream Pipelines]], [[knowledge/entries/java-io-and-files|Java I/O and Files]], [[knowledge/entries/java-networking|Java Networking]], [[knowledge/entries/java-time|Java Date and Time]], [[knowledge/entries/java-reflection|Java Core Reflection]], [[knowledge/entries/java-annotations|Java Annotations]], [[knowledge/entries/java-platform-services|Java Platform Services]], [[knowledge/entries/java-numbers|Java Arbitrary-Precision Numbers]] |
