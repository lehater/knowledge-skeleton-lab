---
id: 01a197da-03d5-7313-a13d-5605caeee291
type: knowledge
name: "E2B Sandbox Template"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/e2b-sandbox]]"
sources:
  - "https://docs.e2b.dev/sandbox/snapshots"
  - "https://docs.e2b.dev/template/quickstart"
---
# E2B Sandbox Template

E2B Sandbox Template — определение начальной среды песочницы: базового образа, переменных окружения, копируемых файлов, команд сборки и стартовой команды. Стартовая команда выполняется при сборке и фиксируется в снимке, из которого затем создаются подготовленные песочницы.

Для создания Sandbox Snapshot требуется шаблон с envd версии не ниже `v0.5.0`; старый пользовательский шаблон нужно пересобрать. Версия SDK и версия envd шаблона — разные условия совместимости.
