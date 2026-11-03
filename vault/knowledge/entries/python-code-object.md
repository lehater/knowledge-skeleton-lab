---
id: 01a1a114-4c91-7528-bf5d-f10aa1c11fbc
type: knowledge
name: "Python Code Object"
lifecycle: enriched
review_status: proposed
kind: artifact
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#code-objects"
  - "https://docs.python.org/3.15/library/ast.html"
in_topic:
  - "[[knowledge/entries/python-execution-model]]"
---
# Python Code Object

Code object представляет скомпилированный исполняемый код и метаданные: имена, константы и сведения о параметрах/строках. compile может сформировать его из исходного кода или AST. Функция хранит ссылку на code object вместе с globals, defaults и closure.

Один code object может использоваться в разных выполнениях и frame. Сам объект кода не содержит полного окружения функции. В CPython его инструкции представлены байткодом; внутреннее устройство зависит от версии и не служит переносимым форматом программы между реализациями.
