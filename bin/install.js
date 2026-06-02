#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');

const SKILL_NAME = 'tdesign-vue-next-starter';
const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const force = args.has('--force');

function copyDirectory(source, target) {
  fs.mkdirSync(target, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function main() {
  const packageRoot = path.resolve(__dirname, '..');
  const source = path.join(packageRoot, 'skills', SKILL_NAME);
  const codexHome = process.env.CODEX_HOME || path.join(os.homedir(), '.codex');
  const skillsDir = path.join(codexHome, 'skills');
  const target = path.join(skillsDir, SKILL_NAME);

  if (!fs.existsSync(path.join(source, 'SKILL.md'))) {
    throw new Error(`Cannot find bundled skill at ${source}`);
  }

  if (dryRun) {
    console.log(`Source: ${source}`);
    console.log(`Target: ${target}`);
    console.log(`Would ${fs.existsSync(target) ? 'replace' : 'install'} ${SKILL_NAME}`);
    return;
  }

  if (fs.existsSync(target)) {
    if (!force) {
      console.error(`Skill already exists: ${target}`);
      console.error('Re-run with --force to replace it.');
      process.exitCode = 1;
      return;
    }
    fs.rmSync(target, { recursive: true, force: true });
  }

  fs.mkdirSync(skillsDir, { recursive: true });
  copyDirectory(source, target);

  console.log(`Installed ${SKILL_NAME} to ${target}`);
  console.log('Restart Codex so the skill can be discovered.');
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
