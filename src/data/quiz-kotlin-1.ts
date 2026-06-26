import { Quiz } from "@/types/quiz";

export const kotlinQuiz: Quiz = {
  id: "kotlin-quiz-1",
  date: "2026-07-04",
  category: "Kotlin",
  title: "Kotlin Quiz #1",
  description: "Null safety, coroutines, data classes, and Kotlin-specific features.",
  difficulty: "medium",
  questions: [
    {
      question: "What does the `?.` operator do in Kotlin?",
      options: [
        "Performs integer division",
        "Safe call — returns null if the left side is null",
        "Creates a nullable reference",
        "Asserts that a value is not null"
      ],
      correct: 1,
      explanation: "The `?.` (safe call) operator chains property access. If the receiver is null, it short-circuits and returns null instead of throwing a NullPointerException."
    },
    {
      question: "What is a `data class` in Kotlin?",
      options: [
        "A class that only holds database connections",
        "A class with auto-generated equals(), hashCode(), toString(), and copy() methods",
        "An abstract class that can't be instantiated",
        "A class with only private properties"
      ],
      correct: 1,
      explanation: "Data classes automatically generate equals(), hashCode(), toString(), copy(), and componentN() methods based on the primary constructor parameters. They're ideal for holding data."
    },
    {
      question: "What does `suspend` mean in a Kotlin function?",
      options: [
        "The function runs on a background thread permanently",
        "The function can be paused and resumed without blocking threads",
        "The function is deprecated and will be removed",
        "The function throws an exception if it takes too long"
      ],
      correct: 1,
      explanation: "The `suspend` modifier marks a function as coroutines-capable. It can be paused (suspended) and resumed without blocking the thread, enabling non-blocking async code."
    },
    {
      question: "What is the Elvis operator `?:` used for?",
      options: [
        "Pattern matching on types",
        "Providing a default value when the left side is null",
        "Checking equality between two values",
        "Catching exceptions in a try-catch"
      ],
      correct: 1,
      explanation: "The Elvis operator returns the left side if non-null, otherwise the right side. It's the Kotlin way to provide defaults for nullable types: `val name = input?.name ?: \"Guest\"`"
    },
    {
      question: "What is the difference between `val` and `var` in Kotlin?",
      options: [
        "val is for volatile variables, var is for immutable",
        "val is immutable (read-only), var is mutable",
        "val is a global variable, var is local",
        "There is no difference"
      ],
      correct: 1,
      explanation: "`val` declares a read-only (immutable) variable — you can only assign it once. `var` declares a mutable variable that can be reassigned. Use `val` by default."
    }
  ]
};
