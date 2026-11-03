---
id: 01a1a114-44a2-7bfc-b117-4be952145149
type: knowledge
name: "Python Sets"
lifecycle: enriched
review_status: proposed
kind: construct
sources:
  - "https://docs.python.org/3.15/builtins/stdtypes.html#set-types-set-frozenset"
in_topic:
  - "[[knowledge/entries/python-data-and-types]]"
---
# Python Sets

set и frozenset представляют коллекции уникальных hashable элементов с операциями объединения, пересечения, разности и проверки включения. Вход — iterable или другие множества; выход — множество либо логический результат. Порядок элементов не является контрактом множества.

set изменяем и сам не hashable; frozenset неизменяем и может быть ключом отображения или элементом множества. Множественные операции выражают отношения членства, а не позиционный доступ. Равные элементы не сохраняются как отдельные позиции; для упорядоченной последовательности нужен другой тип.
