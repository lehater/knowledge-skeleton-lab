---
id: 01a1a1c4-14eb-7d49-ab80-8d4a14aad602
type: knowledge
name: "Reflection"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/reflect/package-summary.html"
  - "https://docs.python.org/3.15/library/inspect.html"
in_topic:
  - "[[knowledge/entries/java-platform-and-library]]"
---
# Reflection

Рефлексия предоставляет программе доступ к сведениям о её собственных типах, объектах и операциях во время исполнения; некоторые средства позволяют вызывать или изменять их через метаданные. Вход — объект/тип и запрос; выход — метаданные либо операция. Доступный набор сведений и ограничения инкапсуляции задаются средой; наличие introspection не обещает произвольного изменения программы.
