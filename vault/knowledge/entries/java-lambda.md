---
id: 01a1a1c0-7196-7547-9b96-3bd5bcf93564
type: knowledge
name: "Java Lambda Expressions"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-15.html#jls-15.27"
in_topic:
  - "[[knowledge/entries/java-methods-and-functions]]"
---
# Java Lambda Expressions

Лямбда задаёт поведение под целевой тип функционального интерфейса. Её вычисление даёт ссылку, а тело исполняется при последующем вызове. Захватываемые локальные переменные final/effectively final; this относится к окружающему контексту. Идентичность полученного объекта не гарантируется.
