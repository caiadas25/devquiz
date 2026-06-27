import { Quiz } from "@/types/quiz";

export const pythonQuiz2: Quiz = {
  id: "python-quiz-2",
  date: "2026-06-27",
  category: "Python",
  title: "Python Quiz #2 — Intermediate",
  description: "Decorators, context managers, metaclasses, and the GIL. Python concepts that trip up intermediate developers.",
  difficulty: "hard",
  questions: [
    {
      question: "What does a Python decorator do?",
      options: [
        "Adds comments to a function for documentation",
        "Wraps a function to extend its behavior without modifying the original",
        "Creates a class from a function",
        "Converts a function into a coroutine"
      ],
      correct: 1,
      explanation: "A decorator is a function that takes another function and returns a modified version of it. The `@decorator` syntax is syntactic sugar for `func = decorator(func)`. Decorators are commonly used for logging, authentication, caching, and rate limiting."
    },
    {
      question: "What is the Global Interpreter Lock (GIL)?",
      options: [
        "A lock that prevents multiple Python processes from running simultaneously",
        "A mutex that allows only one thread to execute Python bytecode at a time per process",
        "A database locking mechanism in SQLite",
        "A feature that makes Python thread-safe for all operations"
      ],
      correct: 1,
      explanation: "The GIL is a mutex in CPython that prevents multiple threads from executing Python bytecode simultaneously within a single process. This means CPU-bound multithreaded code won't achieve true parallelism. Use `multiprocessing` for CPU-bound tasks or `asyncio` for I/O-bound tasks."
    },
    {
      question: "What is the output of: `x = [1, 2, 3]; print(x * 2)`?",
      options: ["[2, 4, 6]", "[1, 2, 3, 1, 2, 3]", "Error: unsupported operand", "[1, 2, 3, 2]"],
      correct: 1,
      explanation: "List multiplication in Python repeats the list contents. `[1, 2, 3] * 2` creates a new list by concatenating the list with itself: `[1, 2, 3, 1, 2, 3]`. This is shallow copy — nested objects are shared references."
    },
    {
      question: "What does `yield` do in Python?",
      options: [
        "Returns a value and terminates the function immediately",
        "Returns a value and suspends the function's state until the next call",
        "Creates a new thread to execute the function",
        "Signals that the function is a generator expression"
      ],
      correct: 1,
      explanation: "When `yield` is used inside a function, it turns the function into a generator. Each call to `next()` resumes execution from where the last `yield` occurred. This allows lazy evaluation — values are produced one at a time, which is memory-efficient for large datasets."
    },
    {
      question: "What is the difference between `is` and `==` in Python?",
      options: [
        "`is` checks value equality; `==` checks identity",
        "`is` checks identity (same object in memory); `==` checks value equality",
        "There is no difference",
        "`is` works only with strings; `==` works with all types"
      ],
      correct: 1,
      explanation: "`is` checks if two variables reference the exact same object in memory (identity). `==` checks if the values are equal by calling the `__eq__` method. Two objects can be equal (`==`) without being the same object (`is`). For example, `[1, 2] == [1, 2]` is True, but `[1, 2] is [1, 2]` is False."
    },
    {
      question: "What is a context manager in Python?",
      options: [
        "A class that manages network connections only",
        "An object that defines `__enter__` and `__exit__` methods for use with `with` statements",
        "A function that manages Python virtual environments",
        "A tool that controls concurrent access to shared resources"
      ],
      correct: 1,
      explanation: "Context managers implement the context management protocol (`__enter__` and `__exit__`). They are used with the `with` statement to set up and tear down resources automatically. Common examples: file handling (`with open(...) as f:`), database connections, locks, and temporary directories."
    },
    {
      question: "What does `*args` and `**kwargs` mean in a function signature?",
      options: [
        "They create global and local variable scopes",
        "`*args` collects positional arguments as a tuple; `**kwargs` collects keyword arguments as a dict",
        "They define optional parameters with default values",
        "They mark the function as async-compatible"
      ],
      correct: 1,
      explanation: "`*args` allows a function to accept any number of positional arguments, which are collected into a tuple. `**kwargs` accepts any number of keyword arguments, collected into a dictionary. You can use either one or both together. They must appear in the order: regular args, *args, keyword-only args, **kwargs."
    },
    {
      question: "What is the output of: `print(type(lambda x: x))`?",
      options: ["<class 'function'>", "<class 'lambda'>", "<class 'method'>", "<class 'coroutine'>"],
      correct: 0,
      explanation: "Lambda functions are anonymous functions in Python. `type(lambda x: x)` returns `<class 'function'>` because lambdas are just regular function objects — there is no separate 'lambda' type. They're syntactically restricted to a single expression."
    },
    {
      question: "What does `dict.get('key', default)` do differently from `dict['key']`?",
      options: [
        "It returns the key instead of the value",
        "It returns the default value if the key doesn't exist, instead of raising a KeyError",
        "It modifies the dictionary in-place",
        "It returns a tuple of (key, default)"
      ],
      correct: 1,
      explanation: "`dict['key']` raises a KeyError if the key doesn't exist. `dict.get('key', default)` returns `default` (or None if not specified) when the key is missing. Use `get()` when you want to handle missing keys gracefully without try/except blocks."
    },
    {
      question: "What is the purpose of `__slots__` in a Python class?",
      options: [
        "Defines the class constructor parameters",
        "Restricts instance attributes to a fixed set, reducing memory usage and improving attribute access speed",
        "Makes the class immutable after initialization",
        "Creates thread-safe instances"
      ],
      correct: 1,
      explanation: "When you define `__slots__` in a class, Python skips creating the `__dict__` for each instance and instead uses a fixed-size array for attribute storage. This reduces memory usage (up to 40% less per instance) and slightly improves attribute access speed. The trade-off: you can't add attributes not listed in `__slots__`."
    }
  ]
};
