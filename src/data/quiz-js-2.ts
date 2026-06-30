import { Quiz } from "@/types/quiz";

export const jsQuiz2: Quiz = {
  id: "js-quiz-2",
  date: "2026-07-01",
  category: "JavaScript",
  title: "JavaScript Quiz #2",
  description: "Async/await, promises, event loop, and modern JS patterns.",
  difficulty: "medium",
  questions: [
    {
      question: "What is the output of: `console.log(typeof NaN)`?",
      options: ["\"NaN\"", "\"undefined\"", "\"number\"", "\"object\""],
      correct: 2,
      explanation: "`typeof NaN` returns \"number\" because NaN stands for \"Not a Number\" but is technically a numeric type in JavaScript's type system."
    },
    {
      question: "What does `Promise.all([p1, p2, p3])` do if p2 rejects?",
      options: [
        "Returns the result of p1 and p3 only",
        "Immediately rejects with p2's reason",
        "Returns undefined for p2",
        "Throws a synchronous error"
      ],
      correct: 1,
      explanation: "`Promise.all` rejects immediately if any promise rejects, returning that rejection reason. If you want to wait for all regardless, use `Promise.allSettled`."
    },
    {
      question: "What is the event loop in JavaScript?",
      options: [
        "A for loop that runs indefinitely",
        "A mechanism that handles async callbacks by checking the call stack and task queues",
        "A way to iterate over DOM elements",
        "A built-in iterator for arrays"
      ],
      correct: 1,
      explanation: "The event loop continuously checks if the call stack is empty, then moves callbacks from the task queue (or microtask queue) to the stack for execution."
    },
    {
      question: "What is the output of this code?\n```js\nasync function foo() {\n  return 42;\n}\nconsole.log(foo());\n```",
      options: ["42", "Promise {<fulfilled>: 42}", "undefined", "TypeError"],
      correct: 1,
      explanation: "An async function always returns a Promise. Even if you return a plain value, it gets wrapped in a resolved Promise. You need `await` to get the actual value."
    },
    {
      question: "What is the difference between `==` and `===` in JavaScript?",
      options: [
        "`==` checks value only, `===` checks value and type",
        "`==` is faster than `===`",
        "`===` allows type coercion, `==` does not",
        "They are identical"
      ],
      correct: 0,
      explanation: "`==` (loose equality) performs type coercion before comparing. `===` (strict equality) compares both value AND type without coercion. `===` is generally preferred to avoid unexpected results."
    }
  ]
};
