---
id: 01a1a114-58fa-7775-a80e-26b58ad3cfd4
type: knowledge
name: "CPython Limited API and Stable ABI"
lifecycle: enriched
review_status: proposed
kind: topic
sources:
  - "https://docs.python.org/3.15/c-api/stable.html"
in_topic:
  - "[[knowledge/entries/python-implementations-and-integration]]"
---
# CPython Limited API and Stable ABI

CPython Limited API and Stable ABI — обзор связи Limited C API и Stable ABI CPython.

Limited API ограничивает доступный C API, а Stable ABI позволяет скомпилированному расширению работать с совместимыми последующими версиями CPython без перекомпиляции. Вход — расширение, собранное против выбранного ABI; выход — двоично совместимый модуль в пределах этого контракта.

В Python 3.15 различаются abi3 для обычных сборок и abi3t для free-threaded; у abi3t более строгие ограничения API. Совместимость ABI не устраняет изменения семантики Python-кода, различия ОС или архитектуры CPU. Доступ к внутренним структурам CPython выходит за пределы стабильного контракта.
