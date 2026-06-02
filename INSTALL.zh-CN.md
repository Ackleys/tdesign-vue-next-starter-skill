# 安装说明

该仓库包含一个 Codex skill：

```text
skills/tdesign-vue-next-starter
```

## 从 GitHub 安装

克隆仓库，并将 skill 复制到 Codex skills 目录：

```bash
git clone https://github.com/Ackleys/tdesign-vue-next-starter-skill.git
cd tdesign-vue-next-starter-skill
mkdir -p ~/.codex/skills
cp -R skills/tdesign-vue-next-starter ~/.codex/skills/
```

复制完成后重启 Codex，让 skill 被重新发现。

## 通过 GitHub 使用 npx 安装

这种方式不需要先发布到 npm：

```bash
npx github:Ackleys/tdesign-vue-next-starter-skill
```

如果 skill 已经存在并且需要覆盖：

```bash
npx github:Ackleys/tdesign-vue-next-starter-skill --force
```

安装后重启 Codex。

## 通过 npm 使用 npx 安装

使用 npx 从 npm 安装：

```bash
npx tdesign-vue-next-starter-skill
```

这个命令会把内置的 `tdesign-vue-next-starter` skill 复制到 Codex 的 skills 目录。重启 Codex 后，这个 skill 会帮助 Codex 基于 TDesign Starter、TDesign Vue Next 组件、后端路由、请求封装、权限、表单、表格和校验流程来构建或修改 Vue 3 界面。

如果 skill 已经存在并且需要覆盖：

```bash
npx tdesign-vue-next-starter-skill --force
```

安装后重启 Codex。

## 使用软链接安装

如果你希望仓库更新后 skill 内容也立即同步，可以使用软链接：

```bash
git clone https://github.com/Ackleys/tdesign-vue-next-starter-skill.git
mkdir -p ~/.codex/skills
ln -s "$(pwd)/tdesign-vue-next-starter-skill/skills/tdesign-vue-next-starter" ~/.codex/skills/tdesign-vue-next-starter
```

创建软链接后重启 Codex。

## 校验

如果你本地有 Codex skill creator 的校验脚本，可以运行：

```bash
python3 /path/to/skill-creator/scripts/quick_validate.py ~/.codex/skills/tdesign-vue-next-starter
```

期望输出：

```text
Skill is valid!
```

## 使用方式

让 Codex 使用：

```text
$tdesign-vue-next-starter
```

示例：

```text
使用 $tdesign-vue-next-starter 帮我基于 TDesign Starter 构建一个 Vue 3 后台用户管理页面。
```

## 更新

如果是复制安装：

```bash
cd tdesign-vue-next-starter-skill
git pull
rm -rf ~/.codex/skills/tdesign-vue-next-starter
cp -R skills/tdesign-vue-next-starter ~/.codex/skills/
```

如果是软链接安装：

```bash
cd tdesign-vue-next-starter-skill
git pull
```

更新后重启 Codex。

## 卸载

```bash
rm -rf ~/.codex/skills/tdesign-vue-next-starter
```
