---
id: 01a1a1c0-7226-7205-ac5c-0b1e176726a3
type: knowledge
name: "Java Method References"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-15.html#jls-15.13"
in_topic:
  - "[[knowledge/entries/java-methods-and-functions]]"
---
# Java Method References

Ссылка вида Type::method, expression::method или Type::new адаптирует существующую операцию к функциональному интерфейсу. Вход — целевой функциональный тип и обозначенная операция; выход — объект для будущего вызова. Вычисление ссылки не равно немедленному вызову метода или конструктора.
