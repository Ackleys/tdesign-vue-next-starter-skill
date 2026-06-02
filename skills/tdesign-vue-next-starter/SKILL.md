---
name: tdesign-vue-next-starter
description: Build, scaffold, modify, debug, and review Vue 3 interfaces that use TDesign Starter, TDesign Vue Next, tdesign-vue-next components, tdesign-icons-vue-next icons, Vue Router, Pinia, Vite, axios request wrappers, permission-controlled routes, layouts, forms, tables, charts, dashboards, and backend-connected pages. Use when Codex needs official TDesign Vue Next patterns, full component coverage, Starter project structure, backend UI integration, or reliable TDesign-based frontend implementation.
---

# TDesign Vue Next Starter

Use this skill to build or modify Vue 3 admin UIs with TDesign Starter and TDesign Vue Next. Base decisions on current official docs and installed package metadata, not memory.

## First Steps

1. Identify whether the project is a TDesign Starter app, a plain Vue 3 app, or a backend repo that needs a new UI.
2. Inspect `package.json`, `vite.config.*`, `src/main.*`, `src/router`, `src/pages`, `src/layouts`, `src/store`, and request utilities before changing code.
3. Verify current TDesign docs or package metadata when versions, APIs, CLI commands, component props, or permissions matter.
4. Prefer local project conventions over generic examples.
5. Use TypeScript and Vue 3 Composition API patterns unless the project already uses a different style.

## Official Sources

Read the relevant reference before implementation:

- Starter setup and development workflow: `references/starter.md`
- Component library usage, import styles, and UI implementation rules: `references/vue-next-components.md`
- Official TDesign MCP setup and tool usage: `references/mcp.md`
- Admin integration patterns for backend UIs: `references/backend-admin-patterns.md`
- Complex scenarios and pre-flight checks: `references/advanced-scenarios.md`
- Validation checklist and scoring rubric: `references/validation.md`

When the user asks for latest behavior or a component API, browse official sources:

- TDesign Starter Vue Next docs: https://tdesign.tencent.com/starter/docs/vue-next/get-started
- TDesign Vue Next docs: https://tdesign.tencent.com/vue-next/overview
- TDesign Vue Next MCP docs: https://tdesign.tencent.com/vue-next/mcp
- TDesign MCP Server repository: https://cnb.cool/tencent/tdesign/tdesign-mcp-server
- npm package metadata: https://www.npmjs.com/package/tdesign-vue-next

## Implementation Workflow

1. Choose a path:
   - Existing Starter app: do not reinitialize or reinstall blindly. Reuse existing dependencies, global registration, CSS imports, router, layout, request wrapper, and Pinia stores; add pages under `src/pages`, route records under `src/router`, service calls near existing API modules, and state in Pinia stores only when shared.
   - Fresh Starter app: verify current official Starter docs/package metadata, then initialize with `tdesign-starter-cli` / `td-starter init`, install dependencies with the detected package manager, configure env variables, and run the dev server before adding custom pages.
   - Plain Vue 3 app: install `tdesign-vue-next` when missing, register components according to the project's import strategy, import TDesign CSS exactly once, add `tdesign-icons-vue-next` icon imports when needed, and add TDesign components incrementally.
   - Backend repo without UI: scaffold a separate frontend package unless the backend already has a frontend build system; document the frontend path, package manager, dev command, and backend API base URL.
2. Build the actual work surface first. For admin systems, prioritize dense, scannable operational views over marketing pages.
3. Use TDesign primitives for controls: `t-table`, `t-form`, `t-input`, `t-select`, `t-button`, `t-dialog`, `t-drawer`, `t-tabs`, `t-card`, `t-space`, `t-pagination`, `t-tag`, `t-alert`, and `t-loading`.
4. Use `tdesign-icons-vue-next` for icons instead of custom SVGs when an icon exists.
5. When official TDesign MCP is configured, use it before guessing component APIs, available components, DOM structure, or changelog details. See `references/mcp.md`.
6. Keep data flow explicit: pages call service modules, services call the project request wrapper, stores hold cross-page state, and components receive props/emits.
7. Add loading, empty, error, and permission-denied states for backend-driven pages.
8. Route complex requirements such as large tables, remote selects, dynamic forms, async trees, custom uploads, dark mode, and deep theming through `references/advanced-scenarios.md`.
9. Validate with typecheck, lint, tests, build, and browser smoke checks when available.

## Install And Initialization Rules

- Before installing, inspect the lockfile and scripts to detect npm, pnpm, yarn, or bun. Use the existing package manager.
- Do not run global installs unless the user approved them or the official Starter flow requires it for a fresh project.
- For fresh Starter projects, use the official Starter flow from `references/starter.md`, then run the generated app before customizing it.
- For existing Vue 3 apps, add only missing dependencies. Typical dependencies are `tdesign-vue-next`; icons come from `tdesign-icons-vue-next`, which is also a dependency of `tdesign-vue-next`, but explicit imports should still be verified in the installed package.
- Ensure `import 'tdesign-vue-next/es/style/index.css';` or the project's established equivalent appears once at the app entry or UI plugin entry.
- Register components using the project's existing strategy: full `app.use(TDesign)`, component-level `app.use(Button)`, auto-import plugin, or local imports. Do not mix strategies unnecessarily.
- After setup, verify a minimal visible TDesign component renders before building larger pages.

## TDesign Starter Defaults To Respect

- Starter is a Vue 3/Vite admin template using Vue Router, Pinia, and axios wrapping.
- Starter docs describe `tdesign-starter-cli` and `td-starter init` for initialization.
- Starter docs mention Node 16+ for starter initialization, while current `tdesign-vue-next@1.20.0` package metadata requires Node >=18. Prefer the stricter version for new projects unless a pinned package proves otherwise.
- Starter has environment variables such as `VITE_BASE_URL`, `VITE_IS_REQUEST_PROXY`, `VITE_API_URL`, and `VITE_API_URL_PREFIX`.
- New pages conventionally live under `src/pages`.

## Avoid

- Do not invent undocumented TDesign props. Check docs, type declarations, or installed examples first.
- Do not bypass type errors with `@ts-ignore`; inspect TDesign exported types or simplify the API use.
- Do not replace Starter routing, layout, request, or permission systems unless the user asks for architectural change.
- Do not mix another UI library into a TDesign page for basic controls.
- Do not add large custom CSS systems where TDesign tokens, layout components, or local style conventions are enough.
