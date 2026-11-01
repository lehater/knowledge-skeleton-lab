---
id: 01a197d9-c54a-7e0f-956a-729a262ff025
type: knowledge
name: "Virtual Machine Isolation"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/sandbox-abstraction-layers]]"
sources:
  - "https://gvisor.dev/docs/architecture_guide/intro/"
---
# Virtual Machine Isolation

Изоляция виртуальной машиной размещает исполняемую нагрузку вместе с гостевым ядром внутри аппаратно обеспечиваемой виртуальной машины. Гипервизор координирует её взаимодействие с хостом; переходы из гостевой среды обслуживаются через VM exit. Такая граница отличается от ограничений процессов, которые продолжает непосредственно обслуживать общее ядро хоста.
