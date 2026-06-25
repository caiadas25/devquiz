import type { Metadata } from "next";
import CategoriesClient from "./CategoriesClient";

export const metadata: Metadata = {
  title: "Quiz Categories — Browse by Topic | DevQuiz",
  description: "Browse developer trivia quizzes by category: JavaScript, Python, Git, CSS, React, TypeScript, DevOps, and more.",
  openGraph: {
    title: "Quiz Categories — Browse by Topic | DevQuiz",
    description: "Browse developer trivia quizzes by category.",
    type: "website",
    siteName: "DevQuiz",
  },
  twitter: {
    card: "summary",
    title: "Quiz Categories — Browse by Topic | DevQuiz",
    description: "Browse developer trivia quizzes by category.",
  },
};

export default function CategoriesPage() {
  return <CategoriesClient />;
}
