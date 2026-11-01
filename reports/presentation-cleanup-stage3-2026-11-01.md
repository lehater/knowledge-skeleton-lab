# Stage 3 — очистка представлений Obsidian и учебных артефактов

**Дата:** 2026-11-01.  
**База:** `30d1762ce69d8ba27c5e73a5825d1a9f2ee5d2fc` (Draft PR #10, Stage 2 Relation Audit).  
**Scope:** файловые представления Vault, старые учебные материалы и ограниченный safeguard валидатора. Предметные Knowledge и их связи **не изменялись**.

## Что удалено

**7 учебных Canvas** — шесть `vault/views/python-asyncio-*.canvas` и один ошибочно помещённый в Knowledge:
`vault/knowledge/entries/python-asyncio-task canvas.canvas`.

**1 специализированная Base** — `vault/views/python-asyncio-relations.base`.

**7 старых учебных материалов вне Vault:**
- `experiments/asynchronous-programming/brief.md`;
- `experiments/asynchronous-programming/category-value-check.md`;
- `prompts/first-discovery.md`;
- `reports/k-plex-lenses-pilot.md`;
- `reports/pilot-001-discovery.md`;
- `reports/pilot-001-independent-review.md`;
- `reports/python-asyncio-functional-slice.md`.

**Всего 15 удалённых устаревших файлов.** Копии в рабочем Vault или отдельном архиве **не создавались**. Прежние версии при необходимости доступны в Git.

Важное различие: `Python asyncio.Event Loop`, `Python asyncio.Task` и другие source-verified Knowledge по asyncio **не удалены**. Удалены только их старые *представления*, не их подтверждённые референты.

## Что осталось актуальным

- **77 Knowledge**, **62 направленных ребра** после Stage 2, включая **42 ETCLOVG `in_topic`**.
- `vault/views/knowledge.base` — полный список Knowledge и статусы.
- `vault/views/topics.base` — тематические связи.
- `vault/views/topic-explorer.base` — контекстная панель `in_topic`; исправлен фильтр на `list(in_topic).contains(this)`. **Использовать в sidebar или как embed**: при открытии отдельно `this` относится к самому .base и не имеет фокуса Knowledge. Поведение `this` описано в [официальной документации Obsidian Bases](https://obsidian.md/help/bases/syntax).
- `vault/.obsidian/types.json` содержит действующие предикаты, в т.ч. `in_topic` и `broader`, без старого `categories`.
- Плагин `k-plex` остаётся включён в `community-plugins.json`. Каскадные Canvas не требуются для навигации ETCLOVG.

**Сохранённые evidence-реестры и отчёты Stage 1–2** — часть трассировки текущих решений, не учебные копии; нормативные правила — в `AGENTS.md` и `rules/`.

## Автоматизированная защита

Статический валидатор теперь отклоняет не-`.md` файлы в `vault/knowledge/entries/` (кроме служебного `.gitkeep`). Добавлен регрессионный тест на случайно размещённый Canvas.

Проверка: `node tools/validate.mjs`, `node --test tools/validate.test.mjs`, diff, CI. Она подтверждает структуру и запрещённые вложения, **но не запускает Obsidian**.

## GUI-проверка после обновления — ожидает владельца

Первичный GUI-пилот [ETCLOVG 7/7 и 35/35](harness-engineering/k-plex-etclovg-gui-validation-2026-11-01.md) проводился **до** Stage 2 и Stage 3. Повторный прогон на обновлённом дереве: **NOT_RUN**.

1. В корне локального Git-репозитория: `git fetch origin`; при чистом рабочем дереве `git switch --track origin/experiment/presentation-cleanup-stage3` (либо `git switch experiment/presentation-cleanup-stage3 && git pull --ff-only`).
2. Открыть **только `vault/`** как Vault в Obsidian, проверить, что нет старых `python-asyncio*.canvas` и Base `python-asyncio-relations.base`.
3. В K-Plex открыть `knowledge/entries/harness-engineering.md`; выбрать линзу `in_topic` и увидеть **7** направлений.
4. Перейти в `Lifecycle & Orchestration`; должно быть **3** дочерних Knowledge (`Single-Agent Inner Loop`, `Multi-Agent Orchestration Patterns`, `Full Lifecycle Task Pipelines`).
5. Остальные шесть направлений: `Execution Environment & Sandbox=7`, `Tool Interface & Protocol=4`, `Context & Memory Management=5`, `Observability & Operations=5`, `Verification & Evaluation=5`, `Governance & Security=6`.
6. Проверить `knowledge.base` и `topics.base` в Obsidian. Для контекстного `topic-explorer.base` использовать Sidebar/Embed, а не отдельную вкладку.
7. Зафиксировать `GUI PASS/FAIL` с конкретными наблюдениями. Скриншоты — по необходимости, не обязательны для текущего cleanup-коммита.

## Граница результата

**Static проверка:** по результату GitHub Actions.  
**Source / semantic:** используют прежние реестры, не перепроверялись на Stage 3.  
**Updated GUI:** **NOT_RUN** до ручной проверки владельца.  
**Git:** только новая зависимая Draft PR-ветка; `main` не изменён.

После GUI-проверки целесообразно решить статус и интеграцию цепочки Draft PR по отдельному review, вместо продолжения бесконечной очистки.
