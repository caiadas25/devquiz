import { Quiz } from "@/types/quiz";

export const githubActionsQuiz: Quiz = {
  id: "github-actions-quiz-1",
  date: "2026-06-27",
  category: "DevOps",
  title: "GitHub Actions Quiz #1",
  description: "Workflows, triggers, jobs, and secrets — test your GitHub Actions knowledge.",
  difficulty: "medium",
  questions: [
    {
      question: "What file defines a GitHub Actions workflow?",
      options: [
        ".github/workflows/*.yml",
        ".github/actions.yml",
        "Makefile",
        "package.json"
      ],
      correct: 0,
      explanation: "GitHub Actions workflows are defined as YAML files in the .github/workflows/ directory. Each file can contain one or more workflows."
    },
    {
      question: "What is the correct syntax for referencing a GitHub Actions secret?",
      options: [
        "${{ secrets.MY_SECRET }}",
        "${{ env.MY_SECRET }}",
        "$MY_SECRET",
        "{{ secrets.MY_SECRET }}"
      ],
      correct: 0,
      explanation: "GitHub Actions secrets are referenced using the expression syntax `${{ secrets.SECRET_NAME }}`. They are never logged in the workflow output."
    },
    {
      question: "What does `on: push` trigger a workflow on?",
      options: [
        "Any push to any branch",
        "Only pushes to the main branch",
        "Only pull request pushes",
        "Manual triggers only"
      ],
      correct: 0,
      explanation: "Without branch filtering, `on: push` triggers on every push to every branch. Use `branches:` to filter: `on: push: branches: [main]`."
    },
    {
      question: "How do you make one job depend on another in GitHub Actions?",
      options: [
        "Use `needs: <job-name>`",
        "Use `depends_on: <job-name>`",
        "Use `after: <job-name>`",
        "Jobs always run in parallel"
      ],
      correct: 0,
      explanation: "The `needs` keyword creates job dependencies. A job with `needs: build` will wait for the `build` job to complete before starting."
    },
    {
      question: "What is a GitHub Actions matrix strategy used for?",
      options: [
        "Running the same job with different configurations (OS, versions, etc.)",
        "Defining multiple repositories",
        "Creating multiple pull requests",
        "Scaling infrastructure"
      ],
      correct: 0,
      explanation: "Matrix strategy runs a job multiple times with different parameter combinations. Example: test on Node 18 + 20 × Ubuntu + Windows = 4 parallel jobs."
    }
  ]
};
