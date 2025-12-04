import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      base: '/',
      filename: 'remoteEntry.js',
      exposes: {
        // This is the module we will import from the host as "remote_app/ProfilePage"
        './ProfilePage': './src/pages/Profile.jsx'
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ],
  build: {
    // target: 'esnext',     // MF plugin recommends esnext
    modulePreload: false,
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5174 // just to not clash with host (default 5173)
  }
})
