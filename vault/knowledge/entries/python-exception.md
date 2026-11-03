---
id: 01a1a114-4efd-7238-98f6-8e981f560339
type: knowledge
name: "Python Exception"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/builtins/exceptions.html"
  - "https://docs.python.org/3.15/tutorial/errors.html"
in_topic:
  - "[[knowledge/entries/python-exceptions-and-resources]]"
specializes:
  - "[[knowledge/entries/exception]]"
---
# Python Exception

Исключение — объект подкласса BaseException, передающий сведения об отклонении от нормального выполнения. raise или runtime-ошибка запускают поиск подходящего обработчика; результат — обработка либо дальнейшее распространение с traceback.

Пользовательские ошибки обычно наследуют Exception. BaseException также охватывает сигналы управления вроде KeyboardInterrupt и SystemExit; except Exception не перехватывает их. __cause__ и __context__ сохраняют причинную цепочку. Синтаксические ошибки представлены SyntaxError, но часто возникают до исполнения тела проверяемой программы.
