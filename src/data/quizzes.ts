import { Quiz } from "@/types/quiz";
import { awsQuiz } from "./quiz-aws-1";
import { dockerQuiz } from "./quiz-docker-1";
import { dockerQuiz2 } from "./quiz-docker-2";
import { dockerQuiz3 } from "./quiz-docker-3";
import { githubActionsQuiz } from "./quiz-github-actions-1";
import { sqlQuiz } from "./quiz-sql-1";
import { rustQuiz } from "./quiz-rust-1";
import { typescriptQuiz } from "./quiz-typescript-1";
import { cssQuiz } from "./quiz-css-1";
import { cssQuiz2 } from "./quiz-css-2";
import { kotlinQuiz } from "./quiz-kotlin-1";
import { pythonQuiz2 } from "./quiz-python-2";
import { nodeQuiz } from "./quiz-node-1";
import { reactQuiz } from "./quiz-react-1";
import { reactQuiz2 } from "./quiz-react-2";
import { gitQuiz2 } from "./quiz-git-2";
import { phpQuiz } from "./quiz-php-1";
import { javaQuiz } from "./quiz-java-1";
import { sqlQuiz2 } from "./quiz-sql-2";
import { goQuiz } from "./quiz-go-1";
import { pythonQuiz3 } from "./quiz-python-3";
import { rustQuiz2 } from "./quiz-rust-2";
import { goQuiz2 } from "./quiz-go-2";
import { jsQuiz2 } from "./quiz-js-2";
import { typescriptQuiz2 } from "./quiz-typescript-2";
import { typescriptQuiz3 } from "./quiz-typescript-3";
import { javaQuiz2 } from "./quiz-java-2";
import { kubernetesQuiz2 } from "./quiz-kubernetes-2";
import { networkingQuiz1 } from "./quiz-networking-1";
import { databaseQuiz1 } from "./quiz-database-1";
import { securityQuiz1 } from "./quiz-security-1";
import { systemDesignQuiz1 } from "./quiz-system-design-1";
import { cssQuiz3 } from "./quiz-css-3";
import { nodeQuiz2 } from "./quiz-node-2";
import { linuxQuiz1 } from "./quiz-linux-1";
import { htmlQuiz1 } from "./quiz-html-1";
import { pythonQuiz4 } from "./quiz-python-4";
import { nextjsQuiz1 } from "./quiz-nextjs-1";
import { rustQuiz3 } from "./quiz-rust-3";

import { gitQuiz1 } from "./quiz-git-1";

import { htmlQuiz2 } from "./quiz-html-2";

import { databaseQuiz2 } from "./quiz-database-2";

