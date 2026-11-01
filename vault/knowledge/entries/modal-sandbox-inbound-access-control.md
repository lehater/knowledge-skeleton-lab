---
id: 01a197e5-8997-799b-90f4-c74baba9b2f9
type: knowledge
name: "Modal Sandbox Inbound Access Control"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/modal-sandbox]]"
sources:
  - "https://modal.com/docs/guide/sandbox-networking"
---
# Modal Sandbox Inbound Access Control

Modal Sandbox по умолчанию не принимает входящие сетевые соединения. Для опубликованных сервисов `inbound_cidr_allowlist` ограничивает IP клиентов через encrypted tunnels и Sandbox Connect Tokens. Эта проверка не применяется к `unencrypted_ports`: такие туннели принимают соединения с любого IP; для ограничения адресов используются `encrypted_ports` или `h2_ports`. Connect Token позволяет аутентифицировать HTTP/WebSocket-запрос к порту песочницы через Bearer token.
