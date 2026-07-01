import { Quiz } from "@/types/quiz";

export const linuxQuiz1: Quiz = {
  id: "linux-quiz-1",
  date: "2026-07-01",
  category: "DevOps",
  title: "Linux Quiz #1 — Commands, Permissions & Shell Essentials",
  description: "Test your Linux knowledge — file permissions, process management, shell commands, and system administration fundamentals.",
  difficulty: "medium",
  questions: [
    {
      question: "What does `chmod 755` set as permissions?",
      options: [
        "Owner: read+write+execute, Group: read+execute, Others: read+execute",
        "All users: read+write+execute",
        "Owner: read+write, Group: read, Others: read",
        "Owner: read+execute, Group: read, Others: nothing"
      ],
      correct: 0,
      explanation: "7 = rwx (4+2+1), 5 = r-x (4+0+1), 5 = r-x (4+0+1). The first digit is owner, second is group, third is others. 755 is standard for executables and directories."
    },
    {
      question: "What is the difference between `kill` and `kill -9`?",
      options: [
        "They are the same thing",
        "kill sends SIGTERM (graceful shutdown), kill -9 sends SIGKILL (forced termination)",
        "kill -9 is faster than kill",
        "kill only works on root processes"
      ],
      correct: 1,
      explanation: "`kill` sends SIGTERM, allowing the process to clean up resources and exit gracefully. `kill -9` sends SIGKILL, which terminates the process immediately without cleanup. Always try SIGTERM first."
    },
    {
      question: "What does `grep -r \"TODO\" src/` do?",
      options: [
        "Recursively searches for the string 'TODO' in all files under src/",
        "Replaces 'TODO' with empty string in src/",
        "Lists all files in src/ that contain 'TODO' in their name",
        "Runs the TODO command inside src/"
      ],
      correct: 0,
      explanation: "grep searches file contents. The -r flag makes it recursive (searches subdirectories). It prints every line matching the pattern along with the filename."
    },
    {
      question: "What is `/dev/null` used for?",
      options: [
        "A directory for deleted files",
        "A special file that discards all data written to it (the 'black hole')",
        "A temporary file storage area",
        "A device driver for printers"
      ],
      correct: 1,
      explanation: "`/dev/null` is a special file that discards everything written to it and returns nothing when read. Commonly used to suppress output: `command > /dev/null` hides stdout."
    },
    {
      question: "What does `ps aux | grep nginx` do?",
      options: [
        "Starts the nginx process",
        "Kills all nginx processes",
        "Lists all running processes and filters for ones containing 'nginx'",
        "Installs nginx via the package manager"
      ],
      correct: 2,
      explanation: "`ps aux` lists all running processes with detailed info. The pipe `|` sends that output to `grep nginx`, which filters to only show lines containing 'nginx'."
    }
  ]
};
