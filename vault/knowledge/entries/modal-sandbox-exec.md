---
id: 01a197e5-4ada-7191-b8fe-d32e376830b2
type: knowledge
name: "Modal Sandbox Exec"
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/modal-sandbox]]"
sources:
  - "https://modal.com/docs/guide/sandbox-spawn"
---
# Modal Sandbox Exec

`exec` запускает команду внутри Modal Sandbox и возвращает ContainerProcess с потоками stdin, stdout и stderr. Exec timeout ограничивает продолжительность команды; чтение потоков также учитывает этот timeout. Он задаётся отдельно от timeout при создании самой среды. Вывод можно читать целиком или по мере появления данных.
