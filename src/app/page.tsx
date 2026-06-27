"use client";

import { quizzes } from "@/data/quizzes";
import Link from "next/link";
import { useSyncExternalStore } from "react";

function getResultsSnapshot(): string {
  try { return localStorage.getItem("devquiz-results") || "{}"; } catch { return "{}"; }
}
function getStatsSnapshot(): string {
  try { return localStorage.getItem("devquiz-stats") || "{}"; } catch { return "{}"; }
}

const CATEGORY_COLORS: Record<string, string> = {
  JavaScript: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  TypeScript: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Python: "bg-green-500/20 text-green-300 border-green-500/30",
  Git: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  CSS: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "General CS": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "Developer Culture": "bg-violet-500/20 text-violet-300 border-violet-500/30",
  DevOps: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "REST API": "bg-teal-500/20 text-teal-300 border-teal-500/30",
  React: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  "Node.js": "bg-lime-500/20 text-lime-300 border-lime-500/30",
  Kotlin: "bg-purple-400/20 text-purple-300 border-purple-400/30",
  SQL: "bg-teal-500/20 text-teal-300 border-teal-500/30",
  Rust: "bg-red-500/20 text-red-300 border-red-500/30",
  PHP: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  Java: "bg-orange-500/20 text-orange-300 border-orange-500/30",
};

const DIFFICULTY_STYLES: Record<string, string> = {
  easy: "bg-green-500/15 text-green-400 border-green-500/25",
  medium: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
  hard: "bg-red-500/15 text-red-400 border-red-500/25",
};

export default function Home() {
  const rawResults = useSyncExternalStore(() => () => {}, getResultsSnapshot, () => "{}");
  const rawStats = useSyncExternalStore(() => () => {}, getStatsSnapshot, () => "{}");
  const results: Record<string, { score: number }> = (() => { try { return JSON.parse(rawResults); } catch { return {}; } })();
  const streak: number = (() => { try { return JSON.parse(rawStats).streak || 0; } catch { return 0; } })();

  const latest = quizzes[0];

  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          Daily <span className="text-violet-400">Developer</span> Trivia
        </h1>
        <p className="text-gray-400 text-lg">
          Test your programming knowledge. New quiz every day.
        </p>
        {streak > 0 && (
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
            <span className="text-orange-400 text-lg">🔥</span>
            <span className="text-orange-300 text-sm font-medium">{streak} day streak</span>
          </div>
        )}
      </div>

      <div className="mb-10">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Today&apos;s Quiz</h2>
        <Link
          href={`/quiz/${latest.id}`}
          className="block p-6 rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent hover:from-violet-500/15 transition-all group"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[latest.category] || ""}`}>
                  {latest.category}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${DIFFICULTY_STYLES[latest.difficulty] || ""}`}>
                  {latest.difficulty}
                </span>
                <span className="text-xs text-gray-500">5 questions</span>
              </div>
              <h3 className="text-xl font-bold text-gray-100 group-hover:text-violet-300 transition-colors">{latest.title}</h3>
              <p className="text-gray-400 mt-1">{latest.description}</p>
            </div>
            <span className="text-gray-600 group-hover:text-violet-400 transition-colors text-2xl">→</span>
          </div>
          {results[latest.id] && (
            <div className="mt-3 text-sm text-green-400">✓ Completed — Score: {results[latest.id].score}/5</div>
          )}
        </Link>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Past Quizzes</h2>
        <div className="grid gap-3">
          {quizzes.slice(1).map((quiz) => (
            <Link key={quiz.id} href={`/quiz/${quiz.id}`} className="p-4 rounded-lg border border-gray-800 hover:border-gray-600 transition-all group">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[quiz.category] || ""}`}>
                      {quiz.category}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${DIFFICULTY_STYLES[quiz.difficulty] || ""}`}>
                      {quiz.difficulty}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(quiz.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-200 group-hover:text-violet-300 transition-colors">{quiz.title}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{quiz.description}</p>
                </div>
                <span className="text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 text-lg">→</span>
              </div>
              {results[quiz.id] && (
                <div className="mt-2 text-xs text-green-400/80">✓ {results[quiz.id].score}/5</div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
