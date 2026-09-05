---
generated_by: @usefragments/cli@1.9.2
preset: universal@2
last_init: 2026-09-05T09:37:59.954Z
context_fingerprint: 3efcf67c2902614e0fe7dc84019d13224e14cdf3718c774cd73c9ae71e93b9e9
---

# Agent context for this project

This file is generated. Do not edit by hand - your changes will be overwritten.
To refresh it, run `npx @usefragments/cli init`. To customize guardrails,
edit `fragments.config.ts`.

## Project shape

- Framework: React (Vite)
- Component library: unknown
- Classification: 1 component candidate detected

## Canonical primitives

Defer to `.fragments/classification.json` when present for primitive
identity. Prefer canonical components over raw HTML elements when the project
has a documented primitive for the interaction.

Fragments vocabulary card
Canonical primitives (1 roots):
- `Button`
Import { Button } from "src/components".
Never raw <button>-><Button>.
Use --fui-* tokens, not raw hex/px values.
MCP: design_system/list_primitives, design_system/list_tokens, design_system/conform.
Verify: `npm exec --offline -- fragments check --changed`.
(see .fragments/agent-context.md)

When importing a component:

1. Check `fragments.json` for the available surface.
2. Check the component source for the real API.
3. Prefer canonical components over raw HTML elements.

`fragments.json` is a build artifact. After **adding or removing** a
component, run `npm exec --offline -- fragments build` so the inventory
stays in sync — a freshly created component is not in `fragments.json` until
you rebuild.



## Tokens

Detected 13 tokens across configured sources:
- `src/styles/tokens.css` (local file): 13 tokens

Use the exact token names from the project. Do not invent `--fui-*` names
unless they appear in this section or in `fragments tokens list`.

### color
- `--fui-color-accent` = `#0a5cff`
- `--fui-color-accent-contrast` = `#ffffff`
- `--fui-color-border` = `#d5d8de`
- `--fui-color-surface` = `#ffffff`
- `--fui-color-text` = `#111318`

### radius
- `--fui-radius-md` = `8px`
- `--fui-radius-sm` = `4px`

### spacing
- `--fui-space-1` = `4px`
- `--fui-space-2` = `8px`
- `--fui-space-3` = `12px`
- `--fui-space-4` = `16px`

### typography
- `--fui-font-size-md` = `16px`
- `--fui-font-size-sm` = `14px`

## Active rules (universal@2 preset)

- styles/no-raw-color (warn) — raw hex/rgb/named colors in CSS and inline styles
- styles/no-raw-spacing (warn) — spacing literals off the project's token scale
- styles/no-raw-typography (warn) — font-size literals off the scale, when typography tokens exist
- styles/no-raw-dimensions (warn) — raw border-radius, when radius tokens exist
- a11y/required-accessible-name (error) — on raw, role-based, canonical, and mapped controls
- a11y/standard (error) — non-native role="button" keyboard semantics

## Definition of done

Before reporting a task complete:

1. `npm exec --offline -- fragments check --changed main --report .fragments/delta.json`
2. Report the findings delta vs main.
3. Run the project typecheck.
4. Run the project lint.
5. For visible UI changes, verify the page in a browser.

Validation tools available through hosted Fragments MCP when configured:

- design_system/list_primitives
- design_system/list_tokens
- design_system/conform
- design_system/prove_compliant

## Cloud sync

If this repo is Cloud-connected, re-run `npx @usefragments/cli init` to
refresh local guardrails from the team source of truth.
