import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import eslint from "vite-plugin-eslint";
import { sentryVitePlugin } from "@sentry/vite-plugin";
// see all documentation here https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = {
    // This changes the out put dir from dist to build change as your need
    // comment this out if that isn't relevant for your project
    build: {
      sourcemap: true, // Source map generation must be turned on
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
