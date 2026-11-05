---
id: 01a197da-0445-7c99-9b29-58321a19e444
type: knowledge
name: "Modal Sandbox"
kind: resource
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/general-purpose-managed-sandboxes]]"
sources:
  - "https://modal.com/docs/sdk/py/latest/Sandbox"
  - "https://modal.com/docs/guide/sandboxes"
---
# Modal Sandbox

Modal Sandbox — контейнер для выполнения недоверенного или сгенерированного моделью кода. Клиент создаёт среду через `Sandbox.create`, запускает процессы через `exec`, читает их вывод и завершает исполнение через `terminate`.

Среда достигает Finished при выходе entrypoint, явном завершении, исчерпании timeout/idle timeout или нехватке памяти; дальнейшие команды в ней недоступны. `timeout` при создании ограничивает жизнь среды, `idle_timeout` — период без активности. Работающий `exec`, запись в stdin или открытое TCP-соединение через Tunnel считаются активностью. `poll` возвращает код завершения либо `None`, пока среда работает. Повторный `terminate` завершённой среды ничего не делает.
