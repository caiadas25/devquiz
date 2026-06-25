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
