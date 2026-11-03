---
id: 01a196ec-2a78-7bb7-8dff-5ddded26d3e6
type: knowledge
name: "Component Hardening"
kind: practice
lifecycle: enriched
review_status: proposed
in_topic:
  - "[[knowledge/entries/governance-security]]"
sources:
  - "https://picrew.github.io/LLM-Harness/main.pdf#page=8"
  - "https://arxiv.org/abs/2404.13208"
  - "https://docs.docker.com/engine/security/"
---
# Component Hardening

Укрепление компонентов снижает уязвимость отдельных частей агента — модели, инструментов и их среды — до применения общей политики harness. У каждой части своя поверхность атаки. Работа Instruction Hierarchy обучает модель учитывать приоритет инструкций и игнорировать конфликтующие указания из менее доверенных данных; это повышение устойчивости, а не доказательство отсутствия prompt injection.

Для исполнителя важны ограничение привилегий и доступов. Docker описывает namespaces, resource limits через cgroups, сокращение capabilities и защиту доступа к daemon; доступ к daemon или опасные mounts могут разрушить ожидаемую границу. Эти меры защищают разные компоненты: устойчивая модель не исправляет скомпрометированный инструмент, а изоляция инструмента не проверяет смысл ответа. Конфигурация и остаточный риск остаются ответственностью системы.
