---
title: Installation
status: reference
---

# Installation

Create an external Project and use a compatible GAMS Host. The View archive does
not provide the Project's plugins, theme or required shell UI Services.

After replacing OWNER/REPOSITORY with your repository, this source selects the
starter entry from its first release:

```text
https://github.com/OWNER/REPOSITORY/releases/download/v1.0.0/view.example-1.0.0.zip#views/view-example.js
```

The URL must match the package name, version and deployment entry path after your
renaming. Configure the element `view-example` under `ui.views` using the Host's
current Project configuration contract. See the Host's
[ZIP installation documentation](https://github.com/kkgams/gams/blob/release/docs/zip-project-units.md).
The Host extracts the ZIP into its Unit storage and retains its license files.

For manual installation, download both release assets, then verify them together:

```sh
shasum -a 256 -c SHA256SUMS
```

Extract to a separate staging directory. Copy deployment files to their matching
Project-relative paths; preserve LICENSE, NOTICE, README.md and NOTES.md under
`notices/project-units/view.example/`, not over the Project's own metadata.
