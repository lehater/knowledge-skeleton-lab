---
id: 01a1a1c4-11ec-7d89-ad64-f5e79b216a9b
type: knowledge
name: "Garbage Collection"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#objects-values-and-types"
  - "https://docs.oracle.com/javase/specs/jvms/se27/html/jvms-2.html#jvms-2.5.3"
  - "https://small.r7rs.org/attachment/r7rs.pdf"
in_topic:
  - "[[knowledge/entries/java-memory-and-lifetime]]"
specializes:
  - "[[knowledge/entries/automatic-memory-management]]"
---
# Garbage Collection

Сборка мусора автоматически освобождает память объектов, которые больше не нужны продолжающемуся вычислению; достижимость используется как консервативный критерий сохранения объектов. Вход — состояние объектов и ссылок; выход — возможное повторное использование памяти. Алгоритм, сроки и паузы определяет реализация. Освобождение памяти отличается от своевременного закрытия внешнего ресурса.

R7RS §1.1 формулирует общий принцип: память допустимо вернуть, когда объект больше не может влиять на будущее вычисление. Консервативные приближения могут сохранять фактически ненужные объекты. CPython сочетает подсчёт ссылок и сборку циклов; спецификация JVM оставляет алгоритм реализации. Ни один из этих контрактов не задаёт общий срок close для файла или соединения.
