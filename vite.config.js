import process from "node:process";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const port = Number(env.PORT || env.VITE_PORT || 5173);

  return {
    plugins: [react()],
    base: env.VITE_BASE_URL,
    server: {
      host: env.VITE_HOST,
      port,
      strictPort: false,
    },
    preview: {
      host: env.VITE_HOST,
      port,
    },
  };
});
