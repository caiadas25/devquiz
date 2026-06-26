import { Quiz } from "@/types/quiz";

export const typescriptQuiz: Quiz = {
  id: "typescript-quiz-1",
  date: "2026-06-26",
  category: "TypeScript",
  title: "TypeScript Quiz #1",
  description: "Test your TypeScript fundamentals — type narrowing, generics, utility types, and type guards.",
  difficulty: "medium",
  questions: [
    {
      question: "What does the `keyof` operator do in TypeScript?",
      options: [
        "Creates a union of all property names of a type",
        "Creates a new type with all properties set to optional",
        "Checks if a key exists on an object at runtime",
        "Extracts the value type of a property"
      ],
      correct: 0,
      explanation: "`keyof T` produces a union type of all property names (as string literals) of type T. For example, `keyof {a: 1, b: 2}` is `\"a\" | \"b\"`. It's commonly used to create type-safe accessor functions."
    },
    {
      question: "What is the difference between `unknown` and `any`?",
      options: [
        "`unknown` is stricter — you must narrow the type before using it; `any` bypasses all type checking",
        "`any` is stricter than `unknown`",
        "`unknown` can only be used with primitive types",
        "They are identical in TypeScript"
      ],
      correct: 0,
      explanation: "`unknown` is the type-safe counterpart of `any`. While `any` allows you to do anything with the value (bypassing type checking), `unknown` forces you to narrow the type first through type guards before performing operations on it."
    },
    {
      question: "What does `Partial<T>` do?",
      options: [
        "Makes all properties of T optional",
        "Makes all properties of T required",
        "Creates a read-only version of T",
        "Creates a type with only some properties of T"
      ],
      correct: 0,
      explanation: "`Partial<T>` is a built-in utility type that creates a new type where all properties of T are optional. This is useful for update functions where you only want to modify some fields."
    },
    {
      question: "What is a type guard in TypeScript?",
      options: [
        "A runtime check that narrows a type within a conditional block",
        "A compile-time error for type mismatches",
        "A way to prevent types from being modified",
        "A function that converts one type to another"
      ],
      correct: 0,
      explanation: "A type guard is an expression that performs a runtime check and guarantees the type within a certain scope. Examples include `typeof`, `instanceof`, and custom type predicates like `function isString(x: unknown): x is string`."
    },
    {
      question: "What does `Pick<T, K>` do?",
      options: [
        "Creates a new type by picking specific properties K from type T",
        "Removes properties K from type T",
        "Makes properties K required in type T",
        "Creates a union of types T and K"
      ],
      correct: 0,
      explanation: "`Pick<T, K>` is a utility type that creates a new type by selecting only the specified properties K from type T. For example, `Pick<User, 'name' | 'email'>` creates a type with only name and email fields."
    }
  ]
};
