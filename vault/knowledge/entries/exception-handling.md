---
id: 01a1a1c4-1193-7c99-abd3-1ccaba72aed5
type: knowledge
name: "Exception Handling"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/tutorial/errors.html"
  - "https://docs.oracle.com/javase/specs/jls/se27/html/jls-11.html"
  - "https://small.r7rs.org/attachment/r7rs.pdf"
in_topic:
  - "[[knowledge/entries/java-exceptions-and-resources]]"
---
# Exception Handling

Обработка исключений организует передачу управления от места исключительной ситуации к подходящему обработчику и действия при выходе из области. Вход — исключение и контекст выполнения; выход — восстановление, преобразование отказа либо дальнейшее распространение. Механизм отделяет обычный результат от исключительного исхода. Иерархия исключений и проверки при компиляции зависят от языка.

Общая ответственность — согласовать сигнал исключения и обработчик, сохранив определённые системой правила дальнейшего выполнения. R7RS §6.11 показывает, что возможны также continuable exceptions: обязательная окончательная раскрутка стека не является универсальным свойством. Python except и Java catch имеют собственные правила выбора; checked analysis Java — дополнительная статическая обязанность, которой у Python runtime нет.
