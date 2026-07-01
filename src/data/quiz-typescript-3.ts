export const typescriptQuiz3 = {
  id: "typescript-quiz-3",
  date: "2026-07-01",
  category: "TypeScript",
  title: "TypeScript Quiz #3",
  description: "Advanced types, generics, utility types, and type narrowing.",
  difficulty: "hard" as const,
  questions: [
    {
      question: "What does the `infer` keyword do in TypeScript?",
      options: [
        "Declares a variable without specifying its type",
        "Extracts a type from a conditional type for use elsewhere",
        "Forces TypeScript to infer the return type of a function",
        "Creates a new type from an existing one"
      ],
      correct: 1,
      explanation: "`infer` is used inside conditional types to extract (infer) a type from another type. For example: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;` — this extracts the return type R from a function type."
    },
    {
      question: "What is the difference between `unknown` and `any`?",
      options: [
        "They are identical — both accept any value",
        "`unknown` is type-safe (requires narrowing before use), `any` disables type checking",
        "`any` is type-safe, `unknown` is not",
        "`unknown` can only be used for variables, `any` for parameters"
      ],
      correct: 1,
      explanation: "`unknown` is the type-safe counterpart of `any`. While `any` lets you do anything with the value (no type checking), `unknown` requires you to narrow the type before using it. Always prefer `unknown` over `any` for better type safety."
    },
    {
      question: "What does `as const` do when applied to a literal value?",
      options: [
        "Makes the value immutable at runtime",
        "Narrows the type to the most specific literal type (readonly, narrow)",
        "Converts a string to a number",
        "Makes the value a constant that can't be reassigned"
      ],
      correct: 1,
      explanation: "`as const` is a type assertion that tells TypeScript to treat the value as its narrowest possible type. A string becomes a string literal type, an array becomes a readonly tuple with literal element types, and objects become deeply readonly with literal property values."
    },
    {
      question: "What is a discriminated union in TypeScript?",
      options: [
        "A union of types that all have different names",
        "A union of types that share a common literal property (the discriminant) for type narrowing",
        "A union where each type has a unique method",
        "A union of primitive types"
      ],
      correct: 1,
      explanation: "A discriminated union uses a common property (the discriminant) with different literal values to distinguish between types. Example: `type Shape = { kind: 'circle', radius: number } | { kind: 'rectangle', width: number, height: number }`. The `kind` property lets TypeScript narrow the type in switch/if statements."
    },
    {
      question: "What does the `satisfies` operator do (TypeScript 4.9+)?",
      options: [
        "Replaces the `as` keyword for type assertions",
        "Validates that a value matches a type without widening it",
        "Creates a new type that satisfies another type's constraints",
        "Makes a type optional in an interface"
      ],
      correct: 1,
      explanation: "`satisfies` validates that a value matches a type while preserving the original literal type. Unlike `as`, it doesn't widen the type. Unlike type annotation, it still checks the value matches the type. Example: `const config = { port: 3000 } satisfies Record<string, number>` — config.port is still `number` (literal 3000), not just `number`."
    }
  ]
};
