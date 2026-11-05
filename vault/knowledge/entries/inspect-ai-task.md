---
id: 01a1981a-989c-736e-8b4e-1481b9dfd91e
type: knowledge
name: "Inspect AI Task"
lifecycle: enriched
review_status: proposed
kind: program_construct
in_topic:
  - "[[knowledge/entries/task-and-benchmark-grounding]]"
sources:
  - "https://inspect.aisi.org.uk/tasks.html"
---
# Inspect AI Task

Task в Inspect — рецепт оценки, связывающий dataset, solver и scorer. Функция с декоратором `@task` возвращает `Task`; dataset задаёт примеры, solver получает ответы, scorer проверяет результат. Параметры задачи позволяют менять конфигурацию без переписывания определения.

Task — определение оценки, а Sample — отдельный пример. Solver можно заменять при запуске, поэтому критерий проверки и выбранная стратегия решения задаются раздельно. Здесь рассматривается контракт определения задачи, а не оркестрация всех этапов evaluation.
