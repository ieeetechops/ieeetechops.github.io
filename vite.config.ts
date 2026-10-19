import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        kvkk: resolve(__dirname, "kvkk/index.html"),
        gizlilik: resolve(__dirname, "gizlilik/index.html"),
        cerez: resolve(__dirname, "cerez-politikasi/index.html"),
      },
    },
  },
});
