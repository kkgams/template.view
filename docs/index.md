---
title: View development
status: reference
---

# View development

`view.example` renders a greeting in a GAMS Area. It runs inside the Host,
which supplies runtime APIs, shared widgets, helpers and theme styling.

## Run the View and docs

Install GAMS, Node.js 24+, Python 3, Make, curl and tar. Run from the project root
in separate terminals:

```sh
make run         # open the local Project in GAMS
make serve-docs  # http://localhost:8080
```

Set `GAMS_BIN` to the Host executable if `gams` is not on PATH; for example,
`make run GAMS_BIN=/Applications/GAMS.app/Contents/MacOS/gams`.
Use `DOCS_PORT=…` to change the docs port.

`gams.json` selects the local View source and published Host dependencies.
The Host installs its configured dependencies on first launch. Reload the
Project after changes to source or configuration.

## Develop

Edit `src/views/view-example.js` and put companion deployment assets under
`src/`. Use the Host's `/util/view-plugin.js` for registration and cleanup,
and import shared helpers and widgets through `/util` and `/widgets`.
Do not copy Host implementations into the View.

Follow the canonical
[GAMS View development guide](https://github.com/kkgams/gams/blob/release/docs/gams-view-development-guide.md).
Use documented semantic markup and UI Services rather than custom CSS or
View-owned popup, tooltip or toast implementations. The root uses the required
`display: contents` layout rule.

## Public API

| Contract | Value |
| --- | --- |
| Deployment entry | `views/view-example.js` |
| Custom element | `view-example` |
| Unit-specific inputs | None |
| Unit-specific methods and events | None |
| Output | A static greeting |
| Host requirements | Custom elements, semantic theme contract and `/util/view-plugin.js` registration helpers |

Document changes to this contract before releasing. Incompatible API changes
require a major version; compatible additions a minor version; compatible fixes
and documentation changes a patch version.

## Check and package

```sh
make check          # JavaScript syntax
make validate-docs  # documentation structure and links
make package        # dist/view.example-1.0.0.zip and dist/SHA256SUMS
```

Inspect the View in the real Host before publishing. Packaging strips `src/`;
LICENSE, NOTICE and README.md accompany the deployment files.

## Install a release

In a consuming Project's `ui.views`, register `view-example` using the release
entry URL. Substitute the publishing repository and selected version:

```text
https://github.com/OWNER/REPOSITORY/releases/download/v1.0.0/view.example-1.0.0.zip#views/view-example.js
```

The consuming Project provides its own plugins, theme and shell UI Services.
See the Host's
[ZIP installation documentation](https://github.com/kkgams/gams/blob/release/docs/zip-project-units.md).
When handling archives manually, verify `SHA256SUMS` and stage extraction
separately; do not overwrite the Project's metadata with release metadata.
