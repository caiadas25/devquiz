export const htmlQuiz1 = {
  id: "html-quiz-1",
  date: "2026-07-01",
  category: "HTML",
  title: "HTML Quiz #1",
  description: "Semantic HTML, forms, accessibility, and HTML5 features.",
  difficulty: "medium" as const,
  questions: [
    {
      question: "What is the difference between `<div>` and `<section>`?",
      options: [
        "They are identical, just different names",
        "section is semantic (represents a thematic group of content), div is generic",
        "section is only used for navigation",
        "div is deprecated in HTML5"
      ],
      correct: 1,
      explanation: "Semantic elements like <section>, <article>, <nav>, and <header> convey meaning to browsers and screen readers. <div> is a generic container with no semantic meaning. Use semantic elements when the content has a clear theme."
    },
    {
      question: "What does the `alt` attribute on an `<img>` tag do?",
      options: [
        "Sets the image title on hover",
        "Provides alternative text for screen readers and when the image fails to load",
        "Defines the image alignment",
        "Sets a CSS class for the image"
      ],
      correct: 1,
      explanation: "The alt attribute is required for accessibility. Screen readers announce the alt text to visually impaired users. If the image fails to load, the browser displays the alt text. Always write descriptive alt text for meaningful images."
    },
    {
      question: "What is the correct way to link an external CSS file?",
      options: [
        "<style src=\"styles.css\">",
        "<link rel=\"stylesheet\" href=\"styles.css\">",
        "<css href=\"styles.css\">",
        "<script type=\"text/css\" src=\"styles.css\">"
      ],
      correct: 1,
      explanation: "The <link> element with rel=\"stylesheet\" and href pointing to the CSS file is the standard way to include external stylesheets. It should go in the <head> of your HTML document."
    },
    {
      question: "What is the purpose of the `<meta name=\"viewport\">` tag?",
      options: [
        "Sets the page title",
        "Controls layout on mobile devices (width, scale, zoom)",
        "Defines the character encoding",
        "Adds meta description for SEO"
      ],
      correct: 1,
      explanation: "The viewport meta tag is essential for responsive design. It tells the browser how to control the page's dimensions and scaling. The standard responsive viewport tag is: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
    },
    {
      question: "What does `defer` do on a `<script>` tag?",
      options: [
        "Loads the script asynchronously in parallel",
        "Downloads the script in parallel but executes it after the HTML is fully parsed",
        "Defers the script to the next page load",
        "Makes the script run only on slow connections"
      ],
      correct: 1,
      explanation: "defer downloads the script in parallel with HTML parsing but delays execution until parsing is complete. Unlike async, which runs as soon as downloaded (potentially interrupting parsing), defer guarantees scripts run in order after the DOM is ready."
    }
  ]
};
