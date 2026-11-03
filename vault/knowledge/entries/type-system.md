---
id: 01a1a1c4-0f91-7084-9587-56993ae8e768
type: knowledge
name: "Type System"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://typing.python.org/en/latest/spec/concepts.html"
  - "https://lucacardelli.name/Papers/TypeSystems.pdf"
  - "https://small.r7rs.org/attachment/r7rs.pdf"
in_topic:
  - "[[knowledge/entries/java-types-and-values]]"
---
# Type System

Система типов — правила отнесения значений и выражений к типам и проверки допустимых операций. Ответственность — выявлять несовместимое использование данных. Вход — программа, типовые сведения и контекст; выход — типовые суждения или ошибки. Проверки могут выполняться до запуска, во время исполнения либо сочетаться. Наличие системы типов не гарантирует отсутствие всех ошибок программы.

Здесь термин используется для правил типов и допустимого использования значений/выражений. В формальном изложении Cardelli type system прежде всего задаёт статические суждения; runtime checks рассмотрены отдельно. [[knowledge/entries/static-typing|Static Typing]] и [[knowledge/entries/dynamic-typing|Dynamic Typing]] различают время и основание проверки, а [[knowledge/entries/nominal-typing|Nominal Typing]] и [[knowledge/entries/structural-typing|Structural Typing]] — критерий отношений типов. Python runtime и его статическая typing-система имеют разные обязанности; Java сочетает статическую систему с runtime-проверками.
