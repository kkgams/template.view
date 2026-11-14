---
title: View development
status: reference
---

# View

A greeting View for [GAMS](https://github.com/kkgams/gams). The Host supplies runtime APIs, shared widgets and theme styling.

| View | Source / release file | Screenshot | Author |
| --- | --- | --- | --- |
| `view-example` | `src/views/view-example.js` / `view.example.zip` | Not available | [GAMS contributors](https://github.com/kkgams/template.view) |

## Development

Requires Make, Node.js 24, Python 3, curl, zip, unzip and tar. No package installation is needed. Native launch/download requires macOS Apple Silicon.

| Command | Purpose |
| --- | --- |
| `make check` | Check JavaScript syntax |
| `make open` | Open local `gams.json` in the released Host |
| `make package` | Build incremental `view.example.zip` and `SHA256SUMS` under `build.nosync/` |
| `make serve-docs` | Preview pinned wiki with independent `DOCS_PORT=8080` |
| `make validate-docs` | Validate wiki |
| `make docs` | Build `build.nosync/site/` |
| `make clean` | Remove generated output, marked Host download and configured completed Unit caches; refuse tracked files, symlinks and unidentified tools/caches |

Edit `src/views/view-example.js`; the local Project loads it directly. First launch downloads the released Host and configured Units, requiring network. Existing Host downloads are retained without implicit updates; accompanying notices remain beside the app. Launch explicitly selects this repository's `gams.json` with `GAMS_APP_CWD`. No sibling checkout is required.

Use the [Host View guide](https://github.com/kkgams/gams/blob/release/docs/gams-view-development-guide.md) and Host-owned `/util` and `/widgets` helpers. Route popups, tooltips and toasts through UI Services. Do not bundle Host code or add View-local styling beyond the required root layout rule.



## View API

| Contract | Value |
| --- | --- |
| Element | `view-example` |
| Deployment entry | `views/view-example.js` |
| Inputs, methods, events | None |
| Output | Static greeting |
| Host helper | `/util/view-plugin.js` registration and cleanup |

Companion files belong under `src/`; packaging strips that prefix. The archive contains the explicit View source plus LICENSE and NOTICE, not Project configuration or downloaded dependencies. Register the published `views/view-example.js` entry in a consuming Project. Keep the Project's plugins, theme and UI Services separately configured.
