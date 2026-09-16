# Contributing

Useful contributions are reproducible integration bugs, browser-compatibility fixes, accessibility improvements, tests and small examples. Please open an issue before a large redesign or new renderer.

For a bug, include browser/version, OS/device, route, chosen preset, expected vs actual behavior and exact steps. Say whether WebGPU or Canvas fallback was used. Remove personal data, credentials and customer content from screenshots.

Run `npm ci`, `npm run typecheck`, `node scripts/test-contracts.mjs` and `npm run build`. The Showcase QA workflow also runs Playwright against the production base path, checks live interactions and captures four screenshots. Browser QA uses Playwright 1.55.0 installed into an isolated temporary directory, not an application runtime dependency.

Do not replace real rendering with a static screenshot, remove upstream credit, claim unsupported browser coverage, or merge a regression merely because an aggregate check is green. Inspect machine reports. The historical expected-red result is recorded in docs/maintenance/baseline-contracts.json.

The screenshot branch contains generated images and provenance only; application code lives on main. Do not hand-edit screenshot pixels to hide defects. Update the app and regenerate instead.
