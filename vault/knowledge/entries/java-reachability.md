---
id: 01a1a1c0-77f7-7a1b-96d7-b528e41d060f
type: knowledge
name: "Java Reachability and Reference Objects"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/ref/package-summary.html"
in_topic:
  - "[[knowledge/entries/java-memory-and-lifetime]]"
---
# Java Reachability and Reference Objects

Strong, soft, weak и phantom reachability отражают разные способы удержания объекта. Reference-объекты и ReferenceQueue дают ограниченное взаимодействие со сборщиком. Вход — изменения достижимости; выход — возможная очистка ссылок и уведомления. Уведомление не обещает немедленного освобождения внешнего ресурса.
