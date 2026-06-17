import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
  },
  server: {
    fs: {
      allow: [process.cwd(), "D:/ProjetoFaculdade/FrontSistemaChamado"],
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
