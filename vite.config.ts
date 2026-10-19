import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        kvkk: "kvkk/index.html",
        gizlilik: "gizlilik/index.html",
        cerez: "cerez-politikasi/index.html",
      },
    },
  },
});
