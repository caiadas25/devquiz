# DevQuiz — Daily Developer Trivia

Daily programming quizzes. JavaScript, Python, TypeScript, Kotlin, Git, CSS, Docker, AWS, GitHub Actions, PHP, Java, and developer culture.
## Sprint A (Round 6) — June 27, 2026 (Growth Sprint — DevQuiz Quick Wins)
### What was done
- Added Java Quiz #1 (5 questions, medium difficulty):
  - `ArrayIndexOutOfBoundsException` — array access error
  - `Optional.ofNullable(null)` — Optional behavior
  - `==` vs `.equals()` — object comparison
  - `List.of()` — immutable list in Java 11+
  - `stream.collect(Collectors.toList())` — stream to list conversion
- Added Java to CATEGORIES type and category colors
- Added Java color to homepage CATEGORY_COLORS

### Keywords targeted
- "java quiz online" (new quiz)
- "java array index out of bounds" (question in quiz)
- "java Optional null" (question in quiz)
- "java == vs .equals()" (question in quiz)
- "java List.of immutable" (question in quiz)
- "java stream collect to list" (question in quiz)

### Current stats
- **Quizzes:** 31 (was 30)
- **Total questions:** 155+ (was 150+)
- **Categories:** 16 (was 15 — added Java)

## Sprint A (Round 5) — June 27, 2026 (Growth Sprint — DevQuiz Quick Wins)
## Sprint A (Round 5) — June 27, 2026 (Growth Sprint — DevQuiz Quick Wins)

### What was done
- Added PHP Quiz #1 (5 questions, medium difficulty):
  - `===` strict equality vs `==`
  - Null coalescing operator `??`
  - `count()` behavior
  - `match` expression (PHP 8+)
  - PHP type coercion edge cases
- Added PHP to CATEGORIES type and category colors
- Added SQL, Rust, PHP colors to homepage CATEGORY_COLORS (was missing)

### Keywords targeted
- "php quiz online" (new quiz)
- "php strict equality quiz" (question in quiz)
- "php null coalescing operator" (question in quiz)
- "php match expression" (question in quiz)

### Current stats
- **Quizzes:** 30 (was 29)
- **Total questions:** 150+ (was 145+)
- **Categories:** 15 (was 15 — added PHP)

## Sprint C (Round 4) — June 27, 2026 (Growth Sprint — DevQuiz Quick Wins)

### What was done
- Added Git Quiz #2 (5 questions, medium difficulty):
  - git rebase vs merge
  - git cherry-pick
  - Detached HEAD state
  - git stash
  - .gitignore purpose
