import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigpaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigpaths(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    },
    manifest: {
      name: 'QDLab\'s Vite+HonoJS+React Template',
      short_name: 'QDLab',
      description: 'A Vite+HonoJS+React Template by QDLab',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    devOptions: {
      enabled: true,
      type: 'module',
      navigateFallback: 'index.html'
    }
  })],
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: ["localhost", ".pal"],
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
})
