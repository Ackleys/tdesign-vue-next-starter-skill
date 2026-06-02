# Install

This repository contains one Codex skill:

```text
skills/tdesign-vue-next-starter
```

## Install From GitHub

Clone the repository and copy the skill into your Codex skills directory:

```bash
git clone https://github.com/Ackleys/tdesign-vue-next-starter-skill.git
cd tdesign-vue-next-starter-skill
mkdir -p ~/.codex/skills
cp -R skills/tdesign-vue-next-starter ~/.codex/skills/
```

Restart Codex after copying the skill so it can be discovered.

## Install With A Symlink

Use this if you want updates in the cloned repository to be reflected immediately:

```bash
git clone https://github.com/Ackleys/tdesign-vue-next-starter-skill.git
mkdir -p ~/.codex/skills
ln -s "$(pwd)/tdesign-vue-next-starter-skill/skills/tdesign-vue-next-starter" ~/.codex/skills/tdesign-vue-next-starter
```

Restart Codex after creating the symlink.

## Verify

If you have the Codex skill creator validator available, run:

```bash
python3 /path/to/skill-creator/scripts/quick_validate.py ~/.codex/skills/tdesign-vue-next-starter
```

Expected output:

```text
Skill is valid!
```

## Use

Ask Codex to use:

```text
$tdesign-vue-next-starter
```

Example:

```text
Use $tdesign-vue-next-starter to build a Vue 3 backend user-management page with TDesign Starter.
```

## Update

For copy-based installs:

```bash
cd tdesign-vue-next-starter-skill
git pull
rm -rf ~/.codex/skills/tdesign-vue-next-starter
cp -R skills/tdesign-vue-next-starter ~/.codex/skills/
```

For symlink installs:

```bash
cd tdesign-vue-next-starter-skill
git pull
```

Restart Codex after updating.

## Uninstall

```bash
rm -rf ~/.codex/skills/tdesign-vue-next-starter
```
