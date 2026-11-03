---
id: 01a1a1c0-772b-7631-9d6f-1aed6210a247
type: knowledge
name: "Java Binary Compatibility"
lifecycle: enriched
review_status: proposed
kind: property
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-13.html"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-14.html#jls-14.22"
in_topic:
  - "[[knowledge/entries/java-execution-model]]"
---
# Java Binary Compatibility

Бинарная совместимость характеризует сохранение возможности связывания ранее скомпилированных клиентов после изменения типов. Вход — старые binaries и новое определение; результат — допустимая эволюция либо linkage-ошибка. Совместимость исходников и сохранение поведения — отдельные свойства; изменение inline-константы показывает эту разницу.
