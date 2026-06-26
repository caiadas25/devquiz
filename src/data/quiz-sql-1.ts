import { Quiz } from "@/types/quiz";

export const sqlQuiz: Quiz = {
  id: "sql-quiz-1",
  date: "2026-06-27",
  category: "General CS",
  title: "SQL Quiz #1",
  description: "Joins, indexes, normalization, and SQL fundamentals.",
  difficulty: "medium",
  questions: [
    {
      question: "What is the difference between INNER JOIN and LEFT JOIN?",
      options: [
        "INNER JOIN returns all rows; LEFT JOIN returns only matching rows",
        "INNER JOIN returns only matching rows; LEFT JOIN returns all rows from the left table plus matching rows from the right",
        "They are the same thing",
        "LEFT JOIN is faster than INNER JOIN"
      ],
      correct: 1,
      explanation: "INNER JOIN only returns rows where there's a match in both tables. LEFT JOIN returns all rows from the left table, with NULL values for non-matching right table rows."
    },
    {
      question: "What does an index do in SQL?",
      options: [
        "Encrypts the data in a column",
        "Speeds up SELECT queries by creating a lookup structure",
        "Prevents duplicate values",
        "Automatically backs up the table"
      ],
      correct: 1,
      explanation: "An index creates a data structure (usually B-tree) that allows the database to find rows without scanning the entire table. It speeds up reads but slows down writes."
    },
    {
      question: "What is database normalization?",
      options: [
        "Encrypting the database for security",
        "Organizing tables to reduce redundancy and improve data integrity",
        "Compressing the database to save disk space",
        "Converting all data types to strings"
      ],
      correct: 1,
      explanation: "Normalization is the process of organizing tables to minimize data redundancy. Each normal form (1NF, 2NF, 3NF) adds specific constraints to eliminate different types of redundancy."
    },
    {
      question: "What does the HAVING clause do that WHERE cannot?",
      options: [
        "Filter rows before grouping",
        "Filter groups after GROUP BY",
        "Sort the results",
        "Limit the number of rows returned"
      ],
      correct: 1,
      explanation: "WHERE filters rows before grouping. HAVING filters groups after GROUP BY. You can't use aggregate functions (COUNT, SUM, AVG) in WHERE — that's what HAVING is for."
    },
    {
      question: "What is a primary key?",
      options: [
        "Any column in a table",
        "A column (or set of columns) that uniquely identifies each row",
        "The first column in a table",
        "A column that contains only numbers"
      ],
      correct: 1,
      explanation: "A primary key uniquely identifies each row in a table. It must be unique and cannot contain NULL values. A table can only have one primary key (but it can consist of multiple columns)."
    }
  ]
};
