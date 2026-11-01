---
id: 01a197e5-891d-7b0f-bd5e-17fe5f59a642
type: knowledge
name: "E2B Sandbox Outbound Access Control"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/e2b-sandbox]]"
sources:
  - "https://docs.e2b.dev/network/internet-access"
  - "https://docs.e2b.dev/network/restrict-public-access"
---
# E2B Sandbox Outbound Access Control

E2B разрешает исходящий интернет-доступ по умолчанию. `allowInternetAccess=false` блокирует его; `denyOut` и `allowOut` задают IP/CIDR-политику, причём allow имеет приоритет над deny. Домены допустимы только в allowlist при запрете остального трафика: проверяется HTTP Host на порту 80 или TLS SNI на 443, а не произвольный протокол; QUIC для доменной фильтрации не поддерживается.

При доменной фильтрации автоматически разрешается DNS-сервер 8.8.8.8, если это отдельно не отключено. Запрещённое TCP-соединение может выглядеть установленным внутри среды, поэтому достижение адресата определяется ответом прикладного протокола. Платформа отдельно блокирует исходящий доступ к private/link-local диапазонам вне гостевой ОС; встроенный control channel сохраняет необходимую связность.
