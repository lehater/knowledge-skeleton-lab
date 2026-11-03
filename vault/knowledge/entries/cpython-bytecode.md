---
id: 01a1a114-4d99-7ac4-b2a3-687b2fc35fb5
type: knowledge
name: "CPython Bytecode"
lifecycle: enriched
review_status: proposed
kind: artifact
sources:
  - "https://docs.python.org/3.15/library/dis.html"
in_topic:
  - "[[knowledge/entries/python-execution-model]]"
---
# CPython Bytecode

CPython Bytecode — исполняемое байткодное представление скомпилированной программы CPython.

Байткод CPython — инструкции исполняемого представления, используемые компилятором и интерпретатором CPython. dis показывает инструкции и помогает изучить, как представлен участок Python-кода; вход — code object или другой поддерживаемый объект, выход — дизассемблированное представление.

Специализация инструкций и внутренние caches могут менять наблюдаемое представление во время работы. Набор инструкций и формат зависят от версии CPython. Байткод не является стабильным межверсионным интерфейсом и не задаёт контракт для других реализаций языка.
