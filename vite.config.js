import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";


const vitePWA = VitePWA({
  registerType: "autoUpdate",
  outDir: "dist",
  devOptions: {
    enabled: true
  },
  manifest: {
    name: "Rick and Morty",
    short_name: "Rick&Morty",
    description: "ViteJS example to show how to create PWA app throw the easyest way",
    theme_color: "#ffffff",
    icons: [{
      src: 'assets/images/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',

    },
      {
        src: 'assets/images/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',

      }],
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePWA],
})
