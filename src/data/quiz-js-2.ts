import type { Quiz } from "@/types/quiz";

export const jsQuiz2: Quiz = {
  id: "js-quiz-2",
  date: "2026-07-02",
  category: "JavaScript",
  title: "JavaScript Quiz #2",
  description: "Async/await, Promises, event loop, and modern JS patterns.",
  difficulty: "medium",
  questions: [
    {
      question: "What is the output of: `Promise.resolve(1).then(console.log).then(console.log)`?",
      options: ["1 then undefined", "1 then 1", "undefined then 1", "1 then null"],
      correct: 0,
      explanation: "The first `.then(console.log)` logs 1 and returns undefined. The second `.then(console.log)` logs that return value (undefined)."
    },
    {
      question: "What does `async function` always return?",
      options: ["The function's return value directly", "A Promise", "undefined", "A generator object"],
      correct: 1,
      explanation: "An `async` function always wraps its return value in a Promise. If you return 5, it becomes Promise.resolve(5). If you return a Promise, it's returned as-is."
    },
    {
      question: "What is the correct order of execution in the event loop?",
      options: [
        "Microtasks → Macrotasks → Rendering",
        "Macrotasks → Microtasks → Rendering",
        "Rendering → Macrotasks → Microtasks",
        "Microtasks → Rendering → Macrotasks"
      ],
      correct: 0,
      explanation: "After each macrotask completes, all microtasks (Promises, queueMicrotask) are processed before the next macrotask. Rendering happens between macrotasks if needed."
    },
    {
      question: "What does `Promise.all` do when one promise rejects?",
      options: [
        "Ignores the rejection and resolves with the other values",
        "Returns an array with null for the rejected promise",
        "Immediately rejects with that rejection reason",
        "Retries the failed promise once"
      ],
      correct: 2,
      explanation: "`Promise.all` rejects immediately with the first rejection. Use `Promise.allSettled` to wait for all promises regardless of success or failure."
    },
    {
      question: "What is the output of: `console.log(typeof null)`?",
      options: ['"null"', '"undefined"', '"object"', '"boolean"'],
      correct: 2,
      explanation: "This is a famous JavaScript bug from the language's first implementation. `typeof null` incorrectly returns \"object\" instead of \"null\" due to how types were represented internally."
    }
  ]
};
