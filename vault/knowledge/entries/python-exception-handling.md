---
id: 01a1a114-4f59-7480-9656-4fdb544e2e0b
type: knowledge
name: "Python Exception Handling"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/reference/compound_stmts.html#the-try-statement"
  - "https://docs.python.org/3.15/tutorial/errors.html#handling-exceptions"
in_topic:
  - "[[knowledge/entries/python-exceptions-and-resources]]"
---
# Python Exception Handling

try/except обрабатывает исключения, выбирая первый подходящий обработчик по типу исключения и его базовым классам. else выполняется после успешного try; finally задаёт завершающие действия при обычных путях выхода, включая исключение и return.

Вход — защищённый блок и возможный отказ, выход — восстановленное выполнение или распространённое исключение. raise без аргумента повторно поднимает активное исключение. Ошибка или передача управления из finally может заменить исходный результат; очистку следует писать так, чтобы не скрыть причину отказа. Аварийное завершение процесса выходит за гарантии этого протокола.
