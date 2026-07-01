export const goQuiz2 = {
  id: "go-quiz-2",
  date: "2026-07-01",
  category: "Go",
  title: "Go Quiz #2",
  description: "Goroutines, channels, interfaces, and Go concurrency patterns.",
  difficulty: "hard" as const,
  questions: [
    {
      question: "What is the difference between a buffered and unbuffered channel in Go?",
      options: [
        "Buffered channels block until a receiver is ready, unbuffered do not",
        "Unbuffered channels block until a receiver is ready, buffered channels only block when full",
        "They are functionally identical",
        "Buffered channels cannot be closed"
      ],
      correct: 1,
      explanation: "Unbuffered channels (make(chan int)) require both sender and receiver to be ready simultaneously. Buffered channels (make(chan int, 5)) can hold values without a receiver until the buffer is full."
    },
    {
      question: "What does `select` do in Go?",
      options: [
        "Chooses a random goroutine to execute",
        "Waits for multiple channel operations and proceeds with whichever is ready first",
        "Implements a switch statement for channels",
        "All of the above"
      ],
      correct: 1,
      explanation: "Select blocks until one of its cases can proceed, then it executes that case. If multiple cases are ready, it chooses one randomly. It's the Go equivalent of listening on multiple channels simultaneously."
    },
    {
      question: "What is the purpose of the blank identifier `_` in Go?",
      options: [
        "It creates a new anonymous variable",
        "It discards values you don't need (e.g., error returns, imports)",
        "It defines a constant",
        "It starts a new goroutine"
      ],
      correct: 1,
      explanation: "Go requires all variables to be used. The blank identifier lets you intentionally ignore values: `value, _ := someFunc()` or import side effects with `import _ \"pkg\"`."
    },
    {
      question: "What is a method receiver in Go?",
      options: [
        "A pointer to the function being called",
        "A value (or pointer) that is passed to a method, similar to `self` in Python or `this` in Java",
        "The return type of a function",
        "A type of channel"
      ],
      correct: 1,
      explanation: "A receiver is the value on which a method operates. Go has value receivers (func (s MyStruct) Method()) and pointer receivers (func (s *MyStruct) Method()), which determine if the method can modify the original value."
    },
    {
      question: "What does `defer` do in Go?",
      options: [
        "Pauses execution for a specified duration",
        "Delays a function call until the surrounding function returns",
        "Creates an asynchronous task",
        "Marks a function as deprecated"
      ],
      correct: 1,
      explanation: "Defer pushes a function call onto a stack. When the surrounding function returns, deferred calls execute in LIFO order. Commonly used for cleanup: `defer file.Close()`, `defer mutex.Unlock()`."
    }
  ]
};
