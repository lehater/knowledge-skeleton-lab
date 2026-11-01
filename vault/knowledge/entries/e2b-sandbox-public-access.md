---
id: 01a197e5-895a-7700-9825-0441f1df4d2a
type: knowledge
name: "E2B Sandbox Public Access"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/e2b-sandbox]]"
sources:
  - "https://docs.e2b.dev/network/public-url"
  - "https://docs.e2b.dev/network/restrict-public-access"
---
# E2B Sandbox Public Access

Публичный URL E2B адресует сервис на заданном порту песочницы; `getHost(port)` возвращает его hostname. В публичном режиме сервис доступен любому обладателю URL. В private-режиме каждый запрос требует заголовок `e2b-traffic-access-token`, иначе получает HTTP 403.

С 30 октября 2026 года новые проекты по умолчанию используют private traffic; ранее созданные сохраняют прежнюю настройку, а при её отсутствии — public. Явный `allowPublicTraffic` при создании песочницы переопределяет настройку проекта. Для Python SDK документация рекомендует `e2b >= 2.60.0`: более старые версии могли переопределять private default при передаче других сетевых параметров.

Открытие URL Code Interpreter на порту 49999 позволяет обладателю URL отправлять код на исполнение и читать файлы среды; SDK Code Interpreter сам передаёт traffic token для private-режима.
