---
name: tdesign-vue-next-starter
description: Build, scaffold, modify, debug, and review Vue 3 interfaces that use TDesign Starter, TDesign Vue Next, tdesign-vue-next components, tdesign-icons-vue-next icons, Vue Router, Pinia, Vite, axios request wrappers, permission-controlled routes, layouts, forms, tables, charts, dashboards, and backend-connected pages. Use when Codex needs official TDesign Vue Next patterns, full component coverage, Starter project structure, backend UI integration, or reliable TDesign-based frontend implementation.
---

# TDesign Vue Next Starter

Use this skill to build or modify Vue 3 admin UIs with TDesign Starter and TDesign Vue Next. Default to local project files and this skill's offline references. Use network docs or MCP only when freshness or missing API detail actually matters.

## First Steps

1. Identify whether the project is a TDesign Starter app, a plain Vue 3 app, or a backend repo that needs a new UI.
2. If it is a Starter app, inspect existing Starter page templates, layouts, route modules, menu metadata, permission stores, `src/apis`, request utilities, and page containers before designing anything new.
3. Inspect `package.json`, `vite.config.*`, `src/main.*`, `src/router`, `src/pages`, `src/layouts`, `src/store`, and request utilities before changing code.
4. Use the offline references in this skill and installed local package metadata/types before browsing.
5. Prefer local Starter conventions and page templates over generic examples.
6. Use TypeScript and Vue 3 Composition API patterns unless the project already uses a different style.

## Knowledge Source Priority

Read the relevant offline reference before implementation:

- Starter setup and development workflow: `references/starter.md`
- Component library usage, import styles, and UI implementation rules: `references/vue-next-components.md`
- Official TDesign MCP setup and tool usage: `references/mcp.md`
- Admin integration patterns for backend UIs: `references/backend-admin-patterns.md`
- Complex scenarios and pre-flight checks: `references/advanced-scenarios.md`
- Validation checklist and scoring rubric: `references/validation.md`

Prefer this order:

1. Existing project files and conventions.
2. This skill's offline references.
3. Installed local package files, type declarations, examples, and `package.json`.
4. Configured TDesign MCP tools.
5. Official websites and npm metadata.

Only browse or call remote MCP when one of these is true:

- The user explicitly asks for latest/current behavior.
- A component, prop, event, slot, CLI command, or permission behavior is absent from offline references and local package files.
- The task is a version upgrade, changelog check, migration, or compatibility question.
- The installed project version differs from the reference version and the difference affects implementation.

Use these official sources for freshness checks:

- TDesign Starter Vue Next docs: https://tdesign.tencent.com/starter/docs/vue-next/get-started
- TDesign Vue Next docs: https://tdesign.tencent.com/vue-next/overview
- TDesign Vue Next MCP docs: https://tdesign.tencent.com/vue-next/mcp
- TDesign MCP Server repository: https://cnb.cool/tencent/tdesign/tdesign-mcp-server
- npm package metadata: https://www.npmjs.com/package/tdesign-vue-next

## Implementation Workflow

1. Choose a path:
   - Existing Starter app: do not reinitialize or reinstall blindly. Reuse existing dependencies, global registration, CSS imports, router, layout, request wrapper, `src/apis`, and Pinia stores; add pages under `src/pages`, route records under `src/router/modules`, API functions under `src/apis`, and state in Pinia stores only when shared.
   - Fresh Starter app: use the offline Starter flow first; verify current official Starter docs/package metadata only when the CLI/package version may affect initialization. Initialize with `tdesign-starter-cli` / `td-starter init`, install dependencies with the detected package manager, configure env variables, and run the dev server before adding custom pages.
   - Plain Vue 3 app: install `tdesign-vue-next` when missing, register components according to the project's import strategy, import TDesign CSS exactly once, add `tdesign-icons-vue-next` icon imports when needed, and add TDesign components incrementally.
   - Backend repo without UI: scaffold a separate frontend package unless the backend already has a frontend build system; document the frontend path, package manager, dev command, and backend API base URL.
2. In Starter apps, build from Starter page templates and layout shells first. Reuse existing list pages, form pages, detail pages, dashboard blocks, breadcrumb/menu metadata, tabs, route authority, and page container spacing before composing raw TDesign components.
3. Build the actual work surface first. For admin systems, prioritize dense, scannable operational views over marketing pages.
4. Use TDesign primitives for controls: `t-table`, `t-form`, `t-input`, `t-select`, `t-button`, `t-dialog`, `t-drawer`, `t-tabs`, `t-card`, `t-space`, `t-pagination`, `t-tag`, `t-alert`, and `t-loading`.
5. Use `tdesign-icons-vue-next` for icons instead of custom SVGs when an icon exists.
6. When official TDesign MCP is configured, use it for missing or version-sensitive component APIs, available components, DOM structure, or changelog details. See `references/mcp.md`.
7. Keep data flow explicit: Starter pages call `src/apis`, API modules call `src/utils/request`, stores hold cross-page state, and components receive props/emits. In non-Starter apps, use the local service-module convention.
8. Add loading, empty, error, and permission-denied states for backend-driven pages.
9. Route complex requirements such as large tables, remote selects, dynamic forms, async trees, custom uploads, dark mode, and deep theming through `references/advanced-scenarios.md`.
10. Validate with typecheck, lint, tests, build, and browser smoke checks when available.

## Starter Page Template Rules

- The purpose of this skill is Starter-first backend UI work, not generic component demos. In a Starter project, treat the Starter layout and page templates as the default foundation.
- Before creating a page from scratch, search `src/pages`, route modules, layout components, and menu config for a similar Starter page: table list, advanced table, form, detail, dashboard, login, result, or settings page.
- Preserve the Starter shell: side menu, top header, breadcrumb, tab/workspace behavior, content padding, route metadata, backend-permission menu behavior, and request/error conventions.
- For CRUD pages, adapt the closest Starter list/table template, then add backend filters, toolbar actions, pagination, dialogs/drawers, and mutation states.
- For long forms or detail flows, adapt Starter form/detail templates and route patterns instead of forcing everything into a modal.
- Only compose raw TDesign components without a Starter template when the app is not a Starter app, the existing Starter project has no relevant template, or the user explicitly asks for a standalone component.
- If a generated page visually ignores the Starter shell or looks like a standalone demo page, treat that as a failed use of this skill.

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
- Official Starter docs describe `src/apis` for API definitions, `src/utils/request` for request wrapping, `src/router/modules` for route/menu modules, `src/layouts` for layout shells, `src/config/style.ts` for layout preferences, and `src/style/variables.less` for template style tokens.
- New pages conventionally live under `src/pages`; page-specific children and constants should stay near that page, following existing Starter examples.
- Starter page work should preserve the existing layout shell, route metadata, backend permission/menu behavior, menu/breadcrumb behavior, request wrapper, and page spacing conventions.

## Avoid

- Do not invent undocumented TDesign props. Check docs, type declarations, or installed examples first.
- Do not bypass type errors with `@ts-ignore`; inspect TDesign exported types or simplify the API use.
- Do not replace Starter routing, layout, request, or permission systems unless the user asks for architectural change.
- Do not mix another UI library into a TDesign page for basic controls.
- Do not add large custom CSS systems where TDesign tokens, layout components, or local style conventions are enough.
- Do not build generic TDesign demo pages inside a Starter app when an existing Starter page template or layout pattern can be adapted.
