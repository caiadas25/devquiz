import { Quiz } from "@/types/quiz";

export const gitQuiz2: Quiz = {
  id: "git-quiz-2",
  date: "2026-06-27",
  category: "Git",
  title: "Git Quiz #2",
  description: "Branching strategies, rebasing, cherry-picking, and advanced Git workflows.",
  difficulty: "medium",
  questions: [
    {
      question: "What is the difference between git rebase and git merge?",
      options: [
        "There is no difference — they do the same thing",
        "Rebase rewrites commit history to create a linear timeline; merge preserves the branch topology",
        "Rebase is faster than merge in all cases",
        "Merge creates a new branch; rebase doesn't"
      ],
      correct: 1,
      explanation: "Rebase takes the commits from your branch and replays them on top of the target branch, creating a linear history. Merge creates a merge commit that preserves the exact branch topology. Rebase gives cleaner history but rewrites commits."
    },
    {
      question: "What does git cherry-pick do?",
      options: [
        "Deletes all commits except the picked ones",
        "Copies a specific commit from one branch to another",
        "Creates a new branch from a specific commit",
        "Moves the HEAD to a specific commit"
      ],
      correct: 1,
      explanation: "git cherry-pick <commit-hash> applies the changes from a specific commit onto your current branch. It creates a new commit with the same changes but a different hash. Useful for hotfixes or selectively applying changes."
    },
    {
      question: "What is a detached HEAD state?",
      options: [
        "When you have uncommitted changes that are lost",
        "When HEAD points directly to a commit instead of a branch reference",
        "When the repository is corrupted",
        "When you're on the main branch"
      ],
      correct: 1,
      explanation: "Detached HEAD means HEAD points to a specific commit rather than a branch name. Commits made here aren't on any branch and will be garbage collected unless you create a new branch. Common when checking out a tag or specific commit hash."
    },
    {
      question: "What does git stash do?",
      options: [
        "Permanently deletes uncommitted changes",
        "Saves uncommitted changes to a temporary stack and reverts the working directory",
        "Creates a backup of the entire repository",
        "Pushes changes to a hidden remote branch"
      ],
      correct: 1,
      explanation: "git stash temporarily saves your uncommitted changes (both staged and unstaged) and reverts your working directory to match HEAD. Use git stash pop to restore them. Great for context-switching between tasks."
    },
    {
      question: "What is the purpose of .gitignore?",
      options: [
        "Ignores all Git commands run in the directory",
        "Specifies files/directories Git should stop tracking or never start tracking",
        "Hides the .git directory from other users",
        "Prevents other developers from pushing to the repo"
      ],
      correct: 1,
      explanation: ".gitignore tells Git which files to ignore — typically build outputs, dependencies (node_modules), environment files (.env), and OS files (.DS_Store). Once a file is tracked, you need to untrack it first with git rm --cached."
    }
  ]
};
