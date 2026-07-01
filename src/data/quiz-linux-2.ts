import { Quiz } from "@/types/quiz";

export const linuxQuiz2: Quiz = {
  id: "linux-quiz-2",
  date: "2026-07-01",
  category: "DevOps",
  title: "Linux Quiz #2",
  description: "Process management, networking commands, disk usage, and systemd fundamentals.",
  difficulty: "medium" as const,
  questions: [
    {
      question: "What does `systemctl status nginx` do?",
      options: [
        "Starts the nginx service",
        "Shows the current status of the nginx service",
        "Enables nginx to start on boot",
        "Restarts the nginx service"
      ],
      correct: 1,
      explanation: "`systemctl status` displays whether a service is active/inactive, its PID, memory usage, and recent log lines. Use it to diagnose service issues."
    },
    {
      question: "What is the difference between `kill` and `kill -9`?",
      options: [
        "kill sends SIGTERM, kill -9 sends SIGKILL (force kill)",
        "kill stops the process, kill -9 starts it",
        "kill -9 is faster than kill",
        "There is no difference"
      ],
      correct: 0,
      explanation: "`kill` sends SIGTERM (graceful shutdown), giving the process time to clean up. `kill -9` sends SIGKILL (immediate termination) — the process cannot catch or ignore it. Always try SIGTERM first."
    },
    {
      question: "What does `du -sh /var/log` show?",
      options: [
        "List all files in /var/log",
        "Show the total disk usage of /var/log in human-readable format",
        "Delete files in /var/log",
        "Show the number of files in /var/log"
      ],
      correct: 1,
      explanation: "`du` (disk usage) with `-s` (summary) and `-h` (human-readable) shows the total size of a directory. Essential for finding what's eating your disk space."
    },
    {
      question: "What does `journalctl -u nginx -f` do?",
      options: [
        "Lists all nginx configuration files",
        "Follows (tails) the log output for the nginx systemd unit in real-time",
        "Fixes nginx errors automatically",
        "Removes old nginx log entries"
      ],
      correct: 1,
      explanation: "`journalctl` queries systemd journal logs. `-u nginx` filters to the nginx service, `-f` follows (tails) new entries in real-time. Replaces `tail -f /var/log/nginx/error.log` in systemd systems."
    },
    {
      question: "What is the purpose of `/etc/fstab`?",
      options: [
        "Stores user passwords",
        "Defines filesystem mounts that are automatically mounted at boot",
        "Lists running processes",
        "Configures network interfaces"
      ],
      correct: 1,
      explanation: "`/etc/fstab` (file system table) tells the system which partitions and filesystems to mount at boot, with options like read-only, no-exec, and mount points. Editing it incorrectly can prevent boot."
    }
  ]
};
