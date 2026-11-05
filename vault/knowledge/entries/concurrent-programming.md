---
id: 01a18e44-0873-7181-bacc-8ee298dfa5b6
type: knowledge
lifecycle: enriched
name: "Concurrent Programming"
kind: practice
review_status: proposed
sources:
  - "https://doc.rust-lang.org/book/ch17-00-async-await.html"
  - "https://doc.rust-lang.org/book/ch16-01-threads.html"
  - "https://kotlinlang.org/docs/coroutines-basics.html"
---
# Concurrent Programming

Конкурентное программирование организует программу как взаимодействующие вычисления с перекрывающимся продвижением. Вход — работы, общие данные и события; результат — программа с явными правилами координации и завершения. Потоки и asynchronous-механизмы дают разные способы исполнения; синхронизация и обмен сообщениями управляют взаимодействиями. Параллельное ускорение зависит от среды и характера работ.

Практика организации взаимодействующих работ и модель [[knowledge/entries/concurrency|Concurrency]] имеют разные референты: первая описывает построение программы, вторая — характер продвижения. Потоки, процессы и асинхронные задачи являются разными средствами; выбор не выводится только из совпадения названий API.
