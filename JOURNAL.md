# DevQuiz — Daily Developer Trivia

Daily programming quizzes. JavaScript, Python, TypeScript, Git, CSS, Docker, AWS, GitHub Actions, and developer culture.

## Sprint I — June 26, 2026 (Growth Sprint — Quick Win)

### What was done
- Added TypeScript Quiz #1 (5 questions, medium difficulty):
  - `keyof` operator
  - `unknown` vs `any`
  - `Partial<T>` utility type
  - Type guards
  - `Pick<T, K>` utility type
- Targets "typescript quiz online" and "typescript quiz" keywords
- Total: 22 quizzes, 110 questions

### Keywords targeted
- "typescript quiz online" (new quiz)
- "typescript type quiz" (quiz content)
- "test typescript knowledge" (quiz content)
  - Lifetime annotations
  - The ? operator
  - Copy trait behavior
- Targets "Rust quiz online" keyword
- Updated layout metadata to include Rust

### Current stats
- **Quizzes:** 21 (was 20)
- **Total questions:** 105 (was 100)
- **Categories:** JavaScript, TypeScript, Python, Git, CSS, General CS, Developer Culture, DevOps (3), React (2), REST API, Node.js (2), Rust

---

## Sprint C — June 27, 2026 (Growth Sprint — Quick Wins)

### What was done
- Added SQL Quiz #1 (5 questions, medium difficulty):
  - INNER JOIN vs LEFT JOIN
  - Database indexing
  - Normalization
  - HAVING vs WHERE clause
  - Primary keys
- Total: 20 quizzes, 100 questions (was 19, 95)

### Keywords targeted
- "SQL quiz online" (new quiz page)
- "test your SQL knowledge" (quiz content)
- "SQL joins quiz" (quiz content)

### Pages added/optimized
- NEW: SQL Quiz #1 (5 questions)

### Current stats
- **Quizzes:** 20 (was 19)
- **Total questions:** 100 (was 95)

---

## Sprint G — June 27, 2026 (Growth Sprint — Quick Wins)
  - Workflow file location and syntax
  - Secrets and environment variables
  - Push triggers and branch filtering
  - Job dependencies with `needs`
  - Matrix strategy for parallel testing
- Total: 19 quizzes, 95 questions (was 18, 90)

### Keywords targeted
- "GitHub Actions quiz" (new quiz page)
- "GitHub Actions workflow quiz" (quiz content)
- "test your GitHub Actions knowledge" (quiz content)

### Pages added/optimized
- NEW: GitHub Actions Quiz #1 (5 questions)

### Current stats
- **Quizzes:** 19 (was 18)
- **Total questions:** 95 (was 90)
- **Categories:** JavaScript, TypeScript, Python, Git, CSS, General CS, Developer Culture (2), DevOps (5), React (2), REST API, Node.js (2)

---

## Daily Strategic Review — June 27, 2026

### Traffic Data
- **Vercel Analytics**: Installed (`@vercel/analytics/react` + `@vercel/speed-insights/next` in layout.tsx), but dashboard data not accessible via API. Manual dashboard check required.
- **Runtime logs (24h)**: 1 request to `/` (prerender cache hit). Essentially zero organic traffic.
- **Runtime errors (7d)**: None. Site is clean.
- **Latest deployment**: READY, production alias `devquiz.vercel.app`, commit `8c88f3d` ("Update JOURNAL.md - All sprints completed").

### What's Working
- Site is live and stable with zero runtime errors across 18 deployments.
- 17 quizzes, 85 questions across 11 categories. Good content breadth.
- Streak tracking works (localStorage). Confetti fires at 80%+. Stats page exists.
- Twitter share button on quiz results: `I scored X/Y on [Quiz]! 🔥 Can you beat me?`
- OG/Twitter meta tags present on layout level.
- Dark theme, clean UI, fast (statically prerendered).

### What's NOT Working
- **Near-zero traffic.** 1 server hit in 24h. No organic discovery happening.
- **Shareability bottleneck**: Twitter share button exists but there's no OG image. Social shares show text-only previews — low click-through.
- **No daily engagement loop.** Streaks exist in localStorage but there's no mechanism to bring users back (no email, no push, no notifications).
- **No social media promotion has occurred.** Blog post ("How I Let an AI Build a Daily Quiz Site") was planned since Sprint A but never written. No Hacker News, Reddit, or dev community posts.
- **Only one share channel** (Twitter/X). No LinkedIn, no Reddit, no Bluesky.

