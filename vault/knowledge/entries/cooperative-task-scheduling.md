---
id: 01a18e44-0b46-7762-8650-9ff7e0d8fd29
type: knowledge
name: "Cooperative Task Scheduling"
review_status: proposed
kind: mechanism
lifecycle: enriched
sources:
  - "https://docs.python.org/3/library/asyncio-task.html"
  - "https://kotlinlang.org/spec/asynchronous-programming-with-coroutines.html"
  - "https://kotlinlang.org/docs/coroutines-basics.html"
specializes:
  - "[[knowledge/entries/task-scheduling]]"
---
# Cooperative Task Scheduling

Кооперативное планирование передаёт управление между работами в предусмотренных точках уступки или ожидания. Вход — готовые работы и факт добровольной передачи управления; выход — возможность продолжить другую работу. Длительное вычисление без уступки может задерживать соседние работы на том же исполнителе.

asyncio выполняет одну Task за раз в потоке loop; Kotlin suspending functions также определяют точки возможной приостановки. Кооперативность корутин не запрещает runtime использовать несколько потоков и не задаёт общую гарантию справедливости.
