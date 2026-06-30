import { Quiz } from "@/types/quiz";

export const databaseQuiz1: Quiz = {
  id: "database-quiz-1",
  date: "2026-06-30",
  category: "Database",
  title: "Database Quiz #1",
  description: "SQL fundamentals, indexing, normalization, and database concepts every developer should know.",
  difficulty: "medium",
  questions: [
    {
      question: "What is the difference between PRIMARY KEY and UNIQUE KEY?",
      options: [
        "They are the same thing",
        "PRIMARY KEY cannot be NULL and only one per table; UNIQUE KEY can be NULL and multiple per table",
        "PRIMARY KEY is faster than UNIQUE KEY",
        "UNIQUE KEY cannot have duplicates but PRIMARY KEY can"
      ],
      correct: 1,
      explanation: "A PRIMARY KEY uniquely identifies each row and cannot be NULL. You can only have one per table. A UNIQUE KEY also prevents duplicates but allows NULL values, and a table can have multiple UNIQUE constraints."
    },
    {
      question: "What is a database index?",
      options: [
        "A way to sort rows alphabetically",
        "A data structure that speeds up data retrieval at the cost of slower writes",
        "A backup copy of the database",
        "A constraint that enforces unique values"
      ],
      correct: 1,
      explanation: "An index is a data structure (typically a B-tree) that allows the database to find rows without scanning the entire table. It speeds up SELECT queries but slows down INSERT/UPDATE/DELETE because the index must also be updated."
    },
    {
      question: "What does JOIN do in SQL?",
      options: [
        "Deletes rows from both tables",
        "Combines rows from two or more tables based on a related column",
        "Creates a new table from existing data",
        "Sorts the results in a specific order"
      ],
      correct: 1,
      explanation: "A JOIN combines rows from two or more tables based on a related column between them. The most common type is INNER JOIN, which returns only rows with matching values in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right."
    },
    {
      question: "What is the N+1 query problem?",
      options: [
        "A database that crashes after N queries",
        "When you make 1 query to fetch a list and N additional queries to fetch related data for each item",
        "A type of SQL injection attack",
        "When a query takes N+1 seconds to execute"
      ],
      correct: 1,
      explanation: "The N+1 problem happens when you fetch N items with one query, then make a separate query for each item's related data. For example, fetching 100 users then 100 separate queries for their posts. Use JOINs or eager loading to fix this."
    },
    {
      question: "What is database normalization?",
      options: [
        "Encrypting the database",
        "Organizing data to reduce redundancy and improve data integrity",
        "Backing up the database to multiple servers",
        "Converting all data to a single format"
      ],
      correct: 1,
      explanation: "Normalization is the process of organizing tables to minimize data redundancy. It involves breaking large tables into smaller, related tables and defining relationships between them. The main normal forms (1NF, 2NF, 3NF) each eliminate specific types of redundancy."
    },
    {
      question: "What does ACID stand for in databases?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Automatic, Concurrent, Indexed, Distributed",
        "Asynchronous, Cache, Incremental, Direct",
        "Aggregation, Compression, Integrity, Deduplication"
      ],
      correct: 0,
      explanation: "ACID properties ensure reliable database transactions: Atomicity (all or nothing), Consistency (data integrity rules are enforced), Isolation (concurrent transactions don't interfere), Durability (committed data survives crashes)."
    },
    {
      question: "When should you use a LEFT JOIN instead of INNER JOIN?",
      options: [
        "When you only want matching rows",
        "When you want all rows from the left table even if there are no matches in the right",
        "When you want faster query performance",
        "When you're joining more than two tables"
      ],
      correct: 1,
      explanation: "LEFT JOIN returns all rows from the left table and the matched rows from the right table. If there's no match, the right side columns are NULL. Use it when you need all records from one table regardless of whether they have related records."
    },
    {
      question: "What is a composite index?",
      options: [
        "An index on a single column",
        "An index on two or more columns that are frequently queried together",
        "An index that covers the entire table",
        "An index created automatically by the database"
      ],
      correct: 1,
      explanation: "A composite index (or multi-column index) includes multiple columns. It's efficient for queries that filter by multiple columns simultaneously. The order of columns matters — the index follows the leftmost prefix rule."
    },
    {
      question: "What is the difference between DELETE and TRUNCATE?",
      options: [
        "They are identical",
        "DELETE removes rows one by one and can be rolled back; TRUNCATE removes all rows faster and resets auto-increment",
        "TRUNCATE is faster but cannot be rolled back",
        "DELETE is faster for large tables"
      ],
      correct: 1,
      explanation: "DELETE removes rows individually (with WHERE clause support) and is logged row-by-row. TRUNCATE removes all rows at once, is faster, resets identity/auto-increment counters, but cannot be rolled back in some databases. Both keep the table structure."
    },
    {
      question: "What is a covering index?",
      options: [
        "An index that covers all columns in the table",
        "An index that contains all the columns needed for a query, so the database doesn't need to read the table",
        "An index that covers the primary key",
        "An index that covers foreign key relationships"
      ],
      correct: 1,
      explanation: "A covering index includes all columns referenced in a query (in the SELECT, WHERE, and ORDER BY clauses). The database can answer the query entirely from the index without touching the table data, making it significantly faster."
    }
  ]
};
