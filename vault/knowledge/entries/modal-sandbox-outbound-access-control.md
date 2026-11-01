---
id: 01a197da-04b4-7f3f-a06f-005bcf5d231a
type: knowledge
name: "Modal Sandbox Outbound Access Control"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/modal-sandbox]]"
sources:
  - "https://modal.com/docs/guide/sandbox-networking"
---
# Modal Sandbox Outbound Access Control

Управление исходящим доступом Modal Sandbox ограничивает сетевые соединения среды. По умолчанию разрешены соединения к публичным IP; `block_network` блокирует весь исходящий трафик, CIDR allowlist разрешает заданные IP-диапазоны, domain allowlist — TLS-трафик к разрешённым доменам на порту 443. Два allowlist объединяются по условию «или».
