---
id: 01a197fa-3f48-7bfd-88f0-5d737c88e90e
type: knowledge
name: "Canary Release Analysis"
lifecycle: enriched
review_status: proposed
kind: method
in_topic:
  - "[[knowledge/entries/reliability-engineering]]"
  - "[[knowledge/entries/continuous-regression-and-deployment-feedback]]"
sources:
  - "https://sre.google/workbook/canarying-releases/"
---
# Canary Release Analysis

Canarying — ограниченное по времени развёртывание изменения на части production с оценкой относительно контрольной части. Вход — новая версия, контрольная группа, трафик и выбранные показатели; выход анализа — основание продолжить rollout или остановить его. Мониторинг предоставляет наблюдения; критерии сравнения и release controller выполняют отдельные роли. Репрезентативность нагрузки и изоляция влияния изменения важны для вывода.
