---
id: 01a1a1c1-e884-72e6-b1f9-b5928eadbcc6
type: knowledge
name: "Java Object Equality and Hashing"
lifecycle: enriched
review_status: proposed
kind: specification
sources:
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/Object.html"
in_topic:
  - "[[knowledge/entries/java-classes-and-interfaces]]"
  - "[[knowledge/entries/object]]"
---
# Java Object Equality and Hashing

Object задаёт базовые методы объектов. Equals определяет отношение эквивалентности, hashCode должен совпадать для равных объектов; обратное неверно. Базовый equals сравнивает идентичность, пользовательский тип может переопределить контракт. Согласованность равенства и хеша необходима для корректного использования hash-контейнеров.
