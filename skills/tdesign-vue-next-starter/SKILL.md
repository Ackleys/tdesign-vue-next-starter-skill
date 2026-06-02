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
- Admin integration patterns for backend UIs: `references/backend-admin-patterns.md`
- Complex scenarios and pre-flight checks: `references/advanced-scenarios.md`
- Validation checklist and scoring rubric: `references/validation.md`

When the user asks for latest behavior or a component API, browse official sources:

- TDesign Starter Vue Next docs: https://tdesign.tencent.com/starter/docs/vue-next/get-started
- TDesign Vue Next docs: https://tdesign.tencent.com/vue-next/overview
- npm package metadata: https://www.npmjs.com/package/tdesign-vue-next

## Implementation Workflow

1. Choose a path:
   - Existing Starter app: add pages under `src/pages`, route records under `src/router`, service calls near existing API modules, and state in Pinia stores only when shared.
   - Plain Vue 3 app: install and register `tdesign-vue-next`, import its CSS once, and add TDesign components incrementally.
   - Backend repo without UI: scaffold a separate frontend package unless the backend already has a frontend build system.
2. Build the actual work surface first. For admin systems, prioritize dense, scannable operational views over marketing pages.
3. Use TDesign primitives for controls: `t-table`, `t-form`, `t-input`, `t-select`, `t-button`, `t-dialog`, `t-drawer`, `t-tabs`, `t-card`, `t-space`, `t-pagination`, `t-tag`, `t-alert`, and `t-loading`.
4. Use `tdesign-icons-vue-next` for icons instead of custom SVGs when an icon exists.
5. Keep data flow explicit: pages call service modules, services call the project request wrapper, stores hold cross-page state, and components receive props/emits.
6. Add loading, empty, error, and permission-denied states for backend-driven pages.
7. Route complex requirements such as large tables, remote selects, dynamic forms, async trees, custom uploads, dark mode, and deep theming through `references/advanced-scenarios.md`.
8. Validate with typecheck, lint, tests, build, and browser smoke checks when available.

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
