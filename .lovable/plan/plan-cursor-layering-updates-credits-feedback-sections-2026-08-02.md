# Plan: Cursor layering + Updates / Credits / Feedback sections

## 1. Cursor layering fix

Move the four floating collaborator cursors in `Hero` so they render **above** the headline text instead of behind it.

- Change `CollabCursors` container `zIndex` from `10` to `40` (above the hero content wrapper's `z-30`).
- Keep `pointer-events-none` and `aria-hidden` so they don't block clicks or affect screen readers.

## 2. Three new homepage sections

Add the following as scrollable sections on the existing landing page (`src/routes/index.tsx`), wired into the navbar and footer.

### A. Updates section (`#updates`)

A vertical timeline/changelog of anydown releases.

- Each item: version tag (e.g. "v2.0"), date, title, and a short bullet list of changes.
- Start with 3–4 realistic entries (latest first).
- Style matches the existing dark/industrial aesthetic (yellow accent for latest, muted gray for older).

### B. Credits section (`#credits`)

A grid acknowledging the tech stack, libraries, and inspirations behind the app.

- Cards for: yt-dlp, FFmpeg, Chaquopy, TanStack Start, Tailwind CSS, Space Grotesk / IBM Plex Mono fonts.
- Optional: a "Built by" card linking to the developer portfolio/GitHub.
- Each card shows a name, one-line description, and an external link.

### C. Feedback & Suggestions section (`#feedback`)

A public feedback board + submission form.

- **Public board**: displays the most recent submitted feedback (name/initial, message, category, timestamp).
- **Submission form**: fields for name (optional), category (Bug / Feature / Suggestion / Other), and message.
- On submit, append the entry to a connected Google Sheet via a server function.
- After submit, show a success toast and refresh the public board.

## 3. Backend for feedback: Google Sheets

### Setup

- Link a Google Sheets workspace connection using the Lovable connector gateway.
- The app will read/write a single sheet (e.g. `Feedback` tab) with columns: `timestamp`, `name`, `category`, `message`.

### Server functions

- `submitFeedback`: appends a validated row to the sheet.
- `listFeedback`: reads the latest N rows and returns them for the public board.

### Pros & cons of the chosen approach

**Google Sheets (chosen)**

- Pros: free, familiar spreadsheet UI, no database setup, easy to share/export/filter manually.
- Cons: rate limits on writes, not ideal for high concurrency, public reads require a server round-trip, schema is loose.

**Alternatives considered**

- **Lovable Cloud (Postgres)**: proper database, fast public reads, scales well, can enforce schema; requires enabling Cloud.
- **Email-only (Resend/Formspree)**: simplest setup, no storage UI; feedback is private and unstructured, no public board.
- **Airtable**: spreadsheet-like but API-first and queryable; adds another paid/external service.

## 4. Navigation & footer updates

- Add `UPDATES`, `CREDITS`, and `FEEDBACK` scroll links to the navbar (desktop + mobile drawer).
- Update the footer link columns to point to the new section IDs (`#updates`, `#credits`, `#feedback`).

## 5. SEO / metadata

- Keep the existing index route `head()` metadata; no new routes needed since these are homepage sections.

## Files expected to change

- `src/components/anydown/CollabCursors.tsx` — z-index fix.
- `src/components/anydown/Updates.tsx` — new section.
- `src/components/anydown/Credits.tsx` — new section.
- `src/components/anydown/Feedback.tsx` — new section + form.
- `src/lib/feedback.functions.ts` — server functions for Google Sheets read/write.
- `src/components/anydown/Navbar.tsx` — add section links.
- `src/components/anydown/Footer.tsx` — update link columns.
- `src/routes/index.tsx` — import and render the three new sections.
