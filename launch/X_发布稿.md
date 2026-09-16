# Apple Orc｜X 发布稿

状态：待维护者发布；没有代发。展示页已上线。

## 主帖

AI 在思考，界面别只会转圈。

把 Apple Orc 整理成开源工作台了：13 套液态玻璃预设，可调参，支持 React 源码和 iframe 嵌入。

四张图都是运行截图。拿去试，好用帮点个 ⭐；不好用直接提 Issue。

https://github.com/Simon66-workshop/Apple-orc

## 首条回复

在线试玩，不用填 API Key：
https://simon66-workshop.github.io/Apple-orc/showcase.html

这是界面组件，不是大模型。预设、状态和文字都能试。

底层着色器与运动模型基于 LerSent001/orb（MIT），上游署名已保留。
https://github.com/LerSent001/orb

## 四图顺序

02-interface.png → 01-workbench.png → 03-presets.png → 04-iframe.png。

先让读者看懂用途，再展示调参、不同预设和 iframe 接入。

## 图片无障碍描述

- 02-interface：Apple Orc 的实际组件示例。右侧为液态玻璃球、Idle/Thinking、预设和文字控件，左侧展示 React 源码引用。明确标注为本地示例，未连接模型或麦克风。
- 01-workbench：Apple Orc 工作台。左侧为13套预设，中间为实时球体，右侧为状态、动画和玻璃参数，下方可复制嵌入代码。
- 03-presets：六个可选风格，当前 Chromatic Metal 实时渲染，其他五项为仓库自带预设缩略图；界面明确标注选中项 LIVE。
- 04-iframe：真实 iframe 接入。宿主页控制球体状态和文字，并显示 ping/pong 往返回执，右侧为准确来源地址的 postMessage 示例。

## 表述边界

邀请真实试用者点星，不购买或交换星标。不要把星标当成实际采用，也不要声称这是 Apple/OpenAI 官方项目、已经获奖、已经接入模型后端或已有客户部署。保留上游署名。详细截图与测试证据见 ../validation/RELEASE.md。