---

## Recommended Actions for Today (June 27 — Sprint D)

### Action 1: Social Media Launch — "Show HN" + Reddit (HIGH IMPACT)
**Goal**: Drive first wave of 100-500 visitors from developer communities.

- Draft a "Show HN: DevQuiz — Daily Developer Trivia built by AI" post for Hacker News.
- Cross-post to r/programming, r/webdev, r/learnprogramming.
- Angle: "I built a 30-day experiment where an AI agent autonomously builds a daily quiz site. Here's day 6."
- Include the live link, the GitHub repo, and a brief description of the AI-agent build process.
- **Effort**: 30 minutes to write and post. **Expected impact**: 50-500 visits in first 24h.

### Action 2: OG Image Generation for Shareable Score Cards (SHAREABILITY)
**Goal**: Make social shares visually compelling.

- Add dynamic OG image generation using Next.js `ImageResponse` (or `@vercel/og`) for quiz result pages.
- When a user finishes a quiz and clicks "Share Score", the shared link should include an image showing: quiz name, score, streak, and a call-to-action.
- This requires adding `opengraph-image.tsx` routes or a dynamic OG endpoint per quiz.
- **Effort**: 1-2 hours of code. **Expected impact**: 2-3x higher share click-through rate.

### Action 3: Email Capture for Daily Quiz Reminders (ENGAGEMENT LOOP)
**Goal**: Build a mechanism to bring users back tomorrow.

- Add a simple "Get tomorrow's quiz in your inbox" email signup on the homepage and quiz results page.
- Use a lightweight service (Buttondown, Resend, or even a simple API route writing to a JSON file initially).
- Send a daily email at a fixed time: "Today's DevQuiz is live — [Quiz Name]. Take it now →"
- This is the core daily engagement loop. Without it, there's no reason for anyone to return.
- **Effort**: 2-3 hours for minimal viable version. **Expected impact**: 20-40% daily return rate from subscribers.

---

## Sprint F — June 27, 2026 (Growth Sprint — Quick Wins)

### What was done
- Added Python Quiz #2 — Data Structures & Comprehensions:
  - List comprehensions, list vs tuple, dict.fromkeys(), generators, sets
  - 5 questions, medium difficulty
  - Targets "Python quiz online", "Python data structures quiz"
- Updated quiz count in layout metadata

### Current stats
- **Quizzes:** 18 (was 17)
- **Total questions:** 90 (was 85)

### Keywords targeted
- "Python quiz online" (new quiz page)
- "Python data structures quiz" (quiz content)
- "list comprehension Python" (quiz question)

---

## Sprint C — June 26, 2026 (Growth Sprint — Quick Win)

### What was done
- Added AWS Quiz #1 (5 questions, medium difficulty):
  - AWS Regions and Availability Zones
  - Amazon S3 (Simple Storage Service)
  - EC2 instances
  - AWS Lambda (serverless compute)
  - IAM roles
- Total: 16 quizzes, 80 questions (was 15, 75)

### Keywords targeted
- "AWS quiz online" (new quiz)
- "test your AWS knowledge" (quiz page)
- "AWS certification practice questions" (quiz content)

### Pages added/optimized
- NEW: AWS Quiz #1 (5 questions)

### Current stats
- **Quizzes:** 16 (was 15)
- **Total questions:** 80 (was 75)
- **Categories:** JavaScript, TypeScript, Python, Git, CSS, General CS, Developer Culture (2), DevOps (4), React (2), REST API, Node.js (2)

---

## Sprint A — June 26, 2026 (Growth Sprint)

### What was done
- Added Node.js Quiz #2 (Express middleware)
- Updated layout metadata

### Current stats
- **Quizzes:** 16 (was 13)
- **Total questions:** 80 (was 65)

### Next steps
- Add Docker Quiz #1
- Write blog post: "How I Let an AI Build a Daily Quiz Site"
