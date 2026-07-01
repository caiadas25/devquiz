export const htmlQuiz2 = {
  id: "html-quiz-2",
  date: "2026-07-01",
  category: "HTML",
  title: "HTML Quiz #2",
  description: "Forms, validation, accessibility, and semantic elements.",
  difficulty: "medium" as const,
  questions: [
    {
      question: "What is the purpose of the `label` element's `for` attribute?",
      options: [
        "Sets the visual label text for the element",
        "Links the label to a form control by matching its `id` attribute",
        "Defines the CSS class for styling",
        "Sets the data type for form validation"
      ],
      correct: 1,
      explanation: "The `for` attribute links a label to a form control. When the label's `for` matches an input's `id`, clicking the label focuses or activates the input. This is crucial for accessibility — screen readers announce the label when the input is focused."
    },
    {
      question: "Which HTML element is the correct semantic choice for a page's main navigation?",
      options: [
        "<div class=\"nav\">",
        "<navigation>",
        "<nav>",
        "<menu>"
      ],
      correct: 2,
      explanation: "The <nav> element represents a section of navigation links. Screen readers and search engines use it to identify navigation areas. It should contain the main navigation links, not every link on the page."
    },
    {
      question: "What does the `required` attribute do on a form input?",
      options: [
        "Disables the input until JavaScript enables it",
        "Makes the input's label bold",
        "Prevents form submission if the input is empty",
        "Adds a red border to empty inputs"
      ],
      correct: 2,
      explanation: "The `required` attribute enforces client-side validation. The browser won't submit the form if the input is empty. It works with most input types and provides built-in error messages without JavaScript."
    },
    {
      question: "What is the correct way to make an image accessible to screen readers?",
      options: [
        "Use the `title` attribute",
        "Add an `alt` attribute with a text description",
        "Wrap the image in a <figure> element",
        "Use CSS to hide it from visual users"
      ],
      correct: 1,
      explanation: "The `alt` attribute provides a text description of the image for screen readers and when the image fails to load. Every meaningful image needs alt text. Decorative images should have alt=\"\" (empty) to be skipped by screen readers."
    },
    {
      question: "Which input type provides a built-in date picker in modern browsers?",
      options: [
        "<input type=\"text\">",
        "<input type=\"calendar\">",
        "<input type=\"date\">",
        "<input type=\"datetime\">"
      ],
      correct: 2,
      explanation: "<input type=\"date\"> renders a native date picker in modern browsers. It also provides built-in validation (ensures a valid date is selected). Other types include time, datetime-local, month, and week for different date/time variants."
    }
  ]
};
