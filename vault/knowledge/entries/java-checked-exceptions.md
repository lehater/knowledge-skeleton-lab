---
id: 01a1a1c0-73dd-7b32-ab27-16263ccb3c01
type: knowledge
name: "Java Checked Exceptions"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-11.html#jls-11.2"
in_topic:
  - "[[knowledge/entries/java-exceptions-and-resources]]"
  - "[[knowledge/entries/exception-handling]]"
  - "[[knowledge/entries/static-typing]]"
---
# Java Checked Exceptions

Компилятор анализирует возможность checked-исключений в выражениях и инструкциях. Такие исходы должны быть обработаны или разрешены throws-контрактом вызывающего метода/конструктора. Это проверка программы при компиляции; unchecked-исключения также могут возникать и распространяться при исполнении.