export const quizzes: Quiz[] = [
  nodeQuiz,
  reactQuiz,
  reactQuiz2,
  gitQuiz2,
  kotlinQuiz,
  pythonQuiz2,
  awsQuiz,
  dockerQuiz,
  dockerQuiz2,
  dockerQuiz3,
  githubActionsQuiz,
  sqlQuiz,
  rustQuiz,
  typescriptQuiz,
  cssQuiz,
  cssQuiz2,
  phpQuiz,
  javaQuiz,
  sqlQuiz2,
  kubernetesQuiz2,
  networkingQuiz1,
  {
    id: "js-quiz-1",
    date: "2026-06-25",
    category: "JavaScript",
    title: "JavaScript Quiz #1",
    description: "Test your JS fundamentals — closures, hoisting, and type coercion.",
    difficulty: "medium" as const,
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
    difficulty: "medium" as const,
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
        explanation: "The Global Interpreter Lock (GIL) ensures only one thread executes Python bytecode at a time, limiting true parallelism in CPU-bound tasks."
      },
      {
        question: "What is the output of `print(1, 2, 3, sep=' - ')`?",
        options: ["1 2 3", "1 - 2 - 3", "1-2-3", "1, 2, 3"],
        correct: 1,
        explanation: "The `sep` parameter specifies the separator between arguments. `print(1, 2, 3, sep=' - ')` outputs `1 - 2 - 3`."
      },
      {
        question: "Which is the most Pythonic way to check if a list is empty?",
        options: ["`if len(lst) == 0:`", "`if lst == []:`", "`if not lst:`", "`if lst is None:`"],
        correct: 2,
        explanation: "`if not lst:` is the most Pythonic. Empty sequences are falsy in Python, so this is clean, readable, and follows PEP 8."
      }
    ]
  },
  {
    id: "git-quiz-1",
    date: "2026-06-27",
    category: "Git",
    title: "Git Quiz #1",
    description: "Branching, merging, rebasing, and common Git workflows.",
    difficulty: "medium" as const,
    questions: [
      {
        question: "What does `git rebase` do differently from `git merge`?",
        options: [
          "Rebase creates a merge commit, merge doesn't",
          "Rebase replays commits on top of another branch, keeping a linear history",
          "Rebase only works on remote branches",
          "Rebase deletes the source branch"
        ],
        correct: 1,
        explanation: "Rebase takes your commits and replays them one-by-one on top of the target branch, creating a clean linear history without merge commits."
      },
      {
        question: "What does `git stash` do?",
        options: [
          "Permanently deletes uncommitted changes",
          "Saves uncommitted changes temporarily so you can work on something else",
          "Pushes changes to the remote repository",
          "Creates a new branch from current changes"
        ],
        correct: 1,
        explanation: "Git stash temporarily shelves your working directory changes. Use `git stash pop` to bring them back later."
      },
      {
        question: "What is the difference between `git reset --soft` and `git reset --hard`?",
        options: [
          "Soft keeps staging area and working tree, hard resets everything",
          "Soft resets the remote, hard only resets local",
          "There is no difference",
          "Hard keeps staging area, soft resets everything"
        ],
        correct: 0,
        explanation: "`--soft` moves HEAD but keeps your changes staged. `--hard` moves HEAD and discards all changes — use with caution."
      },
      {
        question: "What does `git cherry-pick <commit-hash>` do?",
        options: [
          "Deletes a specific commit",
          "Applies the changes from a specific commit to your current branch",
          "Shows the diff of a commit",
          "Reverts a specific commit"
        ],
        correct: 1,
        explanation: "Cherry-pick takes the changes introduced by a specific commit and applies them as a new commit on your current branch."
      },
      {
        question: "What is a detached HEAD in Git?",
        options: [
          "HEAD is pointing to a specific commit instead of a branch",
          "The repository is corrupted",
          "HEAD has been deleted",
          "HEAD is pointing to the latest tag"
        ],
        correct: 0,
        explanation: "Detached HEAD means HEAD points directly to a commit hash instead of a branch name. Changes made here won't be on any branch unless you create one."
      }
    ]
  },
  {
    id: "css-quiz-1",
    date: "2026-06-28",
    category: "CSS",
    title: "CSS Quiz #1",
    description: "Flexbox, specificity, selectors, and modern CSS features.",
    difficulty: "medium" as const,
    questions: [
      {
        question: "What is the default value of `flex-direction`?",
        options: ["column", "row", "row-reverse", "column-reverse"],
        correct: 1,
        explanation: "The default flex-direction is `row`, which lays out flex items horizontally from left to right."
      },
      {
        question: "Which CSS property creates gaps between flex items?",
        options: ["margin", "padding", "gap", "spacing"],
        correct: 2,
        explanation: "`gap` (formerly `grid-gap`) works in both flexbox and grid layouts to create consistent spacing between items."
      },
      {
        question: "What does `!important` do in CSS?",
        options: [
          "Makes the property apply to all elements",
          "Gives the declaration highest specificity priority",
          "Prevents the property from being overridden",
          "Applies the property to the parent element"
        ],
        correct: 1,
        explanation: "`!important` overrides normal specificity rules. It should be used sparingly as it makes debugging harder."
      },
      {
        question: "What is the CSS specificity order (lowest to highest)?",
        options: [
          "Element > Class > ID > Inline > !important",
          "ID > Class > Element > Inline > !important",
          "Inline > !important > ID > Class > Element",
          "Class > Element > ID > Inline > !important"
        ],
        correct: 0,
        explanation: "Specificity from lowest: element selectors, class/attribute selectors, ID selectors, inline styles, then !important overrides everything."
      },
      {
        question: "What does `box-sizing: border-box` do?",
        options: [
          "Adds a border to the element",
          "Includes padding and border in the element's total width and height",
          "Removes all spacing from the element",
          "Makes the element a fixed size"
        ],
        correct: 1,
        explanation: "With `border-box`, the width/height you set includes padding and border. This makes layout calculations much more predictable."
      }
    ]
  },
  {
    id: "cs-quiz-1",
    date: "2026-06-29",
    category: "General CS",
    title: "Computer Science Quiz #1",
    description: "Data structures, algorithms, Big O notation, and CS fundamentals.",
    difficulty: "hard" as const,
    questions: [
      {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correct: 1,
        explanation: "Binary search halves the search space each step. For n elements, you need at most log₂(n) comparisons."
      },
      {
        question: "What is the difference between a stack and a queue?",
        options: [
          "Stack is FIFO, queue is LIFO",
          "Stack is LIFO, queue is FIFO",
          "Both are FIFO",
          "Both are LIFO"
        ],
        correct: 1,
        explanation: "A stack is Last In, First Out (LIFO) — like a plate stack. A queue is First In, First Out (FIFO) — like a line at a store."
      },
      {
        question: "What is a hash table's average-case lookup time?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        correct: 2,
        explanation: "Hash tables provide O(1) average-case lookups by hashing the key directly to an array index. Worst case (all collisions) is O(n)."
      },
      {
        question: "What is recursion?",
        options: [
          "A loop that runs indefinitely",
          "A function that calls itself with a base case to stop",
          "A way to reverse an array",
          "A sorting algorithm"
        ],
        correct: 1,
        explanation: "Recursion is when a function calls itself. Every recursive function needs a base case (stop condition) to prevent infinite loops."
      },
      {
        question: "What is the space complexity of merge sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correct: 2,
        explanation: "Merge sort requires O(n) additional space for the temporary arrays used during the merge step. This is its main drawback compared to in-place sorts."
      }
    ]
  },
  {
    id: "culture-quiz-1",
    date: "2026-06-30",
    category: "Developer Culture",
    title: "Developer Culture Quiz #1",
    description: "Famous bugs, tech history, memes, and the stories behind the tools we use.",
    difficulty: "easy" as const,
    questions: [
      {
        question: "What was the cost of the Ariane 5 explosion in 1996?",
        options: [
          "$1 million",
          "$10 million",
          "$370 million",
          "$1 billion"
        ],
        correct: 2,
        explanation: "The Ariane 5 rocket exploded 37 seconds after launch due to a 64-bit to 16-bit integer overflow in the inertial reference system. The software was reused from Ariane 4 without testing for the new rocket's higher velocity."
      },
      {
        question: "Who coined the term 'debugging'?",
        options: [
          "Linus Torvalds",
          "Grace Hopper",
          "Ada Lovelace",
          "Dennis Ritchie"
        ],
        correct: 1,
        explanation: "Grace Hopper found a moth stuck in a relay of the Harvard Mark II computer in 1947. She taped it into the logbook with the note 'first actual case of bug being found.'"
      },
      {
        question: "What is the world's most widely used programming language (by many measures)?",
        options: ["Python", "JavaScript", "Java", "C"],
        correct: 1,
        explanation: "JavaScript consistently ranks as the most used programming language on GitHub and Stack Overflow surveys, largely because it's the language of the web browser."
      },
      {
        question: "What does 'npm' stand for?",
        options: [
          "Node Package Manager",
          "New Project Manager",
          "Network Package Manager",
          "Node Program Manager"
        ],
        correct: 0,
        explanation: "npm originally stood for 'Node Package Manager.' Fun fact: it doesn't recursively acronymize — it's just called npm now."
      },
      {
        question: "How many npm packages exist (approximately)?",
        options: [
          "100,000",
          "500,000",
          "2 million+",
          "10 million+"
        ],
        correct: 2,
        explanation: "As of 2026, npm has over 2 million packages, making it the largest software registry in the world. The left-pad incident of 2016 showed how many packages depend on tiny utilities."
      }
    ]
  },
  {
    id: "ts-quiz-1",
    date: "2026-07-01",
    category: "TypeScript",
    title: "TypeScript Quiz #1",
    description: "Type narrowing, generics, utility types, and TypeScript-specific concepts.",
    difficulty: "medium" as const,
    questions: [
      {
        question: "What is the difference between `interface` and `type` in TypeScript?",
        options: [
          "There is no difference",
          "Interfaces can be extended/merged, types can create unions and intersections",
          "Types are faster at compile time",
          "Interfaces only work with classes"
        ],
        correct: 1,
        explanation: "Interfaces support declaration merging and can be extended. Types are more flexible — they can create unions, intersections, mapped types, and conditional types."
      },
      {
        question: "What does `Partial<T>` do?",
        options: [
          "Makes all properties required",
          "Makes all properties optional",
          "Makes all properties readonly",
          "Makes all properties nullable"
        ],
        correct: 1,
        explanation: "`Partial<T>` is a utility type that makes every property of T optional. Useful for update functions where you only want to pass changed fields."
      },
      {
        question: "What is a type guard?",
        options: [
          "A way to protect types from being modified",
          "A runtime check that narrows a type to a more specific type",
          "A compile-time only feature",
          "A way to create private types"
        ],
        correct: 1,
        explanation: "Type guards are runtime expressions that TypeScript uses to narrow types. Examples: `typeof`, `instanceof`, `in`, and custom predicate functions like `isString(x)`."
      },
      {
        question: "What is `infer` used for in TypeScript?",
        options: [
          "Declaring variables without types",
          "Extracting types within conditional types",
          "Creating type assertions",
          "Importing external types"
        ],
        correct: 1,
        explanation: "`infer` lets you extract a type within a conditional type. For example: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;`"
      },
      {
        question: "What is the `never` type used for?",
        options: [
          "To type null values",
          "For values that never occur (exhaustive checks, functions that always throw)",
          "To type any value",
          "To mark optional parameters"
        ],
        correct: 1,
        explanation: "`never` represents values that never occur. It's used for functions that always throw, exhaustive switch/if checks, and as the bottom type."
      }
    ]
  },
  {
    id: "docker-quiz-1",
    date: "2026-07-02",
    category: "DevOps",
    title: "Docker Quiz #1",
    description: "Containers, images, Dockerfiles, volumes, and networking fundamentals.",
    difficulty: "medium" as const,
    questions: [
      {
        question: "What is the difference between a Docker image and a container?",
        options: [
          "They are the same thing",
          "An image is a read-only template; a container is a running instance of an image",
          "A container is stored on disk; an image runs in memory",
          "An image is for Linux; a container is for Windows"
        ],
        correct: 1,
        explanation: "An image is an immutable template with the app and dependencies. A container is a runnable instance of an image — you can have multiple containers from one image."
      },
      {
        question: "What does the `COPY` instruction do in a Dockerfile?",
        options: [
          "Downloads files from the internet",
          "Copies files from the host machine into the image",
          "Moves files between image layers",
          "Copies files from one container to another"
        ],
        correct: 1,
        explanation: "`COPY` copies files from the build context (your host machine) into the image filesystem. `ADD` is similar but can also handle URLs and tar files."
      },
      {
        question: "What is a Docker volume used for?",
        options: [
          "Increasing CPU allocation",
          "Persisting data outside the container's writable layer",
          "Monitoring container performance",
          "Creating network connections"
        ],
        correct: 1,
        explanation: "Volumes store data persistently. When a container is deleted, data in its writable layer is lost, but volume data persists. Essential for databases."
      },
      {
        question: "What is multi-stage build in Docker?",
        options: [
          "Building images for multiple architectures",
          "Using multiple FROM instructions to optimize image size",
          "Building containers on multiple servers",
          "Running multiple processes in one container"
        ],
        correct: 1,
        explanation: "Multi-stage builds use multiple FROM instructions. You can build in one stage and copy only the final artifacts to a slim runtime stage, dramatically reducing image size."
      },
      {
        question: "What does `docker-compose up` do?",
        options: [
          "Downloads all Docker images",
          "Builds and starts all services defined in docker-compose.yml",
          "Pushes images to Docker Hub",
          "Stops all running containers"
        ],
        correct: 1,
        explanation: "`docker-compose up` builds (if needed) and starts all services from your docker-compose.yml. Add `-d` to run in detached mode."
      }
    ]
  },
  {
    id: "linux-quiz-1",
    date: "2026-07-03",
    category: "DevOps",
    title: "Linux Quiz #1",
    description: "File permissions, processes, shell commands, and Linux fundamentals.",
    difficulty: "medium" as const,
    questions: [
      {
        question: "What does `chmod 755` do?",
        options: [
          "Delete the file",
          "Owner: read+write+execute, Group+Others: read+execute",
          "Make the file read-only for everyone",
          "Change the file owner to root"
        ],
        correct: 1,
        explanation: "7 = rwx (4+2+1), 5 = r-x (4+0+1), 5 = r-x (4+0+1). Owner gets full access; group and others can read and execute but not modify."
      },
      {
        question: "What does the `|` (pipe) operator do in Linux?",
        options: [
          "Runs two commands simultaneously",
          "Passes the output of one command as input to the next",
          "Redirects output to a file",
          "Creates a symbolic link"
        ],
        correct: 1,
        explanation: "Pipe takes stdout from the left command and feeds it as stdin to the right command. `ls | grep .txt` lists files then filters for .txt files."
      },
      {
        question: "What is the difference between `kill` and `kill -9`?",
        options: [
          "They do the same thing",
          "kill sends SIGTERM (graceful), kill -9 sends SIGKILL (forced termination)",
          "kill -9 is faster",
          "kill only works on root processes"
        ],
        correct: 1,
        explanation: "`kill` sends SIGTERM, letting the process clean up. `kill -9` sends SIGKILL, which force-terminates immediately. Always try SIGTERM first."
      },
      {
        question: "What does `grep` do?",
        options: [
          "Copies files matching a pattern",
          "Searches for text patterns in files using regex",
          "Compresses files",
          "Lists directory contents"
        ],
        correct: 1,
        explanation: "grep (Global Regular Expression Print) searches file contents for lines matching a pattern. `grep -r \"TODO\" src/` searches recursively in src/."
      },
      {
        question: "What is `/dev/null`?",
        options: [
          "A directory for deleted files",
          "A special file that discards all data written to it (the 'black hole')",
          "A temporary file storage area",
          "A device driver for null printers"
        ],
        correct: 1,
        explanation: "`/dev/null` is a special file that discards everything written to it and returns nothing when read. Used to suppress output: `command > /dev/null`."
      }
    ]
  },
  {
    id: "react-quiz-1",
    date: "2026-07-04",
    category: "React",
    title: "React Quiz #1",
    description: "Hooks, state management, rendering, and React component patterns.",
    difficulty: "medium" as const,
    questions: [
      {
        question: "When does React re-render a component?",
        options: [
          "Only when the component's state changes",
          "When its state changes, props change, or parent re-renders",
          "Only when props change",
          "Only when the user interacts with the page"
        ],
        correct: 1,
        explanation: "React re-renders when: state changes, props change, or the parent component re-renders (unless memoized). Understanding this prevents performance issues."
      },
      {
        question: "What does `useEffect` with an empty dependency array `[]` do?",
        options: [
          "Runs on every render",
          "Runs once on mount, never again",
          "Never runs",
          "Runs on mount and when the component unmounts"
        ],
        correct: 1,
        explanation: "An empty dependency array means the effect has no dependencies to watch, so it only runs once after the initial render — the 'mount' lifecycle."
      },
      {
        question: "What is the purpose of `useCallback`?",
        options: [
          "To memoize a computed value",
          "To memoize a function to prevent unnecessary re-renders",
          "To handle async operations",
          "To create a reference to a DOM element"
        ],
        correct: 1,
        explanation: "`useCallback` memoizes a function definition between re-renders. Useful when passing callbacks to child components wrapped in `React.memo`."
      },
      {
        question: "What is React.memo used for?",
        options: [
          "Adding comments to React components",
          "Preventing re-renders when props haven't changed",
          "Storing component state in memory",
          "Creating a component cache"
        ],
        correct: 1,
        explanation: "`React.memo` is a higher-order component that skips re-rendering if props haven't changed (shallow comparison). It's a performance optimization."
      },
      {
        question: "What is the correct way to update state based on previous state?",
        options: [
          "`setState(state + 1)`",
          "`setState(prev => prev + 1)`",
          "`this.state.count += 1`",
          "`setState({ count: this.state.count + 1 })`"
        ],
        correct: 1,
        explanation: "Using the functional form `setState(prev => prev + 1)` ensures you're working with the latest state value, which is important when multiple updates are batched."
      }
    ]
  },
  {
    id: "rest-api-quiz-1",
    date: "2026-07-05",
    category: "General CS",
    title: "REST API Quiz #1",
    description: "HTTP methods, status codes, authentication, and REST API design principles.",
    difficulty: "medium" as const,
    questions: [
      {
        question: "Which HTTP method should be used to update an existing resource?",
        options: ["GET", "POST", "PUT/PATCH", "DELETE"],
        correct: 2,
        explanation: "PUT replaces the entire resource, PATCH updates specific fields. POST creates new resources, GET retrieves them, DELETE removes them."
      },
      {
        question: "What does HTTP status code 429 mean?",
        options: [
          "Not Found",
          "Unauthorized",
          "Too Many Requests (rate limited)",
          "Internal Server Error"
        ],
        correct: 2,
        explanation: "429 Too Many Requests means the client has exceeded the rate limit. The response should include a `Retry-After` header."
      },
      {
        question: "What is the difference between authentication and authorization?",
        options: [
          "They are the same thing",
          "Authentication verifies identity; authorization determines access permissions",
          "Authentication is for APIs; authorization is for databases",
          "Authentication is server-side; authorization is client-side"
        ],
        correct: 1,
        explanation: "Authentication answers 'Who are you?' (login). Authorization answers 'What can you do?' (permissions). You authenticate first, then are authorized for specific actions."
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
        explanation: "404 Not Found is the correct status code. Returning 200 with an empty body confuses clients and makes debugging harder."
      },
      {
        question: "What is idempotency in REST APIs?",
        options: [
          "The ability to cache responses",
          "Making the same request multiple times produces the same result",
          "Compressing response bodies",
          "Using HTTPS for all requests"
        ],
        correct: 1,
        explanation: "An idempotent operation produces the same result whether called once or many times. GET, PUT, DELETE are idempotent; POST is not."
      }
    ]
  },
  {
    id: "security-quiz-1",
    date: "2026-07-06",
    category: "Developer Culture",
    title: "Web Security Quiz #1",
    description: "XSS, CSRF, SQL injection, and other security fundamentals every developer should know.",
    difficulty: "medium" as const,
    questions: [
      {
        question: "What does XSS stand for in web security?",
        options: [
          "Cross-Site Scripting",
          "Cross-Server Signing",
          "Cross-System Storage",
          "Cross-Service Synchronization"
        ],
        correct: 0,
        explanation: "XSS (Cross-Site Scripting) allows attackers to inject malicious scripts into web pages viewed by other users. It's one of the most common web vulnerabilities."
      },
      {
        question: "Which HTTP header helps prevent clickjacking attacks?",
        options: [
          "Content-Security-Policy",
          "X-Frame-Options",
          "Strict-Transport-Security",
          "X-Content-Type-Options"
        ],
        correct: 1,
        explanation: "X-Frame-Options prevents your page from being embedded in an iframe on another site, which is how clickjacking attacks work."
      },
      {
        question: "What is the primary purpose of CSRF tokens?",
        options: [
          "Encrypting user passwords",
          "Preventing cross-site request forgery on forms",
          "Validating JSON Web Tokens",
          "Rate limiting API requests"
        ],
        correct: 1,
        explanation: "CSRF tokens are unique, unpredictable values embedded in forms. They ensure that form submissions come from your actual site, not from a malicious third party."
      },
      {
        question: "Which is the safest way to prevent SQL injection?",
        options: [
          "Use stored procedures only",
          "Escape all user input with addslashes()",
          "Use parameterized queries / prepared statements",
          "Validate input with regex"
        ],
        correct: 2,
        explanation: "Parameterized queries (prepared statements) separate SQL logic from data. The database treats user input as data, never as executable SQL code."
      },
      {
        question: "What does CORS stand for?",
        options: [
          "Cross-Origin Resource Sharing",
          "Cross-OS Runtime Security",
          "Central Origin Request System",
          "Cross-Origin Response Signing"
        ],
        correct: 0,
        explanation: "CORS (Cross-Origin Resource Sharing) is a browser mechanism that controls which origins can access resources. It's a security feature that prevents unauthorized cross-origin requests."
      }
    ]
  },
  {
    id: "kubernetes-quiz-1",
    date: "2026-07-07",
    category: "DevOps",
    title: "Kubernetes Quiz #1",
    description: "Pods, services, deployments, and cluster management fundamentals.",
    difficulty: "hard" as const,
    questions: [
      {
        question: "What is the smallest deployable unit in Kubernetes?",
        options: [
          "A node",
          "A container",
          "A pod",
          "A deployment"
        ],
        correct: 2,
        explanation: "A Pod is the smallest deployable unit. It groups one or more containers that share networking and storage. A pod wraps a single container in most cases, but can run sidecar containers too."
      },
      {
        question: "What does a Kubernetes Service provide?",
        options: [
          "Storage for pods",
          "A stable network endpoint for a set of pods",
          "CPU and memory limits",
          "Logging and monitoring"
        ],
        correct: 1,
        explanation: "A Service provides a stable IP address and DNS name for a set of pods. It load-balances traffic across pods and handles pod restarts and rescheduling."
      },
      {
        question: "What is the difference between a Deployment and a StatefulSet?",
        options: [
          "They are the same thing",
          "Deployments are for stateless apps; StatefulSets are for stateful apps requiring stable identity",
          "Deployments are faster than StatefulSets",
          "StatefulSets can only run one replica"
        ],
        correct: 1,
        explanation: "Deployments manage stateless apps with interchangeable pods. StatefulSets give each pod a unique, stable identity — essential for databases and message queues."
      },
      {
        question: "What is a ConfigMap in Kubernetes?",
        options: [
          "A map of all cluster nodes",
          "An object to store non-confidential configuration data as key-value pairs",
          "A network configuration file",
          "A monitoring dashboard"
        ],
        correct: 1,
        explanation: "ConfigMaps store configuration data (not secrets). They can be mounted as files or environment variables in pods, separating config from container images."
      },
      {
        question: "What command shows all pods across all namespaces?",
        options: [
          "`kubectl get pods`",
          "`kubectl get pods --all-namespaces`",
          "`kubectl describe pods`",
          "`kubectl list pods`"
        ],
        correct: 1,
        explanation: "`kubectl get pods` only shows pods in the current namespace. Add `--all-namespaces` to see pods across all namespaces in the cluster."
      }
    ]
  },
  {
    id: "react-hooks-quiz-1",
    date: "2026-07-04",
    category: "React",
    title: "React Hooks Quiz #1",
    description: "useState, useEffect, useRef, useCallback — test your hooks fundamentals.",
    difficulty: "medium" as const,
    questions: [
      {
        question: "When does `useEffect` run by default?",
        options: [
          "Only once when the component mounts",
          "After every render",
          "Only when state changes",
          "Before the component renders"
        ],
        correct: 1,
        explanation: "Without a dependency array, useEffect runs after every render. With an empty array [], it runs only once on mount. With dependencies, it runs when those values change."
      },
      {
        question: "What is the correct way to update state based on the previous value?",
        options: [
          "`setCount(count + 1)`",
          "`setCount(prev => prev + 1)`",
          "`count = count + 1`",
          "`this.setState({ count: count + 1 })`"
        ],
        correct: 1,
        explanation: "Using the functional updater `setCount(prev => prev + 1)` ensures you're working with the latest state value, which is critical when multiple updates happen in quick succession."
      },
      {
        question: "What does `useRef` return?",
        options: [
          "A value that triggers re-renders when changed",
          "An object with a `.current` property that persists across renders",
          "A memoized version of a value",
          "A DOM element reference"
        ],
        correct: 1,
        explanation: "useRef returns a mutable object `{ current: value }` that persists across renders without causing re-renders. It's commonly used for DOM references and storing mutable values."
      },
      {
        question: "Why must React hooks only be called at the top level?",
        options: [
          "They need to access global state",
          "React relies on call order to match state to components",
          "They require DOM access",
          "JavaScript doesn't allow function calls inside conditionals"
        ],
        correct: 1,
        explanation: "React tracks hook state by call order. If you call hooks conditionally, the order changes between renders and React can't match state correctly. This is called the Rules of Hooks."
      },
      {
        question: "What does `useCallback` do?",
        options: [
          "Caches the result of an expensive calculation",
          "Returns a memoized version of a callback function",
          "Prevents the component from re-rendering",
          "Creates a new function on every render"
        ],
        correct: 1,
        explanation: "useCallback returns a memoized version of the function that only changes when its dependencies change. This prevents unnecessary re-renders of child components that receive the function as a prop."
      },
    ]
  },
  {
    id: "nodejs-quiz-2",
    date: "2026-06-26",
    category: "Node.js",
    title: "Node.js Quiz #2",
    description: "Express middleware, event loop, and Node.js internals.",
    difficulty: "medium" as const,
    questions: [
      {
        question: "What does `app.use()` do in Express?",
        options: [
          "Defines a single route handler",
          "Registers middleware that runs for every request",
          "Sends a response to the client",
          "Creates a new Express router"
        ],
        correct: 1,
        explanation: "`app.use()` registers middleware that executes for every incoming request (or for a specific path if one is provided). It's the primary way to add logging, authentication, CORS, and other cross-cutting concerns."
      },
      {
        question: "What is the order of middleware execution in Express?",
        options: [
          "Last registered, first executed",
          "Random order",
          "First registered, first executed (in registration order)",
          "All middleware runs in parallel"
        ],
        correct: 2,
        explanation: "Express middleware executes in the exact order it's registered with `app.use()`. This is why order matters — e.g., body parser must come before route handlers that need the parsed body."
      },
      {
        question: "What does `next()` do in Express middleware?",
        options: [
          "Sends the response to the client",
          "Skips to the next route",
          "Calls the next middleware function in the chain",
          "Restarts the server"
        ],
        correct: 2,
        explanation: "`next()` passes control to the next middleware in the chain. Without it, the request hangs. You can also call `next('route')` to skip remaining handlers for the current route."
      },
      {
        question: "What is the purpose of `app.use(express.json())`?",
        options: [
          "Formats JSON responses",
          "Parses incoming JSON request bodies",
          "Validates JSON data",
          "Compresses JSON output"
        ],
        correct: 1,
        explanation: "`express.json()` is built-in middleware that parses incoming requests with JSON payloads. It reads the request body and makes it available as `req.body`. Without it, `req.body` is undefined."
      },
      {
        question: "What happens if you don't call `next()` or send a response in Express middleware?",
        options: [
          "The request times out and Express sends a default response",
          "The server crashes immediately",
          "The request hangs indefinitely (until client timeout)",
          "Express automatically skips to the next route"
        ],
        correct: 2,
        explanation: "If neither `next()` is called nor a response is sent, the request will hang until the client times out. Express doesn't have automatic timeouts — this is a common cause of production hangs."
      }
    ]
  },
  {
    id: "python-quiz-2",
    date: "2026-06-27",
    category: "Python",
    title: "Python Quiz #2 — Data Structures & Comprehensions",
    description: "Lists, dictionaries, sets, generators, and Pythonic idioms.",
    difficulty: "medium" as const,
    questions: [
      {
        question: "What is the output of: `[x**2 for x in range(5) if x % 2 == 0]`?",
        options: ["[0, 4, 16]", "[0, 1, 4, 9, 16]", "[0, 2, 4]", "[1, 4, 9, 16]"],
        correct: 0,
        explanation: "The list comprehension filters for even numbers (0, 2, 4) and squares them: 0²=0, 2²=4, 4²=16."
      },
      {
        question: "What is the difference between a list and a tuple in Python?",
        options: [
          "Lists are faster than tuples",
          "Tuples are mutable; lists are not",
          "Lists are mutable; tuples are immutable",
          "There is no difference"
        ],
        correct: 2,
        explanation: "Lists use [] and are mutable (can be modified after creation). Tuples use () and are immutable (cannot be changed). Tuples are slightly faster and can be used as dictionary keys."
      },
      {
        question: "What does `dict.fromkeys(['a', 'b', 'c'], 0)` return?",
        options: ["{'a': 'b': 'c': 0}", "{'a': 0, 'b': 0, 'c': 0}", "[('a', 0), ('b', 0), ('c', 0)]", "Error: fromkeys is not a dict method"],
        correct: 1,
        explanation: "`dict.fromkeys()` creates a new dictionary with all keys set to the same value. This is faster than a loop for initializing dictionaries with default values."
      },
      {
        question: "What is a generator in Python?",
        options: [
          "A function that creates random numbers",
          "A function that uses `yield` to produce values lazily one at a time",
          "A class that implements the __iter__ protocol",
          "A built-in module for generating UUIDs"
        ],
        correct: 1,
        explanation: "Generators use `yield` instead of `return` to produce values lazily. They don't store all values in memory — values are generated on-the-fly as you iterate, making them memory-efficient for large datasets."
      },
      {
        question: "What is the output of: `len(set([1, 2, 2, 3, 3, 3]))`?",
        options: ["6", "5", "3", "4"],
        correct: 2,
        explanation: "Sets automatically remove duplicates. The list [1, 2, 2, 3, 3, 3] becomes {1, 2, 3} in the set, which has length 3."
      }
    ]
  },
  goQuiz,
  goQuiz2,
  jsQuiz2,
  pythonQuiz3,
  rustQuiz2,
  typescriptQuiz2,
  typescriptQuiz3,
  javaQuiz2,
  {
    id: "kubernetes-quiz-1",
    date: "2026-07-03",
    category: "DevOps",
    title: "Kubernetes Quiz #1 — Pods, Deployments & Services",
    description: "K8s fundamentals — pods, deployments, services, configmaps, and kubectl commands.",
    difficulty: "medium" as const,
    questions: [
      {
        question: "What is the smallest deployable unit in Kubernetes?",
        options: ["Node", "Pod", "Container", "Deployment"],
        correct: 1,
        explanation: "A Pod is the smallest deployable unit. It wraps one or more containers that share networking and storage. You rarely create Pods directly — Deployments manage them."
      },
      {
        question: "What is the difference between a Deployment and a StatefulSet?",
        options: [
          "There is no difference",
          "Deployments are for stateless apps, StatefulSets are for stateful apps with stable identities",
          "Deployments only support one replica",
          "StatefulSets are for batch jobs"
        ],
        correct: 1,
        explanation: "Deployments provide unordered, stateless pod management. StatefulSets give pods stable network identities, persistent storage, and ordered deployment — essential for databases."
      },
      {
        question: "What Kubernetes object exposes your app to the network?",
        options: ["ConfigMap", "Secret", "Service", "Namespace"],
        correct: 2,
        explanation: "A Service provides a stable endpoint (IP + DNS) to access your pods. Types include ClusterIP (internal), NodePort, and LoadBalancer (external)."
      },
      {
        question: "What does `kubectl apply -f deployment.yaml` do?",
        options: [
          "Creates a new deployment only",
          "Creates or updates a resource to match the desired state in the file",
          "Deletes and recreates the deployment",
          "Only shows a diff without applying changes"
        ],
        correct: 1,
        explanation: "`kubectl apply` is declarative — it creates the resource if it doesn't exist, or updates it if it does. This is the recommended way to manage K8s resources."
      },
      {
        question: "What is a ConfigMap used for?",
        options: [
          "Storing secrets like passwords",
          "Storing non-sensitive configuration data as key-value pairs",
          "Monitoring cluster health",
          "Managing user permissions"
        ],
        correct: 1,
        explanation: "ConfigMaps store non-sensitive configuration (environment variables, config files, command-line args). For passwords and keys, use Secrets instead."
      }
    ]
  },
  databaseQuiz1,
  securityQuiz1,
  systemDesignQuiz1,
  cssQuiz3,
  nodeQuiz2,
  linuxQuiz1,
  htmlQuiz1,
  pythonQuiz4,
  nextjsQuiz1,
  rustQuiz3,
  gitQuiz1,
  htmlQuiz2,
  databaseQuiz2,
];
