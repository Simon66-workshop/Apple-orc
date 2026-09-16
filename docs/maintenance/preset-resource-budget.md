# Preset library resource budget

The initial six-concurrent-WebGPU gallery stalled during initialization on software Vulkan. It is replaced, not waived through QA: the library now has six selectable preset tiles but only the selected orb owns a live renderer. Other tiles display the existing repository preset thumbnails. Both the UI and README explicitly state this.

This bounds the gallery to one active component rather than creating six devices and compiling six sets of pipelines at once. Selecting another tile creates its live preview. The workbench retains all 13 presets.

Regression gate: six choices, one live renderer, selection change, idle/thinking control, loaded thumbnails, and actual WebGPU for the screenshot. This is not a claim that all six previews animate simultaneously.

The earlier failure remains in run 35096278630 at 6b541735433d32ba347a3d4c16432e081d5535e8. Its two successful screenshots are not a complete delivery.
