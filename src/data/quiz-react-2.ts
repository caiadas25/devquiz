import { Quiz } from "@/types/quiz";

export const reactQuiz2: Quiz = {
  id: "react-quiz-2",
  date: "2026-06-30",
  category: "React",
  title: "React Quiz #2 — Hooks, Context & Performance",
  description: "Test your React knowledge — useEffect patterns, useContext, useMemo, useCallback, and performance optimization.",
  difficulty: "medium",
  questions: [
    {
      question: "What is the correct order of the useEffect cleanup and re-run lifecycle?",
      options: [
        "Cleanup previous effect, then run new effect",
        "Run new effect, then cleanup previous effect",
        "Run both effects simultaneously",
        "Cleanup and re-run happen in random order"
      ],
      correct: 0,
      explanation: "React always cleans up the previous effect before running the new one. This prevents memory leaks and stale data issues. The cleanup function runs when the component unmounts or when the dependency array changes."
    },
    {
      question: "When should you use useCallback?",
      options: [
        "To memoize a function so child components don't re-render unnecessarily",
        "To cache expensive calculations",
        "To store values between renders without triggering re-renders",
        "To fetch data on component mount"
      ],
      correct: 0,
      explanation: "useCallback memoizes a function definition between renders. It's most useful when passing callbacks to memoized child components (React.memo). Without it, a new function reference is created every render, breaking the child's memoization."
    },
    {
      question: "What happens if you forget the dependency array in useEffect?",
      options: [
        "The effect runs after every single render",
        "The effect only runs once on mount",
        "The effect never runs",
        "React throws an error"
      ],
      correct: 0,
      explanation: "Without a dependency array, useEffect runs after every render. This is rarely what you want and usually indicates a bug. An empty array [] means 'run once on mount'. Including dependencies means 'run when these values change'."
    },
    {
      question: "What is the difference between useContext and useReducer?",
      options: [
        "useContext provides shared state; useReducer manages complex state transitions with actions",
        "They are identical in functionality",
        "useContext is for local state; useReducer is for global state",
        "useReducer is a replacement for useState that works with useContext"
      ],
      correct: 0,
      explanation: "useContext reads from a React Context and is meant for sharing state across components. useReducer is a state management pattern for complex state logic with actions and reducers. They are often used together: useReducer for state logic, useContext to distribute it."
    },
    {
      question: "What does React.memo do?",
      options: [
        "Skips re-rendering a component if its props haven't changed (shallow comparison)",
        "Caches the component's rendered output in memory",
        "Prevents the component from ever re-rendering",
        "Memoizes the component's state values"
      ],
      correct: 0,
      explanation: "React.memo is a higher-order component that wraps a functional component. It performs a shallow comparison of props and skips re-rendering if they haven't changed. It does NOT prevent all re-renders — only re-renders caused by parent re-renders when props are the same."
    },
  ],
};
