import { Quiz } from "@/types/quiz";

export const rustQuiz: Quiz = {
  id: "rust-quiz-1",
  date: "2026-07-04",
  category: "Rust",
  title: "Rust Quiz #1",
  description: "Ownership, borrowing, lifetimes, and the borrow checker.",
  difficulty: "medium",
  questions: [
    {
      question: "What happens when you assign a String to a new variable in Rust?",
      options: [
        "Both variables point to the same heap memory",
        "The value is copied to the new variable",
        "The original variable is moved — it can no longer be used",
        "A compile error occurs"
      ],
      correct: 2,
      explanation: "Rust uses ownership. Assigning a String moves it to the new variable. The original is invalidated. Use .clone() if you need both."
    },
    {
      question: "What is the difference between &T and &mut T?",
      options: [
        "&T is for constants, &mut T is for variables",
        "&T allows multiple simultaneous borrows; &mut T allows only one and no shared borrows",
        "&mut T is faster than &T",
        "There is no difference in Rust"
      ],
      correct: 1,
      explanation: "You can have many &T (shared/immutable references) at once, OR one &mut T (exclusive/mutable reference). Never both simultaneously."
    },
    {
      question: "What is a lifetime annotation?",
      options: [
        "A way to measure how long a program runs",
        "A hint to the compiler about how long references remain valid",
        "A type of variable that expires after N seconds",
        "A garbage collection parameter"
      ],
      correct: 1,
      explanation: "Lifetime annotations (like 'a) tell the compiler the relationship between reference lifetimes. They don't change runtime behavior — they help the borrow checker verify safety."
    },
    {
      question: "What does the ? operator do in Rust?",
      options: [
        "Checks if a value is Some or None",
        "Returns early from the function with the error if the Result is Err",
        "Marks a value as optional",
        "Creates a new Option from a value"
      ],
      correct: 1,
      explanation: "The ? operator is syntactic sugar for error propagation. If the Result is Ok, it unwraps the value. If Err, it returns the error from the enclosing function."
    },
    {
      question: "What is the output of: let x = 5; let y = x; println!(\"{} {}\", x, y);",
      options: [
        "5 5",
        "error: use of moved value `x`",
        "undefined behavior",
        "0 5"
      ],
      correct: 0,
      explanation: "i32 implements the Copy trait, so assigning y = x copies the value. Both x and y are valid. This only applies to stack-only types — String, Vec, etc. are moved, not copied."
    }
  ]
};
