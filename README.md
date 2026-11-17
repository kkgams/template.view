# View

A greeting View for [GAMS](https://github.com/kkgams/gams). The Host supplies runtime APIs, shared widgets and theme styling.

| View | Source / release file | Screenshot | License / author |
| --- | --- | --- | --- |
| `view-example` | `src/views/view-example.js` / `view.example.zip` | Not available | [Apache-2.0](LICENSE), [GAMS contributors](https://github.com/kkgams/template.view); [NOTICE](NOTICE) |

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
| `make clean` | Remove entire `build.nosync/`, `tools/` and `gams_modules/`, including unmarked tools/caches; refuse tracked files and symlinks in all targets before deleting anything. |

Edit `src/views/view-example.js`; the local Project loads it directly. First launch downloads the released Host and configured Units, requiring network. Existing Host downloads are retained without implicit updates; accompanying notices remain beside the app. Launch explicitly selects this repository's `gams.json` with `GAMS_APP_CWD`. No sibling checkout is required.

Use the [Host View guide](https://github.com/kkgams/gams/blob/release/docs/gams-view-development-guide.md) and Host-owned `/util` and `/widgets` helpers. Route popups, tooltips and toasts through UI Services. Do not bundle Host code or add View-local styling beyond the required root layout rule.

[View API and development](docs/index.md).
