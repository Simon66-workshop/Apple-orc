# Apple Orc

**Give your interface a little presence.**

A liquid-glass orb workbench for AI interfaces. Tune a preset, switch between idle and thinking, and embed the result in your own page.

**[Try the workbench](https://simon66-workshop.github.io/Apple-orc/) · [Live examples](https://simon66-workshop.github.io/Apple-orc/showcase.html) · [Integration guide](docs/INTEGRATION.md) · [中文](#中文说明)**

![A real Apple Orc component in the interactive interface example](https://raw.githubusercontent.com/Simon66-workshop/Apple-orc/showcase-assets/screenshots/02-interface.png)

## What you can do

- Explore **14 presets**, including **Siri Ai** — the iOS 27 variable-shape Apple Intelligence orb (sphere / ellipsoid / wave / capsule). Idle stays round; thinking gently squashes into an ellipsoid.
- Tune motion, color, shape and glass parameters.
- Switch **idle / thinking** and share configurations by URL hash.
- Embed with **iframe** or reuse the **React source component**. The demo needs no model API key.
- Use WebGPU with an approximate Canvas2D fallback. Workbench controls support English and Chinese.

**This is a visual component, not an AI model or a complete assistant.** Showcase controls drive actual local component/iframe state, not an LLM, microphone or customer deployment. The preset library deliberately renders only the selected orb live; the other tiles use the repository's preset thumbnails rather than running six GPU devices.

## Four actual interface captures

Playwright captures of the production build, not generated mockups. The animation clock is paused only while taking each still image and resumed for interaction tests. Software Vulkan executes the actual WGSL shader; no physical-GPU performance is claimed. [Capture method](docs/maintenance/capture-method.md) · [source SHA, renderer and file hashes](https://github.com/Simon66-workshop/Apple-orc/tree/showcase-assets/validation)

| Workbench | Preset choices and selected live preview |
| --- | --- |
| ![Workbench with editable controls](https://raw.githubusercontent.com/Simon66-workshop/Apple-orc/showcase-assets/screenshots/01-workbench.png) | ![Six preset choices with the selected orb rendered live](https://raw.githubusercontent.com/Simon66-workshop/Apple-orc/showcase-assets/screenshots/03-presets.png) |

![Real iframe integration and round-trip state receipt](https://raw.githubusercontent.com/Simon66-workshop/Apple-orc/showcase-assets/screenshots/04-iframe.png)

## Embed in a page

```html
<iframe
  title="Apple Orc status"
  src="https://simon66-workshop.github.io/Apple-orc/embed.html?style=aurora&state=thinking&preview=scene&text=Thinking..."
  style="border:0;width:100%;max-width:420px;height:140px"
></iframe>
```

The [iframe lab](https://simon66-workshop.github.io/Apple-orc/showcase.html?view=embed) demonstrates `setState`, `setText` and `ping → pong`. Parent-window, origin and payload checks are enforced. With suppressed referrers, set `parentOrigin` explicitly; see the [guide](docs/INTEGRATION.md).

Siri Ai also accepts `shapeMorph` (0 sphere → 0.34 island → 0.67 wave → 1 capsule) on the share hash and JSON export.

## React source component

```tsx
import { AppleOrc } from '@/lib/orb';

<AppleOrc preset="siriAi" state="thinking" size={72} label="Thinking..." />
```

This import works inside the repository. It is **not a published npm package**. The guide explains the source files, styles, aliases and dependencies needed in another project. The `private` field in `package.json` prevents accidental npm publishing; the GitHub repository is public.

## Run locally

CI uses Node 22.

```bash
npm ci
npm run dev
npm run typecheck
node scripts/test-contracts.mjs
npm run build
npm run preview
```

For GitHub Pages: `GITHUB_PAGES=1 npm run build`. Output includes `embed.html` and `showcase.html`, so direct links do not require an SPA rewrite.

JSON, standalone HTML and SwiftUI/Metal snapshot exports are retained. Browser QA covers the workbench, source component example and iframe protocol, not a separate native SwiftUI build or Safari/iOS certification. Canvas fallback is not visually identical to the GPU shader. Public hosting is a demonstration, not an uptime guarantee; self-host for controlled production use.

## Contribute

Tried it in a real interface? An integration example, reproducible browser bug or small fix is welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md). A star is appreciated when useful; no star exchanges or inflated adoption claims.

## 中文说明

**不只是看效果，调好以后，把这个球放进你自己的网页。**

14 套液态玻璃预设（含 **Siri Ai**：iOS 27 可变形态，圆球 / 灵动岛 / 波纹 / 胶囊），可调颜色、运动与玻璃效果，支持 idle / thinking 状态，以及 React 源码引用、iframe 嵌入。

先试[在线工作台](https://simon66-workshop.github.io/Apple-orc/)或[实际接入示例](https://simon66-workshop.github.io/Apple-orc/showcase.html)。预设页只实时渲染当前选中的球，其余是仓库自带缩略图；iframe 页可查看真实消息回执。

这是界面组件，不是大模型，也未接麦克风。React 组件没有发布 npm 包；跨项目引用需要的样式、别名和依赖见[接入说明](docs/INTEGRATION.md)。浏览器不支持 WebGPU 时，使用近似的 Canvas 回退预览。

好用欢迎点个 ⭐；有问题请提 Issue，带上浏览器、复现步骤和截图。

## Credits & license

MIT. Shader and motion model adapted from **[LerSent001/orb](https://github.com/LerSent001/orb)**; see [NOTICE](NOTICE) and [third-party license](public/THIRD_PARTY_ORB_LICENSE.txt). Workbench, integration examples and maintenance by Simon66-workshop / 66Workshop. Preserve upstream attribution when reusing the code.

Independent community project. **Not affiliated with Apple or OpenAI.** No official award, endorsement or large-scale adoption is claimed.
