---
id: 01a19813-4d66-78dc-a1c2-bd8faa68aeaf
type: knowledge
name: "Alertmanager Routing Tree"
lifecycle: enriched
review_status: proposed
kind: structure
part_of:
  - "[[knowledge/entries/alertmanager-configuration]]"
sources:
  - "https://prometheus.io/docs/alerting/latest/configuration/"
---
# Alertmanager Routing Tree

Дерево маршрутизации — часть конфигурации Alertmanager, задаваемая корневым блоком `route` и вложенными `routes`. Вход — метки поступившего alert; результат — выбор маршрута и receiver, а также параметры группировки, ожидания и повторной отправки уведомлений.

Все alerts входят через корневой маршрут, который должен совпадать с любыми метками. Дочерние маршруты сопоставляются по matchers и могут наследовать параметры родителя. `continue: true` позволяет продолжить сопоставление с последующими дочерними маршрутами; по умолчанию обход останавливается после первого совпавшего дочернего маршрута.
