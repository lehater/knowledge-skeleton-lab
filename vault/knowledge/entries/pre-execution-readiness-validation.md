---
id: 01a196ec-2a78-741a-908d-f2ea4c7a0bd3
type: knowledge
name: "Pre-Execution Readiness Validation"
kind: practice
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/verification-evaluation]]"
sources:
  - "https://inspect.aisi.org.uk/sandboxing.html"
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
---
# Pre-Execution Readiness Validation

Проверка готовности устанавливает, что среда и средства оценки могут выполнить задачу до интерпретации результата как качества агента. В Inspect Docker-провайдер проверяет требуемые версии Docker Engine и Compose; поля Sample задают файлы и setup script. Настройка должна обеспечить ожидаемые начальные условия.

Inspect создаёт отдельную sandbox для каждого sample, в том числе при общей конфигурации Task. Файлы копируются перед setup script. Эти механизмы подготовки и изоляции помогают отделить неисправную постановку или среду от поведения проверяемой системы.
