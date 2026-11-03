---
id: 01a1a114-4b24-73ac-8be0-6d8df0a13fac
type: knowledge
name: "Python Import Finder"
lifecycle: enriched
review_status: proposed
kind: program_construct
sources:
  - "https://docs.python.org/3.15/reference/import.html#finders-and-loaders"
  - "https://docs.python.org/3.15/library/importlib.html#importlib.abc.MetaPathFinder"
in_topic:
  - "[[knowledge/entries/python-modules-and-import]]"
part_of:
  - "[[knowledge/entries/python-import-system]]"
---
# Python Import Finder

Finder отвечает за поиск описания модуля — module spec — по полному имени и контексту пути. Meta path finders опрашиваются через sys.meta_path; path entry finders обслуживают конкретные элементы пути. Выход — spec с loader либо отсутствие подходящего определения.

Finder не обязан выполнять код модуля: поиск и загрузка разделены контрактом. Наличие hooks позволяет получать модули из разных хранилищ. Import cache может завершить поиск раньше, чем finder будет вызван; потому ребро исполнения модуля этому компоненту не назначается.
