---
id: 01a196ec-2a78-71a0-a09b-3ee31eaffbc2
type: knowledge
name: "Cost Tracking and Optimization"
kind: topic
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/observability-operations]]"
sources:
  - "https://langfuse.com/docs/observability/features/token-and-cost-tracking"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
  - "https://developers.openai.com/api/docs/guides/production-best-practices"
---
# Cost Tracking and Optimization

Учёт связывает usage вызовов модели с денежными затратами и агрегирует их по моделям, пользователям и сценариям для поиска источников расходов. В Langfuse usage и USD cost — отдельные данные; при вычислении затрат нужны количества по типам и соответствующие цены. Эти данные поддерживают решения об оптимизации, но сами по себе её не выполняют.

Оптимизация изменяет источники расходов: выбирает более дешёвую модель для подходящих задач, сокращает ненужные входные токены и повторную обработку через кэширование. OpenAI рекомендует сравнивать модели по результату, задержке и стоимости. Поэтому учёт показывает, где тратятся ресурсы, оценивание проверяет сохранение нужного качества после изменения, а приложение реализует выбранную стратегию. Снижение числа токенов само по себе не доказывает улучшение стоимости успешной задачи.
