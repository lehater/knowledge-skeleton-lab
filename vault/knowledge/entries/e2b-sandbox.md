---
id: 01a197da-0359-7a5a-97b0-3f37e3a288ce
type: knowledge
name: "E2B Sandbox"
kind: resource
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/general-purpose-managed-sandboxes]]"
sources:
  - "https://docs.e2b.dev/faq/sandbox-lifetime"
  - "https://docs.e2b.dev/sandbox/auto-resume"
  - "https://docs.e2b.dev/sandbox/persistence"
  - "https://docs.e2b.dev/sandbox"
---
# E2B Sandbox

E2B Sandbox — создаваемая по требованию изолированная Linux VM для агента. `create` создаёт среду; `connect` подключает клиента к существующей и возобновляет приостановленную; `kill` переводит её в конечное состояние Killed и освобождает ресурсы.

Sandbox timeout ограничивает непрерывную работу среды. `setTimeout`/`set_timeout` устанавливает новый интервал от момента вызова; по истечении среда уничтожается либо приостанавливается согласно `lifecycle.onTimeout`. Предел непрерывной работы сбрасывается при pause/resume. Timeout самой среды, срок хранения приостановленного состояния и длительность клиентского stream — отдельные ограничения.
