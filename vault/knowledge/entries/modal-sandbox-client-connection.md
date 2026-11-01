---
id: 01a197e5-4b1f-78f1-9edd-4b5f5e519d09
type: knowledge
name: "Modal Sandbox Client Connection"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/modal-sandbox]]"
sources:
  - "https://modal.com/docs/sdk/py/latest/Sandbox"
---
# Modal Sandbox Client Connection

Клиентское подключение Modal Sandbox представлено объектом SDK. `detach` отключает клиент и освобождает связанные с соединением ресурсы, не прерывая выполняющиеся параллельные операции. Старый объект после detach не гарантирует работоспособности. Для продолжения взаимодействия с работающей средой получают новый handle через `Sandbox.from_id`; это отличается от `terminate`, завершающего исполнение среды.
