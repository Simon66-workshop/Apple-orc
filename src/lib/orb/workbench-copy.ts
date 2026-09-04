import type { Locale } from "./editor-i18n";

export const extraCopy = {
  zh: {
    appName: "Apple Orc",
    appTag: "液态玻璃球工作台",
    embedIframe: "iframe 嵌入",
    embedReact: "React 组件",
    embedDropin: "项目内引用",
    embedJson: "JSON 配置",
    widgetHint: "把调好的球体嵌入其它网站或工作台。iframe 适合任意站点；JSON 与组件适合本仓库其它项目。",
    hostApi: "宿主可通过 postMessage 切换 idle / thinking。",
    originNote: "嵌入地址使用当前站点。部署后把域名换成你的公开地址即可。",
    fallbackNote: "当前环境没有 WebGPU，已使用画布回退预览。",
    gpuReady: "WebGPU 实时渲染",
    shareLink: "复制分享链接",
    linkCopied: "链接已复制",
  },
  en: {
    appName: "Apple Orc",
    appTag: "Liquid glass orb workbench",
    embedIframe: "iframe embed",
    embedReact: "React embed",
    embedDropin: "In-project import",
    embedJson: "JSON config",
    widgetHint:
      "Drop the tuned orb into another site or workbench. Use iframe for any page; JSON and the component for other projects in this repo.",
    hostApi: "The host page can switch idle / thinking over postMessage.",
    originNote: "Embed URLs use this origin. After deploy, swap in your public domain.",
    fallbackNote: "WebGPU is unavailable here. Showing a canvas fallback preview.",
    gpuReady: "Live WebGPU render",
    shareLink: "Copy share link",
    linkCopied: "Link copied",
  },
} as const;

export function tExtra(locale: Locale) {
  return extraCopy[locale];
}
