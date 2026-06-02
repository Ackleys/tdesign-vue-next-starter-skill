# TDesign Starter Vue Next Reference

Use this when initializing, inspecting, or extending a TDesign Starter Vue Next project.

## Official Docs Checked

- Starter get started: https://tdesign.tencent.com/starter/docs/vue-next/get-started
- Starter development: https://tdesign.tencent.com/starter/docs/vue-next/develop
- Starter request data: https://tdesign.tencent.com/starter/docs/vue-next/request-data
- Starter permission control: https://tdesign.tencent.com/starter/docs/vue-next/permission-control
- Starter deploy: https://tdesign.tencent.com/starter/docs/vue-next/deploy
- npm registry metadata checked on 2026-06-02:
  - `tdesign-starter-cli@0.5.3`, command binary `td-starter`, Node engine `>=16.0.0`
  - `tdesign-vue-next@1.20.0`, Node engine `>=18`, peer dependency `vue >=3.1.0`

## Initialization

Official Starter docs describe:

```bash
npm i tdesign-starter-cli -g
td-starter init
npm install
npm run dev
```

Use this only when the user wants a fresh Starter project and npm is available. If package metadata or docs have changed, verify first.

For new projects, prefer Node >=18 because current `tdesign-vue-next` package metadata is stricter than Starter docs.

Before initializing:

- Confirm the target directory and whether a frontend already exists.
- Check Node version and prefer Node >=18 for new work.
- Ask for approval before global installs when the environment requires it.
- If the repo already uses pnpm, yarn, or bun, prefer that package manager after the Starter files are generated unless the generated project clearly pins npm.

After initializing:

- Install dependencies.
- Start the dev server.
- Confirm the default Starter page renders before adding backend-specific pages.
- Configure `.env*` values such as `VITE_BASE_URL`, `VITE_IS_REQUEST_PROXY`, `VITE_API_URL`, and `VITE_API_URL_PREFIX` for the backend API instead of hard-coding URLs.

## Project Shape

Starter docs describe a Vite-style project with:

- `index.html`
- `src` page code
- `mock`
- `public`
- `docs`
- `.env`, `.env.development`, `.env.test`
- `tsconfig.json`
- commitlint and formatting config

Before editing, inspect the actual repo because Starter versions may differ.

## Core Stack

Starter docs identify:

- Vue for UI
- Vue Router for single-page routing
- Pinia for global state
- axios wrapped under `src/utils/request`

Keep these systems unless the user asks to replace them.

## Environment Variables

Starter docs mention built-in variables:

- `VITE_BASE_URL`
- `VITE_IS_REQUEST_PROXY`
- `VITE_API_URL`
- `VITE_API_URL_PREFIX`

When wiring a backend, prefer using existing env variables and request wrappers over hard-coded URLs.

## Adding Pages

Follow the existing route/page pattern. Starter docs describe creating page folders under `src/pages`; inspect route files before adding records.

For backend admin pages, include:

- route metadata for title, icon, hidden state, and authority if the project uses it
- service module for API calls
- table or form page under `src/pages`
- loading, empty, error, and permission states

## Deployment Notes

Starter docs describe a static SPA build output under `dist`, with `dist/index.html` as the entry. For history router deployments, ensure the HTTP server falls back to the SPA entry to avoid direct-link 404s. Use hash router only when deployment constraints require it and update router config consistently.
