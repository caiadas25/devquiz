import { Quiz } from "@/types/quiz";

export const nodeQuiz2: Quiz = {
  id: "node-quiz-2",
  date: "2026-07-01",
  category: "Node.js",
  title: "Node.js Quiz #2",
  description: "Async patterns, streams, worker threads, and Node.js internals.",
  difficulty: "hard",
  questions: [
    {
      question: "What is the difference between `process.nextTick()` and `setImmediate()`?",
      options: [
        "They are identical",
        "nextTick runs before I/O callbacks, setImmediate runs after",
        "setImmediate runs before nextTick",
        "nextTick is deprecated"
      ],
      correct: 1,
      explanation: "`process.nextTick()` runs before the event loop continues (before I/O callbacks), while `setImmediate()` runs at the end of the current event loop iteration. nextTick has higher priority."
    },
    {
      question: "What happens when you read a Readable stream in flowing mode with no consumer?",
      options: [
        "Data is buffered indefinitely",
        "The stream pauses automatically",
        "An error is thrown",
        "Data is silently discarded"
      ],
      correct: 0,
      explanation: "In flowing mode, if there's no consumer, data accumulates in the internal buffer. If the buffer exceeds `highWaterMark`, the stream's `read()` method will stop reading from the source until the buffer drains."
    },
    {
      question: "What is the purpose of `worker_threads` module in Node.js?",
      options: [
        "To manage database connections",
        "To run JavaScript in parallel threads with shared memory",
        "To handle HTTP requests concurrently",
        "To manage file system operations"
      ],
      correct: 1,
      explanation: "`worker_threads` allows running JavaScript in parallel OS threads. Unlike child_process, workers share memory via `SharedArrayBuffer` and have lower overhead. Ideal for CPU-intensive tasks."
    },
    {
      question: "What is the event loop phase where `setTimeout` callbacks execute?",
      options: [
        "Timers phase",
        "Poll phase",
        "Check phase",
        "Close callbacks phase"
      ],
      correct: 0,
      explanation: "The Timers phase executes callbacks from `setTimeout()` and `setInterval()`. This is the first phase of each event loop iteration after I/O events are processed."
    },
    {
      question: "What does `stream.pipeline()` do that `stream.pipe()` doesn't?",
      options: [
        "It's faster than pipe",
        "It properly handles errors and cleans up all streams when one errors or finishes",
        "It supports backpressure automatically",
        "It converts streams to promises"
      ],
      correct: 1,
      explanation: "`stream.pipeline()` properly destroys all streams in the chain on error or completion. With `.pipe()`, if the destination errors, the source isn't automatically cleaned up, leading to memory leaks."
    }
  ]
};
