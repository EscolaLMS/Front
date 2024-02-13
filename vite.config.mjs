import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import eslint from "vite-plugin-eslint";
// see all documentation here https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = {
    // This changes the out put dir from dist to build change as your need
    // comment this out if that isn't relevant for your project

    plugins: [
      react(),
      viteTsconfigPaths(),
      eslint({
        // TODO: unccomment this if you startup project with switch_to_local_components.sh
        // exclude: ["**/components/**"],
      }),
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
