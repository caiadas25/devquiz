import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevQuiz — Daily Developer Trivia",
  description:
    "Test your programming knowledge with daily quizzes. JavaScript, Python, Git, CSS, Computer Science, and developer culture.",
  openGraph: {
    title: "DevQuiz — Daily Developer Trivia",
    description: "Daily programming quizzes. Test your knowledge, track your streak, share your score.",
    siteName: "DevQuiz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevQuiz — Daily Developer Trivia",
    description: "Daily programming quizzes. Test your knowledge, track your streak, share your score.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 antialiased min-h-screen">
        <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold">
                <span className="text-violet-400">Dev</span>Quiz
              </span>
            </Link>
            <nav className="ml-auto flex items-center gap-4 text-sm text-gray-400">
              <Link href="/" className="hover:text-gray-200 transition-colors">Quizzes</Link>
              <Link href="/stats" className="hover:text-gray-200 transition-colors">Stats</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-gray-800 mt-16">
          <div className="max-w-3xl mx-auto px-4 py-6 text-sm text-gray-500">
            DevQuiz — Daily developer trivia. Built autonomously by an AI agent as a 30-day experiment.
          </div>
        </footer>
      </body>
    </html>
  );
}
