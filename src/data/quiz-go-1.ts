import { Quiz } from "@/types/quiz";

export const goQuiz: Quiz = {
  id: "go-quiz-1",
  date: "2026-06-29",
  category: "Go",
  title: "Go Quiz #1",
  description: "Goroutines, channels, interfaces, and Go-specific gotchas.",
  difficulty: "medium",
  questions: [
    {
      question: "What is the zero value of an interface in Go?",
      options: [
        "nil",
        "false",
        "\"\"",
        "An empty struct"
      ],
      correct: 0,
      explanation: "The zero value of any interface type in Go is nil. An interface is a pair of (type, value), and both are nil when the interface is zero-valued."
    },
    {
      question: "What happens if you call `close()` on an already-closed channel?",
      options: [
        "It's a no-op",
        "It panics",
        "It returns an error",
        "It reopens the channel"
      ],
      correct: 1,
      explanation: "Closing an already-closed channel causes a panic. Always ensure a channel is only closed once. Commonly done with `sync.Once` or a done channel."
    },
    {
      question: "What does `:=` do that `var` does not?",
      options: [
        "Declares a global variable",
        "Declares and initializes a variable with type inference (short variable declaration)",
        "Declares a constant",
        "Declares a function parameter"
      ],
      correct: 1,
      explanation: "`:=` is a short variable declaration that declares and initializes a variable in one step, inferring the type from the right-hand side. `var` can declare without initialization."
    },
    {
      question: "What is the difference between `defer`, `panic`, and `recover`?",
      options: [
        "They are interchangeable error handling mechanisms",
        "defer runs when the function exits, panic stops execution, recover catches panics",
        "defer catches errors, panic logs them, recover returns them",
        "They are only used in goroutines"
      ],
      correct: 1,
      explanation: "`defer` schedules a function to run when the enclosing function returns. `panic` stops normal execution and unwinds the stack. `recover` can catch a panic — but only inside a deferred function."
    },
    {
      question: "What is a goroutine?",
      options: [
        "A thread managed by the Go runtime",
        "A lightweight, concurrently executing function managed by the Go scheduler",
        "A type of mutex",
        "A package for parallel computing"
      ],
      correct: 1,
      explanation: "A goroutine is a lightweight thread managed by the Go runtime. They start with just a few KB of stack and can be created in the millions. Use `go` keyword to launch one."
    },
    {
      question: "What does `select` do in Go?",
      options: [
        "Selects a database row",
        "Waits on multiple channel operations and proceeds with the first one ready",
        "Chooses which goroutine to run",
        "Implements a switch statement for channels only"
      ],
      correct: 1,
      explanation: "`select` blocks until one of its cases can proceed, then executes that case. If multiple are ready, it picks one at random. Essential for multiplexing channel operations."
    },
    {
      question: "What is the difference between `slice` and `array` in Go?",
      options: [
        "They are the same thing",
        "Arrays have fixed size; slices are dynamically-sized views over arrays",
        "Slices are faster than arrays",
        "Arrays are only for primitives, slices for structs"
      ],
      correct: 1,
      explanation: "Arrays have a fixed size declared at compile time (`[3]int`). Slices are flexible, dynamically-sized views into an underlying array (`[]int`). Slices are far more common in Go."
    },
    {
      question: "What does `sync.WaitGroup` do?",
      options: [
        "Prevents race conditions on shared variables",
        "Waits for a collection of goroutines to finish",
        "Limits the number of concurrent goroutines",
        "Provides a mutex lock"
      ],
      correct: 1,
      explanation: "`WaitGroup` lets you wait for a group of goroutines to complete. Call `Add(n)` before launching goroutines, `Done()` when each finishes, and `Wait()` to block until all are done."
    },
  ],
};
