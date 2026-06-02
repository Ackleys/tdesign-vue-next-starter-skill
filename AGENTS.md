# Agent Notes

## npm / npx Publishing

This package is published to npm as `tdesign-vue-next-starter-skill`, so `npx tdesign-vue-next-starter-skill` installs the bundled Codex skill.

When publishing, do not assume an OTP code is required just because npm prints `EOTP` in non-interactive mode. For this npm account, the successful flow is the npm publish WebAuthn flow:

```bash
env npm_config_cache=/private/tmp/npm-cache \
  /Users/l/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node \
  /private/tmp/npm10-cli/package/bin/npm-cli.js publish --access public
```

Run the command with a TTY. In Codex, set `tty: true` on the `exec_command` call. The interactive publish command should print a URL like:

```text
Authenticate your account at:
https://www.npmjs.com/auth/cli/...
Press ENTER to open in the browser...
```

Ask the user to open that URL and complete Google passkey / WebAuthn authorization. After the user says it is done, send a newline to the running session. This is different from `npm login --auth-type=web`: login can succeed, but publish may still require the separate publish WebAuthn challenge.

After publishing, verify:

```bash
env npm_config_cache=/private/tmp/npm-cache \
  /Users/l/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node \
  /private/tmp/npm10-cli/package/bin/npm-cli.js view tdesign-vue-next-starter-skill version
```

Use `npm pack --dry-run` before publishing to confirm the packaged files and version.
