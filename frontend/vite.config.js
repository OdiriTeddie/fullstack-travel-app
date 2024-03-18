import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Travel App",
        short_name: "Travel App",
        description: "I am a simple travel app",
        devOptions: {
          enabled: true,
          type: "module",
        },
        icons: [
          {
            src: "./vite.svg",
            sizes: "192x192",
            type: "image/svg",
            purpose: "favicon",
          },
          {
            src: "./vite.svg",
            sizes: "512x512",
            type: "image/svg",
            purpose: "favicon",
          },
          {
            src: "./vite.svg",
            sizes: "180x180",
            type: "image/svg",
            purpose: "apple touch icon",
          },
          {
            src: "./vite.svg",
            sizes: "512x512",
            type: "image/svg",
            purpose: "any maskable",
          },
        ],
        theme_color: "#181818",
        background_color: "#e0cc3b",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait",
      },
    }),
  ],
});
