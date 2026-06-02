# TDesign Vue Next Starter Skill

这是一个供 Codex 使用的 skill，用于基于 TDesign Starter 和 TDesign Vue Next 构建 Vue 3 界面。

## 覆盖范围

- TDesign Starter Vue Next 项目初始化与扩展
- 来自官网 overview 的 TDesign Vue Next 全量组件索引
- 后端联动界面常见模式：CRUD 页面、请求封装、路由、权限、加载/空状态/错误状态
- 复杂场景：大数据表格、远程 Select、动态表单、异步树、自定义上传、暗色模式、主题定制
- 验证流程：类型检查、lint、build、本地浏览器冒烟测试

## 资料来源

该 skill 基于 TDesign 官方文档和 npm 包元数据整理：

- TDesign Starter Vue Next 文档：<https://tdesign.tencent.com/starter/docs/vue-next/get-started>
- TDesign Vue Next overview：<https://tdesign.tencent.com/vue-next/overview>
- npm 包：<https://www.npmjs.com/package/tdesign-vue-next>

组件索引已经同时对照官网 Vue Next overview 路由和 `tdesign-vue-next@1.20.0` 包内组件目录进行校验。

## 本地安装

完整安装、更新、校验和卸载步骤见 [INSTALL.zh-CN.md](INSTALL.zh-CN.md)。

快速安装：

```bash
git clone https://github.com/Ackleys/tdesign-vue-next-starter-skill.git
cd tdesign-vue-next-starter-skill
mkdir -p ~/.codex/skills
cp -R skills/tdesign-vue-next-starter ~/.codex/skills/
```

然后重启 Codex，让新命名的 skill 被发现。

## 使用方式

当你需要构建或修改 TDesign Starter / TDesign Vue Next 的 Vue 3 界面时，让 Codex 使用 `$tdesign-vue-next-starter`。

## 校验

运行 skill validator：

```bash
python3 /path/to/skill-creator/scripts/quick_validate.py skills/tdesign-vue-next-starter
```

期望输出：

```text
Skill is valid!
```
