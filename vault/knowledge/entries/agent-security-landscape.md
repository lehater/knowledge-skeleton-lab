---
id: 01a196ec-2a78-76ca-996e-5493e9cc26e1
type: knowledge
name: "Agent Security Landscape"
kind: topic
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/governance-security]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
  - "https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html"
  - "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
---
# Agent Security Landscape

Ландшафт безопасности агентов рассматривает угрозы по всей цепочке от входных данных до внешних действий и сохраняемой памяти. OWASP выделяет prompt injection, злоупотребление инструментами и полномочиями, утечку данных, отравление памяти, захват цели, атаки на зависимости и распространение компрометации между агентами.

В harness анализ связывает источник недоверенных данных, границу доверия, доступный инструмент и возможный эффект. Меры выбирают для соответствующей поверхности: ограничение полномочий, изоляция, проверка данных и значимых действий, мониторинг и adversarial testing. Каталог рисков помогает определить охват защиты; он не является готовой политикой, сертификацией или гарантией безопасности. Локальный отказ компонента следует отличать от нарушения системных ограничений.
