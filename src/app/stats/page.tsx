import type { Metadata } from "next";
import StatsClient from "./StatsClient";

export const metadata: Metadata = {
  title: "Your Quiz Stats — Track Your Progress | DevQuiz",
  description: "View your quiz performance: streaks, average scores, total quizzes taken, and your best scores.",
  openGraph: {
    title: "Your Quiz Stats — Track Your Progress | DevQuiz",
    description: "View your quiz performance and track your streak.",
    type: "website",
    siteName: "DevQuiz",
  },
  twitter: {
    card: "summary",
    title: "Your Quiz Stats — Track Your Progress | DevQuiz",
    description: "View your quiz performance and track your streak.",
  },
};

export default function StatsPage() {
  return <StatsClient />;
}