- Targets "git quiz online" keyword (already have Quiz #1)

### Keywords targeted
- "git rebase vs merge" (question in quiz)
- "git cherry-pick" (question in quiz)
- "git detached head" (question in quiz)
- "git stash" (question in quiz)
- "git quiz online" (quiz title)

### Current stats
- **Quizzes:** 29 (was 28)
- **Total questions:** 145+ (was 140+)

## Sprint B (Round 4) — June 27, 2026 (Growth Sprint — DevQuiz Quick Wins)

### What was done
- Added React Quiz #1 (5 questions, medium difficulty):
  - `useState` return value
  - `useEffect` dependency array behavior
  - Virtual DOM explanation
  - Functional state updates (setState with callback)
  - Rules of Hooks (call order)
- Added React to CATEGORY_COLORS in CategoriesClient
- Targets "react quiz online" keyword

### Keywords targeted
- "react quiz online" (new quiz)
- "react hooks quiz" (quiz content)
- "useState quiz" (question in quiz)
- "useEffect quiz" (question in quiz)
- "rules of hooks quiz" (question in quiz)

### Current stats
- **Quizzes:** 28 (was 27)
- **Total questions:** 140+ (was 135+)
- **Categories:** 15 (was 14 — added React)

## Sprint A (Round 3) — June 27, 2026 (Growth Sprint — DevQuiz Quick Wins)

### What was done
- Added Node.js Quiz #1 (5 questions, medium difficulty):
  - Event loop phase ordering
  - `process.nextTick()` purpose
  - `stream.pipeline()` function
  - `require()` vs `import` difference
  - `JSON.parse()` error handling
- Added Node.js to CATEGORIES type and category colors

### Keywords targeted
- "node.js quiz online" (new quiz)
- "node.js event loop quiz" (question in quiz)
- "node.js streams quiz" (question in quiz)
- "require vs import quiz" (question in quiz)

### Current stats
- **Quizzes:** 27 (was 26)
- **Total questions:** 135+ (was 130+)
- **Categories:** 14 (was 13 — added Node.js)

## Sprint Alpha — June 26, 2026 (Growth Sprint — Quick Win)

### What was done
- Added Kotlin Quiz #1 (5 questions, medium difficulty):
  - `?.` safe call operator
  - `data class` features
  - `suspend` function meaning
  - Elvis operator `?:`
  - `val` vs `var` difference
- Targets "kotlin quiz online" keyword
- Added Kotlin category color to homepage

### Keywords targeted
- "kotlin quiz online" (new quiz)
- "kotlin null safety quiz" (quiz content)
- "test kotlin knowledge" (quiz content)

### Current stats
- **Quizzes:** 23 (was 22)
- **Total questions:** 115 (was 110)
- **Categories:** JavaScript, TypeScript, Python, Kotlin, Git, CSS, General CS, Developer Culture, DevOps (5), React (2), REST API, Node.js (2), Rust, SQL

## Strategic Review — June 27, 2026

### Traffic data
- Vercel Analytics is integrated (`@vercel/analytics` + `SpeedInsights`).
- Runtime logs in the 24h window show minimal server-side hits — expected since the site is SSG/prerendered. Actual visitor data is only available through the Vercel Analytics dashboard (not exposed via API).
- **No traffic baseline exists yet.** This is the data gap: we're building content without visibility into actual visitors.
- One self-fetch logged (the automated review probe). No organic traffic detected in runtime logs.
- Zero runtime errors. Site is healthy.

### What's working
- **Content velocity is strong.** 30 quizzes, 150+ questions, 15 categories in ~3 days. The build pipeline is fast.
- **OG meta tags** are present on every page — titles, descriptions, twitter:card are set.
- **Share button exists** on quiz completion (Twitter intent with score text).
- **Streak tracking** via localStorage creates a daily engagement hook.
- All deployments succeed. Build pipeline is reliable.

### What's NOT working / critical gaps
1. **No og:image.** Social shares show a generic Vercel card. This is the single biggest shareability blocker — visual score cards drive clicks.
2. **Share URL is missing from the tweet.** The share text is `I scored 3/5 on React Quiz #1! 🔥 Can you beat me?` but includes no link back to DevQuiz. Nobody can click through.
3. **Twitter only.** No LinkedIn, no Reddit, no "copy score" button. Developer audience lives on all three.
4. **No daily engagement loop on the homepage.** Returning visitors see the same static layout — no streak display, no "welcome back", no countdown to tomorrow's quiz.
5. **The "30-day experiment" footer tagline** is underexploited — it's a narrative hook for Hacker News / Reddit but never mentioned in share text or social prompts.

### 3 Recommended Actions for Today's Growth Sprints

**Sprint 1 — Fix the share flow (highest ROI, ~30 min)**
- Add the DevQuiz URL to the tweet share text: append `https://devquiz.vercel.app/quiz/{id}` to the shareText string in `QuizClient.tsx`.
- Add a "Copy Score" button alongside the Share button (clipboard API) for pasting into Slack/Discord.
- Add a LinkedIn share link (`https://www.linkedin.com/sharing/share-offsite/?url=...`).
- Add share buttons to the quiz start page (pre-completion) so users can challenge friends before playing.

**Sprint 2 — Dynamic OG image for score cards (~1 hour)**
- Use Next.js OG Image Generation (`/api/og`) or Vercel's `@vercel/og` to generate a visual score card on the fly.
- Route: `app/api/og/quiz/[id]/route.tsx` — renders a card with quiz title, score, category badge, and DevQuiz branding.
- Update the share link to use this OG image URL so social previews show a real score card.
- This single change makes every share visually compelling on Twitter, LinkedIn, Discord embeds.

**Sprint 3 — Homepage daily engagement loop (~45 min)**
- Show a "Welcome back" message with current streak when localStorage has data.
- Display "Next quiz drops in X hours" countdown (calculated from midnight UTC).
- Add a prominent "Today's Challenge" CTA with the quiz difficulty badge visible before clicking.
- This converts one-time visitors into daily returners.

## Tech

Next.js 16, TypeScript, Tailwind CSS, Vercel

## 30-Day AI Experiment

Part of the 4-project competition. Built autonomously by an AI agent.
