# View

A GAMS View that renders a greeting inside an Area. The Host provides the
runtime, shared helpers, widgets and theme. View source lives under `src/` and
is distributed as an independently released ZIP, not an npm package.

## Run locally

Install Node.js 24+, Python 3, Make, curl, unzip and tar. `make open` downloads
the released GAMS Host on first use (macOS Apple Silicon). No npm install is needed.

```sh
make open                       # open this Project in downloaded GAMS
make serve-docs                 # documentation at http://localhost:8080
make check                      # JavaScript syntax
make validate-docs              # documentation structure and links
make package                    # release ZIP and SHA256SUMS under dist/
```

Run the View and documentation in separate terminals. Set `DOCS_PORT=…` to
change the documentation port. The ignored `tools/gams.app` is retained without
automatic updates, alongside its release notices. `GAMS_APP_CWD` explicitly selects
this repository's `gams.json`; no neighboring checkout is required.

`gams.json` opens `src/views/view-example.js` directly and pins published plugins,
theme and UI Services. GAMS downloads these dependencies into its managed cache;
first launch requires network access. Reload the Project after source changes.
The local Project configuration is not included in the View's release ZIP.

## Develop

Edit `src/views/view-example.js`. It defines `view-example` and uses
`/util/view-plugin.js` to register on mount and unregister on disconnect.
Add companion deployment files under `src/`; packaging removes that directory
prefix, so the entry becomes `views/view-example.js`.

Follow the Host-owned
[GAMS View development guide](https://github.com/kkgams/gams/blob/release/docs/gams-view-development-guide.md).
Use its semantic markup and Host-owned `/util` and `/widgets` helpers. Popups,
tooltips and toasts go through UI Services. Do not bundle Host source or add
View-specific CSS. The root `display: contents` rule is required by the guide.
Check rendering and lifecycle behavior in the real Host before releasing.

Edit `docs/index.md` for development instructions and the public API.
`make docs` builds a portable site under `build/site/`. The pinned wiki
engine downloads on first use and stays in ignored `build/`.

## Release

`package.json` owns the Unit name and version. Use strict MAJOR.MINOR.PATCH
versions and matching `vMAJOR.MINOR.PATCH` tags. Public API includes element tags,
entry paths, attributes, properties, methods, events, configuration and required
Host facilities. Use major for incompatible changes, minor for compatible API
additions and patch for compatible fixes or documentation changes. Document the
API in `docs/index.md` before releasing.

The version commit and matching tag authorize a release. CI checks syntax,
validates docs and packages the tagged source, then publishes the ZIP and
`SHA256SUMS`. Existing releases are not overwritten or retagged. There is no
required release branch or custom release secret.

For the initial 1.0.0 release, tag the prepared source commit:

```sh
git tag v1.0.0
git push origin HEAD refs/tags/v1.0.0
```

For later releases, commit development changes and start from a clean checkout:

```sh
make check validate-docs package
npm version patch -m '🔖(view.example): release v%s'  # or minor / major
git push origin HEAD --follow-tags
```

The ZIP includes deployment files, LICENSE, NOTICE and README.md. Consumers
register the published entry URL in their Project; see [the guide](docs/index.md).
Do not extract release metadata over a Project's own files.

## Publish documentation

Enable **GitHub Actions** as the repository's Pages source and allow `release`
in the `github-pages` environment. Every push to `release` runs `make docs` and
deploys documentation, independently of the default branch and version tags.
A branch push alone never publishes a View release.

## License

Apache-2.0. Preserve LICENSE, NOTICE and any third-party attribution when adding
code or assets.
