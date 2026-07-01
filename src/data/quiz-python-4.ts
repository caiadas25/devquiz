export const pythonQuiz4 = {
  id: "python-quiz-4",
  date: "2026-07-01",
  category: "Python",
  title: "Python Quiz #4",
  description: "Decorators, generators, context managers, and advanced Python patterns.",
  difficulty: "hard" as const,
  questions: [
    {
      question: "What is the output of this code?\n```python\ndef make_counter():\n    count = 0\n    def counter():\n        nonlocal count\n        count += 1\n        return count\n    return counter\n\nc = make_counter()\nprint(c(), c(), c())\n```",
      options: [
        "1 1 1",
        "1 2 3",
        "0 0 0",
        "NameError: count is not defined"
      ],
      correct: 1,
      explanation: "The nonlocal keyword allows the inner function to modify the variable in the enclosing (but not global) scope. Each call to c() increments the shared count variable: 1, then 2, then 3. Without nonlocal, Python would raise UnboundLocalError when trying to modify count."
    },
    {
      question: "What does a decorator do in Python?",
      options: [
        "Adds comments to a function's docstring",
        "Wraps a function to modify or extend its behavior without changing its code",
        "Converts a function to a class",
        "Makes a function run faster"
      ],
      correct: 1,
      explanation: "A decorator is a function that takes another function as input and returns a modified version of it. The @syntax is syntactic sugar: @decorator is equivalent to func = decorator(func). Decorators are commonly used for logging, authentication, caching, and timing."
    },
    {
      question: "What is the difference between a generator and a regular function?",
      options: [
        "Generators can't have parameters",
        "Generators use yield instead of return and produce values lazily (one at a time)",
        "Generators are always faster than regular functions",
        "Generators can only be used in for loops"
      ],
      correct: 1,
      explanation: "Generators use the yield keyword to produce values lazily. Each time yield is reached, the function's state is suspended and the value is returned. The next call resumes where it left off. This is memory-efficient for large sequences because values are generated on demand rather than stored in memory."
    },
    {
      question: "What is a context manager used for?",
      options: [
        "Managing database connections only",
        "Ensuring proper resource acquisition and release (using the 'with' statement)",
        "Creating new Python modules",
        "Defining class inheritance"
      ],
      correct: 1,
      explanation: "Context managers ensure that setup (acquisition) and teardown (release) of resources happen automatically. The 'with' statement guarantees cleanup even if an exception occurs. They're used for files (auto-close), database connections (auto-commit/rollback), locks, and network connections."
    },
    {
      question: "What does the `@staticmethod` decorator do?",
      options: [
        "Makes the method unable to be overridden in subclasses",
        "Creates a method that doesn't receive an implicit first argument (no self or cls)",
        "Makes the method private",
        "Converts the method to a class variable"
      ],
      correct: 1,
      explanation: "A static method doesn't receive an implicit first argument — no self (instance) or cls (class). It's essentially a regular function that lives inside a class for organizational purposes. Use it when the method logically belongs to the class but doesn't need access to instance or class state."
    }
  ]
};
