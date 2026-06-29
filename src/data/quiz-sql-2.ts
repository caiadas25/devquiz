import { Quiz } from "@/types/quiz";

export const sqlQuiz2: Quiz = {
  id: "sql-quiz-2",
  date: "2026-06-29",
  category: "General CS",
  title: "SQL Quiz #2",
  description: "Window functions, CTEs, subqueries, and advanced SQL patterns.",
  difficulty: "hard",
  questions: [
    {
      question: "What does a window function do differently from GROUP BY?",
      options: [
        "Window functions return one row per group; GROUP BY returns all rows",
        "Window functions compute across rows without collapsing them; GROUP BY collapses rows into groups",
        "They are identical",
        "Window functions only work with aggregate functions"
      ],
      correct: 1,
      explanation: "Window functions (OVER clause) compute a value for each row based on a set of rows, without reducing the result set. GROUP BY collapses rows into one row per group."
    },
    {
      question: "What is a Common Table Expression (CTE)?",
      options: [
        "A temporary table stored on disk",
        "A named subquery defined with WITH that exists for a single query",
        "A type of database index",
        "A way to encrypt SQL queries"
      ],
      correct: 1,
      explanation: "A CTE (Common Table Expression) is a named temporary result set defined with the WITH clause. It exists only for the duration of the query and makes complex queries more readable."
    },
    {
      question: "Which of the following is a correlated subquery?",
      options: [
        "A subquery that references a table from the outer query",
        "A subquery that returns multiple columns",
        "A subquery in the FROM clause",
        "A subquery that uses GROUP BY"
      ],
      correct: 0,
      explanation: "A correlated subquery references columns from the outer query. It executes once for each row in the outer query, unlike a non-correlated subquery which executes once."
    },
    {
      question: "What does ROW_NUMBER() return for tied values?",
      options: [
        "The same number for all tied rows",
        "Different sequential numbers for each tied row",
        "NULL for tied rows",
        "An error"
      ],
      correct: 1,
      explanation: "ROW_NUMBER() assigns a unique sequential integer to each row, even for tied values. Use RANK() or DENSE_RANK() if you want tied rows to receive the same number."
    },
    {
      question: "What is the purpose of the COALESCE function?",
      options: [
        "To join two tables together",
        "To return the first non-NULL value from a list of arguments",
        "To count the number of NULL values",
        "To convert all values to a common data type"
      ],
      correct: 1,
      explanation: "COALESCE returns the first non-NULL argument. It is commonly used to provide default values: COALESCE(nickname, username, 'Anonymous')."
    }
  ],
};
