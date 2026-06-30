import { Quiz } from "@/types/quiz";

export const goQuiz2: Quiz = {
  id: "go-quiz-2",
  date: "2026-06-30",
  category: "Go",
  title: "Go Quiz #2",
  description: "Test your Go knowledge — interfaces, error handling, and concurrency.",
  difficulty: "hard",
  questions: [
    {
      question: "What is the zero value of an interface in Go?",
      options: ["nil", "0", "false", "undefined"],
      correct: 0,
      explanation: "In Go, the zero value of an interface is nil. Both the type and the value are nil, so any method call on it will panic.",
    },
    {
      question: "What does `defer` do in Go?",
      options: [
        "Schedules a function to run after the surrounding function returns",
        "Schedules a function to run after the goroutine completes",
        "Blocks the goroutine until a condition is met",
        "Cancels the current execution context",
      ],
      correct: 0,
      explanation: "The `defer` statement schedules a function to be executed after the surrounding function returns. Defers are LIFO (last-in, first-out).",
    },
    {
      question: "Which of these is NOT a valid way to create a slice in Go?",
      options: [
        "s := []int{1, 2, 3}",
        "s := make([]int, 3)",
        "s := new([]int)",
        "s := make([]int, 0, 5)",
      ],
      correct: 2,
      explanation: "`new([]int)` returns a pointer to a nil slice, not a usable slice. Use `make` or a slice literal instead.",
    },
    {
      question: "What is the result of `len(make([]int, 5))`?",
      options: ["0", "5", "10", "undefined"],
      correct: 1,
      explanation: "`make([]int, 5)` creates a slice of length 5 with all elements initialized to zero. So `len` returns 5.",
    },
    {
      question: "How do you handle errors in Go?",
      options: [
        "Use try/catch blocks",
        "Use a special `error` type returned from functions",
        "Use panic/recover exclusively",
        "Errors are handled by the compiler automatically",
      ],
      correct: 1,
      explanation: "Go uses a simple error handling pattern where functions return an `error` value as the last return value. Check `err != nil` after each call.",
    },
    {
      question: "What is the purpose of the `go` keyword?",
      options: [
        "To start a new goroutine (concurrent function)",
        "To import a Go module",
        "To define a global variable",
        "To create a new struct",
      ],
      correct: 0,
      explanation: "The `go` keyword starts a new goroutine — a lightweight thread managed by the Go runtime. Use it for concurrent execution.",
    },
    {
      question: "What does `chan<-` mean in Go?",
      options: [
        "A send-only channel",
        "A receive-only channel",
        "A bidirectional channel",
        "A closed channel",
      ],
      correct: 0,
      explanation: "`chan<-` is a send-only channel type. `<-chan` is receive-only. These are used in function signatures to restrict channel direction.",
    },
    {
      question: "Which interface is automatically implemented by any type that has a `String()` method?",
      options: [
        "fmt.Stringer",
        "io.Reader",
        "error",
        "reflect.Type",
      ],
      correct: 0,
      explanation: "The `fmt.Stringer` interface requires a `String()` method. Any type that implements it will be automatically formatted by `fmt.String()`.",
    },
  ],
};
