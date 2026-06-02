# TDesign Vue Next Starter Skill

这是一个供 Codex 使用的 skill，用于基于 TDesign Starter 和 TDesign Vue Next 构建 Vue 3 界面。

Codex skill for building Vue 3 interfaces with TDesign Starter and TDesign Vue Next.

## 中文说明

### 覆盖范围

- TDesign Starter Vue Next 项目初始化与扩展
- TDesign Starter 页面模板、后台布局、路由权限和菜单/面包屑约定
- TDesign Starter 官方开发规范、`src/apis` 请求层、`src/router/modules` 路由菜单、个性化布局配置和静态资源规范
- TDesign Vue Next 组件库安装、注册、样式导入和图标接入
- TDesign 官方 MCP 接入和组件 API 查询流程
- 来自官网 overview 的 TDesign Vue Next 全量组件索引
- 后端联动界面常见模式：CRUD 页面、请求封装、路由、权限、加载/空状态/错误状态
- 复杂场景：大数据表格、远程 Select、动态表单、异步树、自定义上传、暗色模式、主题定制
- 验证流程：类型检查、lint、build、本地浏览器冒烟测试

### 资料来源

该 skill 基于 TDesign 官方文档和 npm 包元数据整理：

- TDesign Starter Vue Next 文档：<https://tdesign.tencent.com/starter/docs/vue-next/get-started>
- TDesign Vue Next overview：<https://tdesign.tencent.com/vue-next/overview>
- TDesign Vue Next MCP：<https://tdesign.tencent.com/vue-next/mcp>
- TDesign MCP Server：<https://cnb.cool/tencent/tdesign/tdesign-mcp-server>
- npm 包：<https://www.npmjs.com/package/tdesign-vue-next>

组件索引已经同时对照官网 Vue Next overview 路由和 `tdesign-vue-next@1.20.0` 包内组件目录进行校验。

### 安装

完整安装、更新、校验和卸载步骤见 [INSTALL.zh-CN.md](INSTALL.zh-CN.md)。

使用 npx 安装：

```bash
npx tdesign-vue-next-starter-skill
```

这个命令会把内置的 `tdesign-vue-next-starter` skill 安装到 Codex 的 skills 目录。安装后重启 Codex，然后就可以让 Codex 使用 `$tdesign-vue-next-starter`。

### 使用方式

当你需要构建或修改 TDesign Starter / TDesign Vue Next 的 Vue 3 界面时，让 Codex 使用 `$tdesign-vue-next-starter`。

### 校验

运行 skill validator：

```bash
python3 /path/to/skill-creator/scripts/quick_validate.py skills/tdesign-vue-next-starter
```

期望输出：

```text
Skill is valid!
```

## English

### What It Covers

- TDesign Starter Vue Next setup and project extension
- TDesign Starter page templates, admin layouts, route permissions, menu and breadcrumb conventions
- Official Starter development rules, `src/apis` request layer, `src/router/modules` route/menu config, personalized layout settings, and asset conventions
- TDesign Vue Next component installation, registration, style imports, and icon setup
- Official TDesign MCP setup and component API lookup workflow
- Full TDesign Vue Next component index from the official overview
- Backend-connected UI patterns for CRUD pages, request wrappers, routing, permissions, and loading/error states
- Complex scenarios such as large tables, remote selects, dynamic forms, async trees, custom uploads, dark mode, and theme customization
- Validation workflow with typecheck, lint, build, and browser smoke-test guidance

### Sources

The skill is grounded in official TDesign documentation and npm package metadata:

- TDesign Starter Vue Next docs: <https://tdesign.tencent.com/starter/docs/vue-next/get-started>
- TDesign Vue Next overview: <https://tdesign.tencent.com/vue-next/overview>
- TDesign Vue Next MCP: <https://tdesign.tencent.com/vue-next/mcp>
- TDesign MCP Server: <https://cnb.cool/tencent/tdesign/tdesign-mcp-server>
- npm package: <https://www.npmjs.com/package/tdesign-vue-next>

The component index was cross-checked against both the official Vue Next overview routes and `tdesign-vue-next@1.20.0` package component directories.

### Install

See [INSTALL.md](INSTALL.md) for full install, update, validation, and uninstall steps.

Install with npx:

```bash
npx tdesign-vue-next-starter-skill
```

This installs the bundled `tdesign-vue-next-starter` skill into your Codex skills directory. Restart Codex after installing, then ask Codex to use `$tdesign-vue-next-starter`.

### Use

Ask Codex to use `$tdesign-vue-next-starter` when building or modifying a Vue 3 interface with TDesign Starter or TDesign Vue Next.

### Validate

Run the skill validator:

```bash
python3 /path/to/skill-creator/scripts/quick_validate.py skills/tdesign-vue-next-starter
```

Expected result:

```text
Skill is valid!
```
