import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import eslint from "vite-plugin-eslint";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import { visualizer } from "rollup-plugin-visualizer";
// see all documentation here https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = {
    // This changes the out put dir from dist to build change as your need
    // comment this out if that isn't relevant for your project
    optimizeDeps: {
      include: ["lodash-es", "swiper", "katex/dist/fonts/*"],
    },
    build: {
      sourcemap: true, // Source map generation must be turned on,
      rollupOptions: {
        external: ["katex/dist/fonts/*", "react-icons"],
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("react-icons")) return "react-icons";
              if (id.includes("swiper")) return "swiper";
              if (id.includes("katex")) return "katex";
              if (id.includes("@sentry")) return "sentry";
              if (id.includes("lodash-es")) return "lodash";
            }
          },
        },
      },
    },
    plugins: [
      react(),
      viteTsconfigPaths(),
      eslint(),
      process.env.SENTRY_AUTH_TOKEN
        ? sentryVitePlugin({
            authToken: process.env.SENTRY_AUTH_TOKEN,
            org: "sentry",
            project: "front",
            url: "https://sentry.escolait.pl/",
          })
        : undefined,
      visualizer({ open: true }),
    ],
    server: {
      open: true,
      port: 3000,
    },
    define: {},
  };
  if (mode === "development") {
    config.define = {
      global: "globalThis",
    };
  }
  return config;
});
