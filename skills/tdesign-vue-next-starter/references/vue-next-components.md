# TDesign Vue Next Component Reference

Use this when implementing components, imports, icons, theme, and page composition.

## Official Sources Checked

- Component docs overview: https://tdesign.tencent.com/vue-next/overview
- Official overview static routes checked on 2026-06-02 from `https://static.tdesign.tencent.com/vue-next/assets/index-CNcsvIjg.js`
- npm package: https://www.npmjs.com/package/tdesign-vue-next
- npm registry metadata checked on 2026-06-02:
  - `tdesign-vue-next@1.20.0`
  - description: TDesign Component for vue-next
  - main: `cjs/index-lib.js`
  - module: `es/index.mjs`
  - typings: `es/index.d.ts`
  - peer dependency: `vue >=3.1.0`
  - Node engine: `>=18`
  - dependency includes `tdesign-icons-vue-next ~0.4.4`
  - side effects include style directories, so keep official CSS imports intact
- `tdesign-icons-vue-next@0.4.4` peer dependency: `vue ^3.0.0`

## Install And Register

For a plain Vue 3 app, official npm package guidance shows:

```ts
import { createApp } from 'vue';
import { Button } from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(Button);
app.mount('#app');
```

In existing apps, inspect whether the project uses full import, on-demand import, auto-import plugins, or Starter defaults before changing registration.

## Official Overview Component Index

The official Vue Next overview routes currently include these component docs. Treat this as an index, not as a replacement for each component's API page:

- Layout and navigation: `affix`, `anchor`, `back-top`, `breadcrumb`, `divider`, `grid`, `layout`, `link`, `menu`, `space`, `steps`, `sticky-tool`, `tabs`
- Data display: `avatar`, `badge`, `calendar`, `card`, `comment`, `descriptions`, `image`, `image-viewer`, `list`, `qrcode`, `statistic`, `table`, `tag`, `timeline`, `tooltip`, `typography`, `watermark`
- Form and input: `auto-complete`, `button`, `cascader`, `checkbox`, `color-picker`, `date-picker`, `form`, `input`, `input-adornment`, `input-number`, `radio`, `range-input`, `rate`, `select`, `select-input`, `slider`, `switch`, `tag-input`, `textarea`, `time-picker`, `transfer`, `tree-select`, `upload`
- Feedback and overlay: `alert`, `dialog`, `drawer`, `empty`, `guide`, `loading`, `message`, `notification`, `popconfirm`, `popup`, `progress`, `skeleton`
- Data organization: `collapse`, `dropdown`, `pagination`, `swiper`, `tree`
- Global configuration and assets: `config-provider`, `icon`

When a user asks for a component not listed here, re-check the official overview and installed package before assuming it is unsupported.

## Component Selection

Prefer TDesign components for standard admin UI:

- Data-heavy pages: `t-table`, `t-pagination`, `t-list`, `t-tree`, `t-tag`, `t-descriptions`, `t-statistic`
- Forms: `t-form`, `t-form-item`, `t-input`, `t-textarea`, `t-select`, `t-date-picker`, `t-time-picker`, `t-cascader`, `t-radio-group`, `t-checkbox-group`, `t-switch`, `t-upload`, `t-transfer`
- Actions and links: `t-button`, `t-dropdown`, `t-popconfirm`, `t-link`
- Feedback: `t-dialog`, `t-drawer`, `t-message`, `t-notification`, `t-alert`, `t-loading`, `t-empty`, `t-skeleton`, `t-progress`
- Layout and navigation: `t-layout`, `t-header`, `t-aside`, `t-content`, `t-card`, `t-space`, `t-tabs`, `t-breadcrumb`, `t-menu`, `t-steps`
- Media and utility: `t-image`, `t-image-viewer`, `t-avatar`, `t-badge`, `t-tooltip`, `t-watermark`, `t-qrcode`

Verify exact prop names in docs or installed type declarations before using uncommon APIs.

## Icons

Use `tdesign-icons-vue-next` rather than hand-written SVGs when possible.

Typical pattern:

```vue
<script setup lang="ts">
import { SearchIcon, AddIcon } from 'tdesign-icons-vue-next';
</script>

<template>
  <t-button theme="primary">
    <template #icon><AddIcon /></template>
    新增
  </t-button>
</template>
```

Check actual icon export names in package types or docs when uncertain.

## Page Composition

For enterprise backend pages:

- Put filters above data tables.
- Keep primary action in the toolbar.
- Use dialogs or drawers for create/edit when the form is short; use a routed detail page for long workflows.
- Represent backend enum states with `t-tag`.
- Provide empty and error states, not just a blank table.
- Use pagination controlled by query params or local page state, matching project convention.

## Styling

- Import TDesign CSS once at app entry.
- Prefer local scoped styles for page-specific spacing.
- Use TDesign theme tokens or existing project variables when present.
- Do not override deep internal classes unless no public API or token exists.
