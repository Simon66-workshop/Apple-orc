# Browser capture environment

The first showcase build passed typecheck and all 15 embed contracts, but browser QA reported 12/13 checks. The preset select needed an explicit accessible name. Manual review also caught 26 missing preset-thumbnail requests: the initial network assertion mistakenly covered only the `/Apple-orc/` base path and missed failed root-relative `/presets/` URLs. Both the asset paths and the assertion scope were corrected. This run is not an acceptance PASS.

Run: https://github.com/Simon66-workshop/Apple-orc/actions/runs/35094227038
Source: ab2f7eca4746a36c34c5dd65491db00e68fbcc3c

Its screenshots used the approximate Canvas fallback, with `A valid external Instance reference no longer exists` WebGPU warnings. The capture runner is being corrected to use headed Chromium under Xvfb with Vulkan/SwiftShader and installed Vulkan/Mesa dependencies. No physical GPU or hardware-speed claim is made.

Primary implementation references:
- https://developer.chrome.com/blog/supercharge-web-ai-testing
- https://github.com/vercel-labs/vgpu/issues/109

The public app continues to choose its actual available renderer. No browser capability is falsified, no screenshot is retouched, and no fake model output is added. Each final capture must record its actual renderer and source SHA.
