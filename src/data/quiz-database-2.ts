export const databaseQuiz2 = {
  id: "database-quiz-2",
  date: "2026-07-01",
  category: "SQL",
  title: "SQL Quiz #2",
  description: "Joins, indexes, transactions, and advanced queries.",
  difficulty: "medium" as const,
  questions: [
    {
      question: "What is the difference between INNER JOIN and LEFT JOIN?",
      options: [
        "INNER JOIN returns all rows, LEFT JOIN returns only matching rows",
        "INNER JOIN returns only matching rows from both tables, LEFT JOIN returns all rows from the left table plus matching rows from the right",
        "They are the same thing",
        "LEFT JOIN is faster than INNER JOIN"
      ],
      correct: 1,
      explanation: "INNER JOIN returns only rows where the join condition matches in both tables. LEFT JOIN returns ALL rows from the left table, and matching rows from the right table (NULL if no match). This is useful when you want all records from one table regardless of matches."
    },
    {
      question: "What does a database index do?",
      options: [
        "Makes your database smaller",
        "Speeds up read queries by creating a sorted lookup structure",
        "Automatically backs up your data",
        "Enforces data types on columns"
      ],
      correct: 1,
      explanation: "An index creates a data structure (usually B-tree) that allows the database to find rows without scanning the entire table. It dramatically speeds up SELECT queries but slightly slows down INSERT/UPDATE/DELETE because the index must also be updated."
    },
    {
      question: "What is a SQL transaction?",
      options: [
        "A type of JOIN",
        "A group of operations treated as a single unit that either all succeed or all fail",
        "A way to sort query results",
        "A backup mechanism"
      ],
      correct: 1,
      explanation: "A transaction wraps multiple SQL operations into a single atomic unit. If any operation fails, all changes are rolled back. The ACID properties (Atomicity, Consistency, Isolation, Durability) ensure data integrity even during failures."
    },
    {
      question: "What does `SELECT COUNT(DISTINCT column)` return?",
      options: [
        "The total number of rows",
        "The number of unique (non-duplicate) values in that column",
        "The sum of all values",
        "The first unique value"
      ],
      correct: 1,
      explanation: "COUNT(DISTINCT column) counts only unique values in the specified column, ignoring duplicates. For example, if a 'status' column has values ['active', 'active', 'pending'], COUNT(DISTINCT status) returns 2."
    },
    {
      question: "What is the purpose of `GROUP BY`?",
      options: [
        "Sorts the result set",
        "Groups rows with the same values so you can use aggregate functions (COUNT, SUM, AVG) on each group",
        "Filters rows based on conditions",
        "Joins multiple tables"
      ],
      correct: 1,
      explanation: "GROUP BY collapses rows with the same values into summary rows. It's used with aggregate functions to calculate results per group. For example: SELECT status, COUNT(*) FROM orders GROUP BY status gives you the count of orders for each status."
    }
  ]
};
