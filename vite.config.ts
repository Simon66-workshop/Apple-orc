import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

function spaFallbacks() {
  return {
    name: "spa-fallbacks",
    closeBundle() {
      const index = resolve("dist/index.html");
      if (!existsSync(index)) return;
      copyFileSync(index, resolve("dist/404.html"));
      copyFileSync(index, resolve("dist/embed.html"));
    },
  };
}

const githubPages = process.env.GITHUB_PAGES === "1";

export default defineConfig({
  base: githubPages ? "/Apple-orc/" : "/",
  appType: "spa",
  plugins: [tailwindcss(), react(), spaFallbacks()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: { host: "0.0.0.0", port: 5173 },
  preview: { host: "0.0.0.0", port: 4173 },
});
