---
id: 01a1a1c4-13fb-7a61-b874-b984e03c0a37
type: knowledge
name: "Closure"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/glossary.html#term-closure-variable"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-15.html#jls-15.27"
  - "https://www.cs.tufts.edu/comp/150FP/archive/peter-landin/mechanical-eval.pdf"
  - "https://small.r7rs.org/attachment/r7rs.pdf"
in_topic:
  - "[[knowledge/entries/java-methods-and-functions]]"
  - "[[knowledge/entries/function]]"
  - "[[knowledge/entries/lexical-scope]]"
---
# Closure

Замыкание объединяет вызываемое поведение с доступом к привязкам окружающей лексической области, необходимым его свободным переменным. Вход — определение и окружение; выход — поведение, сохраняющее доступ к захваченным данным при вызове. Захват по значению, разделяемой привязке или ссылке — отдельные языковые правила; изменяемость данных и перепривязка переменной различаются.

В модели Landin closure содержит выражение и окружение; это основание общего определения, независимое от Python и Java. Python сохраняет доступ к разделяемым closure cells и допускает nonlocal; Java lambda захватывает значения final/effectively final локальных переменных. Захваченное ссылочное значение всё ещё может обозначать изменяемый объект. Лямбда без свободных переменных не требует нетривиального захвата окружения.
