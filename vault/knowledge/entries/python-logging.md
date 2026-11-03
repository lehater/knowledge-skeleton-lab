---
id: 01a1a114-53de-7679-a16c-31e7023b4e12
type: knowledge
name: "Python logging"
lifecycle: enriched
review_status: proposed
kind: technology
sources:
  - "https://docs.python.org/3.15/library/logging.html"
in_topic:
  - "[[knowledge/entries/python-standard-library]]"
---
# Python logging

logging маршрутизирует записи о работе программы от loggers через filters и handlers к местам вывода; formatters задают представление. Вход — событие с уровнем, сообщением и контекстом, выход — LogRecord и его доставка/форматирование согласно конфигурации.

Иерархия logger names и propagation позволяют централизовать обработку. Порог logger и handler влияет на видимость записи. Наличие вызова logger не гарантирует запись в файл: конечный маршрут зависит от конфигурации. logging помогает наблюдать выполнение, но сам по себе не определяет модель трассировки или хранения всех событий.
