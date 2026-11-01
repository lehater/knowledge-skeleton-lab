---
id: 01a1982d-ebde-7186-aaae-4620142d1706
type: knowledge
name: "Inspect AI EvalLog"
lifecycle: enriched
review_status: proposed
kind: artifact
in_topic:
  - "[[knowledge/entries/controlled-execution-and-trace-capture]]"
sources:
  - "https://inspect.aisi.org.uk/eval-logs.html"
---
# Inspect AI EvalLog

EvalLog — запись оценочного исполнения Inspect: task/model specification, solver plan, aggregate results, usage, ошибки и samples с входом, выходом, target и score. Поле status отделяет завершённый запуск от ошибочного. `read_eval_log` и чтение отдельных samples дают программный доступ.

История messages и events позволяет исследовать попытку; крупное содержимое может храниться как attachments и требовать разрешения ссылок. EvalLog — артефакт оценки, отличный от общего распределённого span и от сохранённой памяти выполняемого агента.
