---
id: 01a197e4-f7e7-7ace-9543-67067709d464
type: knowledge
name: "Modal Secret"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/modal-sandbox]]"
sources:
  - "https://modal.com/docs/guide/sandboxes#environment-variables"
  - "https://modal.com/docs/guide/secrets"
---
# Modal Secret

Объект Modal с набором пар ключ–значение для передачи credentials и других чувствительных данных. Подключение через аргумент `secrets` при создании Sandbox или описании Function предоставляет значения контейнеру как переменные окружения; `from_name` ссылается на именованный Secret, `from_dict` формирует его программно. При подключении нескольких Secrets более поздние значения перекрывают совпадающие ключи. Доступ к таким значениям получает выполняемый процесс; этот способ отличается от подстановки секретов внешним прокси.
