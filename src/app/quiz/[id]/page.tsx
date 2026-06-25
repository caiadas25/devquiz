"use client";

import { quizzes } from "@/data/quizzes";
import { useParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const TIMER_SECONDS = 15;

function Confetti() {
  const pieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    color: ["#8b5cf6", "#ec4899", "#06b6d4", "#22c55e", "#f59e0b"][i % 5],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece absolute w-3 h-3 rounded-sm"
          style={{ left: `${p.left}%`, top: "-10px", backgroundColor: p.color, animationDelay: `${p.delay}s` }}
        />
      ))}
    </div>
  );
}

function TimerBar({ secondsLeft, total }: { secondsLeft: number; total: number }) {
  const pct = (secondsLeft / total) * 100;
  const color = secondsLeft > 10 ? "bg-green-500" : secondsLeft > 5 ? "bg-yellow-500" : "bg-red-500";
  return (
    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
      <div className={`h-full ${color} transition-all duration-1000 ease-linear`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function QuizPage() {
  const params = useParams();
  const quiz = quizzes.find((q) => q.id === params.id);

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [finished, setFinished] = useState(false);
  const [timer, setTimer] = useState(TIMER_SECONDS);

  const handleTimeout = useCallback(() => {
    setAnswered(true);
    setAnswers((prev) => [...prev.slice(0, currentQ), null]);
  }, [currentQ]);

  useEffect(() => {
    if (!quiz || answered || finished) return;
    if (timer <= 0) { handleTimeout(); return; }
    const t = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(t);
  }, [timer, answered, finished, quiz, handleTimeout]);

  if (!quiz) {
    return (
      <div className="text-center py-20 text-gray-500">
        Quiz not found. <Link href="/" className="text-violet-400 hover:underline">Go back</Link>
      </div>
    );
  }

  const question = quiz.questions[currentQ];
  const isLast = currentQ === quiz.questions.length - 1;

  function handleSelect(idx: number) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === question.correct) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, idx]);
  }

  function handleNext() {
    if (!quiz) return;
    if (isLast) {
      setFinished(true);
      try {
        const results = JSON.parse(localStorage.getItem("devquiz-results") || "{}");
        results[quiz.id] = { score, completedAt: new Date().toISOString() };
        localStorage.setItem("devquiz-results", JSON.stringify(results));

        const stats = JSON.parse(localStorage.getItem("devquiz-stats") || "{}");
        const today = new Date().toISOString().split("T")[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
        const lastDate = stats.lastQuizDate;
        if (lastDate === yesterday) stats.streak = (stats.streak || 0) + 1;
        else if (lastDate !== today) stats.streak = 1;
        stats.lastQuizDate = today;
        stats.totalQuizzesTaken = (stats.totalQuizzesTaken || 0) + 1;
        stats.totalCorrectAnswers = (stats.totalCorrectAnswers || 0) + score;
        stats.totalQuestionsAnswered = (stats.totalQuestionsAnswered || 0) + quiz.questions.length;
        stats.averageScore = stats.totalCorrectAnswers / stats.totalQuestionsAnswered;
        stats.bestScore = Math.max(stats.bestScore || 0, score);
        localStorage.setItem("devquiz-stats", JSON.stringify(stats));
        if (score / quiz.questions.length >= 0.8) setShowConfetti(true);
      } catch {}
      return;
    }
    setCurrentQ((c) => c + 1);
    setSelected(null);
    setAnswered(false);
    setTimer(TIMER_SECONDS);
  }

  if (finished) {
    const pct = Math.round((score / quiz.questions.length) * 100);
    const shareText = `I scored ${score}/${quiz.questions.length} on ${quiz.title}! 🔥 Can you beat me?`;
    return (
      <div className="text-center py-10">
        {showConfetti && <Confetti />}
        <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full border-4 mb-6 ${
          pct >= 80 ? "border-green-500 bg-green-500/10" : pct >= 60 ? "border-yellow-500 bg-yellow-500/10" : "border-red-500 bg-red-500/10"
        }`}>
          <div>
            <div className="text-4xl font-bold">{score}</div>
            <div className="text-sm text-gray-400">/ {quiz.questions.length}</div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">
          {pct === 100 ? "Perfect Score! 🎉" : pct >= 80 ? "Great Job! 🎯" : pct >= 60 ? "Not Bad! 👍" : "Keep Practicing! 💪"}
        </h1>
        <p className="text-gray-400 mb-6">{quiz.title} — {pct}% correct</p>
        <div className="flex gap-3 justify-center mb-8">
          <Link href="/" className="px-6 py-3 rounded-lg bg-violet-500 hover:bg-violet-600 transition-colors font-medium">More Quizzes</Link>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors">Share Score</a>
        </div>
        <div className="text-left mt-10">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Review Answers</h2>
          <div className="space-y-4">
            {quiz.questions.map((q, i) => {
              const wasCorrect = answers[i] === q.correct;
              return (
                <div key={i} className={`p-4 rounded-lg border ${wasCorrect ? "border-green-500/30 bg-green-500/5" : "border-red-500/30 bg-red-500/5"}`}>
                  <div className="text-sm font-medium text-gray-300 mb-2">{i + 1}. {q.question}</div>
                  <div className="text-sm text-gray-500 mb-1">
                    Your answer: <span className={wasCorrect ? "text-green-400" : "text-red-400"}>{answers[i] !== null ? q.options[answers[i]!] : "Time expired"}</span>
                  </div>
                  {!wasCorrect && <div className="text-sm text-green-400 mb-1">Correct: {q.options[q.correct]}</div>}
                  <div className="text-xs text-gray-500 mt-2">{q.explanation}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
        <span>Question {currentQ + 1} of {quiz.questions.length}</span>
        <span>Score: {score}</span>
      </div>
      <TimerBar secondsLeft={timer} total={TIMER_SECONDS} />
      <div className="text-right text-xs text-gray-500 mt-1 mb-6">{timer}s remaining</div>
      <div className="text-xs text-gray-500 mb-2">{quiz.category}</div>
      <h2 className="text-xl font-semibold text-gray-100 mb-6 leading-relaxed">{question.question}</h2>
      <div className="space-y-3 mb-6">
        {question.options.map((opt, idx) => {
          let style = "border-gray-700 hover:border-gray-500 hover:bg-gray-900/50";
          if (answered) {
            if (idx === question.correct) style = "border-green-500 bg-green-500/10";
            else if (idx === selected) style = "border-red-500 bg-red-500/10";
            else style = "border-gray-800 opacity-50";
          } else if (idx === selected) {
            style = "border-violet-500 bg-violet-500/10";
          }
          return (
            <button key={idx} onClick={() => handleSelect(idx)} disabled={answered} className={`w-full text-left p-4 rounded-lg border transition-all ${style}`}>
              <span className="text-sm text-gray-300">
                <span className="text-gray-500 mr-2">{String.fromCharCode(65 + idx)}.</span>{opt}
              </span>
            </button>
          );
        })}
      </div>
      {answered && (
        <div className={`p-4 rounded-lg mb-6 ${selected === question.correct ? "bg-green-500/10 border border-green-500/30" : "bg-red-500/10 border border-red-500/30"}`}>
          <div className="text-sm font-medium mb-1">{selected === question.correct ? "✓ Correct!" : "✗ Incorrect"}</div>
          <div className="text-sm text-gray-400">{question.explanation}</div>
        </div>
      )}
      {answered && (
        <button onClick={handleNext} className="w-full py-3 rounded-lg bg-violet-500 hover:bg-violet-600 transition-colors font-medium">
          {isLast ? "See Results" : "Next Question →"}
        </button>
      )}
    </div>
  );
}
