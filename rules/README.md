# Действующая модель Knowledge Graph v1

- [schema.md](schema.md) — формат единого Knowledge, без отдельных типов Category.
- [knowledge.md](knowledge.md) — выбор источника, идентичность и заполнение заметки.
- [relations.md](relations.md) — допустимые предикаты и их смысл.
- [discovery.md](discovery.md) — короткий Source-First Discovery.
- [validation.md](validation.md) — автоматическая проверка целостности.

[AGENTS.md](../AGENTS.md) определяет рабочий процесс, [Skill](../.agents/skills/knowledge-graph-discovery/SKILL.md) его исполняет.

**Правило:** выбирай общеизвестный надёжный источник, корректно переноси утверждение, помещай URL в `sources`. Отдельные evidence-реестры, рейтинги и обязательные независимые ревью не ведутся.

Исторические CSV/отчёты и прежние требования к аудиту не являются актуальным контрактом. Схема и словарь предикатов не изменяются автоматически в ходе Discovery.
