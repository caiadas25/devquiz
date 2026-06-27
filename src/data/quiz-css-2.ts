import { Quiz } from "@/types/quiz";

export const cssQuiz2: Quiz = {
  id: "css-quiz-2",
  date: "2026-06-27",
  category: "CSS",
  title: "CSS Quiz #2 — Intermediate",
  description: "CSS Grid, animations, custom properties, and advanced selectors.",
  difficulty: "medium",
  questions: [
    {
      question: "What does `grid-template-columns: repeat(3, 1fr)` create?",
      options: [
        "3 equal-width columns",
        "3 rows of equal height",
        "A single column with 3 items",
        "3 columns where each takes 1 fraction of available space"
      ],
      correct: 0,
      explanation: "`repeat(3, 1fr)` creates 3 columns of equal width. `1fr` means each column gets an equal fraction of the available space. This is the most common way to create equal-width grid layouts."
    },
    {
      question: "What is the difference between `transition` and `animation` in CSS?",
      options: [
        "Transitions require a trigger, animations can run on page load",
        "Animations are faster than transitions",
        "They are identical in capability",
        "Transitions work on all properties, animations don't"
      ],
      correct: 0,
      explanation: "CSS transitions need a trigger (like hover or class change) to start. CSS animations use `@keyframes` and can run automatically on page load, loop, and have multiple steps. Use transitions for simple hover effects, animations for complex sequences."
    },
    {
      question: "What does the `gap` property do in CSS Grid?",
      options: [
        "Sets the spacing between grid items",
        "Creates empty columns in the grid",
        "Adds margin around the grid container",
        "Defines the gap between the grid and its parent"
      ],
      correct: 0,
      explanation: "`gap` (formerly `grid-gap`) sets the spacing between grid items, both horizontally (column gap) and vertically (row gap). You can set different values: `gap: 10px 20px` for row and column gaps."
    },
    {
      question: "What is a CSS Custom Property (CSS Variable)?",
      options: [
        "A variable declared with -- prefix that can be reused throughout a stylesheet",
        "A JavaScript variable that can be used in CSS",
        "A property that only works in modern browsers",
        "A variable that stores only colors"
      ],
      correct: 0,
      explanation: "CSS Custom Properties (variables) are declared with `--` prefix (e.g., `--primary-color: blue`) and accessed with `var()`. They cascade, can be scoped to selectors, and can be changed with JavaScript. They're the modern replacement for preprocessors' variables."
    },
    {
      question: "What does `position: sticky` do?",
      options: [
        "An element that toggles between relative and fixed based on scroll position",
        "An element that stays fixed at the top of the viewport",
        "An element that is always fixed to its parent",
        "An element that sticks to the bottom of the page"
      ],
      correct: 0,
      explanation: "`position: sticky` is a hybrid of `relative` and `fixed`. The element stays in normal flow until it reaches a specified scroll threshold (e.g., `top: 0`), then it sticks in place like `position: fixed` until its container scrolls out of view."
    }
  ]
};
