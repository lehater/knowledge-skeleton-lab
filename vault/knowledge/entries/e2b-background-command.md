---
id: 01a197e5-49cc-7f07-a5fd-25834ac1c364
type: knowledge
name: "E2B Background Command"
kind: process
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/e2b-sandbox]]"
sources:
  - "https://docs.e2b.dev/commands/background"
---
# E2B Background Command

E2B Background Command — исполнение фоновой shell-команды в E2B.

Фоновая команда E2B запускается с `background: true`: вызов сразу возвращает handle, а процесс продолжает работу до завершения или command timeout. На `commands.run` значение timeout по умолчанию — 60 секунд; `0` отключает его. Истечение этого таймера убивает процесс даже в фоне; срок жизни самой Sandbox ограничивается отдельно.

Для повторного подключения сохраняют sandbox ID и PID, затем вызывают `Sandbox.connect` и `commands.connect`. Timeout у `commands.connect` ограничивает ожидание клиента. Потоковый stdout/stderr доставляется инициатору; для чтения из другого процесса документация предлагает перенаправить вывод в файл.
