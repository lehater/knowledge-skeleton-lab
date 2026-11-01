---
id: 01a197e5-8b3a-7cb3-9173-9e4a4e209ca3
type: knowledge
name: "Modal Sandbox Filesystem API"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/modal-sandbox]]"
sources:
  - "https://modal.com/docs/guide/sandbox-files"
---
# Modal Sandbox Filesystem API

Filesystem API Modal передаёт файлы в работающую Sandbox и извлекает их обратно: операции чтения/записи текста дополняются streaming copy в обе стороны между локальной файловой системой клиента и средой. Это интерфейс обмена данными во время выполнения; для повторного использования набора данных несколькими средами документация отдельно предлагает Modal Volumes и CloudBucketMounts.
