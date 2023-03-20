import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      includeAssets: [
        "assets/fonts/*.{ttf,otf}", 
        "assets/images/*.{jpeg}", 
        "assets/diagrams/*.{png,jpg}", 
        "assets/audio/*.mp3",
        "/icons/pwaicons/*.{png,jpg}"],
      manifest: {
        short_name: "Tajweed",
        name: "Tajweed",
        description: "Learn Tajweed",
        theme_color: "#cc95c0",
        background_color: "#cc95c0",
        orientation: "portrait",
        start_url: "/",
        scope: "/",
        display: "standalone",
        icons: [
          {
            src: "/icons/favicon.ico",
            sizes: "48x48",
            type: "image/x-icon",
          },
          {
            src: "/icons/android-chrome-192x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/icons/android-chrome-512x512.png",
            type: "image/png",
            sizes: "512x512",
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
