---
id: 01a1a114-532c-7637-9eff-944497ebbdea
type: knowledge
name: "Python json"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/json.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
part_of:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python json

json преобразует поддерживаемые Python-значения в JSON и обратно, связывая модель объектов с форматом обмена. dumps/loads работают со строками, dump/load — с файловыми интерфейсами. Результат декодирования — значения, а не произвольный восстановленный Python-объект.

JSON-ключи являются строками, поэтому round trip не обязан сохранять исходные типы ключей. Пользовательские типы требуют явной стратегии кодирования. Обработка больших или недоверенных входов требует ограничения ресурсов; совместимость с потребителем зависит от допустимых чисел и иных особенностей формата.
