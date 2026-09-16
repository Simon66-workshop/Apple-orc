# Public showcase improvement — 2026-09-16

Scope authorized by the maintainer: improve Apple Orc, deliver four screenshots of actual running integration interfaces, prepare X launch copy, and ensure public visibility. Codex OSS application remains paused; no application or social post will be submitted.

Baseline: 2d6d6c32fa65a7e17a31d960e41777e46edb497f. Repository already public. Work occurs on feat/oss-showcase-20260916. No private repository, customer data, credentials, paid services, artificial stars, or upstream adoption claims.

## Design

Preserve the existing shader, 13 presets and workbench. Repair message validation, parent-window boundaries and GitHub Pages embed links. Add a compact live showcase demonstrating real component rendering and host-driven idle/thinking state, not a model backend or actual microphone. Improve README onboarding, attribution, integration examples and contribution guidance. Use four browser captures: workbench, component in an assistant-style interface, preset gallery, and working iframe integration with controls.

## Acceptance

1. Existing typecheck and production build succeed.
2. New contract tests reproduce the baseline defects before fixes, then pass.
3. Browser tests exercise controls, reject malformed messages, verify embed paths and narrow viewports; capture console errors.
4. Screenshots come from actual code rendered in Chromium, with filenames, viewport, renderer and SHA provenance. No generated product mockups or invented customer deployments.
5. Changes and evidence are published to this repository through a reviewable commit/PR. Merge only with passing checks and no unreviewed base movement.

## Environment

The local container cannot resolve github.com, so repository reads/writes use the authorized GitHub connector. GitHub Actions supplies a source archive and production bundle for reproducible verification. Browser plugin skill is absent; regular Playwright is the browser QA path.
