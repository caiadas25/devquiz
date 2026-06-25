"use client";

import { useState, useEffect } from "react";

interface Stats {
  streak: number;
  totalQuizzesTaken: number;
  averageScore: number;
  bestScore: number;
  lastQuizDate: string | null;
  totalCorrectAnswers: number;
  totalQuestionsAnswered: number;
}

function getStats(): Stats {
  if (typeof window === "undefined") {
    return { streak: 0, totalQuizzesTaken: 0, averageScore: 0, bestScore: 0, lastQuizDate: null, totalCorrectAnswers: 0, totalQuestionsAnswered: 0 };
  }
  try {
    return JSON.parse(localStorage.getItem("devquiz-stats") || "{}");
  } catch {
    return { streak: 0, totalQuizzesTaken: 0, averageScore: 0, bestScore: 0, lastQuizDate: null, totalCorrectAnswers: 0, totalQuestionsAnswered: 0 };
  }
}

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="p-4 rounded-lg border border-gray-800 bg-gray-900/50">
      <div className="text-2xl font-bold text-violet-400">{value}</div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
      {sub && <div className="text-xs text-gray-500 mt-0.5">{sub}</div>}
    </div>
  );
}

export default function StatsClient() {
  const [stats, setStats] = useState<Stats | null>(null);
  useEffect(() => { setStats(getStats()); }, []);

  if (!stats) return <div className="text-center py-20 text-gray-500">Loading stats...</div>;

  if (stats.totalQuizzesTaken === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No quizzes taken yet. <a href="/" className="text-violet-400 hover:underline">Take your first quiz</a>!
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Your <span className="text-violet-400">Stats</span></h1>
      <div className="grid grid-cols-2 gap-3 mb-8">
        <StatCard label="Current Streak" value={`${stats.streak} 🔥`} sub="consecutive days" />
        <StatCard label="Quizzes Taken" value={stats.totalQuizzesTaken} />
        <StatCard label="Average Score" value={`${Math.round((stats.averageScore || 0) * 100)}%`} sub={`${stats.totalCorrectAnswers || 0}/${stats.totalQuestionsAnswered || 0} correct`} />
        <StatCard label="Best Score" value={`${stats.bestScore || 0}/5`} />
      </div>
      <div className="p-4 rounded-lg border border-gray-800 bg-gray-900/50">
        <div className="text-sm text-gray-400 mb-2">Total Answers</div>
        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-violet-500 rounded-full transition-all" style={{ width: `${Math.round((stats.averageScore || 0) * 100)}%` }} />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{stats.totalCorrectAnswers || 0} correct</span>
          <span>{(stats.totalQuestionsAnswered || 0) - (stats.totalCorrectAnswers || 0)} incorrect</span>
        </div>
      </div>
    </div>
  );
}
