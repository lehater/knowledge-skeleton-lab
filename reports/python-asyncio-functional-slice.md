# Python asyncio — функциональные отношения, минимальный срез

Проверенный предмет: **Python asyncio**, не произвольные async runtimes. Статус новых утверждений — **proposed**, до предметной приёмки.

## Пары и основания

| Источник | Предикат | Цель | Предметное основание |
| --- | --- | --- | --- |
| Python asyncio Event Loop | realizes | Event Loop | Конкретный цикл событий Python asyncio реализует общий механизм event loop |
| Python asyncio.Task | realizes | Asynchronous Task | Конкретный объект `asyncio.Task` исполняет корутину и предоставляет интерфейс задачи |
| Python Coroutine Object | realizes | Coroutine | Конкретный Python coroutine object является воплощением понятия coroutine |
| Python asyncio Event Loop | schedules | Python asyncio.Task | Event loop кооперативно планирует задачи |
| Python asyncio.Task | executes | Python Coroutine Object | `asyncio.Task` исполняет обёрнутый coroutine object |
| Python asyncio.TaskGroup | manages | Python asyncio.Task | Контекстный менеджер TaskGroup удерживает дочерние задачи, ожидает их завершения, управляет отменой/сбоями |

Сохранена ранее созданная связь Python asyncio.TaskGroup `realizes` Structured Concurrency. Результат среза: **3 новых Knowledge, 6 новых K–K отношений**, прежние связи не удалены. Новые `categories` увеличивают общий счёт ссылок ещё на 3.

## Источники

- https://docs.python.org/3/library/asyncio-eventloop.html
- https://docs.python.org/3/library/asyncio-task.html
- https://docs.python.org/3/howto/a-conceptual-overview-of-asyncio.html
- https://docs.python.org/3/reference/datamodel.html

## Представления Obsidian

- `vault/views/python-asyncio-relations.base` — таблица предикатов по четырём конкретным Knowledge.
- `vault/views/python-asyncio-functional.canvas` — **срез** тех же семи отношений, стрелки подписаны. Клик по файлам открывает Knowledge. Canvas — ручная проекция YAML, **не источник истины**; при последующей смене YAML его необходимо пересобрать.
- Встроенный Obsidian Graph покажет wikilinks как рёбра, но **не подпишет типы**. В Canvas типы подписаны явно.

GUI-проверка Obsidian: **NOT_RUN**. Независимое предметное ревью новых связей: **NOT_RUN**. Содержимое Knowledge по-прежнему только YAML + H1; идентфикаторы существующих знаний не изменены.
