# Advanced Scenarios

Use this when requirements go beyond simple component placement. Verify exact props, events, and types in official docs or installed type declarations before implementation.

## Scenario Routing

- Dynamic forms, add/remove form rows, cross-field validation, async validation: use `form`, `input`, `select`, validation rules, and project-specific validators.
- Server-side table data, sorting, filtering, pagination, large datasets, editable cells, tree tables: use `table`, `pagination`, stable `row-key`, controlled query state, and backend request wrappers.
- Remote search or large option lists: use `select`, `select-input`, `auto-complete`, `tree-select`, or `cascader` based on the data shape.
- Controlled upload or custom upload request: use `upload`; wire file state and backend upload endpoints explicitly.
- Async hierarchical data: use `tree`, `tree-select`, or `cascader`; keep key/field mapping aligned with backend data.
- Nested detail/edit flows: prefer `drawer` for side-panel context and `dialog` for focused confirmation or short forms.
- Guided onboarding or feature tours: use `guide` only when the project needs an explicit user journey.
- Dark mode and theme customization: prefer `config-provider`, existing project theme variables, and TDesign CSS variables over deep selector overrides.

## Pre-Flight Questions

Before choosing components for a nontrivial page, determine:

- Vue and `tdesign-vue-next` versions.
- Whether the project already registers TDesign globally, on demand, or by auto-import.
- Whether `config-provider` or project-level locale/theme configuration already exists.
- Data volume and whether pagination, virtual scrolling, or server-side filtering is required.
- Whether permissions and menus are frontend-defined or backend-returned.
- Whether dark mode, i18n, or tenant-level branding is required.

## Implementation Checks

- Forms: use named form items where validation is needed; map backend validation errors to fields when possible.
- Tables: use stable row keys, avoid rebuilding large column definitions unnecessarily, and keep pagination state controlled.
- Select-like controls: avoid loading huge option arrays all at once; use remote search or paged loading when the backend supports it.
- Upload: define controlled file state, pending state, error handling, and retry behavior.
- Tree-like controls: make `keys` or field mapping explicit when backend data does not match TDesign defaults.
- Dialog/drawer: use controlled visibility and decide whether state should reset on close.
- Theme: change semantic variables or project tokens before reaching for deep CSS selectors.

## Chat Caveat

Do not assume AI chat components are part of `tdesign-vue-next` just because TDesign Mini Program or other TDesign packages mention chat. The official Vue Next overview component index checked for this skill does not list a chat component. If a user asks for TDesign Chat in Vue, verify the current official package and docs first.
