# Validation And Scoring

Use this before saying a TDesign Vue Next task is complete.

## Verification Commands

Run the commands that exist in the project:

- dependency install when needed and approved
- `npm run typecheck` or equivalent
- `npm run lint`
- `npm run test`
- `npm run build`
- `npm run dev` plus browser smoke test for visible UI changes

If npm is unavailable in the Codex shell, use the project's package manager path or explain the limitation.

## Browser Smoke Test

For changed pages:

1. Start the local dev server.
2. Open the page in the in-app browser or Playwright.
3. Check desktop and mobile widths when the layout is responsive.
4. Verify no blank screen, console error, text overlap, broken table, or missing CSS.
5. Exercise search/reset, pagination, create/edit/delete, and permission-denied paths when present.

## Skill Output Rubric

Score the result from 1 to 5:

- 5: Based on current official docs/package metadata, matches local project patterns, passes available checks, and browser smoke test succeeds.
- 4: Correct implementation and most checks pass; minor unchecked paths or environment limitations are documented.
- 3: Works for the main path but has incomplete edge states, weak verification, or uncertain API assumptions.
- 2: Partially implemented; likely integration issues remain.
- 1: Not reliable; missing official-source grounding or cannot run.

Report the score with evidence, not vibes.

## Completion Checklist

- Official docs or local package types checked for nontrivial APIs.
- Existing TDesign Starter page templates and layout conventions were inspected and reused when the app is a Starter project.
- TDesign CSS import is present exactly once.
- Components use TDesign primitives and icons.
- Backend calls go through the request wrapper.
- Loading, empty, error, and mutation pending states exist.
- Routes and permissions match local conventions.
- Build/type/lint/test/browser checks were run or limitations are stated.
