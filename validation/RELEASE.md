# Public showcase release — 2026-09-16

Status: **PUBLIC_SHOWCASE_RELEASED** within the verification scope below.

- Repository: https://github.com/Simon66-workshop/Apple-orc (already public before this task)
- Merged PR: https://github.com/Simon66-workshop/Apple-orc/pull/1
- Main HEAD: `b9fccb7a13a711dde20c0506e2889b5a98d4e7e5`
- Tested source: `ee2404aad1a1ebd13308dad5b8b52be3bfcc21da`
- Both commits have tree `055e9d41c628301e7462ab711b38e7612e0b0475`.

## Evidence

Typecheck and production build pass. Contract tests: **15/15**. Browser checks: **14/14**, no application exceptions, console errors, warnings or failed local assets recorded. Four PNGs were inspected and all four SHA-256 hashes match `browser.json`. ZIP CRC passed.

- Push QA: https://github.com/Simon66-workshop/Apple-orc/actions/runs/35097240091
- PR QA: https://github.com/Simon66-workshop/Apple-orc/actions/runs/35097244957
- Main deployment: https://github.com/Simon66-workshop/Apple-orc/actions/runs/35097984012 — build/deploy job PASS
- Artifact ID: `10447285029`
- Artifact ZIP SHA-256: `73e47adac42335f33d577c4e1e252b2acf393234cac5d3a71186d3194c4e195d`

After deployment, read-only browser-rendered fetches confirmed the new workbench, interface showcase and iframe lab at:

- https://simon66-workshop.github.io/Apple-orc/
- https://simon66-workshop.github.io/Apple-orc/showcase.html
- https://simon66-workshop.github.io/Apple-orc/showcase.html?view=embed

The live-page check was a rendered-content read, not a second full interaction suite. Interaction acceptance ran in CI against the identical production source tree.

## Screenshot provenance and limits

Each image is **2400 × 1500**, Chromium 140 with software Vulkan executing the real WebGPU shader. Animation time was paused only during still capture and resumed for interaction tests. No generated mockups, DOM copy replacement or pixel retouching. The preset library shows one selected live orb and five existing preset thumbnails, explicitly stated in the UI.

This is not a physical-GPU benchmark, complete Safari/iOS certification, independent SwiftUI build, LLM backend or customer deployment. No quantified speedup, broad adoption, star-growth guarantee or official endorsement is claimed. Upstream MIT attribution for LerSent001/orb is retained.

The X text in `launch/` is prepared for the maintainer to publish. No social post or application was submitted by this release workflow.
