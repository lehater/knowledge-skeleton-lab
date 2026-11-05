---
id: 01a18e44-0bcd-7042-8ce4-09af51846677
type: knowledge
name: "Structured Concurrency"
review_status: proposed
kind: principle
lifecycle: enriched
sources:
  - "https://kotlinlang.org/docs/coroutines-basics.html"
in_topic:
  - "[[knowledge/entries/concurrent-programming]]"
  - "[[knowledge/entries/task-lifecycle]]"
---
# Structured Concurrency

Структурированная конкурентность связывает время жизни дочерних работ с явно ограниченной областью и её владельцем. Вход — область и создаваемые в ней конкурентные работы; выход — завершение области после согласованного завершения её работ с обработкой исходов. Это делает владение работой и ожидание завершения явными.

Kotlin coroutine scopes и Python asyncio.TaskGroup реализуют этот принцип с разными политиками ошибок и отмены. Конкретный способ агрегации исключений, распространения отказа и supervision не является универсальным свойством паттерна. Существующий Java-срез не содержит отдельного соответствующего Knowledge.
