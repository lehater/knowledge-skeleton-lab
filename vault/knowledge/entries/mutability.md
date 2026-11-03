---
id: 01a1a1c4-1343-7f19-846f-762566c23459
type: knowledge
name: "Mutability"
lifecycle: enriched
review_status: proposed
kind: property
sources:
  - "https://docs.python.org/3.15/reference/datamodel.html#objects-values-and-types"
  - "https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/lang/String.html"
  - "https://small.r7rs.org/attachment/r7rs.pdf"
in_topic:
  - "[[knowledge/entries/java-types-and-values]]"
---
# Mutability

Изменяемость — возможность изменения состояния/значения объекта после создания. Вход — операция над существующим объектом; выход — изменение его состояния либо новый объект при неизменяемой модели. При нескольких ссылках на изменяемый объект изменение может наблюдаться через другие ссылки. Неизменность привязки переменной и неизменность достижимого объектного графа — разные свойства.

R7RS §3.4 связывает мутацию с записью в сохраняемые объектом locations; это не присваивание другого объекта переменной. Python tuple и Java record могут хранить ссылки на изменяемые объекты. Java final ограничивает присваивание переменной, а не весь достижимый объектный граф. Возможность наблюдать изменение через aliases зависит также от правил синхронизации.
