# K-Plex Graph Lenses — ручная проверка на Knowledge Skeleton Lab

**Дата наблюдений:** 2026-10-31.  
**Исполнитель GUI-проверки:** владелец Vault; доказательства — скриншоты, предоставленные в чате 31.10.2026.  
**Источник истины для предметных данных:** Git/YAML в `vault/knowledge/entries/`.  
**Область проверки:** Obsidian K-Plex, локальное окружение Knowledge `python-asyncio-task` и `python-asyncio-event-loop`.

## Цель и граница

Проверить, можно ли **исследовать существующую технологию**, переключая семантические точки зрения на один набор Knowledge: `Functioning` (`schedules`, `manages`, `executes`) и `Realization` (`realizes`). Это проверка **Graph View-подобного динамического представления**, а не фильтрации Obsidian Canvas.

## Наблюдения

| ID | Действие / наблюдение | Результат |
| --- | --- | --- |
| K01 | Breadcrumbs распознал исходный YAML-граф без изменения предметных файлов | **PASS**: в статистике 39 resolved nodes, 34 explicit field edges / typed links; `realizes=4`, `schedules=1`, `executes=1`, `manages=1`; дополнительные `categories=22`, `broader=4`, `specializes=1` |
| K02 | Matrix View Breadcrumbs после исправления настройки видимости/привязки отображает `python-asyncio-task` | **PASS**: `realizes → asynchronous-task` и `executes → python-coroutine-object` |
| K03 | K-Plex без дополнительных фильтров показывает соседство `python-asyncio-task` | **PASS с ограничением**: рядом с предметными Knowledge первоначально присутствовали Canvas/URL; после отключения Attachments, Web links, Inferred осталось предметное окружение |
| K04 | K-Plex Graph Lens `Executing` по предикату `executes` | **PASS**: `python-asyncio-task → executes → python-coroutine-object` с подписью и стрелкой |
| K05 | Одновременное включение линз `Executing` и `Realization` | **PASS**: одновременно видны `executes → python-coroutine-object` и `realizes → asynchronous-task` |
| K06 | Функциональная точка зрения вокруг `python-asyncio-task` | **PASS**: `python-asyncio-event-loop → schedules → task`, `python-asyncio-task-group → manages → task`, `task → executes → python-coroutine-object` |
| K07 | Переход к Knowledge `python-asyncio-event-loop` с сохранённой функциональной фильтрацией | **PASS**: центральный узел меняется, видно `event-loop → schedules → task` |
| K08 | Компоновка и семантическая однозначность | **Ограничение**: в Compass связи разных направлений могут оказаться на одной стороне; подписи и направление стрелок важнее пространственной роли |
| K09 | Автоматическое построение/синхронизация каскадных Canvas через K-Plex | **NOT_TESTED**; не заявлять результат |
| K10 | 3D, глобальный Graph View, стабильность после перезапуска/на другом Vault | **NOT_TESTED** |

**Оговорка к K01:** статистика Breadcrumbs — **39 узлов и 34 ссылки в собственной индексной модели плагина**, а не число предметных Knowledge или результат независимого семантического ревью. Это не утверждение, что в Vault есть 39 Knowledge. Названия и значения взяты из показанного пользователем JSON.

## Предметная точность

Ни Compass-роль `Parent`/`Friend`, ни положение на экране не являются предметными отношениями. Семантика остаётся в исходных YAML-полях `schedules`, `executes`, `manages`, `realizes`. Входящее `schedules` и исходящее `executes` должны сохранять направление независимо от компоновки.

Результат подтверждает **корректное отображение выбранных рёбер на проверенном срезе**, а не истинность всех предметных утверждений относительно официальной документации Python. Новые Knowledge, типы отношений, YAML или инверсии не создавались.

## Архитектурный вывод

- **Graph View / K-Plex:** локальное интерактивное исследование Knowledge с фильтрацией предикатов и сохранением выбранной точки зрения при переходах.
- **Canvas:** целостная, содержательная схема изучаемой технологии, ссылки на Knowledge и Canvas её компонентов. Нет требования динамически скрывать на Canvas типы связей.
- **Breadcrumbs Matrix / Canvas export:** табличная и автоматически сгенерированная проекции того же графа; на пользовательском скриншоте Canvas export сохранил подписанные `executes` и `realizes`.

## Следующая полезная проверка

Оценить навигацию `Knowledge → его Canvas → Knowledge дочернего элемента → возврат`. После субъективной проверки удобства определить, как Knowledge связывается с несколькими Canvas, не смешивая **навигационную ссылку** с `part_of` или `realizes`.

**Объём свидетельств:** пользовательские скриншоты в беседе (не копировались в репозиторий); GUI не запускался ассистентом. Независимый GUI-тест: **NOT_RUN**. Повторное независимое семантическое ревью: **NOT_RUN**.
