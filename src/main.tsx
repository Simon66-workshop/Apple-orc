import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EmbedPage } from "@/components/orb/EmbedPage";
import { Workbench } from "@/components/orb/Workbench";
import { Showcase } from "@/components/orb/Showcase";
import "./styles.css";
import "./integration-layout.css";
const base = import.meta.env.BASE_URL;
const path = window.location.pathname;
const embed = /(?:^|\/)embed(?:\.html)?\/?$/.test(path);
const showcase = /(?:^|\/)showcase(?:\.html)?\/?$/.test(path);
function WorkbenchShell() {
  return <div className="orc-workbench-shell"><header className="orc-product-bar"><a href={base} className="orc-wordmark">Apple Orc <span>by 66Workshop</span></a><nav aria-label="Product links"><a href={`${base}showcase.html`}>Live examples</a><a href="https://github.com/Simon66-workshop/Apple-orc" target="_blank" rel="noreferrer">GitHub ↗</a></nav></header><Workbench /></div>;
}
createRoot(document.getElementById("root")!).render(<StrictMode>{embed ? <EmbedPage /> : showcase ? <Showcase /> : <WorkbenchShell />}</StrictMode>);
