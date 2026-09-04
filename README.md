# Apple Orc

液态玻璃动态球工作台。在预览里调好预设、玻璃折射和 AI 状态，然后把球体嵌进其它网站或工作台项目。

Liquid glass orb workbench. Tune a live orb, then drop it into another site or project.

Source: [github.com/Simon66-workshop/Apple-orc](https://github.com/Simon66-workshop/Apple-orc)

Shader and motion model are adapted from [LerSent001/orb](https://github.com/LerSent001/orb) (MIT). UI is the 66X glass kit.

## Use the orb in another project

### 1. iframe (any website)

Copy **Copy Code → iframe embed** from the workbench, or:

```html
<iframe
  title="Apple Orc"
  src="https://YOUR-HOST/embed?style=siri&preview=scene&text=Thinking..."
  style="border:0;width:100%;max-width:420px;height:120px;background:transparent"
></iframe>
```

Drive idle / thinking from the host page:

```js
iframe.contentWindow.postMessage(
  { source: "apple-orc", type: "setState", state: "thinking" },
  "*",
);
```

Query params on `/embed`: `style` (preset name), `preview` (`scene` | `orb`), `text`, `state` (`idle` | `thinking`). A share hash from the workbench also works: `/embed#…`.

### 2. In-repo React import

```tsx
import { AppleOrc } from "@/lib/orb";

<AppleOrc preset="aurora" state="thinking" size={72} label="Thinking..." />
```

Copy `src/lib/orb` into the other workbench. It includes the WebGPU renderer, a canvas fallback, presets, and state transitions.

### 3. Standalone HTML / SwiftUI

**Copy Code** also exports a self-contained Web page and a SwiftUI/Metal snapshot of the current parameters.

### 4. JSON snapshot

**Copy Code → JSON config** dumps thinking / idle params so another runtime can feed `createOrbRenderer`.

## Library API

```ts
import {
  AppleOrc,
  createOrbRenderer,
  createPresetOrbStateConfiguration,
  resolveOrbStateParams,
} from "@/lib/orb";
```

`AppleOrc` props: `preset`, `state` (`idle` | `thinking`), `size`, `label`, optional `params`.

## Workbench

- 13 animated presets (Siri Wave, Aurora Veil, Chromatic Metal, …)
- Orb / Scene preview
- Motion, color, shape, glass shell, edge & glow
- Shareable URL hash
- EN / 中文

WebGPU is used when the browser supports it. Otherwise a canvas fallback keeps the orb alive.

## Local run

```bash
npm install
npm run dev
```

Open the printed local URL. `/embed` is the drop-in widget used by Copy Code.

```bash
npm run build
npm run preview
```

## License

MIT. Third-party shader notice: `NOTICE` and `public/THIRD_PARTY_ORB_LICENSE.txt`.
