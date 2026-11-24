import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// En GitHub Pages el sitio vive en /tacos-el-vaquero/ (también en `vite preview`);
// con `npm run dev`, en la raíz.
export default defineConfig(({ command, isPreview }) => ({
  base: command === "build" || isPreview ? "/tacos-el-vaquero/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "./src") } },
}))
