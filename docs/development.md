---
title: Development
status: reference
---

# Development

The Host owns `/core`, `/util`, `/widgets` and shared CSS/fonts. Import those APIs
by absolute browser path; do not copy their implementation into this Unit.
The starter requires `/util/view-plugin.js` and its Host-owned dependencies.

Before changing View HTML, read the canonical
[GAMS View development guide](https://github.com/kkgams/gams/blob/release/docs/gams-view-development-guide.md).
Use semantic, themeable markup rather than custom CSS. The starter's root
`display: contents` is the guide's required layout rule, not View-specific styling.
Popups, tooltips, context menus, autocomplete and toasts belong to UI Services.

Run `npm test` for source syntax, lifecycle unit tests and release packaging
regressions. The lifecycle tests use a stub Host and DOM; they do not prove native
Host integration or theme rendering. Smoke-test the View in an external Project
with a compatible GAMS Host before releasing it. This template does not bundle a
Host, theme, shell services or example Project.

Run `make serve-docs` for loopback preview, `make validate-docs` for documentation
validation, or `make build-docs` for a portable site. Edit Markdown directly in
`docs/`, with title/status frontmatter, and keep `_sidebar.md` current.
