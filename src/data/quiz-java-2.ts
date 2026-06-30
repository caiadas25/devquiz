import { Quiz } from "@/types/quiz";

export const javaQuiz2: Quiz = {
  id: "java-quiz-2",
  date: "2026-06-30",
  category: "Java",
  title: "Java Quiz #2 — Streams, Lambdas & Modern Java",
  description: "Java Streams API, lambda expressions, functional interfaces, and modern Java features. Test your knowledge of Java 8+ patterns.",
  difficulty: "hard",
  questions: [
    {
      question: "What does `.stream().filter(x -> x > 5).collect(Collectors.toList())` do?",
      options: [
        "Filters elements greater than 5 and returns a List",
        "Filters elements greater than 5 and returns an array",
        "Returns a Stream of elements greater than 5",
        "Throws a compilation error"
      ],
      correct: 0,
      explanation: "The `filter()` method keeps elements matching the predicate. `collect(Collectors.toList())` collects the filtered stream into a `List<T>`. This is the standard pattern for filtering collections in Java 8+."
    },
    {
      question: "What is a functional interface in Java?",
      options: [
        "An interface with only abstract methods",
        "An interface with exactly one abstract method",
        "An interface that can be instantiated",
        "An interface annotated with @FunctionalInterface that has any number of methods"
      ],
      correct: 1,
      explanation: "A functional interface has exactly one abstract method (SAM — Single Abstract Method). This allows it to be used with lambda expressions. Examples include `Runnable`, `Callable`, `Comparator`, and `Predicate`. The `@FunctionalInterface` annotation is optional but helps catch mistakes at compile time."
    },
    {
      question: "What is the output of: `Optional.empty().orElse(\"default\")`?",
      options: [
        "null",
        "\"default\"",
        "Optional.empty()",
        "NoSuchElementException"
      ],
      correct: 1,
      explanation: "`orElse()` returns the provided default value if the Optional is empty. Since `Optional.empty()` has no value, it returns \"default\". Use `orElseThrow()` if you want an exception instead."
    },
    {
      question: "What does `map()` do in a Java Stream?",
      options: [
        "Filters elements based on a condition",
        "Transforms each element using a function",
        "Sorts elements in natural order",
        "Reduces the stream to a single value"
      ],
      correct: 1,
      explanation: "`map()` applies a function to each element and returns a new stream with the transformed values. For example, `stream.map(String::toUpperCase)` converts all strings to uppercase. It's different from `filter()` (which selects elements) and `reduce()` (which combines them)."
    },
    {
      question: "What is method reference in Java?",
      options: [
        "A pointer to a method that can be called later",
        "A shorthand notation for a lambda that calls an existing method",
        "A way to override methods from a superclass",
        "A way to make methods static"
      ],
      correct: 1,
      explanation: "Method references (`ClassName::methodName`) are shorthand for lambdas that simply call an existing method. For example, `String::toUpperCase` is equivalent to `s -> s.toUpperCase()`. There are four types: static method, instance method of a particular object, arbitrary object method, and constructor."
    },
    {
      question: "What does `stream.reduce(0, Integer::sum)` return?",
      options: [
        "The first element of the stream",
        "The sum of all Integer elements, starting from 0",
        "The maximum value in the stream",
        "A List of all elements"
      ],
      correct: 1,
      explanation: "`reduce()` combines all elements using the provided accumulator. With identity `0` and `Integer::sum`, it adds all integers starting from 0. This is equivalent to a fold operation. If the stream is empty, it returns the identity value (0)."
    },
    {
      question: "What is the difference between `flatMap()` and `map()` in Java Streams?",
      options: [
        "They are the same thing",
        "`flatMap()` flattens nested streams into a single stream, while `map()` transforms elements",
        "`flatMap()` is faster than `map()`",
        "`map()` only works with collections, `flatMap()` works with any type"
      ],
      correct: 1,
      explanation: "`map()` transforms each element into a new value (possibly a collection). `flatMap()` transforms each element into a stream and then flattens all streams into one. For example, `list.stream().flatMap(l -> l.stream())` flattens a `List<List<T>>` into a `Stream<T>`."
    },
    {
      question: "What does `Collectors.groupingBy()` do?",
      options: [
        "Groups elements by their hash code",
        "Groups stream elements by a classifier function, returning a Map",
        "Sorts elements into groups of equal size",
        "Filters elements into two groups (matching and non-matching)"
      ],
      correct: 1,
      explanation: "`groupingBy()` groups elements by a classifier function (like a key extractor) and returns a `Map<K, List<T>>`. For example, `stream.collect(Collectors.groupingBy(String::length))` groups strings by their length. You can also provide a downstream collector for further aggregation."
    },
  ],
};
