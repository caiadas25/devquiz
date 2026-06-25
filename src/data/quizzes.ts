import { Quiz } from "@/types/quiz";

export const quizzes: Quiz[] = [
  {
    id: "js-quiz-1",
    date: "2026-06-25",
    category: "JavaScript",
    title: "JavaScript Quiz #1",
    description: "Test your JS fundamentals — closures, hoisting, and type coercion.",
    difficulty: "medium",
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
    difficulty: "medium",
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
    difficulty: "easy",
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
    difficulty: "easy",
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
    difficulty: "medium",
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
    difficulty: "easy",
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
  },
  {
    id: "ts-quiz-1",
    date: "2026-07-01",
    category: "TypeScript",
    title: "TypeScript Quiz #1",
    description: "Type inference, generics, utility types, and the type system.",
    difficulty: "hard",
    questions: [
      {
        question: "What is the difference between `unknown` and `any` in TypeScript?",
        options: [
          "They are identical",
          "`unknown` is type-safe — you must narrow before using it, `any` disables all checks",
          "`any` is the safer option",
          "`unknown` only works with primitives"
        ],
        correct: 1,
        explanation: "`unknown` forces you to perform type checks before using the value. `any` bypasses the type checker entirely, which defeats the purpose of TypeScript."
      },
      {
        question: "What does the `satisfies` operator do in TypeScript 4.9+?",
        options: [
          "Asserts a value is truthy",
          "Validates that an expression matches a type without widening it",
          "Makes a type optional",
          "Satisfies a generic constraint"
        ],
        correct: 1,
        explanation: "`satisfies` checks that a value conforms to a type but preserves the narrower inferred type. Unlike a type annotation, it doesn't widen the type."
      },
      {
        question: "What is a conditional type in TypeScript?",
        options: [
          "A type that only exists at runtime",
          "A type expressed as `T extends U ? X : Y` that selects between types",
          "An optional type parameter",
          "A type that requires a condition in the constructor"
        ],
        correct: 1,
        explanation: "Conditional types use the pattern `T extends U ? X : Y` to create types that depend on other types."
      },
      {
        question: "What does `Pick<T, K>` do?",
        options: [
          "Removes properties K from T",
          "Creates a new type with only the specified properties K from T",
          "Makes all properties of T optional",
          "Picks a random property from T"
        ],
        correct: 1,
        explanation: "`Pick<T, K>` constructs a type by selecting a subset of properties K from type T."
      },
      {
        question: "What is the difference between `interface` and `type` in TypeScript?",
        options: [
          "`interface` is faster at runtime",
          "Interfaces support declaration merging and are generally preferred for object shapes; types are more flexible (unions, intersections, mapped types)",
          "Types cannot represent objects",
          "They are completely interchangeable with no differences"
        ],
        correct: 1,
        explanation: "Interfaces can be merged (declaration merging), extended, and are checked structurally. Types support unions, intersections, mapped types, and more. Both use structural typing."
      }
    ]
  },
  {
    id: "docker-quiz-1",
    date: "2026-07-02",
    category: "DevOps",
    title: "Docker Quiz #1",
    description: "Containers, images, volumes, and Dockerfile best practices.",
    difficulty: "medium",
    questions: [
      {
        question: "What is the difference between a Docker image and a Docker container?",
        options: [
          "They are the same thing",
          "An image is a read-only template; a container is a running instance of an image",
          "A container is stored on disk; an image runs in memory",
          "Images are for production, containers are for development"
        ],
        correct: 1,
        explanation: "A Docker image is a blueprint (like a class). A container is a live, running instance of that image (like an object)."
      },
      {
        question: "What does the `docker build -t myapp .` command do?",
        options: [
          "Runs the myapp container",
          "Builds a Docker image from the Dockerfile in the current directory and tags it 'myapp'",
          "Downloads the myapp image from Docker Hub",
          "Creates a new container named myapp"
        ],
        correct: 1,
        explanation: "`docker build -t name .` builds an image from the Dockerfile in the current directory and gives it the tag name."
      },
      {
        question: "What is a Dockerfile?",
        options: [
          "A configuration file for Docker Desktop",
          "A text file with instructions to build a Docker image",
          "A log file of Docker container activity",
          "A YAML file for Docker Compose"
        ],
        correct: 1,
        explanation: "A Dockerfile contains step-by-step instructions (FROM, RUN, COPY, etc.) that Docker follows to assemble an image."
      },
      {
        question: "What does `docker volume` do?",
        options: [
          "Increases container memory",
          "Manages persistent data storage that survives container restarts",
          "Creates a new network bridge",
          "Downloads image layers"
        ],
        correct: 1,
        explanation: "Volumes provide persistent storage that lives beyond a container's lifecycle. Data in a volume survives restarts, removals, and rebuilds."
      },
      {
        question: "What is the purpose of `.dockerignore`?",
        options: [
          "It prevents Docker from starting",
          "It specifies files and directories to exclude from the build context",
          "It hides containers from `docker ps`",
          "It ignores errors during build"
        ],
        correct: 1,
        explanation: "`.dockerignore` works like `.gitignore` but for Docker builds. Files listed there won't be sent to the Docker daemon, keeping builds faster and images smaller."
      }
    ]
  },
  {
    id: "linux-quiz-1",
    date: "2026-07-03",
    category: "DevOps",
    title: "Linux & Shell Quiz #1",
    description: "Command line basics, file permissions, and shell scripting fundamentals.",
    difficulty: "easy",
    questions: [
      {
        question: "What does `chmod 755 script.sh` do?",
        options: [
          "Deletes the file",
          "Gives owner full permissions, group and others read+execute",
          "Makes the file read-only for everyone",
          "Changes the file owner to 755"
        ],
        correct: 1,
        explanation: "7 = rwx (owner), 5 = r-x (group), 5 = r-x (others). The numeric values map to read(4) + write(2) + execute(1)."
      },
      {
        question: "What is the difference between `>` and `>>` in a shell redirect?",
        options: [
          "No difference",
          "`>` overwrites the file, `>>` appends to it",
          "`>` appends, `>>` overwrites",
          "`>` sends to stdout, `>>` sends to stderr"
        ],
        correct: 1,
        explanation: "`>` truncates and overwrites the file. `>>` appends to the end of the file without erasing existing content."
      },
      {
        question: "What does `grep -r 'error' /var/log` do?",
        options: [
          "Deletes all files containing 'error'",
          "Recursively searches /var/log for files containing 'error'",
          "Replaces 'error' with nothing in all files",
          "Counts the number of files in /var/log"
        ],
        correct: 1,
        explanation: "`grep` searches for text patterns. `-r` makes it recursive (searches subdirectories). It prints matching lines from files in /var/log."
      },
      {
        question: "What is the purpose of a shebang (`#!/bin/bash`) at the top of a script?",
        options: [
          "It's a comment that does nothing",
          "It tells the system which interpreter to use to run the script",
          "It imports the bash library",
          "It enables debug mode"
        ],
        correct: 1,
        explanation: "The shebang line tells the OS which program should execute the script. Without it, the script might run under the wrong shell."
      },
      {
        question: "What does `ps aux | grep nginx` do?",
        options: [
          "Installs nginx",
          "Lists all running processes and filters for nginx",
          "Kills all nginx processes",
          "Checks if nginx config is valid"
        ],
        correct: 1,
        explanation: "`ps aux` lists all running processes. The pipe `|` sends that output to `grep`, which filters for lines containing 'nginx'."
      }
    ]
  },
  {
    id: "react-quiz-1",
    date: "2026-06-25",
    category: "React",
    title: "React Quiz #1",
    description: "Test your React knowledge — hooks, rendering, state management, and component patterns.",
    difficulty: "medium",
    questions: [
      {
        question: "When should you use `useEffect` with an empty dependency array `[]`?",
        options: [
          "To run code after every render",
          "To run code only once when the component mounts",
          "To prevent the component from re-rendering",
          "To clean up global event listeners"
        ],
        correct: 1,
        explanation: "An empty dependency array means the effect has no dependencies to watch, so it only runs once after the initial render — similar to componentDidMount."
      },
      {
        question: "What is the difference between `useState` and `useReducer`?",
        options: [
          "They are completely interchangeable",
          "`useReducer` is better for complex state logic with multiple sub-values",
          "`useState` only works with strings",
          "`useReducer` is faster than `useState`"
        ],
        correct: 1,
        explanation: "`useReducer` is ideal when state logic is complex, involves multiple sub-values, or when the next state depends on the previous one. It also makes testing easier."
      },
      {
        question: "Why should you not call hooks inside loops, conditions, or nested functions?",
        options: [
          "It causes memory leaks",
          "React relies on hook call order to match state between renders",
          "It's just a style convention with no runtime effect",
          "Hooks can only be called in the component body"
        ],
        correct: 1,
        explanation: "React matches hook calls between renders by their order. If you call hooks conditionally, the order changes and React can't correctly associate state with hooks."
      },
      {
        question: "What does `React.memo` do?",
        options: [
          "Caches the component's DOM nodes",
          "Skips re-rendering the component if its props haven't changed",
          "Memoizes the component's state",
          "Prevents the component from unmounting"
        ],
        correct: 1,
        explanation: "`React.memo` is a higher-order component that skips re-rendering when the new props are the same as the previous ones. It's a performance optimization."
      },
      {
        question: "What is the correct way to update state based on the previous state?",
        options: [
          "`setState(state + 1)`",
          "`setState(prev => prev + 1)`",
          "`this.state.count++`",
          "`setState({...state, count: state.count + 1})`"
        ],
        correct: 1,
        explanation: "Using the functional update form `setState(prev => prev + 1)` ensures you're working with the most recent state value, which is important for async updates and batching."
      }
    ]
  },
  {
    id: "rest-api-quiz-1",
    date: "2026-06-25",
    category: "REST API",
    title: "REST API Quiz #1",
    description: "Test your API knowledge — HTTP methods, status codes, authentication, and design patterns.",
    difficulty: "easy",
    questions: [
      {
        question: "Which HTTP method is used to create a new resource?",
        options: ["GET", "PUT", "POST", "DELETE"],
        correct: 2,
        explanation: "POST is used to create a new resource on the server. GET reads, PUT updates (full replacement), PATCH updates (partial), and DELETE removes."
      },
      {
        question: "What does HTTP status code 204 mean?",
        options: [
          "Not Found",
          "No Content — the request succeeded but there's no response body",
          "Moved Permanently",
          "Bad Request"
        ],
        correct: 1,
        explanation: "204 No Content means the server successfully processed the request but isn't returning any content. Commonly used after DELETE operations."
      },
      {
        question: "What is the purpose of CORS headers?",
        options: [
          "To encrypt API responses",
          "To allow or restrict which origins can access your API from a browser",
          "To compress API responses",
          "To authenticate API requests"
        ],
        correct: 1,
        explanation: "CORS (Cross-Origin Resource Sharing) headers tell browsers which origins are allowed to make requests to your API. They prevent unauthorized cross-origin access."
      },
      {
        question: "What's the difference between authentication and authorization?",
        options: [
          "They mean the same thing",
          "Authentication verifies identity; authorization determines access level",
          "Authentication is for APIs; authorization is for databases",
          "Authorization happens first, then authentication"
        ],
        correct: 1,
        explanation: "Authentication answers 'Who are you?' (login, tokens). Authorization answers 'What can you do?' (roles, permissions). You authenticate first, then authorize."
      },
      {
        question: "What should a well-designed REST API return when a resource isn't found?",
        options: [
          "200 OK with an empty body",
          "404 Not Found with an error message",
          "500 Internal Server Error",
          "302 Redirect to the homepage"
        ],
        correct: 1,
        explanation: "404 Not Found is the correct status code. Returning 200 with an empty body confuses clients and makes debugging harder. A descriptive error message helps developers fix issues."
      }
    ]
  }
];
