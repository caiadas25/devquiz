import { Quiz } from "@/types/quiz";

export const phpQuiz: Quiz = {
  id: "php-quiz-1",
  date: "2026-06-27",
  category: "PHP",
  title: "PHP Quiz #1",
  description: "PHP fundamentals — types, arrays, null safety, and modern PHP features.",
  difficulty: "medium",
  questions: [
    {
      question: "What does the `===` operator do in PHP?",
      options: [
        "Checks loose equality (type coercion)",
        "Checks strict equality (value AND type)",
        "Assigns a value",
        "Checks if both sides are identical references"
      ],
      correct: 1,
      explanation: "`===` checks both value and type. So `0 === '0'` is false because one is int and the other is string. `==` would return true due to type coercion."
    },
    {
      question: "What is the output of `var_dump(0 == 'foo')` in PHP?",
      options: ["bool(true)", "bool(false)", "NULL", "Notice: Array to string conversion"],
      correct: 0,
      explanation: "In PHP 8+, a string with no leading digits is treated as 0 when compared with `==`. So `0 == 'foo'` evaluates to true. With `===`, it would be false."
    },
    {
      question: "What does `??` (null coalescing operator) do?",
      options: [
        "Checks if a variable is set and not null, returns left side if so, right side otherwise",
        "Performs a bitwise OR",
        "Creates a null reference",
        "Throws an exception if the value is null"
      ],
      correct: 0,
      explanation: "`$a ?? $b` returns `$a` if it's set and not null, otherwise returns `$b`. It's a shorthand for `isset($a) ? $a : $b`. Available since PHP 7.0."
    },
    {
      question: "What is the output of `echo count([1, 2, 3]);`?",
      options: ["3", "2", "1", "Error"],
      correct: 0,
      explanation: "`count()` returns the number of elements in an array. `[1, 2, 3]` has 3 elements, so it outputs 3."
    },
    {
      question: "What does the `match` expression do in PHP 8+?",
      options: [
        "Performs pattern matching with regex",
        "Compares a value against multiple branches using strict comparison and returns the first match",
        "Matches array keys with values",
        "Creates a switch statement"
      ],
      correct: 1,
      explanation: "`match` is like `switch` but uses strict comparison (`===`), returns a value, and doesn't fall through. `match($x) { 1 => 'one', 2 => 'two' }`."
    }
  ]
};
