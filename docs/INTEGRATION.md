# Integrating Apple Orc

## Fastest route: iframe

No package or API key is required to try the hosted widget:

```html
<iframe
  id="status-orb"
  title="AI task status"
  src="https://simon66-workshop.github.io/Apple-orc/embed.html?style=aurora&state=idle&preview=scene&text=Ready"
  style="border:0;width:100%;max-width:420px;height:140px"
></iframe>
<script>
  const frame = document.querySelector('#status-orb');
  const widgetOrigin = new URL(frame.src).origin;
  frame.addEventListener('load', () => {
    frame.contentWindow.postMessage({ source: 'apple-orc', type: 'ping' }, widgetOrigin);
  });
  window.addEventListener('message', event => {
    if (event.origin !== widgetOrigin || event.source !== frame.contentWindow) return;
    if (event.data?.source === 'apple-orc' && event.data.type === 'pong') {
      console.log('Widget connected');
    }
  });
  // Trigger from your application after load/ready, not before the frame exists:
  function setThinking() {
    frame.contentWindow.postMessage(
      { source: 'apple-orc', type: 'setState', state: 'thinking' },
      widgetOrigin,
    );
  }
</script>
```

Use `embed.html` on static hosts: unlike extensionless `/embed`, this is an actual build output and does not require a server rewrite. The legacy route is still recognized where the host supports SPA fallbacks.

### Parent-origin policy

Only messages from the direct parent window and its expected HTTP(S) origin are accepted. By default the expected origin is inferred from `document.referrer`. For pages using `Referrer-Policy: no-referrer`, or when an explicit pin is preferred, add `parentOrigin` to the widget URL before its hash:

```js
const url = new URL(frame.src);
url.searchParams.set('parentOrigin', window.location.origin);
frame.src = url.href;
```

Missing or invalid parent origin disables messaging; rendering still works. Sandboxed opaque/null origins are intentionally unsupported. An explicit invalid origin fails closed rather than falling back to the referrer. Always specify the actual widget origin as the `postMessage` target, and validate both `event.origin` and `event.source` on replies. The message source string is a protocol marker, not authentication.

Commands: `setState` accepts only `idle` or `thinking`; `setText` accepts a string of at most 280 UTF-16 code units; `ping` receives `pong`. The widget emits `ready` on setup and `state` after a state change. Do not send secrets through display text.

Query parameters: `style` (or `preset`), `state`, `preview=scene|orb`, `text`, `parentOrigin`. State and preview work even without a style. A workbench share hash takes precedence over visual query parameters, but not over the parent-origin policy.

## React: source import

This is a source-distributed workbench, **not a published npm package**. `package.json` uses `private: true` to prevent accidental npm publishing; it does not make the GitHub repository private.

Inside this repository:

```tsx
import { AppleOrc } from '@/lib/orb';

<AppleOrc preset="siri" state="thinking" size={72} label="Thinking..." />
```

To move the component to another Vite/React project, carry over `src/lib/orb/`, `src/lib/utils.ts`, the needed `.orc-widget`, `.orc-canvas-*` and `.orc-scene-pill*` styles, and the MIT/NOTICE files. Preserve raw WGSL imports (`?raw`) and either configure `@` to point at `src` or update aliases. The component uses React, `clsx`, `tailwind-merge`, and the browser WebGPU types; the complete workbench additionally uses Radix Slider and Lucide. Use the iframe route when you do not want these build dependencies.

The React embed export is a JavaScript/JSX example. For TSX, type the ref as `useRef<HTMLIFrameElement>(null)`. `size` controls the standalone orb; scene layout also depends on host CSS. Constrain your host layout at narrow widths.

## Rendering and exports

WebGPU is preferred. A Canvas2D fallback keeps a preview running when WebGPU is unavailable; it is not a visually identical implementation of the WGSL shader. The hidden Canvas2D animation loop stops after WebGPU becomes ready.

The workbench also exports JSON, standalone HTML, and a SwiftUI/Metal snapshot. Those exports are retained; this release's browser QA focuses on the workbench, React example and iframe protocol. It does not certify an independently built SwiftUI app or every export target.

The showcase is a real component/iframe integration demo with local state. It is not an LLM backend, voice assistant, microphone recorder or customer deployment.

## Hosting and attribution

Run `GITHUB_PAGES=1 npm run build` for `/Apple-orc/`; normal `npm run build` uses `/`. Serve over HTTP(S), not directly from `file://`. The public demo is a demonstration deployment, not an uptime guarantee; self-host for controlled production use.

Retain the MIT license and the third-party notice for [LerSent001/orb](https://github.com/LerSent001/orb), which supplies the adapted shader and motion model. This community project is not affiliated with Apple or OpenAI.
