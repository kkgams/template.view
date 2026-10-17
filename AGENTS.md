# View template rules

Read CONTEXT.md and README.md before changing code. Check git status and preserve
existing changes. Run npm test and make validate-docs for relevant changes.

Follow the Host-owned GAMS View development guide; do not copy or loosen it.
Use Host helpers from /util and /widgets, semantic themeable markup, and UI
Services for popups, tooltips and toasts. Missing required state is an error.

Keep src/ canonical. Do not edit generated dist/ or build/ files. Keep the public
API documented in docs/api.md and choose versions using the README rules.
Do not commit, tag, push, or publish unless explicitly requested.
