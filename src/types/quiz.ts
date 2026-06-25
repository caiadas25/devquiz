export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Quiz {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  questions: QuizQuestion[];
}

export interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
  timeTaken: number;
}

export interface UserStats {
  streak: number;
  totalQuizzesTaken: number;
  averageScore: number;
  bestScore: number;
  lastQuizDate: string | null;
  totalCorrectAnswers: number;
  totalQuestionsAnswered: number;
}

export const CATEGORIES = [
  'JavaScript', 'TypeScript', 'Python', 'Git', 'CSS', 'General CS', 'Developer Culture', 'DevOps', 'React', 'REST API',
] as const;

export type Category = typeof CATEGORIES[number];
