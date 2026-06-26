import { Quiz } from "@/types/quiz";

export const cssQuiz: Quiz = {
  id: "css-quiz-1",
  date: "2026-06-26",
  category: "CSS",
  title: "CSS Quiz #1",
  description: "Test your CSS knowledge — specificity, box model, flexbox, grid, and selectors.",
  difficulty: "medium",
  questions: [
    {
      question: "What is the specificity order from lowest to highest?",
      options: [
        "Universal (*) < Element < Class < ID < Inline style",
        "Element < Universal (*) < Class < ID < Inline style",
        "Class < Element < ID < Inline style < Universal (*)",
        "ID < Class < Element < Universal (*) < Inline style"
      ],
      correct: 0,
      explanation: "CSS specificity follows: universal selector (0,0,0,0) < element/pseudo-element (0,0,0,1) < class/pseudo-class/attribute (0,0,1,0) < ID (0,1,0,0) < inline style (1,0,0,0) < !important."
    },
    {
      question: "What does `box-sizing: border-box` do?",
      options: [
        "Includes padding and border in the element's total width and height",
        "Excludes padding and border from the element's total width and height",
        "Removes all borders from the element",
        "Makes the box responsive to viewport changes"
      ],
      correct: 0,
      explanation: "`border-box` makes the `width` and `height` properties include padding and border. Without it (the default `content-box`), padding and border are added on top of the specified width/height, making layout calculations harder."
    },
    {
      question: "What is the difference between `grid` and `flexbox`?",
      options: [
        "Grid is 2D (rows and columns), Flexbox is 1D (row or column)",
        "Flexbox is 2D, Grid is 1D",
        "They are identical in capability",
        "Grid only works for pages, Flexbox only works for components"
      ],
      correct: 0,
      explanation: "CSS Grid layouts items in two dimensions (rows AND columns simultaneously), while Flexbox layouts items in one dimension (either a row or a column). Use Grid for page layouts and Flexbox for component-level layouts."
    },
    {
      question: "What does the `z-index` property control?",
      options: [
        "The stacking order of positioned elements along the z-axis",
        "The zoom level of an element",
        "The horizontal position of an element",
        "The order of element appearance in the DOM"
      ],
      correct: 0,
      explanation: "`z-index` controls the vertical stacking order of elements that have `position` set to something other than `static`. Higher z-index values are stacked on top of lower ones."
    },
    {
      question: "What is CSS `:nth-child(2n)` used for?",
      options: [
        "Selecting every even-numbered child element",
        "Selecting every second element with the same class",
        "Selecting the second child of every parent",
        "Selecting elements that have exactly 2 children"
      ],
      correct: 0,
      explanation: "`:nth-child(2n)` or equivalently `:nth-child(even)` selects every even-numbered child (2nd, 4th, 6th, etc.) within its parent. Commonly used for zebra-striping table rows."
    }
  ]
};
