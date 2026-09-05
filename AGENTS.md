# Agents

Conventions for AI agents working in this repo (React (Vite)).

## Core directives

- Prefer the project's canonical components over raw HTML elements when one exists.
- Use design tokens, not raw values — no hardcoded hex colors, off-scale spacing, or off-scale font sizes. See the token table in the context file.
- Guardrails preset: `universal@2`. Run `npm exec --offline -- fragments check` (or `npm exec --offline -- fragments check --fix`) and report the findings delta before marking a task done.
- After adding or removing a component, run `npm exec --offline -- fragments build` so `fragments.json` stays in sync.

See: .fragments/agent-context.md (generated — if missing, run `npx @usefragments/cli init` to create it)
