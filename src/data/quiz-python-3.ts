import { Quiz } from "@/types/quiz";

export const pythonQuiz3: Quiz = {
  id: "python-quiz-3",
  date: "2026-06-29",
  category: "Python",
  title: "Python Quiz #3",
  description: "Advanced Python — decorators, generators, metaclasses, and the GIL.",
  difficulty: "hard",
  questions: [
    {
      question: "What does a decorator do in Python?",
      options: [
        "Deletes a function",
        "Modifies or wraps a function/class at definition time",
        "Creates a new thread",
        "Compiles the function to C"
      ],
      correct: 1,
      explanation: "Decorators are higher-order functions that take a function and return a modified version. They are applied at definition time using @syntax."
    },
    {
      question: "What is the output of this generator?\n```python\ndef gen():\n    yield 1\n    yield 2\n    yield 3\nprint(list(gen()))\n```",
      options: ["[1, 2, 3]", "[1, 3, 2]", "None", "1 2 3"],
      correct: 0,
      explanation: "list() consumes all yielded values from the generator, producing [1, 2, 3]. Generators are lazy iterators — each yield produces one value."
    },
    {
      question: "What is the Global Interpreter Lock (GIL)?",
      options: [
        "A lock that prevents all threading",
        "A mutex that allows only one thread to execute Python bytecode at a time",
        "A file locking mechanism",
        "A database transaction lock"
      ],
      correct: 1,
      explanation: "The GIL is a mutex in CPython that allows only one thread to hold the Python interpreter lock at a time, limiting true parallelism for CPU-bound tasks."
    },
    {
      question: "What does `*args` do in a function definition?",
      options: [
        "Dereferences a pointer",
        "Collects positional arguments into a tuple",
        "Collects keyword arguments into a dictionary",
        "Unpacks a list"
      ],
      correct: 1,
      explanation: "*args collects extra positional arguments into a tuple. The related **kwargs collects keyword arguments into a dictionary."
    },
    {
      question: "What is the purpose of `__slots__` in a Python class?",
      options: [
        "Defines class methods",
        "Restricts attributes and saves memory by preventing __dict__",
        "Creates private variables",
        "Enables multiple inheritance"
      ],
      correct: 1,
      explanation: "__slots__ restricts allowed attributes and prevents creation of __dict__, saving memory for instances with many objects."
    },
    {
      question: "What does `itertools.chain.from_iterable()` do?",
      options: [
        "Chains multiple dictionaries",
        "Flattens an iterable of iterables into a single sequence",
        "Converts a chain to a list",
        "Links two files together"
      ],
      correct: 1,
      explanation: "chain.from_iterable flattens nested iterables: chain.from_iterable([[1,2],[3,4]]) produces 1, 2, 3, 4."
    },
    {
      question: "What is a metaclass in Python?",
      options: [
        "A class that inherits from another class",
        "A class whose instances are classes themselves",
        "A deprecated feature",
        "A way to define static methods"
      ],
      correct: 1,
      explanation: "A metaclass is the class of a class. type is the default metaclass. Custom metaclasses let you modify class creation itself."
    },
    {
      question: "What is the output of `bool([])`?",
      options: ["True", "False", "None", "[]"],
      correct: 1,
      explanation: "Empty sequences (lists, strings, tuples, dicts, sets) are falsy in Python. bool([]) returns False."
    },
  ],
};
