---
id: 01a1a114-4378-7bbe-b431-03354e89819d
type: knowledge
name: "Python Numeric Types"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/builtins/stdtypes.html#numeric-types-int-float-complex"
in_topic:
  - "[[knowledge/entries/python-data-and-types]]"
---
# Python Numeric Types

int, float и complex представляют целые, вещественные и комплексные значения; bool является подтипом int. Операции принимают числовые объекты и возвращают числовой результат либо исключение. Смешанные арифметические операции используют определённые правила преобразования.

int поддерживает произвольную точность в пределах памяти. float имеет ограниченную двоичную точность, поэтому десятичные дроби часто представлены приближённо. / выполняет обычное деление, // — округление результата вниз. decimal и fractions стандартной библиотеки предоставляют другие числовые модели; их выбор зависит от требуемой арифметики.
