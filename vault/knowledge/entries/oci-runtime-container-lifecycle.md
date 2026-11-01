---
id: 01a197e4-4b45-7c49-99ac-644913e1ee0f
type: knowledge
name: "OCI Runtime Container Lifecycle"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://github.com/opencontainers/runtime-spec/blob/main/runtime.md"
---
# OCI Runtime Container Lifecycle

OCI Runtime Specification задаёт состояния контейнера `creating`, `created`, `running`, `stopped` и операции над ним. Вход `create` — идентификатор и bundle с конфигурацией; результат — подготовленная среда без запуска пользовательской программы. Операция `start` запускает программу из состояния `created`, `kill` посылает указанный сигнал процессу, а `delete` удаляет ресурсы, созданные на этапе `create`.

Выход процесса переводит контейнер в `stopped` и сам по себе не выполняет `delete`. При удалении runtime обязан сохранить связанные ресурсы, которые этот контейнер не создавал. Идентификатор уникален в пределах хоста и может использоваться повторно после удаления. Это контракт OCI runtime; облачные sandbox API могут задавать другие состояния и правила восстановления.
