---
id: 01a197e4-f6ed-7a55-af77-8ab13e4a0bdb
type: knowledge
name: "Linux /proc/pid/environ"
kind: interface
lifecycle: enriched
review_status: proposed
sources:
  - "https://man7.org/linux/man-pages/man5/proc_pid_environ.5.html"
---
# Linux /proc/pid/environ

Интерфейс procfs для чтения начального окружения программы, установленного при `execve`. Последующие изменения окружения через `putenv` или `environ` обычно не отражаются в этом файле. Доступ проверяется по режиму ptrace `PTRACE_MODE_READ_FSCREDS`. Поэтому удаление переменной из текущего окружения само по себе не доказывает исчезновение её исходного значения из этого интерфейса.
