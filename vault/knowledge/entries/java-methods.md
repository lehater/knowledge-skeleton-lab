---
id: 01a1a1c0-714d-7ec8-a5a4-0ec9dfeecd06
type: knowledge
name: "Java Methods and Argument Passing"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-8.html#jls-8.4.1"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-15.html#jls-15.12.4.5"
in_topic:
  - "[[knowledge/entries/java-methods-and-functions]]"
  - "[[knowledge/entries/function]]"
---
# Java Methods and Argument Passing

Метод задаёт параметры, результат и тело либо abstract-контракт. Аргументные значения инициализируют новые переменные параметров: передача по значению относится и к ссылкам. Изменение общего объекта видно вызывающему, переприсваивание параметра его переменную не меняет. Varargs собирает аргументы в массив.
