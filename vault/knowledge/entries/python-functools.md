---
id: 01a1a116-25b7-72e1-a98d-6b79345687fe
type: knowledge
name: "Python functools"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/functools.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
  - "[[knowledge/entries/python-functions-and-iteration]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python functools

functools предоставляет средства преобразования callables: частичное связывание аргументов, кеширование, сохранение metadata wrappers и другие функции высшего порядка. Вход — callable и параметры преобразования, выход — обёрнутый или специализированный callable.

partial сохраняет часть аргументов, wraps помогает wrapper сохранить metadata, caches переиспользуют результаты при повторных аргументах. Кеширование удерживает ссылки и требует совместимых ключей; согласованность cache при потоках не обещает единственный вызов функции для одновременно поступившего ключа. Преобразование должно учитывать чистоту и стоимость исходного вычисления.
