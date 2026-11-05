---
id: 01a1a1c0-746b-7ba4-a6ed-0e82f139eaf2
type: knowledge
name: "Java Try-with-Resources"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-14.html#jls-14.20.3"
  - "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#Rr-raii"
in_topic:
  - "[[knowledge/entries/java-exceptions-and-resources]]"
  - "[[knowledge/entries/resource-management]]"
---
# Java Try-with-Resources

Конструкция связывает время использования AutoCloseable-ресурсов с try-блоком. Ресурсы инициализируются слева направо и закрываются в обратном порядке; ранее открытые закрываются и при отказе следующего инициализатора. Исключения закрытия могут сохраняться как suppressed, оставляя первичную причину отказа.
