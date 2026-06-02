# TDesign Starter Vue Next Reference

Use this when initializing, inspecting, or extending a TDesign Starter Vue Next project.

## Official Docs Checked

- Starter get started: https://tdesign.tencent.com/starter/docs/vue-next/get-started
- Starter development: https://tdesign.tencent.com/starter/docs/vue-next/develop
- Starter request data: https://tdesign.tencent.com/starter/docs/vue-next/request-data
- Starter permission control: https://tdesign.tencent.com/starter/docs/vue-next/permission-control
- Starter route and menu: https://tdesign.tencent.com/starter/docs/vue-next/router-menu
- Starter development rules: https://tdesign.tencent.com/starter/docs/vue-next/develop-rules
- Starter custom configuration: https://tdesign.tencent.com/starter/docs/vue-next/custom-config
- Starter design token: https://tdesign.tencent.com/starter/docs/vue-next/design-token
- Starter style and resources: https://tdesign.tencent.com/starter/docs/vue-next/style
- Starter build: https://tdesign.tencent.com/starter/docs/vue-next/build
- Starter deploy: https://tdesign.tencent.com/starter/docs/vue-next/deploy
- Starter feedback: https://tdesign.tencent.com/starter/docs/vue-next/feedback
- Official Vue Next route chunks checked on 2026-06-02 from `https://tdesign.tencent.com/starter/assets/index.bcbc0ad8.js`.
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

The official Vue Next Starter docs describe the `src` shape with these layers:

- `src/apis`: request API definitions.
- `src/assets`: assets.
- `src/components`: public components.
- `src/config`: global constants, theme colors, and layout style config such as `global.ts`, `color.ts`, and `style.ts`.
- `src/constants`: shared constants.
- `src/hooks`: hooks.
- `src/layouts`: dynamic layout shell, layout components, `Breadcrumb.vue`, `SideNav.vue`, `frame`, `setting.vue`, and `blank.vue`.
- `src/pages`: business modules. Starter examples keep page subcomponents and page constants near the page.
- `src/router`: route layer.
- `src/store`: Pinia data layer, including modules such as user, notification, setting, and permission.
- `src/style`: global styles, reset, layout styles, font files, and template style tokens.
- `src/types`: type files.
- `src/utils`: route, charts, color, and request utilities.
- `src/permission.ts`: permission logic.

## Core Stack

Starter docs identify:

- Vue for UI
- Vue Router for single-page routing
- Pinia for global state
- axios wrapped under `src/utils/request`

Keep these systems unless the user asks to replace them.

## Development Rules

Starter docs include these conventions:

- Use the built-in Prettier and ESLint configs; run `npm run lint` and `npm run lint:fix` when applicable.
- Directory names should be lowercase, plural when appropriate, and `kebab-case` for multiple words, such as `new-page` and `components`.
- Single-file components/classes use `PascalCase`, such as `TDesignSelect.vue`.
- Directory entry files use `index.ts` or `index.vue`.
- Interface/model files use `camelCase`, such as `list.ts` and `listModel.ts`.
- Resource and style files use `kebab-case`.
- Classes and interfaces use `PascalCase`.

## Environment Variables

Starter docs mention built-in variables:

- `VITE_BASE_URL`
- `VITE_IS_REQUEST_PROXY`
- `VITE_API_URL`
- `VITE_API_URL_PREFIX`

When wiring a backend, prefer using existing env variables and request wrappers over hard-coded URLs.

## Route And Menu

Starter docs state route and menu management belongs under `src/router`.

- Usually avoid editing `src/router/index.ts`; add or update route modules under `src/router/modules`.
- Route config is a nested array matching menu hierarchy.
- `path` forms the final URL with parent paths; external links can start with `http`.
- `name` affects multi-tab keep-alive behavior. If keep-alive matters, keep route `name` aligned with the page SFC name.
- `component` renders the page component.
- `redirect` controls redirect path.
- `meta.title` is the menu title.
- `meta.icon` is the menu icon.
- `meta.expanded` controls default menu expansion.
- `meta.orderNo` controls menu order; smaller numbers appear earlier.
- `meta.hidden` hides the route from menu.
- `meta.hiddenBreadcrumb` hides it from breadcrumb.
- `meta.single` lets a parent with a single child show as one menu level.
- `meta.frameSrc` is used for iframe embedding.

