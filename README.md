# template.view

Starting point for an independently released GAMS View Project Unit. Includes a
minimal `view-example` element, Apache-2.0 license, working notes, ZIP releases,
and documentation powered by [justgook/wiki](https://github.com/justgook/wiki).
No npm publishing, approval-digest variables, or dedicated release branch.

## Start a View

1. **Create:** use this repository as a GitHub template (enable **Template
   repository** in its settings), creating your own `view.<name>` repository.
2. **Rename:** change `package.json` name, `view-example.js`, `ViewExample`,
   and `view-example` to your Unit's names, including their references in npm
   scripts and tests. Update NOTICE ownership, README, CONTEXT.md and docs,
   including API and installation URLs. Retain LICENSE;
   retain any attribution required for code you reuse.
3. **Develop:** implement the View under `src/views/`; put companion assets
   under `src/`. Run the checks below. The Host supplies its APIs and styling;
   this repository is not a standalone Host or external Project.
4. **Enable docs:** in GitHub **Settings → Pages → Source**, select
   **GitHub Actions**. Push to the repository's default branch to deploy docs.
   Use `workflow_dispatch` on that branch to deploy without a new commit.

## Develop and document

Requires Node.js 24+, Python 3 (stdlib), Make, curl and tar; no npm install needed.
The wiki engine is downloaded on first use and cached under ignored `build/`.

```sh
npm test
make serve-docs                 # http://localhost:8080
make serve-docs PORT=3000
make validate-docs
make build-docs                 # portable wiki under build/site/
npm run package                 # ZIP and SHA256SUMS under dist/
```

Documentation lives in `docs/`; add pages to `docs/_sidebar.md`. Local preview and
GitHub Pages both use wiki v1.4.0, without vendoring the engine. See
[development](docs/development.md) and the [public API](docs/api.md).

## Version rules

Versions follow these public-API rules. Package versions are `1.0.0`; Git tags
are exactly `v1.0.0`, without prerelease/build suffixes or leading zeros.
Start at `1.0.0`; compare each release with the previous published API.

- **Major:** incompatible API changes: remove or rename an element, method,
  attribute or event; change accepted inputs, outputs or documented behavior
  incompatibly; add a required input; or require an incompatible Host contract.
  Increment MAJOR and reset MINOR and PATCH to zero.
- **Minor:** add public API while preserving all existing uses (for example,
  an optional attribute or new method). Increment MINOR and reset PATCH to zero.
- **Patch:** no public API change: internal improvements, compatible bug fixes,
  documentation or tests. Increment PATCH only.

Use the largest applicable bump. Public API includes element tags, attributes,
properties, callable methods, events and payloads, configuration, deployment
entry paths and required Host facilities. Document these in `docs/api.md`.
These rules are a maintainer responsibility, not an automated API-diff claim.

## Release

The version commit is the commitment to release. Its matching tag triggers
publication; no second approval, environment digest or branch check is required.
The workflow tests and packages that exact tagged checkout, then creates a
GitHub Release containing `<package-name>-<version>.zip` and `SHA256SUMS`.
Existing releases are not overwritten. Published versions must not be retagged.

For the initial release, commit the prepared `1.0.0` source and tag that commit:

```sh
git add .
git commit -m '✨(view.example): release v1.0.0'
git tag v1.0.0
git push origin HEAD refs/tags/v1.0.0
```

For later releases, start from a clean checkout with changes already committed:

```sh
npm test
make validate-docs
npm version patch -m '🔖(view.example): release v%s'  # or minor / major
git push origin HEAD --follow-tags
```

`npm version` updates package.json and creates the version commit and matching
annotated tag. Update the commit context to your Unit's name. A branch push alone
runs checks and deploys default-branch docs; it does not publish a Unit release.
GitHub Actions uses its built-in token; no custom release secrets are needed.

The ZIP strips `src/` and includes LICENSE, NOTICE, README.md and NOTES.md.
The example entry is `views/view-example.js`. After renaming, configure your
external Project with the release URL and explicit entry fragment; see
[installation](docs/installation.md). Do not extract release metadata over a
Project's own files.

## License

Apache-2.0, matching the default for GAMS-authored Project Unit code. Third-party
assets/code retain their own terms: include their licenses and attribution when
adding them. This template includes no third-party runtime assets.
