import { Quiz } from "@/types/quiz";

export const rustQuiz3: Quiz = {
  id: "rust-quiz-3",
  date: "2026-07-01",
  category: "Rust",
  title: "Rust Quiz #3",
  description: "Async Rust, unsafe, macros, and advanced ownership patterns.",
  difficulty: "hard",
  questions: [
    {
      question: "What does `unsafe` allow you to do in Rust?",
      options: [
        "Disable all compiler checks permanently",
        "Dereference raw pointers, call unsafe functions, and access mutable statics",
        "Skip borrow checking for the entire crate",
        "Use C++ syntax in Rust files"
      ],
      correct: 1,
      explanation: "Unsafe Rust lets you opt into five specific capabilities: dereferencing raw pointers, calling unsafe functions or methods, accessing or modifying mutable static variables, implementing unsafe traits, and accessing union fields. All other safety guarantees still apply."
    },
    {
      question: "What is a raw pointer in Rust?",
      options: [
        "A smart pointer that auto-frees memory",
        "A pointer like *const T or *mut T that bypasses the borrow checker",
        "A reference that can be null",
        "An exclusive reference to heap data"
      ],
      correct: 1,
      explanation: "Raw pointers (*const T and *mut T) are like C pointers. They can be null, don't automatically clean up, and aren't guaranteed to point to valid memory. Creating raw pointers is safe, but dereferencing them requires unsafe. They're useful for FFI and building custom data structures."
    },
    {
      question: "What does `tokio::spawn` do?",
      options: [
        "Creates a new OS thread",
        "Spawns an async task on the Tokio runtime",
        "Forks the current process",
        "Creates a synchronous blocking task"
      ],
      correct: 1,
      explanation: "tokio::spawn takes an async block and schedules it as a task on the Tokio runtime. The task runs concurrently with other tasks on the same thread (cooperative multitasking). It returns a JoinHandle that can be awaited to get the task's result."
    },
    {
      question: "What is the difference between `&str` and `String`?",
      options: [
        "They are identical and interchangeable",
        "&str is a borrowed string slice, String is an owned, heap-allocated string",
        "String is always faster than &str",
        "&str can be modified, String cannot"
      ],
      correct: 1,
      explanation: "&str is a string slice — a reference to a sequence of UTF-8 bytes stored somewhere else (on the stack, in static memory, or within a String). String is an owned, heap-allocated, growable string. Use &str for read-only references and String when you need ownership or mutation."
    },
    {
      question: "What does the `?` operator do in Rust?",
      options: [
        "Throws an exception like in Java",
        "Propagates errors by returning early from the function on Err",
        "Pauses execution until input is available",
        "Converts between error types automatically"
      ],
      correct: 1,
      explanation: "The ? operator is syntactic sugar for error propagation. If the Result is Ok, it unwraps the value. If it's Err, it returns early from the current function, converting the error type if Into is implemented. This eliminates repetitive match/unwrap patterns."
    }
  ]
};
