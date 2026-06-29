import { Quiz } from "@/types/quiz";

export const rustQuiz2: Quiz = {
  id: "rust-quiz-2",
  date: "2026-07-05",
  category: "Rust",
  title: "Rust Quiz #2",
  description: "Error handling, traits, pattern matching, and Rust's type system.",
  difficulty: "hard",
  questions: [
    {
      question: "What does the `?` operator do when used with `Result<T, E>`?",
      options: [
        "Converts the error to a string",
        "Returns the Ok value or early-returns the Err from the function",
        "Panics if the result is Err",
        "Logs the error and continues"
      ],
      correct: 1,
      explanation: "The ? operator unwraps Ok values or propagates Err values back to the caller. It's the idiomatic way to handle errors in Rust without match statements everywhere."
    },
    {
      question: "What is the difference between `impl Trait` and `dyn Trait`?",
      options: [
        "They are the same thing",
        "impl Trait is static dispatch (monomorphized), dyn Trait is dynamic dispatch (via vtable)",
        "impl Trait is for functions, dyn Trait is for structs",
        "dyn Trait is faster than impl Trait"
      ],
      correct: 1,
      explanation: "impl Trait uses static dispatch — the compiler generates a specialized function for each concrete type at compile time. dyn Trait uses dynamic dispatch through a vtable at runtime, adding a small performance cost but allowing trait objects."
    },
    {
      question: "What does `match` in Rust enforce that `switch` in other languages does not?",
      options: [
        "Case sensitivity",
        "Exhaustiveness — all possible values must be handled",
        "Performance optimization",
        "Type safety only"
      ],
      correct: 1,
      explanation: "Rust's match is exhaustive — you must handle every possible value of the matched type. If you miss a case, the compiler gives an error. This prevents entire classes of bugs at compile time."
    },
    {
      question: "What is the purpose of the `From` trait in Rust?",
      options: [
        "To convert a type into a string",
        "To define a conversion between types that can fail",
        "To define infallible type conversions that enable the `Into` trait automatically",
        "To import external modules"
      ],
      correct: 2,
      explanation: "Implementing From<T> for your type automatically gives you Into<YourType> for T. It's the idiomatic way to define type conversions: `impl From<&str> for MyError` lets you use .into() to create your error type."
    },
    {
      question: "What is the difference between `&str` and `String` in Rust?",
      options: [
        "&str is for files, String is for memory",
        "&str is a borrowed string slice (reference), String is an owned, heap-allocated string",
        "String is immutable, &str is mutable",
        "There is no meaningful difference"
      ],
      correct: 1,
      explanation: "&str is a reference to string data (borrowed), while String is an owned, growable string allocated on the heap. Use &str for read-only access and String when you need to own or modify the string."
    }
  ]
};
