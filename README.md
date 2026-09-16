# Apple Orc

**Give your interface a little presence.**

A liquid-glass orb workbench for AI interfaces. Tune a preset, switch between idle and thinking, and embed the result in your own page.

**[Try the workbench](https://simon66-workshop.github.io/Apple-orc/) · [Live integration examples](https://simon66-workshop.github.io/Apple-orc/showcase.html) · [Integration guide](docs/INTEGRATION.md) · [中文](#中文说明)**

![A real Apple Orc component running in the interactive interface demo](https://raw.githubusercontent.com/Simon66-workshop/Apple-orc/showcase-assets/screenshots/02-interface.png)

## What you can actually do

- Explore **13 presets** and tune motion, color, shape and glass parameters.
- Switch **idle / thinking** and share a configuration by URL hash.
- Embed with **iframe** or reuse the **React source component**. No model API key is needed for the demo.
- Use WebGPU when available, with a Canvas2D fallback. Workbench controls support English and Chinese.

**This is a visual component, not an AI model or a full assistant.** Showcase controls drive real local component/iframe state. They do not call an LLM, record a microphone or represent customer deployments.

## Four running interfaces

These are Playwright screenshots of the actual production build, not generated mockups. Capture details, renderer status and file hashes are published alongside them in the [screenshot evidence branch](https://github.com/Simon66-workshop/Apple-orc/tree/showcase-assets/validation).

| Workbench | Preset library |
| --- | --- |
| ![Live workbench with editable controls](https://raw.githubusercontent.com/Simon66-workshop/Apple-orc/showcase-assets/screenshots/01-workbench.png) | ![Six live previews from the thirteen-preset library](https://raw.githubusercontent.com/Simon66-workshop/Apple-orc/showcase-assets/screenshots/03-presets.png) |

![Real iframe integration with parent controls and round-trip status](https://raw.githubusercontent.com/Simon66-workshop/Apple-orc/showcase-assets/screenshots/04-iframe.png)

## Embed in a page

```html
<iframe
  title="Apple Orc status"
  src="https://simon66-workshop.github.io/Apple-orc/embed.html?style=aurora&state=thinking&preview=scene&text=Thinking..."
  style="border:0;width:100%;max-width:420px;height:140px"
></iframe>
```

The [iframe lab](https://simon66-workshop.github.io/Apple-orc/showcase.html?view=embed) demonstrates `setState`, `setText` and `ping → pong`. Parent-window, origin and payload validation are enforced. Pages suppressing referrers must explicitly set `parentOrigin`; see the [integration guide](docs/INTEGRATION.md).

## React source component

```tsx
import { AppleOrc } from '@/lib/orb';

<AppleOrc preset="siri" state="thinking" size={72} label="Thinking..." />
```

This import works inside the repository. It is **not an npm install command**: see the guide for the files, styles and dependencies needed in another project. The `private` field in `package.json` prevents accidental npm publishing; the GitHub repository is public.

## Run locally

Use a Node version compatible with the lockfile (CI uses Node 22).

```bash
npm ci
npm run dev
# Open the URL printed by Vite.

npm run typecheck
node scripts/test-contracts.mjs
npm run build
npm run preview
```

For GitHub Pages: `GITHUB_PAGES=1 npm run build`. Build outputs include `embed.html` and `showcase.html`, so direct links do not need an SPA rewrite.

The workbench retains JSON, standalone HTML and SwiftUI/Metal snapshot exports. Browser QA here covers the workbench, source component example and iframe protocol, not an independent native SwiftUI build. Canvas fallback is approximate, not identical to the GPU shader. See [validation scope](docs/maintenance/2026-09-16-showcase-plan.md).

## Contribute something useful

Tried it in a real interface? An integration example, reproducible browser bug or small fix is welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md). A star is appreciated when this is useful; no star exchanges or inflated adoption claims.

## 中文说明

**不是只有一张好看的效果图。调好以后，把这个球放进你自己的网页。**

Apple Orc 是一个液态玻璃球工作台：13 套预设，可调颜色、运动和玻璃效果，支持 idle / thinking 状态，以及 React 源码引用、iframe 嵌入。

先打开[在线工作台](https://simon66-workshop.github.io/Apple-orc/)，或者直接体验[真实调用示例](https://simon66-workshop.github.io/Apple-orc/showcase.html)。示例页能切换状态、预设和文字，iframe 页会显示真实的消息回执。

这只是界面组件，不是大模型，也没有接麦克风。React 组件没有发布 npm 包；跨项目引用所需的样式、别名和依赖请看[接入说明](docs/INTEGRATION.md)。支持 WebGPU，不支持时使用近似的 Canvas 回退预览。在线演示不提供生产可用性承诺，正式项目可自行部署。

好用的话欢迎点个 ⭐；有问题直接提 Issue，带上浏览器、复现步骤和截图。

## Credits & license

MIT. The shader and motion model are adapted from **[LerSent001/orb](https://github.com/LerSent001/orb)**; see [NOTICE](NOTICE) and [third-party license](public/THIRD_PARTY_ORB_LICENSE.txt). The workbench, integration examples and maintenance are by Simon66-workshop / 66Workshop. Do not remove upstream attribution when reusing the code.

Independent community project. **Not affiliated with Apple or OpenAI.** No official award, endorsement or large-scale adoption is claimed.
