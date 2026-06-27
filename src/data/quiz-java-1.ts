import { Quiz } from "@/types/quiz";

export const javaQuiz: Quiz = {
  id: "java-quiz-1",
  date: "2026-06-27",
  category: "Java",
  title: "Java Quiz #1",
  description: "Java fundamentals — exceptions, generics, streams, and modern Java features.",
  difficulty: "medium",
  questions: [
    {
      question: "What happens when you try to access an array index that doesn't exist in Java?",
      options: [
        "ArrayIndexOutOfBoundsException",
        "NullPointerException",
        "IndexOutOfBoundsException",
        "ArrayIndexOutOfBounds"
      ],
      correct: 0,
      explanation: "When you access an array with an invalid index (negative or beyond the array length), Java throws `ArrayIndexOutOfBoundsException`. This is a subclass of `IndexOutOfBoundsException`."
    },
    {
      question: "What does `Optional.ofNullable(null)` return in Java?",
      options: [
        "An Optional containing null",
        "An empty Optional",
        "A NullPointerException",
        "An Optional containing Optional.empty()"
      ],
      correct: 1,
      explanation: "`Optional.ofNullable()` returns an empty Optional if the value is null. If the value is not null, it returns an Optional containing that value. This is the safe way to wrap potentially null values."
    },
    {
      question: "What is the difference between `==` and `.equals()` in Java?",
      options: [
        "`==` compares references, `.equals()` compares values",
        "`==` compares values, `.equals()` compares references",
        "They are identical",
        "`==` is for primitives, `.equals()` is for objects"
      ],
      correct: 0,
      explanation: "`==` compares object references (whether they point to the same object in memory), while `.equals()` compares object values (the content). For primitives, `==` compares values. Always use `.equals()` when comparing objects."
    },
    {
      question: "What does `List.of()` return in Java 11+?",
      options: [
        "A mutable list",
        "An unmodifiable list",
        "A synchronized list",
        "A thread-safe list"
      ],
      correct: 1,
      explanation: "`List.of()` returns an immutable (unmodifiable) list. Any attempt to modify it will throw `UnsupportedOperationException`. Use `new ArrayList<>(List.of(...))` if you need a mutable copy."
    },
    {
      question: "What does `stream.collect(Collectors.toList())` do in Java?",
      options: [
        "Converts a stream to a Set",
        "Converts a stream to a List",
        "Sorts the stream elements",
        "Filters null values from the stream"
      ],
      correct: 1,
      explanation: "`Collectors.toList()` is a collector that accumulates the input elements into a new List. It's the most common way to convert a Stream back to a List in Java."
    }
  ]
};
