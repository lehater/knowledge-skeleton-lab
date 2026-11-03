---
id: 01a1a114-4131-7827-aa1d-dc280126a9df
type: knowledge
name: "Python Lexical Analysis"
lifecycle: enriched
review_status: proposed
kind: mechanism
sources:
  - "https://docs.python.org/3.15/reference/lexical_analysis.html"
in_topic:
  - "[[knowledge/entries/python-syntax-and-semantics]]"
---
# Python Lexical Analysis

Лексический анализ преобразует исходные байты Python в символы и поток токенов для синтаксического анализа. Кодировка по умолчанию — UTF-8; объявление кодировки может её уточнить. Логические строки, литералы, имена и ключевые слова распознаются до построения структуры программы.

Отступы формируют INDENT/DEDENT и границы вложенных suites. Скобки допускают неявное продолжение строки. Ошибки декодирования и недопустимые отступы приводят к синтаксическим исключениям. Токенизация определяет форму записи, а значение операций задаётся семантикой выражений и инструкций.
