import { Quiz } from "@/types/quiz";

export const typescriptQuiz2: Quiz = {
  id: "typescript-quiz-2",
  date: "2026-06-30",
  category: "TypeScript",
  title: "TypeScript Quiz #2",
  description: "Advanced TypeScript — mapped types, conditional types, template literals, and type inference.",
  difficulty: "hard",
  questions: [
    {
      question: "What does `Extract<T, U>` do in TypeScript?",
      options: [
        "Extracts from T all types assignable to U",
        "Removes from T all types assignable to U",
        "Creates a union of T and U",
        "Makes all properties of T optional"
      ],
      correct: 0,
      explanation: "`Extract<T, U>` constructs a type by extracting from T all types that are assignable to U. For example, `Extract<string | number | boolean, string | number>` produces `string | number`."
    },
    {
      question: "What is the `infer` keyword used for in TypeScript?",
      options: [
        "To infer a type within a conditional type and use it in the true branch",
        "To declare a variable with inferred type",
        "To create a new type from a value",
        "To force TypeScript to infer a function return type"
      ],
      correct: 0,
      explanation: "`infer` is used inside conditional types to introduce a type variable that TypeScript infers from a type. For example, `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never` extracts the return type of a function."
    },
    {
      question: "What does `ReturnType<typeof myFunction>` give you?",
      options: [
        "The return type of myFunction, inferred from its implementation",
        "The parameter types of myFunction as a tuple",
        "A boolean indicating if the function is synchronous",
        "The same type as typeof myFunction"
      ],
      correct: 0,
      explanation: "`ReturnType<typeof myFunction>` uses the `infer` keyword internally to extract the return type of a function. `typeof myFunction` gets the function's type, and `ReturnType` extracts what it returns."
    },
    {
      question: "What happens with `as const` assertions?",
      options: [
        "Makes all literal types readonly and prevents widening",
        "Converts all types to string",
        "Makes all properties optional",
        "Forces TypeScript to use any type"
      ],
      correct: 0,
      explanation: "`as const` tells TypeScript to infer the narrowest possible type — readonly tuples instead of arrays, literal strings instead of string, etc. It's the equivalent of deep `readonly` plus literal type inference."
    },
    {
      question: "What is the purpose of `satisfies` in TypeScript?",
      options: [
        "Validates that an expression matches a type without widening it",
        "Forces a type assertion at compile time",
        "Creates a new type that satisfies all constraints",
        "Makes a type satisfy a constraint at runtime"
      ],
      correct: 0,
      explanation: "`satisfies` checks that an expression conforms to a type without changing the inferred type of the expression. Unlike `as`, it doesn't widen or narrow — it just validates. This preserves the literal types while ensuring type safety."
    }
  ]
};
