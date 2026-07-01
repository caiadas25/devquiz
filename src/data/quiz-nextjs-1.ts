import { Quiz, Difficulty } from "@/types/quiz";

export const nextjsQuiz1: Quiz = {
  id: "nextjs-quiz-1",
  date: "2026-07-01",
  category: "React",
  title: "Next.js Quiz #1 — App Router, Server Components & Data Fetching",
  description: "Test your Next.js knowledge — App Router, Server Components, Server Actions, caching, and middleware.",
  difficulty: "medium",
  questions: [
    {
      question: "What is the main difference between the App Router and the Pages Router in Next.js?",
      options: [
        "The App Router is faster",
        "The App Router uses React Server Components by default and supports nested layouts",
        "The App Router only supports TypeScript",
        "The Pages Router is deprecated"
      ],
      correct: 1,
      explanation: "The App Router (app/) uses React Server Components by default, supports nested layouts with layout.tsx, and provides better streaming and data fetching patterns. The Pages Router still works but the App Router is the recommended approach."
    },
    {
      question: "What is a React Server Component in Next.js?",
      options: [
        "A component that can only be used on the server and can never be interactive",
        "A component that renders on the server by default and doesn't send its JavaScript to the client",
        "A component that handles server-side API routes",
        "A component that runs in a Web Worker"
      ],
      correct: 1,
      explanation: "Server Components run on the server and don't include their JavaScript in the client bundle. This means they can directly access databases, read files, and perform server-only operations without increasing client-side JavaScript size."
    },
    {
      question: "How do you make a component interactive in the App Router?",
      options: [
        "Use the 'interactive' prop",
        "Add the 'use server' directive at the top of the file",
        "Add the 'use client' directive at the top of the file",
        "All components are interactive by default"
      ],
      correct: 2,
      explanation: "Adding 'use client' at the top of a file marks all components in that file as Client Components. Client Components can use hooks like useState, useEffect, and event handlers. Server Components are the default and cannot use these."
    },
    {
      question: "What does `export const dynamic = 'force-dynamic'` do in a Next.js page?",
      options: [
        "Makes the page use dynamic imports",
        "Disables static rendering and forces the page to be rendered on every request",
        "Enables dynamic route parameters",
        "Forces the page to be a Client Component"
      ],
      correct: 1,
      explanation: "This route segment config option disables Static Rendering for that page. The page will be Server-Side Rendered on every request, which is useful for pages that show real-time data or user-specific content."
    },
    {
      question: "What is the purpose of the `loading.tsx` file in the App Router?",
      options: [
        "It defines the loading state for the entire application",
        "It provides an instant loading UI while page content streams in",
        "It configures performance monitoring",
        "It shows a progress bar during navigation"
      ],
      correct: 1,
      explanation: "A loading.tsx file creates a loading UI that's shown immediately while the page's content loads. Thanks to React Suspense and streaming, users see the loading state instantly while the server renders the full page in the background."
    }
  ]
};
