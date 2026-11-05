---
id: 01a197e5-4949-7bb2-8cf9-0b5f7bb9253f
type: knowledge
name: "E2B Sandbox Auto-Resume"
kind: mechanism
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/e2b-sandbox-pause-resume]]"
sources:
  - "https://docs.e2b.dev/sandbox/auto-resume"
---
# E2B Sandbox Auto-Resume

Auto-resume возобновляет приостановленную E2B Sandbox при поддерживаемой активности: запуске команды, файловой операции или HTTP-запросе к сервису среды. Требует `onTimeout: "pause"` и сохранения памяти; filesystem-only pause с ним несовместим.

После возобновления начинается новый timeout, как минимум пять минут либо исходный больший интервал. Обычная активность работающей среды этот таймер не продлевает: для продления используется `setTimeout`/`set_timeout`. Без auto-resume среду можно возобновить явным `connect`.
