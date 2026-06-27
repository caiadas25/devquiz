import { Quiz } from "@/types/quiz";

export const reactQuiz: Quiz = {
  id: "react-quiz-1",
  date: "2026-06-27",
  category: "React",
  title: "React Quiz #1",
  description: "Hooks, rendering, state management, and JSX fundamentals.",
  difficulty: "medium",
  questions: [
    {
      question: "What does useState return?",
      options: [
        "Just the current state value",
        "An array with the current state and a setter function",
        "An object with state and dispatch",
        "A Promise that resolves to the state"
      ],
      correct: 1,
      explanation: "useState returns a pair: the current state value and a function that lets you update it. This is why array destructuring is used: const [count, setCount] = useState(0)."
    },
    {
      question: "When does useEffect run by default (no dependency array)?",
      options: [
        "Only on mount",
        "Only on unmount",
        "After every render",
        "Before every render"
      ],
      correct: 2,
      explanation: "With no dependency array, useEffect runs after every render. With an empty array [], it runs only on mount. With specific dependencies, it runs when those values change."
    },
    {
      question: "What is the virtual DOM?",
      options: [
        "A complete copy of the browser DOM stored in memory",
        "A lightweight JavaScript representation of the real DOM used for diffing",
        "A Web Worker that handles DOM operations off the main thread",
        "A deprecated React feature replaced by concurrent mode"
      ],
      correct: 1,
      explanation: "The virtual DOM is a lightweight JavaScript object tree that mirrors the real DOM. React uses it to calculate the minimal set of changes needed, then applies only those changes to the real DOM (reconciliation)."
    },
    {
      question: "What is the correct way to update state based on the previous value?",
      options: [
        "setState(state + 1)",
        "setState(prev => prev + 1)",
        "setState(state.value + 1)",
        "setState(currentState, state + 1)"
      ],
      correct: 1,
      explanation: "When the new state depends on the previous state, always use the functional form: setState(prev => prev + 1). Direct state access may capture a stale value due to closures."
    },
    {
      question: "Why should you not call hooks inside loops, conditions, or nested functions?",
      options: [
        "It causes a memory leak",
        "React needs hooks to be called in the same order every render for proper tracking",
        "It creates unnecessary re-renders",
        "The compiler doesn't support it"
      ],
      correct: 1,
      explanation: "React tracks hook state by call order. If hooks are called in different orders between renders (due to conditions or loops), React loses track of which state belongs to which hook. This is the Rules of Hooks."
    }
  ]
};
