---
id: 01a1a113-e097-7c67-9027-1219967a2c49
type: knowledge
name: "Python Execution Model"
lifecycle: enriched
review_status: proposed
kind: model
sources:
  - "https://docs.python.org/3.15/reference/executionmodel.html"
  - "https://docs.python.org/3.15/reference/datamodel.html#internal-types"
  - "https://docs.python.org/3.15/library/ast.html"
  - "https://docs.python.org/3.15/library/dis.html"
in_topic:
  - "[[knowledge/entries/python]]"
---
# Python Execution Model

Модель исполнения определяет блоки программы, контекст их выполнения и разрешение имён. Блок исполняется во frame, где доступны локальное, глобальное и встроенное пространства имён; вложенные области и замыкания задают доступ к внешним связям.

Вход — исполняемый блок и окружение; результат — значения, изменения состояния или передача управления, включая исключение. Code object представляет исполняемый код, frame — конкретное выполнение. AST и CPython bytecode раскрывают границу представлений: структуры компилятора и набор инструкций не являются универсальной гарантией всех реализаций Python.

Основные понятия: [[knowledge/entries/python-code-block|Python Code Block]], [[knowledge/entries/python-namespace-and-scope|Python Namespace and Scope]], [[knowledge/entries/python-code-object|Python Code Object]], [[knowledge/entries/python-execution-frame|Python Execution Frame]], [[knowledge/entries/python-ast|Python Abstract Syntax Tree]], [[knowledge/entries/cpython-bytecode|CPython Bytecode]].
