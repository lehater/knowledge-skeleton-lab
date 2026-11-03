---
id: 01a1981a-9975-7c49-9374-a3d92310b02d
type: knowledge
name: "Inspect AI MemoryDataset"
lifecycle: enriched
review_status: proposed
kind: program_construct
specializes:
  - "[[knowledge/entries/inspect-ai-dataset]]"
sources:
  - "https://inspect.aisi.org.uk/reference/inspect_ai.dataset.html"
---
# Inspect AI MemoryDataset

MemoryDataset — подкласс Dataset, хранящий список Sample в памяти. Конструктор принимает `samples`, необязательные имя, location и признак shuffled; экземпляр предоставляет последовательный доступ через интерфейс Dataset. Это представление уже подготовленных примеров, а не отдельный формат исходного файла.
