import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA({
      workbox: {
        maximumFileSizeToCacheInBytes: 30 * 1024 * 1024,
      },
      registerType: 'autoUpdate',
      includeAssets: [
        "icons/favicon.ico",
        "robots.txt",
        "icons/apple-touch-icon.png",
        "assets/fonts/*.ttf", 
        "assets/images/*.{png,jpeg}", 
        "assets/audio/*.wav"],
      manifest: {
        short_name: "Tajweed",
        name: "Tajweed",
        description: "Learn Tajweed",
        theme_color: "#cc95c0",
        background_color: "#cc95c0",
        orientation: "portrait",
        start_url: "./",
        scope: ".",
        display: "standalone",
        icons: [
          {
            src: "icons/favicon.ico",
            sizes: "48x48",
            type: "image/x-icon",
          },
          {
            src: "icons/android-chrome-192x192.png",
            type: "image/png",
            sizes: "192x192",
            purpose: "maskable any",
          },
          {
            src: "icons/android-chrome-512x512",
            type: "image/png",
            sizes: "512x512",
            purpose: "maskable any",
          },
        ],
      },
    }),
  ],
  build: {
    outDir: "build",
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443, // Run the websocket server on the SSL port
    },
  },
});
