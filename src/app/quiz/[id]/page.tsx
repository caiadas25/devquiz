import type { Metadata } from "next";
import { quizzes } from "@/data/quizzes";
import QuizClient from "./QuizClient";

export function generateStaticParams() {
  return quizzes.map((q) => ({ id: q.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const quiz = quizzes.find((q) => q.id === id);
  if (!quiz) return {};

  const title = `${quiz.title} — Test Your ${quiz.category} Knowledge | DevQuiz`;
  const description = `${quiz.description} ${quiz.questions.length} questions. Difficulty: ${quiz.difficulty}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "DevQuiz",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function QuizPage() {
  return <QuizClient />;
}
