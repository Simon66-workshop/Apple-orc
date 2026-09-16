# Screenshot method and scope

Browser interactions are tested with animation time running. Only while taking each still image, Playwright's Clock API briefly pauses timers/requestAnimationFrame to let the completed WebGPU frame reach the screenshot compositor; it is then resumed. No DOM content, interface labels or pixel data are replaced. The images show the application renderer and real local component/iframe state, not a generated mockup or a real model conversation.

Primary API reference: https://playwright.dev/docs/clock

The initial headed-GPU run revealed an unbounded queue of frames. The renderer now allows one frame in flight and announces readiness only after its submitted work completes. The next run passed the previously failing preset/scene interaction, but screenshot capture still timed out while the GPU continuously animated. This evidence supports separating interaction validation from capture-time freezing; it does not establish a quantified speedup or hardware-device certification.

Screenshots must still report `gpu` for every orb. A working Canvas fallback is separately tested. Software Vulkan is used on the CI runner, not a physical Mac or iPhone GPU. Every artifact records the source commit, dimensions, renderer and SHA-256 hashes. An incomplete run cannot be classified as PASS simply because the checks it reached passed.
