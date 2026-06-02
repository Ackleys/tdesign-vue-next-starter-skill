# TDesign Vue Next Starter Skill

Codex skill for building Vue 3 interfaces with TDesign Starter and TDesign Vue Next.

## What It Covers

- TDesign Starter Vue Next setup and project extension
- Full TDesign Vue Next component index from the official overview
- Backend-connected UI patterns for CRUD pages, request wrappers, routing, permissions, and loading/error states
- Complex scenarios such as large tables, remote selects, dynamic forms, async trees, custom uploads, dark mode, and theme customization
- Validation workflow with typecheck, lint, build, and browser smoke-test guidance

## Sources

The skill is grounded in official TDesign documentation and npm package metadata:

- TDesign Starter Vue Next docs: <https://tdesign.tencent.com/starter/docs/vue-next/get-started>
- TDesign Vue Next overview: <https://tdesign.tencent.com/vue-next/overview>
- npm package: <https://www.npmjs.com/package/tdesign-vue-next>

The component index was cross-checked against both the official Vue Next overview routes and `tdesign-vue-next@1.20.0` package component directories.

## Install Locally

Copy or symlink the skill folder into your Codex skills directory:

```bash
mkdir -p ~/.codex/skills
cp -R skills/tdesign-vue-next-starter ~/.codex/skills/
```

Restart Codex so the renamed skill is discovered.

## Use

Ask Codex to use `$tdesign-vue-next-starter` when building or modifying a Vue 3 interface with TDesign Starter or TDesign Vue Next.

## Validate

Run the skill validator:

```bash
python3 /path/to/skill-creator/scripts/quick_validate.py skills/tdesign-vue-next-starter
```

Expected result:

```text
Skill is valid!
```
