---
id: 01a1a114-4bd2-7e1f-b7d3-f848f10b94ec
type: knowledge
name: "Python Code Block"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/reference/executionmodel.html#structure-of-a-program"
in_topic:
  - "[[knowledge/entries/python-execution-model]]"
---
# Python Code Block

Блок — фрагмент текста программы, исполняемый как единица: модуль, тело функции, определение класса, команда интерактивного режима или код для eval/exec. Его выполнение происходит во frame с доступным окружением.

Вход — код и связи имён, выход — результат, изменения состояния или передача управления. Область видимости зависит от вида блока; обычная suite после if/for не создаёт самостоятельную область локальных переменных. Блок — семантическая единица, а code object — представление скомпилированного кода.
