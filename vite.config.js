import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  // Relative base so the built site works from any location: a subpath,
  // a zipped static-host upload, or even opened directly as a local file
  // (file://) - not just when served from a domain root.
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        menu: resolve(import.meta.dirname, "menu.html"),
      },
    },
  },
});
