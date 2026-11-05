---
id: 01a197e4-f7ae-70e5-b6b5-691241f492ed
type: knowledge
name: "Docker Swarm Secret"
kind: resource
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://docs.docker.com/engine/swarm/secrets/"
---
# Docker Swarm Secret

Объект Docker Swarm для доставки чувствительных данных только сервисам с явно предоставленным доступом, пока их задачи работают. Передача и хранение в Swarm зашифрованы. На Linux расшифрованный секрет монтируется в файловую систему в памяти, обычно под `/run/secrets`; при остановке задачи mount снимается, а эти данные очищаются из памяти узла.

Доступ сервиса к секрету можно отозвать обновлением сервиса. Это управление доставкой секрета: в примере ротации MySQL документация отдельно требует сменить пароль в самой БД. Удаление mount или объекта Secret не обозначает автоматическую инвалидацию внешнего пароля и не даёт общей гарантии стирания всех копий.
