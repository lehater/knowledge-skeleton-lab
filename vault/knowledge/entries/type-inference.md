---
id: 01a1a1c4-144f-7c00-bcb2-4d739abfebae
type: knowledge
name: "Type Inference"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-18.html"
  - "https://www.microsoft.com/en-us/research/publication/basic-polymorphic-typechecking/"
  - "https://lucacardelli.name/Papers/TypeSystems.pdf"
  - "https://lucacardelli.name/Papers/OnUnderstanding.A4.pdf"
in_topic:
  - "[[knowledge/entries/java-generics]]"
  - "[[knowledge/entries/type-system]]"
  - "[[knowledge/entries/static-typing]]"
---
# Type Inference

Вывод типов восстанавливает неизвестные типы из выражений, контекста и типовых ограничений. Вход — программа с неполной явной типовой информацией; выход — согласованные типы либо невозможность удовлетворить ограничения. Он уменьшает число аннотаций, сохраняя правила системы типов. Полнота вывода и вид выводимых типов зависят от алгоритма и языка.

Вывод типов — задача восстановления типовых сведений, а не автоматическое распознавание runtime-класса. Java inference является конкретным языковым механизмом. Python type hints могут использоваться анализаторами, но существующая карточка аннотаций не обозначает определённый inference-алгоритм: она не объявляется его реализацией.
