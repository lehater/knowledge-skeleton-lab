---
id: 01a1a1c0-7540-7351-8559-d64b2e4c73de
type: knowledge
name: "Java Import Declarations"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-7.html#jls-7.5"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-12.html#jls-12.4.1"
in_topic:
  - "[[knowledge/entries/java-packages-and-modules]]"
---
# Java Import Declarations

Import позволяет использовать простые имена типов, static-членов и доступных через module import типов. Он влияет на разрешение имён в единице компиляции. Это отличается от исполнения кода модуля при Python import: Java import сам по себе не запускает инициализацию класса.
