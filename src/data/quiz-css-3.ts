import { Quiz } from "@/types/quiz";

export const cssQuiz3: Quiz = {
  id: "css-quiz-3",
  date: "2026-07-01",
  category: "CSS",
  title: "CSS Quiz #3 — Advanced Layout & Animations",
  description: "Test your knowledge of CSS Grid subgrid, container queries, has() selector, and animation performance.",
  difficulty: "hard",
  questions: [
    {
      question: "What does the CSS `has()` selector do?",
      options: [
        "Selects elements that have a specific child element",
        "Checks if a CSS property is supported",
        "Selects elements based on their computed style",
        "Creates a conditional media query"
      ],
      correct: 0,
      explanation: "The `:has()` selector (often called the 'parent selector') selects elements that contain a specific descendant. Example: `div:has(> img)` selects divs that have a direct img child."
    },
    {
      question: "What is CSS `subgrid` used for?",
      options: [
        "Creating nested grid layouts with shared tracks",
        "Aligning items within a single grid cell",
        "Splitting a grid into sub-sections",
        "Creating responsive grid breakpoints"
      ],
      correct: 0,
      explanation: "Subgrid lets a child grid inherit the track definitions from its parent grid, so nested items align with the parent grid's columns or rows. Set `grid-template-columns: subgrid` on the child."
    },
    {
      question: "What is a CSS Container Query?",
      options: [
        "A query that responds to the size of a parent container instead of the viewport",
        "A way to query CSS custom property values",
        "A media query that targets specific elements",
        "A method to detect browser support for CSS features"
      ],
      correct: 0,
      explanation: "Container queries (`@container`) let you style elements based on the size of their nearest containment context, not the viewport. This enables truly reusable, context-aware components."
    },
    {
      question: "Which CSS property is most critical for animation performance?",
      options: [
        "transform",
        "top",
        "width",
        "margin"
      ],
      correct: 0,
      explanation: "`transform` (along with `opacity`) can be animated on the GPU without triggering layout or paint. Properties like `top`, `width`, and `margin` force layout recalculation, making animations janky."
    },
    {
      question: "What does `aspect-ratio: 16 / 9` do in CSS?",
      options: [
        "Sets the element's width-to-height ratio to 16:9",
        "Crops the element to a 16:9 viewport",
        "Creates a 16:9 image placeholder",
        "Applies a 16:9 aspect ratio to video elements only"
      ],
      correct: 0,
      explanation: "The `aspect-ratio` property sets a preferred aspect ratio for the box, which will be used for calculating auto sizes. If you set width, height adjusts automatically to maintain the ratio."
    },
  ],
};
