// TanStack Start Vite configuration for Anydown
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    define: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
    },
    oxc: {
      jsx: {
        development: false,
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        onLog(level, log, defaultHandler) {
          if (
            log.code === "MODULE_LEVEL_DIRECTIVE" ||
            (typeof log.message === "string" && log.message.includes("use client"))
          ) {
            return;
          }
          defaultHandler(level, log);
        },
        onwarn(warning, defaultHandler) {
          if (
            warning.code === "MODULE_LEVEL_DIRECTIVE" ||
            (typeof warning.message === "string" && warning.message.includes("use client"))
          ) {
            return;
          }
          defaultHandler(warning);
        },
      },
    },
  },
  nitro: {
    preset: process.env.VERCEL ? "vercel" : "node-server",
    vercel: { entryFormat: "node" },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
