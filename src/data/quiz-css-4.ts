import { Quiz } from "@/types/quiz";

export const cssQuiz4: Quiz = {
  id: "css-quiz-4",
  date: "2026-07-01",
  category: "CSS",
  title: "CSS Quiz #4 — Modern CSS & Layout",
  description: "Container queries, :has(), subgrid, cascade layers, and modern CSS features that shipped in 2024-2026.",
  difficulty: "medium",
  questions: [
    {
      question: "What does the CSS :has() selector do?",
      options: [
        "Selects elements that have a specific attribute",
        "Selects a parent element based on its children",
        "Selects elements that have a specific class",
        "Selects the first child of an element"
      ],
      correct: 1,
      explanation: "The :has() selector is often called the 'parent selector' — it selects an element based on what it contains. Example: `div:has(img)` selects all divs that contain an img element. It can also check for siblings, attributes, and pseudo-classes of descendants."
    },
    {
      question: "What are CSS Container Queries?",
      options: [
        "Media queries that respond to the viewport size",
        "Queries that let elements style themselves based on their container's size",
        "Queries that check if the browser supports a CSS feature",
        "Queries that select elements by their DOM position"
      ],
      correct: 1,
      explanation: "Container Queries (`@container`) let elements respond to their parent container's size instead of the viewport. This is transformative for component-based design — a card component can now adapt its layout based on whether it's in a sidebar (narrow) or main content (wide), without viewport breakpoints."
    },
    {
      question: "What is CSS Subgrid?",
      options: [
        "A grid layout that creates sub-grids automatically",
        "A way for nested grid items to participate in the parent grid's track definitions",
        "A performance optimization for CSS Grid",
        "A media query for grid layouts"
      ],
      correct: 1,
      explanation: "Subgrid allows a nested grid item to inherit the parent grid's row or column track definitions. Instead of defining separate tracks for the child, it uses the parent's tracks. This is essential for aligning nested content (like card headers/footers) across a grid of cards."
    },
    {
      question: "What does `@layer` do in CSS?",
      options: [
        "Creates a new stacking context for z-index",
        "Defines the order of CSS specificity by grouping rules into named layers",
        "Creates a new document layer for animations",
        "Applies styles only to a specific viewport layer"
      ],
      correct: 1,
      explanation: "CSS Cascade Layers (`@layer`) give you explicit control over the cascade. You can define named layers (e.g., `@layer base, components, utilities`) and control which layer's styles take precedence. This solves the specificity wars problem — a utility class in a later layer always wins over a base style, regardless of specificity."
    },
    {
      question: "What is the `color-mix()` CSS function?",
      options: [
        "Mixes two colors by blending them in a specific color space",
        "Converts a color from one format to another",
        "Creates a gradient between two colors",
        "Adjusts the brightness of a color"
      ],
      correct: 0,
      explanation: "`color-mix()` takes two colors and a percentage, then returns the mixed result. Example: `color-mix(in srgb, red 50%, blue 50%)` produces purple. You can specify different color spaces (oklch, oklab, srgb, etc.) which affects how the mixing happens. It's great for creating color variations from a base palette."
    },
    {
      question: "What is the CSS `text-wrap: balance` property?",
      options: [
        "Balances text color between light and dark modes",
        "Distributes text more evenly across lines for better readability",
        "Wraps text around floating elements",
        "Balances the weight of text in different font sizes"
      ],
      correct: 1,
      explanation: "`text-wrap: balance` makes text distribute more evenly across lines, avoiding orphans and widows. Instead of leaving a single word on the last line, it rebalances the line breaks so each line has roughly the same length. It's especially effective for headings and short paragraphs."
    },
    {
      question: "What does the `accent-color` CSS property do?",
      options: [
        "Changes the accent color of text elements",
        "Sets the color of browser-default form controls (checkboxes, radio buttons, range sliders)",
        "Adds an accent color to the page background",
        "Defines the color used for text selection"
      ],
      correct: 1,
      explanation: "`accent-color` lets you customize the color of native form elements like checkboxes, radio buttons, and range inputs without JavaScript. Example: `accent-color: #3b82f6;` makes your checkboxes blue. It also inherits to child elements, making it easy to theme all form controls at once."
    },
    {
      question: "What is `@starting-style` in CSS?",
      options: [
        "A rule that applies styles when the page first loads",
        "Defines initial styles for elements entering the DOM or display tree, enabling CSS-only entry animations",
        "A media query for the first paint of a page",
        "A selector that targets the first element of its type"
      ],
      correct: 1,
      explanation: "`@starting-style` defines the initial state of an element before it's rendered. Combined with the `transition` property, it enables pure CSS entry animations — no JavaScript needed. When an element appears (like via popover or dialog), it transitions from the `@starting-style` state to its normal styles."
    },
    {
      question: "What is the `view-transition-name` CSS property used for?",
      options: [
        "Names a CSS view for debugging purposes",
        "Assigns a name to enable smooth animated transitions between different page states or views",
        "Creates a navigation transition between pages",
        "Names a CSS Grid view for layout purposes"
      ],
      correct: 1,
      explanation: "`view-transition-name` gives an element a unique name so the View Transitions API can track it across DOM changes. When a page transition happens, elements with matching view-transition-names animate smoothly between their old and new positions/sizes. This powers the 'morph' animations you see in modern web apps."
    },
    {
      question: "What does `content-visibility: auto` do?",
      options: [
        "Hides the element's content from screen readers",
        "Skips layout and rendering of off-screen content until it's needed, improving page load performance",
        "Makes the content invisible but keeps it in the DOM",
        "Delays the loading of images and media within the element"
      ],
      correct: 1,
      explanation: "`content-visibility: auto` tells the browser to skip rendering an element's contents if it's not on-screen. The browser doesn't compute layout, paint, or rasterize off-screen content. When the user scrolls near it, the content renders. This can dramatically improve Initial Contentful Paint and Largest Contentful Paint for long pages with lots of content."
    }
  ]
};
