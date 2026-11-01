---
id: 01a1982d-eb9c-77b1-99bc-67cbf0648f49
type: knowledge
name: "Inspect AI Scoring Policy"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/multi-level-judgement-and-failure-attribution]]"
  - "[[knowledge/entries/inspect-ai-scorer]]"
sources:
  - "https://inspect.aisi.org.uk/scoring-policy.html"
---
# Inspect AI Scoring Policy

Политика Inspect отделяет вердикт о проверяемой модели от неисправности оценивания. Неверный ответ или нарушение требуемого формата остаётся scored verdict. Exception записывается в `sample.error`; `Score.unscored()` сохраняет причину без численного вердикта. `None` означает отсутствие записи этого scorer.

Ошибочный формат ответа модели и непарсируемый вывод grader имеют разную атрибуцию. При обычном агрегировании errored/unscored результаты не входят в знаменатель, поэтому accuracy необходимо читать вместе с coverage. `score_on_error` может оценивать частичное состояние после solver error, меняя интерпретацию итога.
