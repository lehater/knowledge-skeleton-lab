---
id: 01a197fa-3e2e-7aa8-afe4-63c19ffade4f
type: knowledge
name: "Error Budget"
lifecycle: enriched
review_status: proposed
kind: constraint
in_topic:
  - "[[knowledge/entries/reliability-engineering]]"
sources:
  - "https://sre.google/workbook/implementing-slos/"
---
# Error Budget

Error Budget — допустимый объём плохих событий, производный от SLO.

Error budget — допустимый объём плохих событий, выведенный из SLO за его период. Для SLO как доли хороших событий допустимая доля плохих равна 1 − SLO. Политика бюджета определяет ответственных и действия при исчерпании: например, приоритет исправлений или ограничение рискованных изменений. Бюджет поддерживает решения о надёжности, а не является денежным лимитом LLM.
