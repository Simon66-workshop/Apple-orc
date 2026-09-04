import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { EmbedPage } from "@/components/orb/EmbedPage";
import { Workbench } from "@/components/orb/Workbench";
import "./styles.css";

function isEmbedPath(pathname: string) {
  return /(?:^|\/)embed(?:\.html)?\/?$/.test(pathname);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{isEmbedPath(window.location.pathname) ? <EmbedPage /> : <Workbench />}</StrictMode>,
);
