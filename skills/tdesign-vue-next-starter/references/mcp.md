# TDesign MCP Reference

Use this when offline references and local package files are insufficient for accurate component docs, API details, DOM structure, component availability, changelog checks, code generation context, migration help, or version-upgrade guidance.

## Official Sources Checked

- TDesign Vue Next MCP docs: https://tdesign.tencent.com/vue-next/mcp
- TDesign MCP Server repository: https://cnb.cool/tencent/tdesign/tdesign-mcp-server
- Repository README checked on 2026-06-02:
  - TDesign MCP Server is a public TDesign MCP repository.
  - It supports desktop frameworks `react`, `vue-next`, and `vue`.
  - It also supports mobile and chat-related TDesign frameworks.
  - The README shows `tdesign-mcp-server@latest` as the npx package for MCP configuration.
- Official Vue Next MCP page checked on 2026-06-02 from the page chunk `mcp-C0nZkmAo.js` / `mcp.en-US-CiXCZIuA.js`.

## MCP Configuration

The official MCP page and repository show this MCP client configuration:

```json
{
  "mcpServers": {
    "tdesign-mcp-server": {
      "command": "npx",
      "args": ["-y", "tdesign-mcp-server@latest"]
    }
  }
}
```

Some MCP clients use `servers` instead of `mcpServers`; follow the client convention.

If the MCP client cannot connect, the official repository suggests running this manually to inspect the error:

```bash
npx tdesign-mcp-server
```

## Official Tools

The official TDesign MCP currently documents four tools:

- `get-component-docs`: get component documentation. Use for code generation, code conversion, and exact API checks.
- `get-component-dom`: get component DOM structure. Use when adapting custom CSS or diagnosing rendered structure.
- `get-component-list`: get all available components. Use when choosing components or checking whether a requested component exists.
- `get-component-changelog`: get component changelog. Use for component library upgrades and targeted regression checks.

The official repository notes that changelog support is not available for some frameworks, including `mobile-react`, `react-chat`, `vue-next-chat`, `uniapp`, and `uniapp-chat`. For normal `vue-next`, prefer checking through the MCP tool when available.

## How Codex Should Use It

When MCP tools are available in the current Codex session and extra accuracy is needed:

1. Use `get-component-list` before claiming a component is unsupported if the local package and offline component index are inconclusive.
2. Use `get-component-docs` before using unfamiliar props, events, slots, plugin APIs, or advanced examples that are not covered by local type declarations or offline references.
3. Use `get-component-dom` when writing CSS that depends on TDesign internals or when troubleshooting layout/DOM mismatches.
4. Use `get-component-changelog` before upgrading `tdesign-vue-next` or explaining version-specific behavior.
5. Combine MCP results with local package types and the project's installed version; do not assume `latest` docs exactly match a pinned local dependency.

When MCP tools are not configured:

- Do not block implementation only because MCP is unavailable.
- Fall back to offline references, local package metadata, installed type declarations, and examples.
- Mention that the official TDesign MCP exists only when the task would materially benefit from more precise component API or changelog context.
- Do not fabricate MCP output.
