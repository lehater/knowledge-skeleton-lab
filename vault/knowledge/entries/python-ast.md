---
id: 01a1a114-4d41-77b5-b6bc-396a39d8a897
type: knowledge
name: "Python Abstract Syntax Tree"
lifecycle: enriched
review_status: proposed
kind: artifact
sources:
  - "https://docs.python.org/3.15/library/ast.html"
  - "https://small.r7rs.org/attachment/r7rs.pdf"
in_topic:
  - "[[knowledge/entries/python-execution-model]]"
  - "[[knowledge/entries/metaprogramming]]"
---
# Python Abstract Syntax Tree

AST представляет программу деревом семантических синтаксических узлов: определения, вызовы, выражения и инструкции. ast.parse/compile с соответствующим флагом принимает текст и формирует AST; compile может преобразовать подходящее дерево в code object.

Дерево полезно для анализа и преобразования кода. Успешное построение AST ещё не гарантирует допустимость выполнения: отдельные проверки контекста выполняются компилятором. Структура узлов может меняться между версиями. AST не сохраняет точное оформление исходного текста и отличается от исполняемого байткода.
