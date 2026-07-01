export const gitQuiz1 = {
  id: "git-quiz-1",
  date: "2026-07-01",
  category: "Git",
  title: "Git Quiz #1",
  description: "Git basics: staging, commits, branches, and common workflows.",
  difficulty: "easy" as const,
  questions: [
    {
      question: "What does `git add` do?",
      options: [
        "Saves changes permanently to the repository",
        "Stages changes for the next commit",
        "Deletes untracked files",
        "Merges the current branch with main"
      ],
      correct: 1,
      explanation: "git add moves changes to the staging area (index). Staged changes are included in the next commit. You can stage specific files (git add file.txt) or everything (git add .). Changes remain in the staging area until you commit."
    },
    {
      question: "What is the difference between `git commit` and `git push`?",
      options: [
        "They do the same thing",
        "commit saves locally, push uploads to a remote repository",
        "push saves locally, commit uploads to a remote",
        "commit only works on main branch"
      ],
      correct: 1,
      explanation: "git commit creates a snapshot of staged changes in your local repository history. git push uploads your local commits to a remote repository (like GitHub). You can commit many times before pushing."
    },
    {
      question: "What command shows the commit history of a branch?",
      options: [
        "git history",
        "git log",
        "git show",
        "git list"
      ],
      correct: 1,
      explanation: "git log displays the commit history with hashes, authors, dates, and messages. Useful flags: --oneline (compact view), --graph (visual branch diagram), --stat (file changes)."
    },
    {
      question: "How do you create a new branch and switch to it in one command?",
      options: [
        "git branch new-branch && git checkout new-branch",
        "git checkout -b new-branch",
        "git new-branch",
        "git switch --create new-branch"
      ],
      correct: 1,
      explanation: "git checkout -b new-branch creates a new branch from the current HEAD and switches to it. Alternatively, git switch -c new-branch does the same thing in newer Git versions."
    },
    {
      question: "What does `git stash` do?",
      options: [
        "Permanently deletes uncommitted changes",
        "Temporarily saves uncommitted changes so you can work on something else",
        "Creates a backup of the entire repository",
        "Moves changes from staged to unstaged"
      ],
      correct: 1,
      explanation: "git stash temporarily shelves your working directory changes. This lets you switch branches without committing or losing work. Use git stash pop to restore the changes, or git stash list to see all stashed changes."
    }
  ]
};
