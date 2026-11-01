---
id: 01a197e4-f835-72ba-a6e3-9c85a20f9fbc
type: knowledge
name: "Modal Sandbox Secret Injection"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/modal-sandbox]]"
sources:
  - "https://modal.com/docs/guide/sandbox-secret-injection"
---
# Modal Sandbox Secret Injection

Экспериментальный механизм Modal Outbound Policy подставляет заголовки с секретами в исходящие HTTPS-запросы к заданным доменам вне Sandbox. Значение API-ключа не передаётся в окружение Sandbox. Прокси терминирует TLS для совпавшего домена и устанавливает отдельное TLS-соединение к назначению. Подстановка поддерживает HTTPS на порту 443 и HTTP/1.1; HTTP, другие порты и ECH проходят без такой подстановки.

Политику можно полностью заменить без перезапуска, если Sandbox создан с Outbound Policy. Значения именованных Secrets разрешаются при создании и обновлении политики: изменение самого Secret не обновляет уже работающий Sandbox. Outbound Policy несовместима с `block_network`, `outbound_domain_allowlist`, `outbound_cidr_allowlist` и memory snapshots (`enable_snapshot`): эти режимы нельзя одновременно включить как дополнительные защиты.
