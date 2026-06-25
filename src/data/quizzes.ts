import { Quiz } from "@/types/quiz";

export const quizzes: Quiz[] = [
  {
    id: "js-quiz-1",
    date: "2026-06-25",
    category: "JavaScript",
    title: "JavaScript Quiz #1",
    description: "Test your JS fundamentals — closures, hoisting, and type coercion.",
    questions: [
      {
        question: "What is the output of: `typeof null`?",
        options: ["\"null\"", "\"undefined\"", "\"object\"", "\"boolean\""],
        correct: 2,
        explanation: "This is a famous JavaScript bug. `typeof null` returns \"object\" due to a legacy implementation detail."
      },
      {
        question: "What does `['1','2','3'].map(parseInt)` return?",
        options: ["[1, 2, 3]", "[1, NaN, NaN]", "[1, NaN, NaN]", "[NaN, NaN, NaN]"],
        correct: 2,
        explanation: "`map` passes (element, index, array) to `parseInt`. So it becomes `parseInt('1',0)`, `parseInt('2',1)`, `parseInt('3',2)`. Radix 1 is invalid, radix 2 can only parse '10' and '11'."
      },
      {
        question: "What is a closure in JavaScript?",
        options: [
          "A way to close browser tabs programmatically",
          "A function that remembers its outer scope's variables",
          "A method to stop event propagation",
          "A built-in method to end loops"
        ],
        correct: 1,
        explanation: "A closure is a function that retains access to variables from its outer function's scope, even after the outer function has returned."
      },
      {
        question: "What is the result of: `0.1 + 0.2 === 0.3`?",
        options: ["true", "false", "TypeError", "undefined"],
        correct: 1,
        explanation: "Due to IEEE 754 floating-point precision, 0.1 + 0.2 equals 0.30000000000000004, not exactly 0.3."
      },
      {
        question: "What does `let x; console.log(x)` output?",
        options: ["0", "null", "undefined", "ReferenceError"],
        correct: 2,
        explanation: "Variables declared with `let` are initialized to `undefined` by default."
      }
    ]
  },
  {
    id: "python-quiz-1",
    date: "2026-06-26",
    category: "Python",
    title: "Python Quiz #1",
    description: "Mutable defaults, list comprehensions, and Pythonic gotchas.",
    questions: [
      {
        question: "What's wrong with `def append_to(item, lst=[]): lst.append(item); return lst`?",
        options: [
          "Nothing — it works correctly",
          "The list default is shared between calls",
          "You can't use append() on a default parameter",
          "Missing return statement"
        ],
        correct: 1,
        explanation: "Mutable default arguments are created once when the function is defined. All calls share the same list."
      },
      {
        question: "What does `[i**2 for i in range(5) if i % 2 == 0]` produce?",
        options: ["[0, 1, 4, 9, 16]", "[0, 4, 16]", "[1, 9]", "[0, 2, 4]"],
        correct: 1,
        explanation: "The filter keeps only even numbers (0, 2, 4), then squares them: 0, 4, 16."
      },
      {
        question: "What is the GIL in CPython?",
        options: [
          "A data structure for graph operations",
          "Global Interpreter Lock — prevents true multi-threaded execution",
          "A package manager for Python",
          "An indentation enforcement tool"
        ],
        correct: 1,
        explanation: "The Global Interpreter Lock allows only one thread to execute Python bytecode at a time."
      },
      {
        question: "What does `*` do in `def foo(a, *args)`?",
        options: [
          "Declares a pointer variable",
          "Collects extra positional arguments into a tuple",
          "Makes the argument optional",
          "Enables pointer arithmetic"
        ],
        correct: 1,
        explanation: "The `*args` syntax collects any extra positional arguments into a tuple."
      },
      {
        question: "What is the output of `print(type(1/2))` in Python 3?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'division'>", "<class 'decimal'>"],
        correct: 1,
        explanation: "In Python 3, `/` always returns a float. Use `//` for integer division."
      }
    ]
  },
  {
    id: "git-quiz-1",
    date: "2026-06-27",
    category: "Git",
    title: "Git Quiz #1",
    description: "Branching, rebasing, and undoing mistakes in Git.",
    questions: [
      {
        question: "What's the difference between `git merge` and `git rebase`?",
        options: [
          "No difference",
          "Rebase rewrites commit history to create a linear timeline",
          "Merge is faster than rebase",
          "Rebase creates a merge commit"
        ],
        correct: 1,
        explanation: "Rebase replays commits on top of another branch, creating a linear history."
      },
      {
        question: "How do you undo the last commit but keep changes?",
        options: [
          "git reset --hard HEAD~1",
          "git reset HEAD~1",
          "git revert HEAD",
          "git undo"
        ],
        correct: 1,
        explanation: "`git reset HEAD~1` moves HEAD back one commit but leaves changes staged."
      },
      {
        question: "What does `git stash` do?",
        options: [
          "Deletes uncommitted changes permanently",
          "Saves uncommitted changes temporarily for later use",
          "Pushes changes to a secret branch",
          "Creates a backup of the entire repository"
        ],
        correct: 1,
        explanation: "`git stash` temporarily shelves uncommitted changes so you can work on something else."
      },
      {
        question: "What is a detached HEAD state?",
        options: [
          "When Git loses connection to the remote",
          "When HEAD points to a commit directly instead of a branch",
          "When you have merge conflicts",
          "When the repository is corrupted"
        ],
        correct: 1,
        explanation: "Detached HEAD means HEAD points to a specific commit rather than a branch name."
      },
      {
        question: "What does `git cherry-pick <commit-hash>` do?",
        options: [
          "Deletes a specific commit",
          "Applies a specific commit from another branch onto the current branch",
          "Compares two commits",
          "Forks the repository"
        ],
        correct: 1,
        explanation: "`git cherry-pick` takes a single commit from another branch and applies it to your current branch."
      }
    ]
  },
  {
    id: "css-quiz-1",
    date: "2026-06-28",
    category: "CSS",
    title: "CSS Quiz #1",
    description: "Flexbox, specificity, and modern CSS layout challenges.",
    questions: [
      {
        question: "In a flex container, what does `justify-content: space-between` do?",
        options: [
          "Centers items with equal space around",
          "Places first item at start, last at end, equal space between",
          "Makes all items the same width",
          "Adds padding between each item"
        ],
        correct: 1,
        explanation: "`space-between` distributes items evenly — first at start, last at end, equal space between."
      },
      {
        question: "What is CSS specificity?",
        options: [
          "How important a property is for rendering",
          "The algorithm that determines which CSS rule wins when multiple apply",
          "The order CSS files are loaded",
          "A measure of how many selectors are in a stylesheet"
        ],
        correct: 1,
        explanation: "Specificity calculates the weight of a CSS selector. Inline styles > IDs > classes > elements."
      },
      {
        question: "What does `position: sticky` do?",
        options: [
          "Makes an element invisible",
          "Alternates between relative and fixed based on scroll",
          "Fixes the element to the viewport",
          "Removes the element from document flow"
        ],
        correct: 1,
        explanation: "`position: sticky` toggles between `relative` and `fixed` based on scroll position."
      },
      {
        question: "What is the CSS `z-index` property used for?",
        options: [
          "Setting text size",
          "Controlling the stacking order of positioned elements",
          "Setting zoom level",
          "Defining grid layout rows"
        ],
        correct: 1,
        explanation: "`z-index` controls the vertical stacking order of positioned elements."
      },
      {
        question: "What does `box-sizing: border-box` do?",
        options: [
          "Adds borders to all elements",
          "Includes padding and border in the element's total width/height",
          "Removes all spacing from elements",
          "Creates a 3D box effect"
        ],
        correct: 1,
        explanation: "With `border-box`, width/height includes padding and border, not just content."
      }
    ]
  },
  {
    id: "cs-quiz-1",
    date: "2026-06-29",
    category: "General CS",
    title: "Computer Science Quiz #1",
    description: "Data structures, algorithms, and computational thinking.",
    questions: [
      {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correct: 1,
        explanation: "Binary search halves the search space each step on a sorted array."
      },
      {
        question: "What is a hash table's average-case lookup time?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        correct: 2,
        explanation: "Hash tables map keys directly to array indices, giving O(1) average-case lookup."
      },
      {
        question: "What is the difference between a stack and a queue?",
        options: [
          "Stacks are faster than queues",
          "Stack is LIFO, queue is FIFO",
          "Queues can only hold strings",
          "Stacks use more memory"
        ],
        correct: 1,
        explanation: "Stack uses LIFO ordering, queue uses FIFO ordering."
      },
      {
        question: "What does 'recursion' mean in programming?",
        options: [
          "Looping through an array backwards",
          "A function that calls itself",
          "Reverse-sorting a list",
          "Using a recursive regex"
        ],
        correct: 1,
        explanation: "Recursion is when a function calls itself to solve smaller instances of the same problem."
      },
      {
        question: "What is Big O notation used for?",
        options: [
          "Describing code style",
          "Measuring algorithm performance and scalability",
          "Naming variables",
          "Documenting code"
        ],
        correct: 1,
        explanation: "Big O describes the upper bound of an algorithm's time or space complexity."
      }
    ]
  },
  {
    id: "culture-quiz-1",
    date: "2026-06-30",
    category: "Developer Culture",
    title: "Developer Culture Quiz #1",
    description: "Famous incidents, memes, and lore from the software world.",
    questions: [
      {
        question: "What is the 'left-pad incident'?",
        options: [
          "When a developer left-padded their resume",
          "When a 11-line npm package was unpublished, breaking thousands of builds",
          "A CSS centering technique",
          "When Git lost data"
        ],
        correct: 1,
        explanation: "In 2016, a developer unpublished the `left-pad` package from npm, breaking thousands of projects."
      },
      {
        question: "What is the '10x developer' myth?",
        options: [
          "Developers who write 10x more code",
          "The idea that some developers are 10x more productive than others",
          "A coding speed test",
          "A JavaScript library"
        ],
        correct: 1,
        explanation: "The '10x developer' suggests some engineers are dramatically more productive."
      },
      {
        question: "What does 'cargo cult programming' mean?",
        options: [
          "Programming on ships",
          "Copying code without understanding why it works",
          "A programming language for logistics",
          "Agile methodology"
        ],
        correct: 1,
        explanation: "Cargo cult programming is adding code that seems to work without understanding the underlying principles."
      },
      {
        question: "What is the origin of 'bikeshedding' in software?",
        options: [
          "A bicycle shop app",
          "Spending disproportionate time on trivial issues",
          "A CSS animation technique",
          "A code review process"
        ],
        correct: 1,
        explanation: "From Parkinson's law: a committee spends more time discussing a bike shed than a nuclear reactor."
      },
      {
        question: "What is 'rubber duck debugging'?",
        options: [
          "Asking a rubber duck for help in Slack",
          "Explaining your code line-by-line to an inanimate object to find bugs",
          "A debugging tool for embedded systems",
          "A rubber-stamp approval process"
        ],
        correct: 1,
        explanation: "Rubber duck debugging is explaining your code aloud to find bugs — the act of articulating often reveals the solution."
      }
    ]
  }
];
