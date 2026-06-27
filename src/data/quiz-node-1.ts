import { Quiz } from "@/types/quiz";

export const nodeQuiz: Quiz = {
  id: "node-quiz-1",
  date: "2026-06-28",
  category: "Node.js",
  title: "Node.js Quiz #1",
  description: "Event loop, streams, modules, and async patterns in Node.js.",
  difficulty: "medium",
  questions: [
    {
      question: "What is the correct order of phases in the Node.js event loop?",
      options: [
        "Timers → Poll → Check → Close → I/O callbacks",
        "Timers → I/O callbacks → Poll → Check → Close",
        "Poll → Timers → Check → Close → I/O callbacks",
        "I/O callbacks → Timers → Poll → Close → Check"
      ],
      correct: 1,
      explanation: "The event loop phases in order: 1) Timers (setTimeout/setInterval), 2) I/O callbacks, 3) Poll (incoming connections/data), 4) Check (setImmediate), 5) Close callbacks."
    },
    {
      question: "What does `process.nextTick()` do?",
      options: [
        "Runs a function on the next available tick of the event loop",
        "Runs a function immediately after the current operation completes",
        "Schedules a function to run before any I/O callbacks",
        "Both B and C are correct"
      ],
      correct: 3,
      explanation: "process.nextTick() queues a callback that runs after the current operation but before I/O callbacks. It has higher priority than setImmediate and microtasks."
    },
    {
      question: "What is the purpose of `stream.pipeline()` in Node.js?",
      options: [
        "To combine multiple streams into one",
        "To pipe a readable stream to a writable stream with proper error handling and cleanup",
        "To compress streams using gzip",
        "To encrypt stream data"
      ],
      correct: 1,
      explanation: "stream.pipeline() pipes data between streams and automatically handles errors and cleanup (destroying streams when done), preventing memory leaks."
    },
    {
      question: "What is the difference between `require()` and `import`?",
      options: [
        "There is no difference",
        "require() is CommonJS (synchronous), import is ES Module (can be static/async)",
        "require() is faster than import",
        "import only works in the browser"
      ],
      correct: 1,
      explanation: "require() is CommonJS — synchronous, dynamic, runs at runtime. import is ES Modules — can be statically analyzed (tree-shakeable), loaded asynchronously, and is the modern standard."
    },
    {
      question: "What happens when you call `JSON.parse()` with invalid JSON?",
      options: [
        "Returns undefined",
        "Returns null",
        "Throws a SyntaxError",
        "Returns an empty object"
      ],
      correct: 2,
      explanation: "JSON.parse() throws a SyntaxError if the input is not valid JSON. Always wrap it in a try-catch block when parsing untrusted data."
    }
  ]
};
