---
id: 01a196ec-2a78-730a-88f3-dda2d8bb5a0b
type: knowledge
name: "Governance & Security"
kind: topic
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/harness-engineering]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
  - "https://www.nist.gov/itl/ai-risk-management-framework"
  - "https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html"
---
# Governance & Security

Governance & Security задаёт, какие действия агента допустимы, кто отвечает за ограничения и как защищаются ресурсы и данные. NIST AI RMF рассматривает управление рисками на протяжении проектирования, использования и оценивания AI-систем. Для harness это означает перевод допустимого поведения в разрешения, проверяемые политики, ограничения инструментов и записи о действиях.

Практические механизмы включают минимальные полномочия, проверку входов и выходов, изоляцию памяти и подтверждение значимых действий. Политика задаёт требование, runtime обеспечивает его применение, аудит сохраняет сведения о результате. Управление исполнением определяет следующий шаг, оценивание измеряет качество, а этот слой ограничивает допустимость действий; корректный ответ может быть получен недопустимым способом. Одна инструкция модели не заменяет внешние средства контроля.
