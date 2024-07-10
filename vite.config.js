import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // or your preferred output directory
  },
  publicDir: "public", // Ensure public directory is set if not default
});
