---
id: 01a1a27a-4a38-7546-bc91-aef68317c8b5
type: knowledge
name: "Exception"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://small.r7rs.org/attachment/r7rs.pdf"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-11.html"
in_topic:
  - "[[knowledge/entries/exception-handling]]"
---
# Exception

Исключение представляет особый исход или сигнал вычисления, обрабатываемый механизмом передачи управления к обработчику. Вход — обнаруженная ситуация и сведения о ней; результат — обработка, распространение либо другой исход по правилам языка. Исключение отделяет этот путь от обычного возврата результата.

Представление и продолжение вычисления зависят от системы: Scheme допускает различные поднимаемые значения и continuable exceptions; Python использует экземпляры BaseException, Java — Throwable. Поэтому исключение не определяется универсально как экземпляр определённого класса, необратимая раскрутка стека или только ошибка приложения.
