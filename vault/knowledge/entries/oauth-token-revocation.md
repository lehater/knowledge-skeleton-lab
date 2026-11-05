---
id: 01a197e4-f8a7-7702-a4bb-70aceddb9eb4
type: knowledge
name: "OAuth 2.0 Token Revocation"
kind: mechanism
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/permission-models-and-identity-management]]"
sources:
  - "https://www.rfc-editor.org/rfc/rfc7009.html"
---
# OAuth 2.0 Token Revocation

Механизм RFC 7009 позволяет клиенту запросить инвалидацию ранее выданного OAuth-токена у сервера авторизации через HTTPS POST к revocation endpoint. Стандарт требует поддержку отзыва refresh tokens и рекомендует поддержку access tokens. Сервер проверяет клиента и принадлежность токена, затем инвалидирует его; распространение инвалидации между серверами может иметь задержку. Отзыв связанных токенов зависит от политики сервера. Это изменение действительности credential у issuer, отдельное от удаления его локального файла или окружения.
