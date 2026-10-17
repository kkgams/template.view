# template.view

This repository is a starting point for one independently released GAMS View
Project Unit. `src/` owns its deployment files; packaging strips that prefix.
The Host supplies `/core`, `/util`, `/widgets`, base CSS, and runtime services.
Do not vendor Host or sibling Project Unit source here.

GitHub Releases distribute ZIPs, not npm packages. Documentation uses
justgook/wiki v1.4.0 locally and on GitHub Pages. Release authorization is the
version commit and its matching vMAJOR.MINOR.PATCH tag; there are no approval
digest variables or special release branch.
