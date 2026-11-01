---
id: 01a197d9-c45e-7f6f-8a61-2f79784b18d2
type: knowledge
name: "Linux Capabilities"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/os-level-permission-sandboxes]]"
sources:
  - "https://man7.org/linux/man-pages/man7/capabilities.7.html"
---
# Linux Capabilities

Linux capabilities разделяют привилегии суперпользователя на отдельные полномочия, которые можно независимо включать и отключать. Полномочия являются атрибутом потока; например, CAP_NET_ADMIN разрешает административные сетевые операции. Это позволяет задавать более узкий набор привилегий, чем единое полномочие root.