## Adding Pages

Follow the existing route/page pattern. Starter docs describe creating page folders under `src/pages`; inspect route files before adding records.

Starter page template priority:

- Search existing `src/pages` before designing a new page structure.
- Prefer adapting a similar Starter page template for table lists, advanced tables, forms, detail pages, dashboards, login/result/settings screens, and backend CRUD views.
- Preserve the Starter layout shell, including menu, header, breadcrumb, tab/workspace behavior if present, content padding, route metadata, and permission authority.
- Keep API calls through the Starter request wrapper and mirror existing loading, empty, error, and mutation feedback states.
- Use raw TDesign components to fill the template, not to replace the template.

For backend admin pages, include:

- route metadata for title, icon, hidden state, and authority if the project uses it
- API functions under `src/apis`, using `src/utils/request`
- table or form page under `src/pages`
- loading, empty, error, and permission states

## Permission Control

Starter Vue Next docs state that since Starter 0.7.0 the default permission mode is backend permission control.

- Backend permission requires a backend menu API. The returned serialized menu list is converted by the template into routes and menus.
- Non-page route components should serialize as `LAYOUT`, `BLANK`, or `IFRAME`.
- Concrete page route components should use page paths such as `/list/base/index`.
- `meta.icon` should use TDesign icon kebab-case names such as `view-list`.
- For frontend permission control, docs describe replacing `store/permission.ts` with `store/permission-fe.ts`; then prepare possible menus under `router/modules` and filter them by user `roles`.

## Request Data

Starter docs say Vue Next Starter uses axios wrapped under `src/utils/request`.

- Define project API functions in `src/apis`.
- Import API functions into pages/components.
- Usually do not modify `src/utils/request`; add APIs in `src/apis`.
- `VITE_IS_REQUEST_PROXY` controls direct proxy behavior. When true, requests use the address in the env file and bypass Vite proxy config.
- For Vite proxy mode, configure `server.proxy` in `vite.config.*`.
- Mock data can be enabled by setting `viteMockServe({ mockPath: 'mock', localEnabled: true })`.
- For requests that must not be proxied, such as external upload/COS services, create a separate request instance rather than forcing it through the default wrapper.

## Layout, Theme, And Assets

Starter docs describe built-in personalized layout config under `src/config/style`.

- Built-in settings include `showFooter`, `isSidebarCompact`, `showBreadcrumb`, `mode`, `layout`, `splitMenu`, `isSidebarFixed`, `isHeaderFixed`, `isUseTabsRouter`, `showHeader`, and `brandTheme`.
- Starter provides side navigation, side navigation plus header navigation, and top header navigation layouts.
- For multi-tab pages, set `isUseTabsRouter` to true.
- Prefer TDesign Design Tokens for custom styles, such as `var(--td-brand-color)` and TDesign spacing/radius/shadow/font tokens.
- Put local static assets under `src/assets`; fonts under `src/assets/fonts`; images under `src/assets/images`.
- Global font styles belong in `src/style/font-family.less`; template style tokens belong in `src/style/variables.less`.
- SVGs can be inline or imported as components if the project plugin supports it.

## Deployment Notes

Starter docs describe a static SPA build output under `dist`, with `dist/index.html` as the entry. For history router deployments, ensure the HTTP server falls back to the SPA entry to avoid direct-link 404s. Use hash router only when deployment constraints require it and update router config consistently.

Additional official deployment notes:

- `npm run build` outputs runtime assets to `dist`.
- The Dockerfile should live at the project root if using the official Docker pattern.
- The default router is history router; use `createWebHashHistory()` only when hash routing is required.
- For non-root deployments, configure `VITE_BASE_URL`, such as `/admin/`, and make the server fallback point to that subpath's `index.html`.
- If production reports a JavaScript module MIME type error, check server content-type configuration, such as nginx `include mime.types`.
