# release-proof

A deliberately tiny React app used by Fragments to prove, on a real GitHub pull
request, that the deployed governance check blocks a bypass of the canonical
`Button` and passes the fix. Nothing here is a product; it exists so the proof
is cheap, public and repeatable.

- Canonical component: `src/components/Button.tsx`
- Token file: `src/styles/tokens.css`
- Proof runner: `tools/release-proof/run.sh` in the Fragments monorepo

Do not add features. Add a component only when the proof needs one.
