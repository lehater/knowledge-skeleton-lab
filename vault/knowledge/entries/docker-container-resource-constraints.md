---
id: 01a197e5-89d6-7ecb-a683-684761f294d9
type: knowledge
name: "Docker Container Resource Constraints"
lifecycle: enriched
review_status: proposed
kind: mechanism
in_topic:
  - "[[knowledge/entries/execution-environment-sandbox]]"
sources:
  - "https://docs.docker.com/engine/containers/resource_constraints/"
---
# Docker Container Resource Constraints

Docker задаёт ограничения CPU и памяти контейнера через cgroup хоста. `--cpus` или пара `--cpu-quota`/`--cpu-period` ограничивает доступное процессорное время и приводит к throttling после исчерпания квоты. `--cpu-shares` задаёт относительный вес при конкуренции, без гарантии или резервирования CPU.

`--memory` устанавливает верхний предел памяти, а `--memory-reservation` — мягкий порог при нехватке памяти или конкуренции; превышение reservation допустимо. `--memory-swap` задаёт суммарный бюджет RAM и swap при установленном `--memory`; равенство этих значений запрещает swap. При нехватке памяти OOM killer может завершать процессы контейнера.
