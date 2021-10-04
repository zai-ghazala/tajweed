import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      workbox: {
        globPatterns: ["**.{js,css,html,png,jpeg,wav,ttf}"],
        maximumFileSizeToCacheInBytes: 30 * 1024 * 1024,
        globDirectory: "build",
        navigateFallback: "index.html"
      },
      manifest: {
        short_name: "Tajweed",
        name: "Tajweed",
        description: "Learn Tajweed",
        theme_color: "#cc95c0",
        background_color: "#cc95c0",
        orientation: "portrait",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "images/favicon.ico",
            sizes: "48x48",
            type: "image/x-icon",
          },
          {
            src: "images/android-chrome-192x192.png",
            type: "image/png",
            sizes: "192x192",
            purpose: "maskable any",
          },
          {
            src: "images/android-chrome-512x512",
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
