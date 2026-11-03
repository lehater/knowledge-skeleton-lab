---
id: 01a1a113-e116-7a12-a844-7426cbd1280d
type: knowledge
name: "Python Exceptions and Resource Handling"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://docs.python.org/3.15/tutorial/errors.html"
  - "https://docs.python.org/3.15/reference/compound_stmts.html#the-try-statement"
  - "https://docs.python.org/3.15/reference/compound_stmts.html#the-with-statement"
in_topic:
  - "[[knowledge/entries/python]]"
---
# Python Exceptions and Resource Handling

Исключения передают сведения о невозможности продолжить обычное выполнение к подходящему обработчику. try/except выбирает обработчик, finally выполняет завершающие действия, а цепочки исключений сохраняют причину отказа. ExceptionGroup переносит несколько связанных отказов.

Управление ресурсами организует корректные вход и выход из области через with и протокол context manager. Вход — операция и её контекст; выход — обычный результат, обработанное исключение или дальнейшее распространение ошибки после очистки. Освобождение файлов и других внешних ресурсов следует связывать с явным протоколом, а не со сроком работы сборщика мусора.

Основные понятия: [[knowledge/entries/python-exception|Python Exception]], [[knowledge/entries/python-exception-handling|Python Exception Handling]], [[knowledge/entries/python-exception-group|Python ExceptionGroup]], [[knowledge/entries/python-context-manager|Python Context Manager]], [[knowledge/entries/python-traceback|Python Traceback]].
