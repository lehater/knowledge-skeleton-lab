---
id: 01a197fa-3e64-71e9-a8a8-a716faa5a578
type: knowledge
name: "SLO Burn Rate Alerting"
lifecycle: enriched
review_status: proposed
kind: practice
in_topic:
  - "[[knowledge/entries/reliability-engineering]]"
sources:
  - "https://sre.google/workbook/alerting-on-slos/"
---
# SLO Burn Rate Alerting

Оповещение по burn rate обнаруживает значимый расход error budget. Burn rate — отношение текущей доли плохих событий к допустимой по SLO; значение 1 расходует весь бюджет ровно за период при сохранении темпа. Правило с длинным и коротким окнами одновременно проверяет накопленный ущерб и продолжающуюся деградацию. На малом трафике единичный сбой может давать очень высокий burn rate, поэтому пороги требуют адаптации.
