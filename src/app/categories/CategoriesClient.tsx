"use client";

import { quizzes } from "@/data/quizzes";
import { CATEGORIES } from "@/types/quiz";
import Link from "next/link";
import { useState, useEffect } from "react";

const CATEGORY_COLORS: Record<string, string> = {
  JavaScript: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  TypeScript: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Python: "bg-green-500/20 text-green-300 border-green-500/30",
  Git: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  CSS: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Kotlin: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  SQL: "bg-teal-500/20 text-teal-300 border-teal-500/30",
  Rust: "bg-red-500/20 text-red-300 border-red-500/30",
  "Node.js": "bg-lime-500/20 text-lime-300 border-lime-500/30",
  "React": "bg-sky-500/20 text-sky-300 border-sky-500/30",
  "General CS": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "Developer Culture": "bg-violet-500/20 text-violet-300 border-violet-500/30",
  PHP: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
};

const DIFFICULTY_STYLES: Record<string, string> = {
  easy: "bg-green-500/15 text-green-400 border-green-500/25",
  medium: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
  hard: "bg-red-500/15 text-red-400 border-red-500/25",
};

export default function CategoriesClient() {
  const [results, setResults] = useState<Record<string, { score: number }>>({});
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    try {
      setResults(JSON.parse(localStorage.getItem("devquiz-results") || "{}"));
    } catch {}
  }, []);

  const categories = CATEGORIES.filter((cat) =>
    quizzes.some((q) => q.category === cat)
  );

  const filtered = selected
    ? quizzes.filter((q) => q.category === selected)
    : quizzes;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        Browse <span className="text-violet-400">Categories</span>
      </h1>
      <p className="text-gray-400 mb-8">
        {quizzes.length} quizzes across {categories.length} categories
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelected(null)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
            selected === null
              ? "bg-violet-500/20 text-violet-300 border-violet-500/30"
              : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-300"
          }`}
        >
          All ({quizzes.length})
        </button>
        {categories.map((cat) => {
          const count = quizzes.filter((q) => q.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelected(selected === cat ? null : cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                selected === cat
                  ? CATEGORY_COLORS[cat] || ""
                  : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-300"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      <div className="grid gap-3">
        {filtered.map((quiz) => (
          <Link
            key={quiz.id}
            href={`/quiz/${quiz.id}`}
            className="p-4 rounded-lg border border-gray-800 hover:border-gray-600 transition-all group"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${
                      CATEGORY_COLORS[quiz.category] || ""
                    }`}
                  >
                    {quiz.category}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${
                      DIFFICULTY_STYLES[quiz.difficulty] || ""
                    }`}
                  >
                    {quiz.difficulty}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(quiz.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-200 group-hover:text-violet-300 transition-colors">
                  {quiz.title}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  {quiz.description}
                </p>
              </div>
              <span className="text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 text-lg">
                →
              </span>
            </div>
            {results[quiz.id] && (
              <div className="mt-2 text-xs text-green-400/80">
                ✓ {results[quiz.id].score}/5
              </div>
            )}
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          No quizzes in this category yet.
        </div>
      )}
    </div>
  );
}
