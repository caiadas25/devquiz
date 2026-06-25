# DevQuiz — 30-Day Growth Journal

**Site:** [devquiz.vercel.app](https://devquiz.vercel.app)
**Repo:** [github.com/caiadas25/devquiz](https://github.com/caiadas25/devquiz)
**Theme:** Daily developer trivia quiz — gamified, social, habit-forming.
**Goal:** Drive traffic through engagement + viral sharing in 30 days.

---

## Day 1 — June 25, 2026

### What was built
- Created Next.js app with full quiz engine
- 6 pre-built quizzes (5 questions each, 30 total questions):
  1. JavaScript Quiz #1 — closures, hoisting, type coercion
  2. Python Quiz #1 — mutable defaults, list comprehensions, GIL
  3. Git Quiz #1 — branching, rebasing, stash, cherry-pick
  4. CSS Quiz #1 — flexbox, specificity, sticky positioning
  5. Computer Science Quiz #1 — complexity, data structures
  6. Developer Culture Quiz #1 — left-pad, cargo cult, rubber duck

### Features
- 15-second timer per question with animated progress bar
- Multiple choice with instant feedback (correct/incorrect flash)
- Explanations after each answer
- Score tracking with localStorage
- Streak tracking (consecutive days)
- Stats page (streak, average score, best score, total answered)
- Confetti animation for 80%+ scores
- Share score to Twitter/X
- Answer review after quiz completion
- Category color-coding
- Dark theme with violet accent

### Infrastructure
- GitHub repo: `caiadas25/devquiz`
- All pages pre-rendered (static + client-side interactivity)
- Vercel auto-deploy

### Strategy
- **Traffic source:** Social sharing + daily return visits
- **Unique angle:** Gamification (streaks, scores, share cards) creates habit loop
- **Growth mechanic:** Share results → friends try to beat score → viral loop

### Next steps
- Add difficulty levels (Easy/Medium/Hard)
- Add quiz categories page
- Add dark/light mode toggle
- Write blog post: "How I Let an AI Build a Daily Quiz Site"

---

## Day 2 — June 26, 2026

### What was built
- Added **TypeScript Quiz #1** (5 questions, hard difficulty):
  - `unknown` vs `any`, `satisfies` operator, conditional types, `Pick<T, K>`, `interface` vs `type`
  - TypeScript is a highly relevant topic for the target audience and hasn't been covered yet
- Added **difficulty level system** to all quizzes:
  - Each quiz now has a `difficulty` field: easy, medium, or hard
  - Color-coded badges on quiz cards (green/yellow/red)
  - Retroactively assigned difficulties: Git, CSS, Culture = easy; JS, Python, CS = medium; TypeScript = hard
- Added **Categories page** (`/categories`):
  - Browse all quizzes filtered by category
  - Category filter pills with counts
  - Difficulty badges displayed alongside category badges
  - Completion checkmarks from localStorage

### Quiz count
- **7 quizzes** (35 total questions)
- Categories: JavaScript, TypeScript, Python, Git, CSS, General CS, Developer Culture

### Feature observations
- Difficulty levels add a decision layer for users — they can pick quizzes matching their skill
- TypeScript is a good category addition; it's a natural fit alongside JavaScript
- The categories page improves discoverability as quiz count grows

### Strategy adjustments
- Starting to diversify categories beyond the original six
- TypeScript quiz positioned as "hard" to attract experienced developers who want a challenge
- Will continue adding difficulty-varied quizzes to balance accessibility and depth

### Next steps
- Add dark/light mode toggle
- Write blog post: "How I Let an AI Build a Daily Quiz Site"
- Consider adding a "random quiz" feature for repeat visitors

---

## Day 3 — June 25, 2026

### What was built
- Added **Docker Quiz #1** (5 questions, medium difficulty):
  - Image vs container, docker build -t, Dockerfile, volumes, .dockerignore
  - Docker is a highly relevant topic for the target audience
  - Targets the DevOps audience segment
- Added **DevOps category** to the quiz type system
- Updated CATEGORIES type to include 'DevOps'

### Quiz count
- **8 quizzes** (40 total questions)
- Categories: JavaScript, TypeScript, Python, Git, CSS, General CS, Developer Culture, DevOps

### Feature observations
- Docker quiz bridges the gap between pure coding quizzes and infrastructure
- DevOps category opens up new audience segments (SREs, platform engineers)
- Medium difficulty keeps it accessible while still challenging

### Strategy adjustments
- Docker is a natural fit for the developer audience — most developers use Docker daily
- Adding DevOps category expands the site beyond pure coding
- The quiz is shareable and creates engagement loops

### Next steps
- Add Kubernetes Quiz #1 (extends DevOps category)
- Add dark/light mode toggle
- Write blog post: "How I Let an AI Build a Daily Quiz Site"
- Consider adding a "random quiz" feature for repeat visitors
- Add quiz difficulty filtering on categories page

---

## Day 4 — June 25, 2026

### What was built
- Added **Linux & Shell Quiz #1** (5 questions, easy difficulty):
  - chmod permissions (755), shell redirects (>, >>), grep -r, shebang, ps aux | grep
  - Targets the DevOps audience segment
  - Easy difficulty makes it accessible to newcomers

### Quiz count
- **9 quizzes** (45 total questions)
- Categories: JavaScript, TypeScript, Python, Git, CSS, General CS, Developer Culture, DevOps (2 quizzes)

### Feature observations
- Linux/Shell quiz is a natural complement to the Docker quiz
- DevOps category now has 2 quizzes (Docker + Linux), making it a more substantial category
- Easy difficulty keeps the quiz accessible while still educational

### Strategy adjustments
- Linux quiz fills a gap in the DevOps category (Docker covered containers, now Linux covers the underlying OS)
- The quiz targets a broad audience — most developers use the command line daily
- Combined with the Docker quiz, DevOps now has 10 questions covering the stack

### Metrics
- **Quizzes live:** 9
- **Total questions:** 45
- **Build status:** clean

### What's working
- DevOps category is growing into a real audience segment
- Easy quizzes attract newcomers, hard quizzes attract experienced devs
- Consistent quiz structure makes adding new quizzes fast

### What needs attention
- Still no external traffic (need social sharing)
- Blog post not yet written
- Dark mode not implemented yet

### Next day's plan
- Add Kubernetes Quiz #1 (extends DevOps category further)
- Add dark/light mode toggle
- Write blog post: "How I Let an AI Build a Daily Quiz Site"
- Add quiz difficulty filtering on categories page

---

## Day 5 — June 25, 2026 (Sprint 5)

### What was built
- Added **React Quiz #1** (5 questions, medium difficulty):
  - useEffect with empty deps, useState vs useReducer, Rules of Hooks, React.memo, functional state updates
  - React is the most popular frontend framework — huge audience
  - Targets the frontend developer audience segment
- Added **REST API Quiz #1** (5 questions, easy difficulty):
  - HTTP methods, status codes, CORS, auth vs authz, 404 responses
  - REST APIs are universal — every developer needs this knowledge
  - Easy difficulty makes it accessible to newcomers

### Quiz count
- **11 quizzes** (55 total questions)
- Categories: JavaScript, TypeScript, Python, Git, CSS, General CS, Developer Culture, DevOps (2), React, REST API

### Feature observations
- React quiz is a major category addition — React is the most popular frontend framework
- REST API quiz bridges the gap between frontend and backend knowledge
- 10 categories now covered, making the site more discoverable
- Easy + medium difficulty mix keeps content accessible while challenging

### Strategy adjustments
- React adds the largest frontend audience segment to the site
- REST API quiz is universally relevant — every developer works with APIs
- Combined with existing DevOps quizzes, the site now covers the full stack

### Metrics
- **Quizzes live:** 11
- **Total questions:** 55
- **Build status:** clean

### What's working
- React category is a major audience attractor
- REST API category bridges frontend/backend knowledge
- 10 categories give users more browsing options
- Consistent quiz structure makes adding new quizzes fast

### What needs attention
- Still no external traffic (need social sharing)
- Blog post not yet written
- Dark mode not implemented yet
- Need to add more quizzes to React and REST API categories

### Next day's plan
- Add Kubernetes Quiz #1 (extends DevOps category further)
- Add dark/light mode toggle
- Write blog post: "How I Let an AI Build a Daily Quiz Site"
- Add quiz difficulty filtering on categories page

---

## Day 6 — June 25, 2026 (Growth Sprint)

### What was built
- **SEO metadata added to ALL pages** (quiz, categories, stats):
  - Quiz pages now have unique title/description/OpenGraph via generateMetadata
  - Categories page: "Quiz Categories — Browse by Topic | DevQuiz"
  - Stats page: "Your Quiz Stats — Track Your Progress | DevQuiz"
  - Restructured quiz page: server component (metadata) + client component (QuizClient.tsx)
- **New quiz added: Web Security Quiz #1** (5 questions, medium difficulty):
  - XSS, CSRF tokens, SQL injection prevention, CORS
  - Security is a hot topic — highly shareable content
  - Targets "web security quiz" and "developer security knowledge" searches

### Quiz count
- **12 quizzes** (60 total questions)
- Categories: JavaScript, TypeScript, Python, Git, CSS, General CS, Developer Culture (2), DevOps (2), React, REST API

### SEO impact
- All pages now have unique, keyword-rich titles and descriptions
- Quiz pages target "[Quiz Name] — Test Your [Category] Knowledge | DevQuiz"
- Web Security quiz targets high-interest security topic

### What worked
- Script-based restructuring (server + client components) was reliable
- Security quiz is inherently shareable — people love testing their security knowledge
- Metadata generation from quiz data ensures consistent, keyword-rich titles

### Metrics
- **Quizzes live:** 12 (up from 11)
- **Total questions:** 60 (up from 55)
- **Build status:** clean, all static
- **SEO metadata:** All pages covered (was missing on quiz/categories/stats)

### What needs attention
- Still no external traffic (need social sharing)
- Blog post not yet written
- Dark mode not implemented yet

### Next steps
- Add Kubernetes Quiz #1 (extends DevOps category)
- Add dark/light mode toggle
- Write blog post: "How I Let an AI Build a Daily Quiz Site"
- Share Web Security Quiz on Twitter/X and Reddit
