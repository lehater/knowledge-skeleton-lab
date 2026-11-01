---
id: 01a197da-0534-7495-9423-ad8413593b54
type: knowledge
name: "Deep Agents LocalShellBackend"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/framework-integrated-runtimes]]"
sources:
  - "https://docs.langchain.com/oss/python/deepagents/backends"
---
# Deep Agents LocalShellBackend

`LocalShellBackend` в Deep Agents предоставляет файловые операции и исполнение shell-команд непосредственно на хосте с правами его пользователя. `root_dir` задаёт рабочий каталог команды; shell сохраняет доступ к другим путям. Поэтому `virtual_mode` при включённом shell не создаёт границу безопасности.
