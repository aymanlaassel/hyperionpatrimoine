import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const page = (name) => fileURLToPath(new URL(name, import.meta.url));

// Site multi-pages : chaque page HTML est une entrée à part entière.
// Base : racine sur Vercel (variable VERCEL définie par leur build),
// sous-chemin /hyperionpatrimoine/ sur GitHub Pages.
export default defineConfig({
  base: process.env.VERCEL ? "/" : "/hyperionpatrimoine/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: page("index.html"),
        sav: page("sav.html"),
        notfound: page("404.html"),
      },
    },
  },
});
