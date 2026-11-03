---
id: 01a197e4-f86e-7753-8c25-f85886b2ef70
type: knowledge
name: "Anthropic Sandbox Credential Masking"
kind: mechanism
lifecycle: enriched
review_status: proposed
part_of:
  - "[[knowledge/entries/anthropic-sandbox-runtime]]"
sources:
  - "https://github.com/anthropics/sandbox-runtime#readme"
---
# Anthropic Sandbox Credential Masking

Механизм `credentials` в srt скрывает реальные значения переменных окружения и файлов от sandboxed-команды. В режиме `deny` значение исключается; `mask` предоставляет маркер, а прокси заменяет его настоящим значением при отправке на `injectHosts` (по умолчанию `network.allowedDomains`). Маскирование требует TLS termination, кроме явного разрешения plaintext injection. Маскирование файлов поддерживается на Linux. Политика ограничивает выдачу credential процессу и назначения подстановки, а не отзывает credential у внешнего сервиса.
