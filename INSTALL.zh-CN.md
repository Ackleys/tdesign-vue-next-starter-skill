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
Use $tdesign-vue-next-starter to build a Vue 3 backend user-management page with TDesign Starter.
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
